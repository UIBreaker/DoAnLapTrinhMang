**Bài 8:** Tạo file `js-async-await.md`

````markdown
---
title: "Bất đồng bộ trong JS: Từ Callback đến Async/Await"
date: 2023-11-11
draft: false
tags: ["JavaScript", "Async"]
summary: "Cách xử lý bất đồng bộ giúp code sạch và dễ đọc hơn."
---

Ngày xưa chúng ta dùng **Callback Hell**. Sau đó là **Promise**. Và giờ là **Async/Await**:

```javascript
async function fetchData() {
  try {
    let response = await fetch(
      "[https://api.github.com](https://api.github.com)"
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
````
