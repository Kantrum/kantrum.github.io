---
permalink: /
title: "Huang Jiongtao's personal websites"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
    /* 全局样式 */
    :root {
        --primary-color: #2c3e50;
        --accent-color: #3498db;
        --gradient-1: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        --gradient-2: linear-gradient(45deg, #3b82f6 0%, #2dd4bf 100%);
    }

    body {
        background: #f8fafc;
    }

    /* 炫酷标题样式 */
    .section-title {
        font-size: 2.5rem;
        background: var(--gradient-1);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin: 50px 0 30px;
        position: relative;
        padding-left: 20px;
        font-weight: 800;
        letter-spacing: -0.5px;
    }

    .section-title::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 5px;
        height: 70%;
        background: var(--gradient-1);
        transform: translateY(-50%);
        border-radius: 4px;
    }

    /* 高级卡片样式 */
    .content-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 30px;
        margin: 30px 0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }

    .content-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-2);
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -1;
    }

    .content-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }

    .content-card:hover::before {
        opacity: 0.05;
    }

    /* 炫酷导航链接 */
    .nav-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .nav-link {
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 12px;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-1);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    .nav-link:hover {
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .nav-link:hover::before {
        opacity: 1;
    }

    /* 视频容器增强 */
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        transform: perspective(1000px) rotateX(5deg);
        transition: transform 0.5s ease;
    }

    .video-container:hover {
        transform: perspective(1000px) rotateX(0deg);
    }

    /* 文本动画 */
    .justify-text {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s ease forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Calendly 容器美化 */
    .calendly-container {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        background: white;
        position: relative;
    }

    .calendly-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: var(--gradient-1);
    }

    /* 滚动动画 */
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .content-card {
        animation: slideIn 0.6s ease-out forwards;
        opacity: 0;
    }

    /* 鼠标悬停效果 */
    .hover-glow:hover {
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
    }
</style>

<!-- 添加视差滚动背景 -->
<div class="parallax-wrapper">
    <!-- 原有内容保持不变，但每个部分都会应用新的样式 -->
    <div class="content-card hover-glow">
        <h2 class="section-title">Welcome to My Personal Space</h2>
        <div class="justify-text">
            <p>Hello there! I'm Jiongtao Huang, but you can call me Karen. I'm navigating the exciting world of the Electrical and Computer Engineering at Cornell University. It's a journey that blends my love for technology with an itch to explore and create.</p>
            <p>My academic path is just one slice of the pie. I've dipped my toes in the waters of entrepreneurship, founding Sichuan Jie Min Technology Co., Ltd. and Hunan Chuangben Technology Co., Ltd. These ventures are my playgrounds for innovation, where I learn, stumble, and grow.</p>
            <p>But wait, there's more! At SWJTU, I'm not just another face in the crowd. As a member of the Student Campus Self-Management Committee, I dive into enriching student life, bringing a dash of energy and a spoonful of ideas. Oh, and did I mention I sprint? Yep, I'm the guy who set the men’s 100m record in the general student group at Southwest Jiaotong University. It's not just about speed; it's about passion, persistence, and a little bit of playful competition.</p>
            <p>Curious about any of me? I'm always up for a good chat or a collaborative brainstorm. Reach out to me at <a href="mailto:kantrum@163.com">kantrum@163.com</a>, and let's see what interesting ideas we can cook up together!</p>
        </div>
    </div>
    
    <div class="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/Gh6N1uPjGno?si=k4Ci5MPz42VLvYVQ&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <h2 class="section-title">Why This Website?</h2>
    <div class="content-card justify-text">
        <p>The primary purpose of creating this personal website was to establish a centralized platform to gather and showcase my experiences in academia, life, entrepreneurship, and career. Through this site, I aim to provide a panoramic view that allows you to comprehensively understand me, from my academic pursuits to entrepreneurial ventures, and to the everyday nuances of my life. This place is more than just a display of my personal achievements and milestones; it's a space for documenting and sharing my journey of growth.</p>
        <p>Here, you can find my academic papers, project works, entrepreneurial stories, and my reflections on life. I hope this website serves as a bridge for communication, connecting me with people around the world who share similar interests and dreams. Whether you are a teacher, student, colleague, or just someone curious about my work and life, I welcome you to share your thoughts, experiences, and insights with me.</p>
        <p>Through this website, I aim not only to showcase who I was but also to explore who I might become. It is a constantly evolving platform, reflecting my journey of change and growth. I look forward to meeting you on this journey and sharing, learning, and growing together.</p>
    </div>
    
    <h2 class="section-title">What to Expect?</h2>
    <div class="content-card">
        <div class="justify-text">
            <p>The website is structured into several key sections:</p>
        </div>
        <div class="nav-links">
            <a href="https://kantrum.github.io/huangjiongtao.github.io//publications/" class="nav-link">About Myself</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//talks/" class="nav-link">Academic Journey</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//entrepreneurship/" class="nav-link">Entrepreneurial Path</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//portfolio/" class="nav-link">Life Experiences</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//year-archive/" class="nav-link">Blog Insights</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//cv/" class="nav-link">Professional Resumé</a>
            <a href="https://kantrum.github.io/huangjiongtao.github.io//markdown/" class="nav-link">Navigation Guide</a>
        </div>
    </div>
    
    <h2 class="section-title">Join Me on My Journey</h2>
    <div class="content-card justify-text">
        <p> Warmly welcome you to journey through this website, a reflection of the diverse tapestry that is my life. Each section here is a unique thread, intricately woven to share my story with you. As you navigate through these pages, we embark on an exploration of learning and growth. Enjoy the adventure and insights into my world!</p>
        <p>Together, let's explore the depths of my experiences, uncover new insights, and celebrate the milestones that have shaped me. Welcome aboard this adventure into my world, a tapestry of dreams, aspirations, and achievements. Enjoy the exploration and the many revelations that await!</p>
    </div>
    
    <h2 class="section-title">Chat with Me</h2>
    <div class="content-card">
        <div class="justify-text">
            <p><strong>Dec 2023:</strong> I have set up the <a href="https://calendly.com/huangjiongtao/30min">online-coffee-time</a></p>
        </div>
        <div class="calendly-container">
            <div class="calendly-inline-widget" data-url="https://calendly.com/huangjiongtao/30min" style="min-width:320px;height:630px;"></div>
        </div>
    </div>
</div>

<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65859b0e70c9f2407f8294fd/1hi8ubccg';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>

<!-- 添加平滑滚动效果的JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
</script>
