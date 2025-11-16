let currentIndex = 0;
let slides, dots, totalSlides;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  totalSlides = slides.length;

  showSlide(currentIndex);
  startAutoSlide();
});

// ฟังก์ชันเปลี่ยนภาพเมื่อกดลูกศร
function plusSlides(n) {
  currentIndex += n;
  if (currentIndex >= totalSlides) currentIndex = 0;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  showSlide(currentIndex);
  resetAutoSlide();
}

// ฟังก์ชันเลือกภาพตามจุด
function currentSlide(n) {
  currentIndex = n - 1;
  showSlide(currentIndex);
  resetAutoSlide();
}

// แสดงภาพตาม index ที่กำหนด
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = (i === index) ? "1" : "0";
    slide.style.zIndex = (i === index) ? "1" : "0";
  });
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

// เริ่มสไลด์อัตโนมัติ
function startAutoSlide() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 5000);
}

// รีเซ็ตการนับเวลาอัตโนมัติเมื่อคลิก
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}



// ------- เอฟเฟกต์เฟดอินการ์ด OC --------
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".oc-card");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // แสดงครั้งเดียว
      }
    });
  }, { threshold: 0.1 }); // เห็นแค่ 10% ก็เริ่มแสดงได้

  cards.forEach(card => observer.observe(card));
});





// ---------- เอฟเฟกต์เฟดเวลาโหลดหน้า ----------
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // เพิ่ม event ให้ทุกลิงก์
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');

    // เช็กว่าลิงก์เป็นภายในเว็บ และไม่ใช่ # หรือ javascript:
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("javascript") &&
      link.hostname === window.location.hostname
    ) {
      link.addEventListener('click', e => {
        // ถ้าเป็นลิงก์ไปหน้านี้อยู่แล้ว → ไม่ต้องทำอะไร
        if (href === window.location.pathname.split("/").pop()) return;

        e.preventDefault(); // กันไว้ก่อนเปลี่ยนหน้า
        document.body.classList.remove("fade-in"); // เริ่มเฟดออก
        document.body.style.opacity = 0;

        setTimeout(() => {
          window.location.href = href;
        }, 500); // เวลารอเฟดออกก่อนเปลี่ยนหน้า (0.5 วิ)
      });
    }
  });
});





// ---------- เอฟเฟกต์เฟดเข้า / ออก ตอนโหลดหน้า ----------
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // เอฟเฟกต์ตอนคลิกเปลี่ยนหน้า
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("javascript") &&
      link.hostname === window.location.hostname
    ) {
      link.addEventListener('click', e => {
        if (href === window.location.pathname.split("/").pop()) return;

        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
});






/*Card game*/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".game-card1, .game-card2 , .game-card3 ");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

