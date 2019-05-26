---
title: APUE-信号部分
categories:
  - APUE总结
tags:
  - UNIX
  - 信号
  - 操作系统
date: 2018-10-24 20:26:19
top_img:
---

## 信号

### 什么是信号

信号提供的是一种处理异步事件的方法，有很多种信号，很多条件可以产生信号，对于进程来说，信号何时发生是无法预测的，进程只能保证当信号发生时做什么，有下面三种做法：

1. 忽略信号：SIGKILL和SIGSTOP无法忽略；
2. 捕捉信号：捕捉信号并调用指定函数，SIGKILL和SIGSTOP无法捕捉；
3. 执行系统默认动作；

### 中断的系统调用

当执行一个慢速系统调用——可能使进程永远阻塞的系统调用——阻塞时，若捕捉到信号，则此系统调用被中断，出错返回并设置EINTR，**有的系统调用会自动重启，有的不会**，请注意。

<!-- more -->

### 信号的产生和递交

产生信号和递交信号之间，信号是未决的，递交信号时，若进程阻塞信号递交，则信号保持未决态，直到进程解除阻塞或直接忽略信号，在信号处于未决态时，若同一信号发生多次，信号可能排队，也可能只递交一次，同时多个信号的递交顺序也是不确定的。

### 相关函数

~~~c
typedef void (*sighandler_t)(int);
sighandler_t signal(int signum, sighandler_t handler);
~~~

* handler可以是SIG_IGN, SIG_DFL。

~~~c
int kill(pid_t pid, int signo);
int raise(signo);
~~~

* kill向pid发送signo信号；
* raise(signo) == kill(getpid(), signo);

~~~c
unsigned int alarm(unsigned int seconds);
int pause(void);
~~~

* seconds秒后产生SIGALRM信号；
* 一个进程只有一个alarm，之前的会被新的取代；
* pause挂起进程直至捕捉到一个信号；

~~~c
int sigemptyset(sigset_t *set);
int sigfillset(sigset_t *set);
int sigaddset(sigset_t *set, int signum);
int sigdelset(sigset_t *set, int signum);
int sigismember(const sigset_t *set, int signum);

int sigprocmask(int how, const sigset_t *restrict set, sigset_t *restrict oset);
int sigpending(sigset_t *set);
~~~

* 前五个函数操纵信号集；
* sigprocmask根据how(SIG_BLOCK, SIG_UNBLOCK, SIG_SETMASK)改变当前进程信号屏蔽字；
* sigpending返回当前进程阻塞的信号集；

~~~c
int sigaction(int signo, const struct sigaction *restrict act,
struct sigaction *restrict oact);

struct sigaction{
    void      (*sa_handler)(int);
    sigset_t  sa_mask;
    int       sa_flags;
    void      (*sa_sigaction)(int, siginfo_t *, void *);
}
~~~

* 类似signal，但提供的功能更多；

~~~c
int sigsetjmp(sigjmp_buf env, int savesigs);
void siglongjmp(sigjmp_buf env, int val);
~~~

* 类似setjmp和longjmp, 但涉及到信号屏蔽字时，setjmp和longjmp不能正常工作，应该用sigsetjmp和siglongjmp函数。

~~~c
int sigsuspend(const sigset_t *sigmask);
~~~

* 设置进程信号屏蔽字为sigmask，挂起进程，直至捕捉到一个信号并从信号处理程序返回，然后恢复信号屏蔽字，以上为原子操作。

~~~c
void abort(void);
~~~

* 相当于raise(SIGABRT);
* abort绝不会返回，这意味着程序要么在SIGABRT处理函数中终止，要么之后在abort中终止。

### 信号名和编号转换

~~~c
void psignal(int signo, const char *msg);
void psiginfo(const siginfo_t *info, const char *msg);
char *strsignal(int signo);
int sig2str(int signo, char *str);
int str2sig(const char *str, int *signop);
~~~
