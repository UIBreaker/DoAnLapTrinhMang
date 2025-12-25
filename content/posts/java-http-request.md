---
title: "Gửi HTTP Request trong Java không cần thư viện ngoài"
date: 2023-11-03
draft: false
tags: ["Java", "HTTP"]
summary: "Sử dụng HttpURLConnection để gọi API."
---

Trước khi có HttpClient (Java 11), chúng ta thường dùng `HttpURLConnection`:

```java
URL url = new URL("[https://api.example.com/data](https://api.example.com/data)");
HttpURLConnection con = (HttpURLConnection) url.openConnection();
con.setRequestMethod("GET");
// Đọc response...
```
