**Bài 5:** Tạo file `java-udp.md`

```markdown
---
title: "Giao thức UDP trong Java: Nhanh nhưng không đảm bảo"
date: 2023-11-02
draft: false
tags: ["Java", "Network", "UDP"]
summary: "Sự khác biệt giữa DatagramSocket (UDP) và Socket (TCP)."
---

Khác với TCP, UDP không cần thiết lập kết nối (connectionless).

- **Ưu điểm:** Tốc độ cao, ít độ trễ.
- **Nhược điểm:** Có thể mất gói tin.
- **Ứng dụng:** Livestream, Game online, Gọi video.

Trong Java, chúng ta sử dụng `DatagramSocket` và `DatagramPacket` để gửi nhận dữ liệu UDP.
```
