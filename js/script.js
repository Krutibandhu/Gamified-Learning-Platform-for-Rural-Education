document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Navbar Animation
  gsap.from("nav", {
    duration: 1,
    y: -50, // slide down from top
    opacity: 0, // fade in
    ease: "power2.out",
  });

  // Navbar links staggered animation
  gsap.from(".nav-links li", {
    duration: 0.8,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out",
  });

  // Hero Section Animation
  gsap.from(".hero-text h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce.out",
  });

  gsap.from(".hero-text p", {
    duration: 1,
    delay: 0.5,
    y: 20,
    opacity: 0,
  });

  gsap.from(".buttons button", {
    duration: 0.8,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
    y: 20,
  });

  gsap.from(".hero-img img", {
    duration: 1.2,
    delay: 1,
    x: 50,
    opacity: 0,
    ease: "power2.out",
  });

  // Mission Cards Animation
  gsap.from(".mission-cards .cardd", {
    scrollTrigger: {
      trigger: ".mission-cards",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Features Grid Animation
  gsap.from(".features-grid .feature-card", {
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });
  gsap.from(".stats", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Testimonials Animation
  gsap.from(".testimonials .testimonial", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Partner Cards Animation
  gsap.from(".partners .partner-card", {
    scrollTrigger: {
      trigger: ".partners",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Footer fade-in
  gsap.from(".site-footer", {
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const translations = {
  en: {
    title: "Welcome to Our Website",
    description: "We are helping students reach their goals.",
    engagement: "Higher Engagement",
    students: "Students Reached",
    learnMore: "Learn More",
  },
  hi: {
    title: "हमारी वेबसाइट में आपका स्वागत है",
    description: "हम छात्रों को उनके लक्ष्यों तक पहुँचने में मदद कर रहे हैं।",
    engagement: "बेहतर सहभागिता",
    students: "छात्रों तक पहुँचा",
    learnMore: "और जानें",
  },
  or: {
    title: "ଆମର ୱେବସାଇଟକୁ ସ୍ବାଗତ",
    description: "ଆମେ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ତାଙ୍କର ଲକ୍ଷ୍ୟ ପହଞ୍ଚିବାରେ ସାହାଯ୍ୟ କରୁଛୁ।",
    engagement: "ଉଚ୍ଚ ସହଭାଗୀତା",
    students: "ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ପହଞ୍ଚିଲା",
    learnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
  },
  bn: {
    title: "আমাদের ওয়েবসাইটে স্বাগতম",
    description: "আমরা শিক্ষার্থীদের তাদের লক্ষ্য অর্জনে সাহায্য করছি।",
    engagement: "উচ্চতর সম্পৃক্ততা",
    students: "শিক্ষার্থীদের কাছে পৌঁছানো হয়েছে",
    learnMore: "আরও জানুন",
  },
};
document.querySelectorAll(".dropdown-content a").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const lang = this.getAttribute("data-lang");

    // Select all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  });
});
document
  .getElementById("teacherRegistrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      school: document.getElementById("school").value,
      subjects: document.getElementById("subjects").value,
      experience: document.getElementById("experience").value,
    };

    // Store data in localStorage (optional)
    let teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
    teachers.push(formData);
    localStorage.setItem("teachers", JSON.stringify(teachers));

    // Confirmation
    alert("Thank you for registering! We will contact you soon.");
    this.reset();
  });
