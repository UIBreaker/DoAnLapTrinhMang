---
title: "Xây dựng ứng dụng Chat Client-Server với Java Socket (TCP)"
date: 2023-11-01
draft: false
tags: ["Java", "Network", "Socket", "TCP"]
summary: "Hướng dẫn từng bước tạo kết nối tin cậy, đảm bảo 'tin nhắn gửi đi là phải tới nơi' với giao thức TCP."
---

### PHẦN 2: LẬP TRÌNH MẠNG (TRỌNG TÂM ĐỒ ÁN)

## Bài 4: `java-socket-tcp.md`

_Bài viết mô phỏng hệ thống Chat đơn giản._

````markdown
TCP giống như việc bạn gọi điện thoại: Hai bên phải "nhấc máy" (thiết lập kết nối) thì mới nói chuyện được.

## 1. Phía Server (Người nghe)

Server sẽ mở cổng 5000 và ngồi đợi.

```java
// Server.java
ServerSocket server = new ServerSocket(5000);
System.out.println("Server đang đợi kết nối...");

Socket socket = server.accept(); // Đứng hình đợi Client
System.out.println("Có người kết nối!");

// Nhận tin nhắn
BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
String message = in.readLine();
System.out.println("Client nói: " + message);
```
````

## 2. Phía Client (Người gọi)

Client cần biết địa chỉ IP và Cổng của Server.

```java
// Client.java
Socket socket = new Socket("localhost", 5000);

// Gửi tin nhắn
PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
out.println("Chào Server, mình là Nhật Nam!");
```
