# RabbitMQ 安装

## 本节视频



## 概述

我们基于 Docker 来安装 RabbitMQ

## docker-compose.yml

```text
version: '3.1'
services:
  rabbitmq:
    restart: always
    image: rabbitmq:management
    container_name: rabbitmq
    ports:
      - 5672:5672
      - 15672:15672
    environment:
      TZ: Asia/Shanghai
      RABBITMQ_DEFAULT_USER: rabbit
      RABBITMQ_DEFAULT_PASS: 123456
    volumes:
      - ./data:/var/lib/rabbitmq
```

## RabbitMQ WebUI

### 访问地址

http://ip:15672

### 首页

![img](https://funtl.com/assets/Lusifer2018050122030001.png)

### Global counts

![img](https://funtl.com/assets/Lusifer2018050122030002.png)

- Connections：连接数
- Channels：频道数
- Exchanges：交换机数
- Queues：队列数
- Consumers：消费者数

### 交换机页面

![img](https://funtl.com/assets/Lusifer2018050122030003.png)

### 队列页面

![img](https://funtl.com/assets/Lusifer2018050122030004.png)

- Name：消息队列的名称，这里是通过程序创建的
- Features：消息队列的类型，durable:true为会持久化消息
- Ready：准备好的消息
- Unacked：未确认的消息
- Total：全部消息
- 备注：如果都为 0 则说明全部消息处理完成