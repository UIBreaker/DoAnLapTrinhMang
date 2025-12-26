---
title: "5 tính năng ES6 thay đổi cách bạn viết JavaScript mãi mãi"
date: 2023-11-10
draft: false
tags: ["JavaScript", "ES6", "Frontend", "Web"]
summary: "Tạm biệt 'var', tạm biệt nối chuỗi thủ công. Hãy cập nhật ngay Let/Const, Arrow Function và Destructuring để code đẳng cấp hơn."
---

ES6 (ECMAScript 2015) là cuộc cách mạng lớn nhất lịch sử JavaScript. Nếu bạn vẫn đang code theo kiểu cũ, bạn đang bỏ lỡ rất nhiều thứ hay ho.

Dưới đây là 5 tính năng "vàng" mà mình sử dụng trong mọi dự án.

## 1. Let & Const (Khai báo biến kiểu mới)

Ngày xưa dùng `var`, biến nhảy lung tung (Hoisting) rất khó quản lý. ES6 giới thiệu 2 người bạn mới:

- **`let`**: Dùng cho biến có thể thay đổi giá trị (như biến đếm `i` trong vòng lặp).
- **`const`**: Dùng cho hằng số (không được gán lại). **Lời khuyên:** Hãy dùng `const` mặc định, chỉ khi nào cần thay đổi mới dùng `let`.

```javascript
// ❌ Cách cũ (Var)
var x = 10;
if (true) {
  var x = 20; // Nó sửa luôn biến x bên ngoài -> Nguy hiểm!
}
console.log(x); // 20

// ✅ Cách mới (Let/Const)
let y = 10;
if (true) {
  let y = 20; // Biến y này chỉ sống trong khối if
  console.log("Trong if: " + y); // 20
}
console.log("Ngoài if: " + y); // 10 -> An toàn tuyệt đối
```

## 2. Template Literals (Chuỗi mẫu siêu xịn)

Quên đi ác mộng nối chuỗi bằng dấu cộng +. Hãy dùng dấu backtick (`) và cú pháp ${}.

```java
const name = "Nhật Nam";
const role = "Admin";

// ❌ Cách cũ
console.log("User " + name + " có quyền là " + role);

// ✅ Cách mới (Vừa gọn vừa dễ đọc)
console.log(User ${name} có quyền là ${role});
```

## 3. Arrow Function (Hàm mũi tên)

Viết hàm ngắn gọn hơn, nhìn "ngầu" hơn và xử lý từ khóa this tốt hơn.

```java
// ❌ Cách cũ
function sum(a, b) {
    return a + b;
}

// ✅ Cách mới
const sum = (a, b) => a + b; // Tự động return nếu chỉ có 1 dòng
```

## 4. Destructuring (Bóc tách dữ liệu)

Tính năng mình thích nhất! Giúp lấy dữ liệu từ Object hoặc Array ra biến riêng biệt cực nhanh.

```java
const student = {
    id: 1,
    fullName: "Nguyễn Vũ Nhật Nam",
    school: "HUTECH"
};

// ❌ Cách cũ: Phải gõ student.xxx nhiều lần
const id = student.id;
const name = student.fullName;

// ✅ Cách mới: Bóc tách 1 dòng là xong
const { id, fullName, school } = student;
console.log(fullName); // "Nguyễn Vũ Nhật Nam"
```

## 5. Spread Operator (Dấu ba chấm thần thánh)

Copy mảng, gộp mảng, gộp object chỉ bằng ....

```java
const teamA = ["Nam", "Tuấn"];
const teamB = ["Lan", "Hoa"];

// Gộp mảng cực nhanh
const allTeams = [...teamA, ...teamB, "Bảo"];
// Kết quả: ["Nam", "Tuấn", "Lan", "Hoa", "Bảo"]

// Ứng dụng thực tế: Update state trong React/Vue
const user = { name: "Nam", age: 21 };
const updatedUser = { ...user, age: 22 }; // Giữ nguyên name, chỉ sửa age
```
