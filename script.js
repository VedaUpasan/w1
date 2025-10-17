// Responsive Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Light/Dark Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Skill Map Logos — Dynamic Placement
const skillMap = document.getElementById("skill-map");
const skills = [
    { name: "Python", size: 80, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "R", size: 60, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", size: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "JavaScript", size: 70, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", size: 65, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", size: 65, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", size: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "AWS", size: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Hadoop", size: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "GitHub", size: 60, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

function createSkillLogos() {
    skillMap.innerHTML = "";
    skills.forEach(skill => {
        const img = document.createElement("img");
        img.src = skill.img;
        img.alt = skill.name;
        img.classList.add("skill-logo");
        img.style.width = `${skill.size}px`;
        img.style.height = `${skill.size}px`;
        img.style.top = `${Math.random() * 80}%`;
        img.style.left = `${Math.random() * 80}%`;
        skillMap.appendChild(img);
    });
}
createSkillLogos();

// Subtle Animated Gradient Particle Background
const canvas = document.getElementById("gradient-canvas");
const ctx = canvas.getContext("2d");
let width, height, particles;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function initParticles() {
    particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 80 + 40,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `rgba(${body.classList.contains("dark-mode") ? "198,168,125" : "209,191,167"}, ${Math.random() * 0.2})`
    }));
}

function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
    });
    requestAnimationFrame(drawParticles);
}

initParticles();
drawParticles();
