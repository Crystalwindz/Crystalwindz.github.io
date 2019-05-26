---
title: Go学习笔记
date: 2019-04-10 15:19:27
categories :
- Golang
tags:
- Golang
- 笔记
top_img:
---

## 语法

* for是Go中的while；
* if可以在判断之前执行一条语句；
* switch自动break，case无需为整数；
* 切片的cap就是切片能扩展的最大长度；
* 指针不能运算；
* 类型和函数不用先声明就能用；
* Go里面没有隐式类型提升；
* 类型定义和类型方法必须在同一个包内；
* .(type)类型选择必须和switch一起结合使用（泛型编程？）；
* **无论是指针还是值，都可以直接通过 . 访问成员，Go自动(\*p).x**；
* **类型方法也是，无论接受指针还是值，指针和值都可以直接调用，Go自动(\*p).foo()或(&a).foo()，这时的指针接受者可以理解为C++里的引用**；
* 每定义一个常量，iota就递增1，iota从0开始；

## 接口
* **接口指针永远无法满足接口**；
* **接口里存的永远是变量的具体类型，绝不可能是另一个接口类型，因此可以把接口类型和其他类型看做两种类型，接口是用来存其他类型的**；
* **实现接口时如果是指针类型，那么就只有类型指针满足接口，毕竟指针接口会更改原值**；
* **但实现接口时如果是值类型，那么类型和类型指针都满足接口，这时只需要传一个拷贝，那么是不是指针就无所谓了**；
* 空接口interface{}可保存任意值；
* 接口类型可以内嵌其他接口，相当于把其他接口方法写在这里；

<!--more-->

## 内存
* Go中函数形参都是传值的；
* slice、map、chan是引用类型；
* nil指针是可以调用方法的，不会导致空指针异常，毕竟没有解引用（C++里是因为要先解引用才能调用成员函数，换句话说就是this指针不能为空）；
* 但nil指针是不能访问成员的，这会导致解引用空指针SIGSEGV；

## 工具
* Go是静态编译的；
* go install和go build的区别：从go help来看，go build会编译main包并将bin文件写到当前目录，如果编译的文件不是main包或是多个包，bulid只检查这些文件是否可编译，并不生成文件，并且build会忽略\*_test.go文件，但在只编译一个包时可以指定-o强制build生成文件；go install会把二进制文件放在bin文件夹里，\*.a文件放在pkg文件夹里；

## 信道
* **信道上的发送操作总在对应的接收操作完成前发生**；
* **从无缓冲信道进行的接收，要发生在对该信道进行的发送完成之前**；
* **再解释一下上面两点，如果读一个ch，只有另一个go程对ch写了，读才能返回；如果写一个无缓冲ch，只有另一个go程对ch读了，写才能返回**；
* **就算r1监测到了w1，也不意味着r1之后的r2能检测到w0（应该是因为编译器调换了w之间的位置？）**；
* **nil chan永远不会准备好通信**，这可以用在select里；
* chan通过放置<-的位置决定chan是只读还是只写还是双向；
* Go程没有返回值，惯例是传入一个chan，通过这个chan发送返回值；

## map
* map不是线程安全的，不过Go1.9里新加了sync.Map；
* 容量为0的map和nil map是两个东西，nil map是不能添加元素的；

## 坑
* 闭包和Go程一起使用时，当心**不要让Go程共享一个变量**，请传一个拷贝进去；
* **string类型是不可变的**，因此取s[i]的地址也是非法的；
* 接口内嵌和type alias时注意不要递归循环引用；
* defer关闭句柄请按参数传入，函数体内直接用的话是引用，可能会在defer函数执行前被更改；

## 其他
* 函数的最后一个参数如果是...T，这相当于[]T，说明可以用T类型的零个(nil)或多个参数调用函数；
* **make([]int, 50, 100)和new([100]int)[0:50]是等价的**；
* type alias(Go 1.9)：使用type关键字时，如果是type A = int，那么A就是int的别名，这和type B int，定义了一个新类型B不一样；
* 假如有这样一个函数 func (t T) Foo(a int) int {}，那么T.Foo就是 func(t T, a int) int 这样一个函数，类似的如果是指针的话，就要(*T).Foo这样写，产生一个 func(t *T, a int) int 函数；

## defer相关
* [defer实现原理剖析，写的相当不错](https://blog.csdn.net/Tybyqi/article/details/83827140)
* defer调用的函数的参数在defer语句时就已经确定；
* defer后进先出；
* **如果一个函数有命名返回值的话，那么在defer函数里是可以更改这个返回值的**；
* For instance, if the deferred function is a function literal and the surrounding function has named result parameters that are in scope within the literal, the deferred function may access and modify the result parameters before they are returned. If the deferred function has any return values, they are discarded when the function completes.

## Effective Go
* 只包含一个方法的接口以方法名加er命名；
* 可以返回局部变量的地址；
* 每当获取一个复合字面的地址时，都将为一个新的实例分配内存；
* new和make：new分配一块内存并将内存**置零**，返回其指针；make只用于创建三种引用类型——slice、map、channel——并对其进行初始化；
* 实现Stringer接口当心递归；
* func init()在main前设置一些初始状态，也可以检查一些东西；
* 如果一个类型只实现了一个接口，没有其他导出的方法，那么应该只导出这个接口，这能让代码更通用；
* 通过通信共享内存；
* 使用Context时，把它放在函数的第一个参数；
* 从其他包拷贝结构体时当心拷贝其内部的引用(切片等)；
* var t []string 与 t:=[]string{}，前者是nil切片，后者是non-nil空切片，注意区分；
* 使用crypto/rand生成密钥；
* error string应该是小写的一个短语，因为它通常用在别的句子里；
* 尽可能控制Go程生命周期；
* 分组import；
* . import通常只在test中有用；
* 函数返回错误应该是最后一个返回值；
* 处理错误流请这样写：
~~~ go
x, err := foo()
if err != nil {
    // error handling
}
// use x, normal code
~~~
* 使用后再定义接口，在接口的使用处定义，而不是接口的实现处；
* 方法接受者的名字应该是一个简短的缩写，不应该是this, self这种，并且接受者名字请在所有方法中保持一致；
* 传值或指针的场景：
  * 值：小类型、不需要更改的值、map、func、chan、不变的slice；
  * 指针：大类型、需要更改的值、包含同步的值、选值或指针都差不多时就选指针；
* 尽可能使用同步函数；
* 变量名尽可能短一点，声明距离使用越远就越应该有描述性；

## The Go Programming Language
* Go不需要加分号，但这不意味着Go没有分号。实际上是由编译器将特定符号后的换行符自动转换为分号的，这也是为什么左大括号必须和函数声明在同一行的原因。另外这也对Go代码换行有一定影响，比如：x + y，必须要在+后换行，在+前换行的话，编译器会在x后面添加分号，然后就编译错误了，参数列表最后可以加逗号也是这个原因；
* map是哈希map，并且是随机哈希，每次range遍历顺序都不一致，这是为了防止利用哈希冲突的DOS攻击；
* 对象的(生命周期、分配区域)和(作用域、是否用var或new声明)无关，因为一个变量的生命周期只取决于是否可达，即使是局部变量，也可能因为有外部指针引用了它而逃逸，而就算是new的变量，只要它没逃逸也是可以分配在栈上的；
* 内存分配因为有了垃圾回收会好很多，但请考虑生命周期问题，比如不要把指向短生命周期对象的指针放在长生命周期对象中；
* 元组赋值，先对右边所有表达式求值，再统一更新左边变量；
* 类型转换错误只会发生在编译阶段；
* 包在解决依赖的前提下，按导入顺序初始化，每个包只初始化一次；
* 对于需要复杂初始化的全局变量，可以将初始化放在init函数中进行，也可以将初始化逻辑包装为一个匿名函数处理；
* 作用域是编译时的概念，生命周期是运行时的概念；
* 当心下面的坑，在这里，内部新声明了cwd变量，而全局cwd并未被正确初始化：
~~~ go
var cwd string

func init() {
    cwd, err := os.Getwd() // NOTE: wrong!
    if err != nil {
        log.Fatalf("os.Getwd failed: %v", err)
    }
    log.Printf("Working directory = %s", cwd)
}
~~~
* 如果一个函数返回的浮点数结果可能失败，最好用单独的标志报告失败；
* 常量可以是无类型的，无类型常量可以提供很高的精度(至少256位)，可以用于更多的表达式而无需显式类型转换；
* slice三部分：指针，长度，容量；
* slice之间不能比较，但可以和nil相比；
* 可以用map[T]bool实现集合set类型，对于无法比较的T类型也可以通过辅助函数使其可以比较；
* 五种错误处理策略：
  * 返回错误给上层；
  * 检测到错误后，重试失败的操作；
  * 输出错误并结束程序；
  * 只打印错误信息；
  * 忽略错误；
* 匿名函数需要递归调用时，应先声明变量再将匿名函数赋值给它；
* 捕获迭代变量时，注意捕获的是迭代变量的地址，因此应再声明一个局部变量；
* defer可以实现记录何时进入函数和退出函数，也可以打印或修改函数返回值；
* 只要命名类型的底层类型不是指针或接口，就可以给这个类型定义方法；
* 嵌入结构体可以给匿名类型添加方法；
* 编译期断言T类型满足接口I：var _ I = (*T)(nil)；
* 注意区分nil接口和包含nil指针的接口；
* http.HandlerFunc(T)是一个类型转换而不是函数调用；
* 对nil接口值断言永远会失败；
* happens before:这不是一个时间概念，是一个和内存可见性有关的概念；
* 泄露的Go程不会被回收，请确保没有Go程永远阻塞；
* select的一些用法：
  * default可实现非阻塞；
  * time.After可实现超时；
  * 创建一个chan可以实现取消机制；
  * 关闭一个chan可以实现广播机制；
* Go程的栈大小是可变的，且没有ID号；
* 导入包的副作用：计算包级变量的初始化表达式和执行导入包的init函数；
* unsafe.Pointer和uintptr的转换是不安全的，可能会因为垃圾回收导致野指针；

## 50度灰

* 向无缓存的Channel发送消息，只要目标接收者准备好就会立即返回；
~~~ go
func main() {  
    ch := make(chan string)
    go func() {
        for m := range ch {
            fmt.Println("processed:",m)
        }
    }()
    ch <- "cmd.1"
    ch <- "cmd.2" //won't be processed
}
~~~
* 记得关闭http响应；
~~~ go
func main() {  
    resp, err := http.Get("https://api.ipify.org?format=json")
    if resp != nil {
        defer resp.Body.Close()
    }
    if err != nil {
        fmt.Println(err)
        return
    }
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
~~~
* recover()的调用仅当它在defer函数中被直接调用时才有效；
* 关于for中的迭代变量，想清楚下面的区别：
~~~go
type field struct {  
    name string
}
func (p *field) print() {  
    fmt.Println(p.name)
}
func main() {  
    data := []field{ {"one"},{"two"},{"three"} }
    for _,v := range data {
        go v.print()
    }
    time.Sleep(3 * time.Second)
    //goroutines print: three, three, three
}

---------------------------------------------------

type field struct {  
    name string
}
func (p *field) print() {  
    fmt.Println(p.name)
}
func main() {  
    data := []*field{ {"one"},{"two"},{"three"} }
    for _,v := range data {
        go v.print()
        //goroutines print: one, two, three(unordered)
    }
    time.Sleep(3 * tecond)
}
~~~
* defer语句在函数结束时才会执行，因此注意资源问题；