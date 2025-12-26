---
title: "Java UDP: Giao thức 'Bắn và Quên' - Tốc độ là trên hết"
date: 2023-11-02
draft: false
tags: ["Java", "Network", "UDP", "Socket"]
summary: "Tại sao xem bóng đá trực tuyến hay Game FPS dùng UDP thay vì TCP? Tìm hiểu về DatagramSocket và sự khác biệt cốt lõi."
---

Nếu TCP giống như **gọi điện thoại** (Alo - Nghe rõ không? - Rõ), thì UDP giống như **gửi thư tay** hoặc **bắn súng sơn**: Bạn cứ gửi đi liên tục, còn người nhận có nhận được hay không, hoặc nhận sai thứ tự thì... mặc kệ.

Chính vì sự "vô tâm" này mà UDP cực kỳ nhẹ và nhanh.

## 1. Cơ chế hoạt động (Connectionless)

Trong Java, UDP xoay quanh 2 lớp chính:

1.  **`DatagramSocket`**: Hòm thư để gửi/nhận.
2.  **`DatagramPacket`**: Phong bì chứa dữ liệu và địa chỉ người nhận.

Khác với TCP, UDP **không cần thiết lập kết nối** (No Handshake). Cứ biết IP và Port là bắn tin đi thôi.

## 2. Thực hành: Ứng dụng Gửi - Nhận đơn giản

### Bước 1: Phía Nhận (Receiver/Server)

Người nhận phải mở cổng và chuẩn bị một cái "xô" (mảng byte) để hứng dữ liệu.

```java
import java.net.*;

public class UDPReceiver {
    public static void main(String[] args) throws Exception {
        // 1. Mở cổng 9876 để nghe ngóng
        DatagramSocket socket = new DatagramSocket(9876);
        System.out.println("Receiver đang đợi dữ liệu...");

        // 2. Chuẩn bị mảng byte để hứng dữ liệu (tối đa 1024 byte)
        byte[] buffer = new byte[1024];
        DatagramPacket packet = new DatagramPacket(buffer, buffer.length);

        // 3. Chờ nhận (Hàm này sẽ chặn chương trình đến khi có tin tới)
        socket.receive(packet);

        // 4. Xử lý dữ liệu
        String msg = new String(packet.getData(), 0, packet.getLength());
        System.out.println("Đã nhận được: " + msg);

        socket.close();
    }
}
```

## Bước 2: Phía Gửi (Sender/Client)

Người gửi đóng gói dữ liệu vào Packet kèm theo địa chỉ IP đích.

```java
import java.net.*;

public class UDPSender {
    public static void main(String[] args) throws Exception {
        // 1. Tạo socket (Không cần chỉ định port vì mình là người gửi)
        DatagramSocket socket = new DatagramSocket();

        // 2. Chuẩn bị dữ liệu
        String data = "Hello Receiver, tôi là Nhật Nam!";
        byte[] buffer = data.getBytes();
        InetAddress ip = InetAddress.getByName("localhost");

        // 3. Đóng gói: Dữ liệu + Độ dài + IP đích + Port đích
        DatagramPacket packet = new DatagramPacket(buffer, buffer.length, ip, 9876);

        // 4. Bắn đi!
        socket.send(packet);
        System.out.println("Đã bắn gói tin đi!");

        socket.close();
    }
}
```

## 3. Bảng so sánh "Sống còn": TCP vs UDP

| Tiêu chí           | TCP (Transmission Control Protocol)         | UDP (User Datagram Protocol)          |
| :----------------- | :------------------------------------------ | :------------------------------------ |
| **1. Kết nối**     | ✅ **Có kết nối** (Bắt tay 3 bước chặt chẽ) | 🚀 **Không kết nối** (Connectionless) |
| **2. Độ tin cậy**  | 🛡️ **Cao** (Cam kết dữ liệu tới nơi 100%)   | ⚠️ **Thấp** (Chấp nhận mất gói tin)   |
| **3. Thứ tự**      | 🔢 Đảm bảo đúng thứ tự gửi                  | 🔀 Có thể bị lộn xộn                  |
| **4. Tốc độ**      | 🐢 Chậm hơn (do thủ tục kiểm tra kỹ)        | ⚡ **Rất nhanh** (nhẹ, bắn là đi)     |
| **5. Sử dụng cho** | Web, Email, Chat, Truyền file               | Livestream, Game Online, Gọi Video    |
