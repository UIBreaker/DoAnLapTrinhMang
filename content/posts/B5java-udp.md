---
title: "Java UDP: Tốc độ là tất cả (DatagramSocket)"
date: 2023-11-02
draft: false
tags: ["Java", "Network", "UDP"]
summary: "Tại sao xem bóng đá trực tuyến hay dùng UDP? Tìm hiểu về giao thức 'bắn và quên' này."
---

Tại sao chọn TCP?
Tin cậy: Không mất gói tin.

Tuần tự: Gửi A trước thì nhận A trước.

Ứng dụng: Web, Email, Chat, Tải file.

#### Bài 5: `java-udp.md`

_So sánh sự khác biệt về tốc độ giữa UDP và TCP._

````markdown
Nếu TCP là gọi điện thoại (kết nối chặt chẽ), thì **UDP giống như bắn súng sơn**: Bạn cứ bắn liên tục, trúng hay trượt không quan trọng, miễn là nhanh!

## Cách hoạt động

UDP không cần bắt tay. Nó đóng gói dữ liệu vào các `DatagramPacket` và ném đi.

### Code gửi dữ liệu (Sender)

```java
DatagramSocket socket = new DatagramSocket();
String data = "Hello UDP!";
byte[] buffer = data.getBytes();

InetAddress ip = InetAddress.getByName("localhost");
DatagramPacket packet = new DatagramPacket(buffer, buffer.length, ip, 9876);

socket.send(packet); // Bắn gói tin đi!
```
````
