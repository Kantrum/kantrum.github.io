
<html lang="en">

<style>
:root {
    --primary: #0a192f;
    --secondary: #112240;
    --accent: #64ffda;
    --text: #ccd6f6;
    --text-secondary: #8892b0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    overflow-x: hidden;
    background: var(--primary);
}

/* 背景画布 */
#bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* 内容包装器 */
.content-wrapper {
    position: relative;
    z-index: 1;
    padding-top: 80px;
}

/* 导航栏 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.nav-brand a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-brand a:hover {
    color: #FFD700;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    opacity: 0.8;
    padding: 5px 0;
    position: relative;
}

.nav-links a:hover {
    opacity: 1;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #FFD700;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
}

.mobile-menu-btn span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    margin: 5px 0;
    transition: all 0.3s ease;
}

/* 添加汉堡菜单动画效果 */
.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    .nav-links {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(10, 25, 47, 0.95);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 25px;
        z-index: 1000;
    }
    
    .nav-links.active {
        display: flex;
    }

    .nav-links a {
        font-size: 1.2rem;
        padding: 10px;
    }
    
    /* 调整其他元素在移动端的布局 */
    .hero-text h1 {
        font-size: 3rem;
    }
    
    .main-content {
        padding: 0 1.5rem;
    }
    
    .navbar {
        padding: 15px 20px;
    }
}

/* 主要内容区域 */
.main-content {
    min-height: 100vh;
    padding: 0 1rem;
}

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
}

.hero-text {
    margin-bottom: 3rem;
}

.hero-text h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 600;
    margin-bottom: clamp(1rem, 3vw, 2rem);
    background: linear-gradient(45deg, var(--text), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-wrap: break-word;
    hyphens: auto;
    line-height: 1.2;
}

.title {
    font-size: clamp(1.2rem, 4vw, 2rem);
    color: var(--accent);
    margin-bottom: clamp(0.8rem, 2vw, 1.2rem);
}

.description {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: var(--text-secondary);
    max-width: clamp(300px, 80vw, 800px);
    margin: 0 auto;
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
}

.cta-primary, .cta-secondary {
    padding: 1rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.cta-primary {
    background: var(--accent);
    color: var(--primary);
}

.cta-secondary {
    border: 1px solid var(--accent);
    color: var(--accent);
}

.cta-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
}

.cta-secondary:hover {
    background: rgba(100, 255, 218, 0.1);
}

.footer {
    width: 100%;
    padding: clamp(12px, 2vh, 20px) 0;
    background-color: rgba(20, 20, 20, 0.9);
    backdrop-filter: blur(10px);
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(15px, 3vw, 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-info p {
    margin: 0;
    color: #ffffff;
    font-size: clamp(0.7rem, 1.5vw, 1.1rem);
    opacity: 0.8;
    white-space: nowrap;
}

.footer-links {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 30px);
}

.footer-links a {
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.8;
    font-size: clamp(0.7rem, 1.5vw, 1.1rem);
    white-space: nowrap;
}

.footer-links a:hover {
    color: #ffffff;
    opacity: 1;
    transform: translateY(-2px);
}

.hero .position {
    font-size: clamp(1rem, 3vw, 1.6rem);
    color: #ffffff;
    margin: clamp(10px, 2vw, 20px) 0;
    font-weight: 500;
    opacity: 0.9;
    background: linear-gradient(90deg, #4a90e2, #63b3ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    padding: 5px 0;
}

/* 为了让标题更有层次感，可以稍微调整其他相关样式 */
.hero .title {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.hero .description {
    margin-top: 15px;
}

.why-section {
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.why-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 30px;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.why-card:hover {
    transform: translateY(-10px);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.why-card h3 {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.why-card p, .why-card li {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}

.why-card ul {
    list-style: none;
    padding: 0;
}

.why-card li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.why-card li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #FFD700;
}

.quote-box {
    max-width: 800px;
    margin: 60px auto 0;
    text-align: center;
}

.quote-box blockquote {
    font-size: 1.4rem;
    color: #ffffff;
    font-style: italic;
    opacity: 0.9;
    line-height: 1.6;
}

/* 添加滚动动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.why-card {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
}

.why-card:nth-child(1) { animation-delay: 0.2s; }
.why-card:nth-child(2) { animation-delay: 0.4s; }
.why-card:nth-child(3) { animation-delay: 0.6s; }

.nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.language-switch {
    margin-right: 20px;
}

.lang-btn {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    color: #ffffff;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

.lang-separator {
    margin: 0 5px;
    opacity: 0.5;
}

.lang-text {
    transition: opacity 0.3s ease;
}

.lang-text.active {
    opacity: 1;
    font-weight: 600;
}

.lang-text:not(.active) {
    opacity: 0.5;
}

/* 响应式设计更新 */
@media (max-width: 768px) {
    .nav-right {
        gap: 10px;
    }
    
    .language-switch {
        margin-right: 10px;
    }
}

/* 添加语言切换过渡效果 */
[data-en], [data-zh] {
    transition: opacity 0.3s ease;
}

.language-switch {
    position: relative;
    z-index: 1000;
}

.lang-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 5px 15px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.lang-text {
    transition: opacity 0.3s ease;
}

.lang-text.active {
    opacity: 1;
    font-weight: 600;
}

.lang-text:not(.active) {
    opacity: 0.6;
}

/* 移动端响应式调整 */
@media (max-width: 768px) {
    .footer {
        padding: 10px 0;
    }
    
    .footer-content {
        padding: 0 10px;
    }
    
    .footer-info p {
        font-size: 0.7rem;
    }
    
    .footer-links a {
        margin-left: 10px;
        font-size: 0.7rem;
    }
}

/* 大屏幕优化 */
@media (min-width: 1400px) {
    .hero-text h1 {
        font-size: 4rem;
    }
    
    .title {
        font-size: 2rem;
    }
    
    .position {
        font-size: 1.6rem;
    }
    
    .description {
        font-size: 1.4rem;
    }
    
    .footer-info p,
    .footer-links a {
        font-size: 1.1rem;
    }
}
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jiongtao Huang | Home</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Mono&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <!-- 动态背景画布 -->
    <canvas id="bg-canvas"></canvas>

    <!-- 主要内容 -->
    <div class="content-wrapper">
        <!-- 导航栏 -->
        <nav class="navbar">
            <div class="nav-brand">
                <a href="" data-en="Jiongtao Huang" data-zh="黄炯涛">Jiongtao Huang</a>
            </div>
            <div class="nav-right">
                <!-- 语言切换按钮 -->
                <div class="language-switch">
                    <button class="lang-btn" onclick="toggleLanguage()">
                        <span class="lang-text">EN</span>
                        <span class="lang-separator">/</span>
                        <span class="lang-text">中文</span>
                    </button>
                </div>
                <button class="mobile-menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-links">
                    <li><a href="publications/" data-en="About" data-zh="关于">About</a></li>
                    <li><a href="talks/" data-en="Academic" data-zh="学术">Academic</a></li>
                    <li><a href="entrepreneurship/" data-en="Entrepreneurial" data-zh="创业">Entrepreneurial</a></li>
                    <li><a href="portfolio/" data-en="Life" data-zh="生活">Life</a></li>
                    <li><a href="year-archive/" data-en="Blog" data-zh="博客">Blog</a></li>
                    <li><a href="cv/" data-en="Resume" data-zh="简历">Resume</a></li>
                </ul>
            </div>
        </nav>

        <!-- 主页面内容 -->
        <main class="main-content">
            <section class="hero">
                <div class="hero-text">
                    <h1 data-en="Jiongtao (Kaden) Huang" data-zh="黄炯涛">Jiongtao (Kaden) Huang</h1>
                    <p class="title" data-en="MEng. Student @ Cornell University" data-zh="康奈尔大学电子与计算机工程硕士在读">MEng. Student @ Cornell University</p>
                    <p class="position" data-en="Founder & Executive Director @ Sichuan Jie Min Technology Co., Ltd." data-zh="四川孑民科技有限责任公司 创始人兼执行董事">Founder & Executive Director @ Sichuan Jie Min Technology Co., Ltd.</p>
                    <p class="description" data-en="Exploring the frontiers of Electrical and Computer Engineering" data-zh="探索电子与计算机工程的前沿领域">Exploring the frontiers of Electrical and Computer Engineering</p>
                </div>
                <div class="cta-buttons">
                    <a href="cv/" class="cta-primary" data-en="Get in Touch" data-zh="联系我">Get in Touch</a>
                    <a href="publications/" class="cta-secondary" data-en="Learn More" data-zh="了解更多">Learn More</a>
                </div>
            </section>

            <!-- 在 main-content 中添加新的 section -->
            <section class="why-section" id="why">
                <div class="section-header">
                    <h2 data-en="Why This Website?" data-zh="为什么建立这个网站？">Why This Website?</h2>
                </div>
                
                <div class="why-grid">
                    <!-- 目的卡片 -->
                    <div class="why-card purpose">
                        <div class="card-icon">🎯</div>
                        <h3 data-en="Purpose" data-zh="目的">Purpose</h3>
                        <p data-en="A centralized platform showcasing my journey through academia, life, entrepreneurship, and career." 
                           data-zh="一个集中展示我在学术、生活、创业和职业生涯历程的平台。">A centralized platform showcasing my journey through academia, life, entrepreneurship, and career.</p>
                    </div>
                    
                    <!-- 内容卡片 -->
                    <div class="why-card content">
                        <div class="card-icon">📚</div>
                        <h3 data-en="What You'll Find" data-zh="网站内容">What You'll Find</h3>
                        <ul>
                            <li data-en="Academic Papers" data-zh="学术论文">Academic Papers</li>
                            <li data-en="Project Works" data-zh="项目作品">Project Works</li>
                            <li data-en="Entrepreneurial Stories" data-zh="创业故事">Entrepreneurial Stories</li>
                            <li data-en="Life Reflections" data-zh="生活感悟">Life Reflections</li>
                        </ul>
                    </div>
                    
                    <!-- 愿景卡片 -->
                    <div class="why-card vision">
                        <div class="card-icon">🌟</div>
                        <h3 data-en="Vision" data-zh="愿景">Vision</h3>
                        <p data-en="A bridge connecting minds, sharing experiences, and fostering growth through meaningful interactions." 
                           data-zh="搭建一座连接思维、分享经验、促进成长的桥梁。">A bridge connecting minds, sharing experiences, and fostering growth through meaningful interactions.</p>
                    </div>
                </div>
                
                <div class="quote-box">
                    <blockquote data-en="Through this website, I aim not only to showcase who I was but also to explore who I might become." 
                                data-zh="通过这个网站，我不仅想展示过去的自己，更想探索未来的可能。">
                        "Through this website, I aim not only to showcase who I was but also to explore who I might become."
                    </blockquote>
                </div>
            </section>
        </main>

        <!-- 页脚 -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-info">
                    <p data-en="&copy; 2024 Jiongtao Huang. All rights reserved." 
                       data-zh="&copy; 2024 黄炯涛。保留所有权利。">&copy; 2024 Jiongtao Huang. All rights reserved.</p>
                </div>
                <div class="footer-links">
                    <a href="https://www.linkedin.com/in/jiongtao-huang-150709203/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a>
                    <a href="mailto:jh2877@cornell.edu">Email</a>
                </div>
            </div>
        </footer>
    </div>
</body>
<script>
// 初始化场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    antialias: true
});

// 设置渲染器
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// 创建粒子
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

// 随机成粒子位置
for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// 创建粒子材质
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: '#ffffff',
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

// 创建粒子系统
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// 动画函数
function animate() {
    requestAnimationFrame(animate);
    
    // 粒子旋转
    particlesMesh.rotation.x += 0.0001;
    particlesMesh.rotation.y += 0.0001;
    particlesMesh.rotation.z += 0.0001;
    
    // 让粒子随鼠标移动
    if (mouseX > 0) {
        particlesMesh.rotation.x = mouseY * 0.00008;
        particlesMesh.rotation.y = mouseX * 0.00008;
    }

    renderer.render(scene, camera);
}

// 监听鼠标移动
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
});

// 监听窗口大小变化
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 开始动画
animate();

// 添加滚动动画观察器
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.why-card').forEach((card) => {
    observer.observe(card);
}); 
</script>

<script>
let currentLang = 'en';

const translations = {
    en: {
        about: "About",
        academic: "Academic",
        entrepreneurial: "Entrepreneurial",
        life: "Life",
        blog: "Blog",
        resume: "Resume",
        // 添加更多翻译
    },
    zh: {
        about: "关于",
        academic: "学术",
        entrepreneurial: "创业",
        life: "生活",
        blog: "博客",
        resume: "简历",
        // 添加更多翻译
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage();
    
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', currentLang);
}

function updateLanguage() {
    // 更新导航链接文本
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
    
    // 更新语言按钮样式
    const enText = document.querySelector('.lang-btn .lang-text:first-child');
    const zhText = document.querySelector('.lang-btn .lang-text:last-child');
    
    if (currentLang === 'en') {
        enText.classList.add('active');
        zhText.classList.remove('active');
    } else {
        enText.classList.remove('active');
        zhText.classList.add('active');
    }
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', () => {
    // 从本地存储获取语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
}); 
</script>

<script>
// 移动端菜单功能
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // 切换body滚动
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // 点击导航链接时关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // 点击菜单外区域关闭菜单
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
</script>
</html>
