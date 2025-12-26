/* static/snow.js - PHIÊN BẢN ULTIMATE V4 (INSTANT PLAY & FIX PATH) */

// 1. KÍCH HOẠT NHẠC NGAY LẬP TỨC (Không chờ DOMContentLoaded)
// Hàm này sẽ chạy ngay khi script được tải -> Giảm độ trễ tối đa
(function instantMusicInit() {
  // Chỉ chạy nếu chưa có máy nghe nhạc
  if (document.getElementById("music-container")) return;

  const basePath = getBasePath();
  const imgUrl = basePath + "images/vinyl.png";
  const musicUrl = basePath + "music/music.mp3";

  // Tạo Container
  const container = document.createElement("div");
  container.id = "music-container";
  container.title = "Bật/Tắt nhạc 🎵";

  // Tạo Ảnh
  const diskImg = document.createElement("img");
  diskImg.id = "music-disk";
  diskImg.src = imgUrl;

  // Tạo Audio với chế độ Preload
  const audio = document.createElement("audio");
  audio.id = "bg-music";
  audio.src = musicUrl;
  audio.loop = true;
  audio.volume = 0.5;
  audio.preload = "auto"; // Yêu cầu trình duyệt tải nhạc trước

  container.appendChild(diskImg);
  container.appendChild(audio);

  // Chèn vào Body ngay lập tức
  // Kiểm tra nếu body đã có (thường script đặt cuối trang nên body đã có)
  if (document.body) {
    document.body.appendChild(container);
  } else {
    // Dự phòng nếu script chạy sớm quá
    window.addEventListener("DOMContentLoaded", () =>
      document.body.appendChild(container)
    );
  }

  // --- LOGIC HỒI SINH TRẠNG THÁI ---
  const isPlaying = localStorage.getItem("musicPlaying") === "true";
  const savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;

  if (!isNaN(savedTime)) audio.currentTime = savedTime;

  if (isPlaying) {
    // Cố gắng phát ngay lập tức
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          container.classList.add("playing");
        })
        .catch((e) => {
          console.log("Autoplay blocked (Browser limitation)");
          container.classList.remove("playing");
        });
    }
  }

  // Sự kiện Click
  container.addEventListener("click", function () {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          container.classList.add("playing");
          localStorage.setItem("musicPlaying", "true");
        })
        .catch((e) => alert("Lỗi: Không tìm thấy file nhạc!"));
    } else {
      audio.pause();
      container.classList.remove("playing");
      localStorage.setItem("musicPlaying", "false");
    }
  });

  // Lưu trạng thái liên tục (giúp chính xác hơn)
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("musicTime", audio.currentTime);
    localStorage.setItem("musicPlaying", !audio.paused);
  });

  // Fix lỗi ảnh (nếu có)
  diskImg.onerror = function () {
    console.error("Lỗi ảnh vinyl tại: " + imgUrl);
  };
})();

// 2. CÁC TÁC VỤ KHÁC (Vẫn chờ Load xong mới chạy cho an toàn)
document.addEventListener("DOMContentLoaded", function () {
  // --- Logic Background & Tuyết ---
  const path = window.location.pathname;
  const isHomePage =
    path === "/" ||
    path.endsWith("/index.html") ||
    path.endsWith("/DoAnLapTrinhMang/") ||
    path.endsWith("/DoAnLapTrinhMang");
  const body = document.body;

  if (isHomePage) {
    if (!body.classList.contains("outdoor-theme")) {
      body.classList.add("outdoor-theme");
      body.classList.remove("indoor-theme");
    }
    startSnowEffect();
  } else {
    if (!body.classList.contains("indoor-theme")) {
      body.classList.add("indoor-theme");
      body.classList.remove("outdoor-theme");
    }
  }

  // --- Phím tắt Search ---
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const basePath = getBasePath();
      window.location.href = basePath + "search";
    }
  });
});

/* --- HÀM HỖ TRỢ --- */
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes("/DoAnLapTrinhMang")) return "/DoAnLapTrinhMang/";
  return "/";
}

function startSnowEffect() {
  if (document.getElementById("snow-container")) return;
  const e = document.createElement("div");
  (e.id = "snow-container"),
    (e.style.position = "fixed"),
    (e.style.top = "0"),
    (e.style.left = "0"),
    (e.style.width = "100%"),
    (e.style.height = "100%"),
    (e.style.pointerEvents = "none"),
    (e.style.zIndex = "9998"),
    document.body.appendChild(e);
  for (let t = 0; t < 50; t++) {
    const t = document.createElement("div");
    (t.innerHTML = "❄"),
      (t.style.position = "absolute"),
      (t.style.color = "rgba(255, 255, 255, 0.8)"),
      (t.style.fontSize = 20 * Math.random() + 10 + "px"),
      (t.style.left = 100 * Math.random() + "vw"),
      (t.style.opacity = Math.random()),
      e.appendChild(t);
    const n = 3 * Math.random() + 2;
    let o = -50;
    !(function i() {
      (o += n),
        (t.style.top = o + "px"),
        o > window.innerHeight &&
          ((o = -50), (t.style.left = 100 * Math.random() + "vw")),
        requestAnimationFrame(i);
    })();
  }
}
////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // ... (các code cũ giữ nguyên) ...

  const path = window.location.pathname;

  // --- THÊM ĐOẠN NÀY: NHẬN DIỆN TRANG DỰ ÁN ---
  if (path.includes("/projects")) {
    document.body.classList.add("project-page");
  }

  // ... (các code cũ giữ nguyên) ...
});
document.addEventListener("DOMContentLoaded", function () {
  // ... (các phần trên giữ nguyên) ...

  const path = window.location.pathname;

  // --- SỬA LẠI ĐOẠN NÀY: LOGIC THÔNG MINH HƠN ---
  if (path.includes("/projects")) {
    // Kiểm tra xem đây là trang "Danh sách" hay trang "Chi tiết bài viết"
    // Trang chi tiết sẽ có class '.post-single' bên trong
    const isDetailPage = document.querySelector(".post-single");

    if (!isDetailPage) {
      // Nếu KHÔNG PHẢI trang chi tiết -> Mới thêm class để chia lưới 2 cột
      document.body.classList.add("project-page");
    } else {
      // Nếu LÀ trang chi tiết -> Thêm class khác để căn giữa đẹp hơn
      document.body.classList.add("project-detail-view");
    }
  }

  // ... (các phần dưới giữ nguyên) ...
});
