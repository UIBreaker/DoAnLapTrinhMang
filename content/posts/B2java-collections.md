---
title: "Bảng vàng Java Collections: Khi nào dùng List, Set hay Map?"
date: 2023-10-26
draft: false
tags: ["Java", "Data Structures", "Interview"]
summary: "Sai lầm chọn sai cấu trúc dữ liệu có thể làm chậm chương trình gấp 10 lần. Đây là bí kíp để bạn chọn đúng."
---

## Bài 2: `java-collections.md`

_Bài này dùng bảng so sánh trực quan, giúp người đọc chọn đúng cấu trúc dữ liệu._

````markdown
Trong phỏng vấn Java, câu hỏi về Collections luôn chiếm 80%. Dưới đây là bảng so sánh "thần thánh" giúp bạn phân biệt rõ ràng.

## Bảng so sánh nhanh

| Đặc điểm       | List (ArrayList)     | Set (HashSet)     | Map (HashMap)        |
| :------------- | :------------------- | :---------------- | :------------------- |
| **Trùng lặp**  | ✅ Cho phép          | ❌ Cấm kị         | Key: ❌, Value: ✅   |
| **Thứ tự**     | ✅ Giữ nguyên        | ❌ Lộn xộn        | ❌ Lộn xộn           |
| **Truy cập**   | Theo index (0, 1...) | Không có index    | Theo Key (Chìa khóa) |
| **Tốc độ tìm** | Chậm (O(n))          | Siêu nhanh (O(1)) | Siêu nhanh (O(1))    |

## Khi nào dùng cái gì?

### 1. Dùng List khi cần "Danh sách sinh viên"

Cần lưu trữ theo thứ tự, có thể có 2 người cùng tên.

```java
List<String> students = new ArrayList<>();
students.add("Nam");
students.add("Nam");

```
````

## 2. Dùng Set khi cần "Danh sách CCCD"

Mỗi số CCCD là duy nhất, không thể trùng lặp.

```java
Set<String> idCards = new HashSet<>();
idCards.add("001");
idCards.add("001"); // Hệ thống sẽ lờ đi cái thứ 2

```
