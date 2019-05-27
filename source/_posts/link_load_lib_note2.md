---
title: 《链接、装载与库》——动态装载
categories:
  - 操作系统
tags:
  - 装载
  - 操作系统
date: 2019-05-26 21:40:42
top_img:
---

## 进程的装载

从操作系统角度来看，进程的装载大概是：

* 创建虚拟地址空间，分配一个页目录，创建相关的数据结构；
* 读取可执行文件头，建立虚拟空间与可执行文件的映射关系；
* 将CPU指令寄存器设置为可执行文件入口地址，开始执行；

## 进程虚拟地址空间分布

ELF分为链接视图和执行视图，链接视图就是静态链接那里讲的，但我们知道，现在操作系统都是以页机制管理内存的，如果一个section一页，太浪费内存，因此需要把相同权限(RWX)的section当做一个segment进行虚拟地址映射，这就是ELF的两种视图。

至于空间分布，大概如图：

![](link_load_lib_note2/1.jpg)

可以cat /proc/pid/maps来查看。

<!--more-->

## 动态链接

动态链接就是把链接的过程从编译期推迟到了运行时，一方面，这样能增加程序的灵活性和扩展性，另一方面，能节省硬盘空间，当然，最重要的是这样能节省内存空间，不过要用到地址无关代码技术。理所当然的，动态链接比静态链接慢，这就是用时间换空间了。

### 地址无关代码技术

如果按照静态链接的思想，动态链接不过是在运行时重定位罢了，这种方法是可行的，不过，如果把静态链接称为链接时重定位，这样的做法就叫做装载时重定位，两者差不多，但都会使动态装载的指令被修改，从而无法在进程间共享，也就是说每个进程中都有各自的副本，这样没有达到节省内存的目的，-shared参数就是这个作用。

编译共享库时还有另一个参数，-fPIC，这个就是地址无关代码技术了。这种技术的基本思想就是把共享指令中需要修改的部分和无需修改的部分分离开来，无需修改的部分进程间共享，需要修改的部分进程各自拥有一个副本。怎么做到地址无关的呢？

* 对于模块内部的函数调用、数据访问，因为它们的相对位置是固定的，对于现代操作系统来说，我们可以通过相对地址进行调用和访问；
* 对于模块外部的函数引用和数据访问来说，是通过引入一个间接层——全局偏移表(GOT)来解决的，在编译的时候，GOT的位置就可以确定下来了，而函数和变量在GOT中的偏移也是确定的，因此这就转换成了第一种情况，至于GOT的内容，在动态装载时进行填充；

### 相关section

* .interp：动态链接器路径的字符串；
* .dynamic：动态链接符号表、动态链接重定位表、动态链接器相关信息；
* .dynsym：类似.symtab，存放与动态链接相关的符号；
* .rel.dyn, .rel.plt：类似.rel.text, .rel.data，动态链接的重定位表；

### 具体步骤

* 动态链接器自举：对于普通共享文件来说，它们的动态重定位工作是交给动态链接器去做的，那么动态链接器呢？动态链接器也是一个共享对象，而它只能靠自己对自己进行重定位，我们知道，对于动态链接的程序，程序入口地址就是动态链接器的地址，实际上也是动态链接器自举代码的地址，这段自举代码会对动态链接器重定位；
* 装载共享对象：自举后，将程序和链接器符号放入全局符号表，然后查找依赖的共享对象，并将它们装载进来，这里还有全局符号介入问题，不再赘述；
* 重定位和初始化：既然共享对象都已装载进来，就对GOT和PLT进行指令修正，然后动态装载完成，将控制权交给程序入口函数即可；

### 显式运行时链接

利用dlopen(), dlsym(), dlerror(), dlclose(), 可以在程序运行时进行动态装载，这和之前的没有太大差别，不过是时间不一样。

## 共享库

共享库就是一堆共享对象的集合，而共享对象和可执行文件是没什么太大差别的。共享库主要注意这几方面：

* 版本：不同的共享库可能不兼容，这需要对其本身进行规范命名，对其符号采取版本机制等来解决这个问题；
* 查找过程：LD_LIBRARY_PATH => /etc/ld.so.cache => /usr/lib => lib；