/* static/snow.js */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Kiểm tra xem người dùng đang ở đâu?
  // Vì web của bạn nằm trong thư mục /DoAnLapTrinhMang/
  const path = window.location.pathname;

  // Logic: Nếu đường dẫn là trang chủ (/) hoặc (/DoAnLapTrinhMang/) thì là NGOÀI TRỜI
  const isHomePage =
    path === "/" ||
    path === "/DoAnLapTrinhMang/" ||
    path.endsWith("/index.html");

  const body = document.body;

  if (isHomePage) {
    // --- TRƯỜNG HỢP: ĐANG Ở TRANG CHỦ ---
    console.log("Đang ở ngoài trời: Bật tuyết rơi!");

    // 1. Thêm class nền xanh lạnh
    body.classList.add("outdoor-theme");

    // 2. Kích hoạt tuyết rơi
    startSnowEffect();
  } else {
    // --- TRƯỜNG HỢP: ĐANG ĐỌC BÀI / GIỚI THIỆU ---
    console.log("Đang ở trong nhà: Bật lò sưởi!");

    // 1. Thêm class nền đỏ ấm
    body.classList.add("indoor-theme");

    // 2. KHÔNG gọi hàm tuyết rơi -> Tuyết sẽ tự tắt
  }
});

// --- HÀM TẠO TUYẾT (Giữ nguyên logic cũ) ---
function startSnowEffect() {
  const snowContainer = document.createElement("div");
  snowContainer.id = "snow-container";
  snowContainer.style.position = "fixed";
  snowContainer.style.top = "0";
  snowContainer.style.left = "0";
  snowContainer.style.width = "100%";
  snowContainer.style.height = "100%";
  snowContainer.style.pointerEvents = "none";
  snowContainer.style.zIndex = "9999";
  document.body.appendChild(snowContainer);

  const snowflakeCount = 50;

  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake(snowContainer);
  }

  function createSnowflake(container) {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "❄";
    snowflake.style.position = "absolute";
    snowflake.style.color = "rgba(255, 255, 255, 0.8)";
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.opacity = Math.random();
    container.appendChild(snowflake);

    const speed = Math.random() * 3 + 2; // Tốc độ rơi
    let topPosition = -50;

    function fall() {
      topPosition += speed;
      snowflake.style.top = topPosition + "px";

      if (topPosition > window.innerHeight) {
        topPosition = -50;
        snowflake.style.left = Math.random() * 100 + "vw";
      }
      requestAnimationFrame(fall);
    }
    fall();
  }
}
