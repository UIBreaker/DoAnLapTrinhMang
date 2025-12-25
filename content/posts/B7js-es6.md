---
title: "Nâng cấp kỹ năng với 5 tính năng ES6 JavaScript cực chất"
date: 2023-11-10
draft: false
tags: ["JavaScript", "ES6", "Web"]
summary: "Đừng code như năm 2010 nữa! Hãy sử dụng Arrow Function, Destructuring để code ngắn gọn và 'ngầu' hơn."
---

## PHẦN 3: JAVASCRIPT (FRONTEND HIỆN ĐẠI)

#### Bài 7: `js-es6.md`

_Đây là bài viết chi tiết tôi đã nâng cấp ở bước trước._

````markdown
ES6 (ECMAScript 2015) là cuộc cách mạng của JS. Dưới đây là 3 thứ tôi dùng mỗi ngày.

## 1. Arrow Function (Hàm mũi tên)

Ngắn gọn, xúc tích.

```javascript
// Trước đây
function sayHello(name) {
  return "Hello " + name;
}

// Bây giờ (ES6)
const sayHello = (name) => `Hello ${name}`; // Kết hợp luôn Template String
```
````

## 2. Destructuring (Bóc tách)

Lấy dữ liệu từ Object siêu nhanh.

```java
const student = { name: "Nam", age: 21, school: "KTPM" };

// Lấy ra dùng luôn
const { name, school } = student;
console.log(name); // "Nam"
```

## 3. Spread Operator (...)

Copy mảng chỉ bằng 3 dấu chấm.

```java
const teamA = [1, 2, 3];
const teamB = [...teamA, 4, 5, 6];
// teamB sẽ là [1, 2, 3, 4, 5, 6]
```
