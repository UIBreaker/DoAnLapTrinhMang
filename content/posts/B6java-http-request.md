---
title: "Giao tiếp với thế giới Web: Gửi HTTP Request trong Java"
date: 2023-11-03
draft: false
tags: ["Java", "HTTP", "API"]
summary: "Làm sao để Java lấy được dữ liệu thời tiết, tỷ giá tiền tệ từ các website khác? Hướng dẫn sử dụng HttpClient (Java 11+)."
---

Khi nào dùng UDP?
Game Online (FPS/MOBA): Mất 1 gói tin di chuyển cũng không sao, nhưng nếu lag thì chết ngay.

Livestream: Mất 1 frame hình ảnh người xem vẫn hiểu, nhưng dừng hình để load lại gói tin bị mất thì rất khó chịu.

Tổng kết: Muốn chính xác tuyệt đối -> TCP. Muốn nhanh, chấp nhận rủi ro -> UDP.

## Bài 6: `java-http-request.md`

_Hướng dẫn gọi API thực tế - Kỹ năng đi làm rất cần._

````markdown
Trước đây Java dùng `HttpURLConnection` rất rườm rà. Từ Java 11, chúng ta có `HttpClient` cực kỳ xịn sò.

## Ví dụ: Lấy dữ liệu từ GitHub API

Đoạn code dưới đây sẽ "hỏi" GitHub thông tin về user `UIBreaker`.

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class DemoHttp {
    public static void main(String[] args) throws Exception {
        // 1. Tạo Client
        HttpClient client = HttpClient.newHttpClient();

        // 2. Tạo yêu cầu (Request)
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)"))
                .GET()
                .build();

        // 3. Gửi và nhận phản hồi
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // 4. In kết quả
        System.out.println("Status Code: " + response.statusCode());
        System.out.println("Dữ liệu nhận được: " + response.body());
    }
}
```
````

Kết quả
Bạn sẽ nhận được một chuỗi JSON chứa thông tin avatar, số người follow, các repo công khai... Đây là nền tảng của mọi ứng dụng Client-Server hiện đại.
