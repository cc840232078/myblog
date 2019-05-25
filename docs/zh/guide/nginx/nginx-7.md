# undertow

## 概述 :

>   Undertow 是红帽公司开发的一款**基于 NIO 的高性能 Web 嵌入式服务器**

## 特点 :

>   **轻量级**：它是一个 Web 服务器，但不像传统的 Web 服务器有容器概念，它由两个核心 Jar 包组成，加载一个 Web 应用可以小于 10MB 内存
>
>    **Servlet3.1 支持**：它提供了对 Servlet3.1 的支持
>
>    **WebSocket 支持**：对 Web Socket 完全支持，用以满足 Web 应用巨大数量的客户端
>
>    **嵌套性**：它不需要容器，只需通过 API 即可快速搭建 Web 服务器



## Spring Boot项目中的引入方式 :

Spring Boot 内嵌 Jetty , Tomcat , Undertow , 默认是Tomcat 

#### pom.xml配置

添加如下依赖

```xml
<!--移除Tomcat依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!--引入undertow-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```



#### application.yml配置 : 

与原来使用Tomcat时配置无太大差别 , 将tomca字段改为undertow即可

```properties
# Undertow 日志存放目录
server.undertow.accesslog.dir=
# 是否启动日志
server.undertow.accesslog.enabled=false 
# 日志格式
server.undertow.accesslog.pattern=common
# 日志文件名前缀
server.undertow.accesslog.prefix=access_log
# 日志文件名后缀
server.undertow.accesslog.suffix=log
# HTTP POST请求最大的大小
server.undertow.max-http-post-size=0 
# 设置IO线程数, 它主要执行非阻塞的任务,它们会负责多个连接, 默认设置每个CPU核心一个线程
server.undertow.io-threads=4
# 阻塞任务线程池, 当执行类似servlet请求阻塞操作, undertow会从这个线程池中取得线程,它的值设置取决于系统的负载
server.undertow.worker-threads=20
# 以下的配置会影响buffer,这些buffer会用于服务器连接的IO操作,有点类似netty的池化内存管理
# 每块buffer的空间大小,越小的空间被利用越充分
server.undertow.buffer-size=1024
# 每个区分配的buffer数量 , 所以pool的大小是buffer-size * buffers-per-region
server.undertow.buffers-per-region=1024
# 是否分配的直接内存
server.undertow.direct-buffers=true
```



添加启动类后运行就可以看到控制台中打印如下信息

>   Registering beans for JMX exposure on startup
>
>   <font style="color:red"> Undertow</font> started on port(s) 8080 (http) with context path ''
>
>   Started UndertowApplication in 3.933 seconds (JVM running for 6.734)



## 性能/压力测试

测试结论参考链接 : 

https://www.jianshu.com/p/ab78515265f4

https://www.cnblogs.com/maybo/p/7784687.html

https://blog.csdn.net/weixin_38187317/article/details/81532560

**结论 :** 在并发量不高的情况下 ,  Tomcat与undertow的吞吐量区别不大 , 并发量高的情况下 , undertow的性能要优于Jetty与Tomcat