---
title: "Bảng vàng Java Collections: Khi nào dùng List, Set hay Map?"
date: 2023-10-26
draft: false
tags: ["Java", "Data Structures", "Interview"]
summary: "Sai lầm chọn sai cấu trúc dữ liệu có thể làm chậm chương trình gấp 10 lần. Đây là bí kíp để bạn chọn đúng."
---

Trong phỏng vấn Java, câu hỏi về Collections luôn chiếm 80%. Không chỉ là lý thuyết, việc chọn sai (`List` thay vì `Set`) có thể khiến tính năng tìm kiếm của bạn chậm đi cả nghìn lần.

Dưới đây là bảng so sánh "xương máu" giúp bạn phân biệt rõ ràng.

## 1. Bảng so sánh nhanh

| Đặc điểm       | List (ArrayList)       | Set (HashSet)        | Map (HashMap)          |
| :------------- | :--------------------- | :------------------- | :--------------------- |
| **Trùng lặp**  | ✅ Cho phép            | ❌ Cấm kị (Duy nhất) | Key: ❌, Value: ✅     |
| **Thứ tự**     | ✅ Giữ nguyên lúc thêm | ❌ Lộn xộn           | ❌ Lộn xộn             |
| **Truy cập**   | Theo index `[0], [1]`  | Không có index       | Theo `Key` (Chìa khóa) |
| **Tốc độ tìm** | Chậm (O(n))            | Siêu nhanh (O(1))    | Siêu nhanh (O(1))      |

---

## 2. Đi vào thực chiến

### Trường hợp 1: Dùng List (Danh sách sinh viên)

**Khi nào dùng?** Khi bạn cần lưu trữ danh sách theo thứ tự thêm vào, và chấp nhận dữ liệu trùng lặp (Ví dụ: Lịch sử giao dịch, Danh sách điểm danh).

```java
// Khởi tạo
List<String> students = new ArrayList<>();
students.add("Nhật Nam");
students.add("Minh Tuấn");
students.add("Nhật Nam"); // List chấp nhận trùng tên

// Duyệt danh sách (Cách hiện đại)
System.out.println("--- Danh sách lớp ---");
for (String s : students) {
    System.out.println(s);
}
// Kết quả: In đủ 3 dòng, bao gồm 2 lần "Nhật Nam"
```

## Trường hợp 2: Dùng Set (Kho số CCCD/Email)

Khi nào dùng? Khi dữ liệu bắt buộc phải là DUY NHẤT. Nếu cố tình thêm cái trùng, nó sẽ tự động bị loại bỏ.

```java
Set<String> idCards = new HashSet<>();
idCards.add("079202001");
idCards.add("079202002");
idCards.add("079202001"); // Trùng -> Hệ thống tự lờ đi, không lỗi

System.out.println("Tổng số CCCD: " + idCards.size());
// Kết quả: 2 (Cái trùng đã bị loại)
```

## Trường hợp 3: Dùng Map (Tra cứu từ điển/Cấu hình)

Khi nào dùng? Khi bạn muốn tìm kiếm dữ liệu cực nhanh thông qua một "chìa khóa" (Key). Ví dụ: Nhập Mã SV -> Ra tên SV.

```Java
// Key là Mã SV (String), Value là Tên (String)
Map<String, String> dictionary = new HashMap<>();

// Thêm dữ liệu: put(Key, Value)
dictionary.put("SV001", "Nguyễn Vũ Nhật Nam");
dictionary.put("SV002", "Trần Văn B");

// Tra cứu: get(Key)
String name = dictionary.get("SV001");
System.out.println("Sinh viên mã SV001 là: " + name);
// Kết quả: Nguyễn Vũ Nhật Nam (Tốc độ tìm kiếm tức thì)
```

## 3. Pro Tip: Tại sao tốc độ lại quan trọng?

Hãy tưởng tượng bạn tìm một cuốn sách trong thư viện:

Cách List (O(n)): Bạn đi từng kệ, xem từng cuốn sách từ đầu đến cuối thư viện để tìm. -> Rất lâu.

Cách Map/Set (O(1)): Bạn tra máy tính, máy báo "Kệ A, Dòng 3". Bạn đi thẳng tới đó lấy. -> Cực nhanh.

Lời khuyên: Nếu bài toán yêu cầu "Kiểm tra xem A có tồn tại không?" với dữ liệu lớn, hãy ưu tiên dùng Set hoặc Map thay vì List nhé!
