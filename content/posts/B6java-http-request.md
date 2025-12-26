---
title: "Gọi API trong Java: Từ GET cơ bản đến Async nâng cao"
date: 2023-11-03
draft: false
tags: ["Java", "HTTP", "REST API", "Backend"]
summary: "Quên HttpURLConnection đi! Đây là cách sử dụng HttpClient (Java 11) để gọi API lấy dữ liệu GitHub và gửi JSON chuyên nghiệp."
---

Trước đây, để gọi API trong Java, chúng ta phải dùng `HttpURLConnection` rất rườm rà và phải tự xử lý luồng (Thread). Từ Java 11, `HttpClient` ra đời và thay đổi tất cả: Code ngắn hơn, hỗ trợ Async và HTTP/2.

## 1. Cơ bản: Lấy dữ liệu (GET Request)

Ví dụ kinh điển: Lấy thông tin Profile GitHub của mình.

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetRequestDemo {
    public static void main(String[] args) throws Exception {
        // 1. Tạo Client (Người gửi)
        HttpClient client = HttpClient.newHttpClient();

        // 2. Tạo yêu cầu (Request) - Method GET
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)"))
                .GET() // Mặc định là GET, nhưng viết rõ cho dễ đọc
                .build();

        // 3. Gửi và nhận phản hồi (Synchronous - Chờ xong mới chạy tiếp)
        System.out.println("Đang gửi request...");
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // 4. Xử lý kết quả
        if (response.statusCode() == 200) {
            System.out.println("Thành công! Data: " + response.body());
        } else {
            System.err.println("Lỗi rồi: " + response.statusCode());
        }
    }
}
```

## 2. Nâng cao: Gửi dữ liệu (POST Request)

Khi bạn cần đăng nhập hoặc gửi form, chúng ta dùng POST và gửi kèm JSON body.

```java
// Giả lập gửi JSON đăng nhập
String jsonBody = "{\"username\":\"nhatnam\", \"password\":\"123456\"}";

HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("[https://reqres.in/api/login](https://reqres.in/api/login)")) // API test miễn phí
        .header("Content-Type", "application/json") // Báo cho Server biết mình gửi JSON
        .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
        .build();

HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println("Login Response: " + response.body());
```

## 3. Chuyên gia: Xử lý Bất đồng bộ (Asynchronous)

Nếu mạng lag, cách client.send() ở trên sẽ làm treo chương trình (đơ màn hình). Để khắc phục, ta dùng sendAsync().

```java
// Gửi request và KHÔNG CHỜ (Non-blocking)
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
      .thenApply(HttpResponse::body) // Khi nào có kết quả thì lấy Body
      .thenAccept(System.out::println) // Sau đó in ra màn hình
      .join(); // (Chỉ dùng join trong hàm main để demo không bị thoát chương trình)

System.out.println("Dòng này sẽ in ra TRƯỚC khi có kết quả API!");
```

## 4. Bảng mã phản hồi (HTTP Status Codes) cần nhớ

Khi gọi API, Server sẽ trả về các con số "biết nói":

200 OK: Thành công rực rỡ.

201 Created: Đã tạo mới thành công (thường gặp khi POST).

400 Bad Request: Bạn gửi dữ liệu sai định dạng.

401 Unauthorized: Chưa đăng nhập hoặc sai mật khẩu.

404 Not Found: Link API bị sai hoặc không tồn tại.

500 Internal Server Error: Lỗi tại Server (không phải do bạn).

## Kết luận

Với HttpClient, Java giờ đây đã có thể giao tiếp với thế giới Web (Facebook, Google, Chat GPT API...) một cách dễ dàng mà không cần cài thêm thư viện nặng nề nào cả.
