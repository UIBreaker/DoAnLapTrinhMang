---
title: "Lập trình mạng: Xây dựng Chat Client-Server 2 chiều với Java TCP"
date: 2023-11-01
draft: false
tags: ["Java", "Network", "Socket", "TCP"]
summary: "Hướng dẫn tạo ứng dụng Chat Console tương tác liên tục. Server lắng nghe và phản hồi Client theo thời gian thực."
---

TCP (Transmission Control Protocol) là giao thức hướng kết nối. Nó giống như việc bạn gọi điện thoại: Hai bên phải "nhấc máy" (thiết lập kết nối - Bắt tay 3 bước) thì mới nói chuyện được, và đảm bảo câu chuyện không bị mất chữ nào.

Dưới đây, chúng ta sẽ xây dựng một **Echo Chat System**: Bạn nhắn gì, Server sẽ trả lời lại cái đó.

## 1. Phía Server (Người phục vụ)

Server sẽ hoạt động theo quy trình: `Mở cổng` -> `Chờ khách` -> `Nhận tin` -> `Trả lời` -> `Lặp lại`.

```java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        int port = 5000;
        System.out.println("Server đang khởi động tại port " + port + "...");

        // Try-with-resources để tự động đóng socket khi xong
        try (ServerSocket serverSocket = new ServerSocket(port)) {

            // 1. Chấp nhận kết nối
            Socket socket = serverSocket.accept();
            System.out.println("Kết nối thành công với Client: " + socket.getInetAddress());

            // 2. Tạo luồng Đọc (Input) và Ghi (Output)
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            // 3. Vòng lặp chat liên tục
            String message;
            while ((message = in.readLine()) != null) {
                System.out.println("Client nói: " + message);

                // Trả lời lại Client
                if (message.equalsIgnoreCase("bye")) {
                    out.println("Tạm biệt! Hẹn gặp lại.");
                    break; // Thoát vòng lặp
                }
                out.println("Server đã nhận: " + message);
            }

        } catch (IOException e) {
            System.err.println("Lỗi Server: " + e.getMessage());
        }
    }
}


```

## 2. Phía Client (Khách hàng)

Client sẽ cho phép người dùng nhập từ bàn phím và gửi lên Server.

```java
import java.io.*;
import java.net.*;
import java.util.Scanner;

public class SimpleClient {
    public static void main(String[] args) {
        String serverIP = "localhost"; // Chạy trên máy mình
        int port = 5000;

        try (Socket socket = new Socket(serverIP, port)) {
            System.out.println("Đã kết nối tới Server!");

            // Luồng đọc dữ liệu từ Server
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            // Luồng gửi dữ liệu lên Server
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            // Luồng nhập từ bàn phím
            Scanner scanner = new Scanner(System.in);

            String userInput;
            System.out.println("Hãy nhập tin nhắn (gõ 'bye' để thoát):");

            // Vòng lặp chat
            while (true) {
                System.out.print("Bạn: ");
                userInput = scanner.nextLine();

                // Gửi tin nhắn đi
                out.println(userInput);

                // Đọc phản hồi từ Server
                String serverResponse = in.readLine();
                System.out.println("Server: " + serverResponse);

                if (userInput.equalsIgnoreCase("bye")) break;
            }

        } catch (IOException e) {
            System.err.println("Không thể kết nối tới Server: " + e.getMessage());
        }
    }
}
```

## 3. Cách chạy demo (Quan trọng)

Vì đây là lập trình mạng, bạn cần chạy 2 chương trình cùng lúc:

Bước 1: Chạy file SimpleServer.java trước. Bạn sẽ thấy dòng "Server đang khởi động...".

Bước 2: Mở một cửa sổ Terminal khác, chạy file SimpleClient.java.

Bước 3: Tại cửa sổ Client, gõ bất cứ gì và nhấn Enter. Nhìn sang cửa sổ Server để thấy điều kỳ diệu!

## Tại sao dùng PrintWriter và BufferedReader?

InputStream/OutputStream: Chỉ gửi từng byte (rất thô sơ).

BufferedReader/PrintWriter: Giúp bạn gửi cả một dòng chữ (String) mà không cần lo lắng về việc mã hóa ký tự. Đây là Wrapper Class (Lớp bao bọc) giúp code gọn hơn.
