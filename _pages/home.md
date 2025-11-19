<html lang="en">

<style>
:root {
    --primary: #0f172a;
    --secondary: #1e293b;
    --accent: #38bdf8;
    --accent-dark: #0284c7;
    --text: #f1f5f9;
    --text-secondary: #94a3b8;
    --gradient-start: #38bdf8;
    --gradient-end: #818cf8;
    --card-bg: rgba(30, 41, 59, 0.6);
    --nav-bg: rgba(15, 23, 42, 0.8);
    --github: #333;
    --twitter: #1DA1F2;
    --linkedin: #0077B5;
    --instagram: #E4405F;
    --wechat: #07C160;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
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

/* 滚动条样式 */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--primary);
}

::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--accent-dark);
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
    background: var(--nav-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-brand a {
    color: var(--text);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 0.3s ease;
    letter-spacing: -0.5px;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
}

.nav-brand a:hover {
    color: var(--accent);
    transform: translateY(-2px);
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: var(--text);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    opacity: 0.8;
    padding: 8px 0;
    position: relative;
}

.nav-links a:hover {
    opacity: 1;
    color: var(--accent);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: a2px;
    background: var(--accent);
    transition: width 0.3s cubic-bezier(0.65, 0, 0.35, 1);
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
    background-color: var(--text);
    margin: 5px 0;
    transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
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
    .navbar {
        padding: 15px 10px;
    }
    .mobile-menu-btn {
        display: block;
        width: 48px;
        height: 48px;
        padding: 12px;
        margin-left: 10px;
        z-index: 1001;
    }
    .mobile-menu-btn span {
        width: 32px;
        height: 3px;
        margin: 7px 0;
    }
    .nav-links {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(15, 23, 42, 0.97);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 10px;
        gap: 32px;
        z-index: 1000;
        transition: opacity 0.3s, visibility 0.3s;
    }
    .nav-links.active {
        display: flex;
        animation: fadeIn 0.3s ease;
    }
    .nav-links a {
        font-size: 1.4rem;
        padding: 16px 0;
        letter-spacing: 1px;
    }
    .nav-links li {
        width: 100%;
        text-align: center;
    }
    .nav-right {
        gap: 8px;
    }
    .language-switch {
        margin-right: 0;
    }
    
    /* 调整其他元素在移动端的布局 */
    .hero-text h1 {
        font-size: 2.5rem;
    }
    
    .main-content {
        padding: 0 1.5rem;
    }
    
    .navbar {
        padding: 15px 20px;
    }
    .nav-brand a {
        font-size: 1.1rem;
        white-space: nowrap;
        max-width: 60vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: middle;
    }
    .language-switch {
        white-space: nowrap;
        max-width: 38vw;
        display: flex;
        align-items: center;
    }
    .lang-btn {
        font-size: 0.95rem;
        padding: 4px 10px;
        min-width: 80px;
        white-space: nowrap;
        display: inline-block;
    }
    .nav-right {
        flex-wrap: nowrap;
        align-items: center;
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
    padding: 0 20px;
}

.hero-text {
    margin-bottom: 3rem;
    animation: fadeInUp 0.8s ease;
}

.hero-text h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    margin-bottom: clamp(1rem, 3vw, 2rem);
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    word-wrap: break-word;
    hyphens: auto;
    line-height: 1.1;
    letter-spacing: -1px;
}

.title {
    font-size: clamp(1.2rem, 4vw, 2rem);
    color: var(--accent);
    margin-bottom: clamp(0.8rem, 2vw, 1.2rem);
    font-weight: 600;
}

.position {
    font-size: clamp(1rem, 3vw, 1.6rem);
    margin: clamp(10px, 2vw, 20px) 0;
    font-weight: 600;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
    padding: 5px 0;
}

.description {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: var(--text-secondary);
    max-width: clamp(300px, 80vw, 800px);
    margin: 0 auto;
    line-height: 1.6;
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
    animation: fadeInUp 1s ease 0.3s forwards;
    opacity: 0;
}

.cta-primary, .cta-secondary {
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    font-size: 1rem;
    letter-spacing: 0.2px;
}

.cta-primary {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    color: var(--primary);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.3);
}

.cta-secondary {
    border: 2px solid var(--accent);
    color: var(--accent);
}

.cta-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
}

.cta-secondary:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateY(-3px);
}

.footer {
    width: 100%;
    padding: clamp(20px, 3vh, 30px) 0;
    background-color: var(--nav-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
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
    color: var(--text-secondary);
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    white-space: nowrap;
}

.footer-links {
    display: flex;
    align-items: center;
    gap: clamp(15px, 2vw, 30px);
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    white-space: nowrap;
    position: relative;
}

.footer-links a:hover {
    color: var(--accent);
    transform: translateY(-2px);
}

.footer-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.footer-links a:hover::after {
    width: 100%;
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
    padding: clamp(60px, 8vw, 120px) 20px clamp(40px, 6vw, 80px);
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8));
    position: relative;
    overflow: hidden;
}

.why-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2940&auto=format&fit=crop') center/cover no-repeat;
    opacity: 0.05;
    z-index: -1;
}

.why-section .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: clamp(40px, 6vw, 80px);
    position: relative;
}

.section-header h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: clamp(15px, 3vw, 30px);
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
    border-radius: 5px;
}

.section-header p.subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-secondary);
    max-width: min(700px, 90%);
    margin: 0 auto;
    line-height: 1.8;
    font-weight: 300;
    padding: 0 15px;
}

.why-layout {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 0;
    position: relative;
}

.vertical-line {
    width: 1px;
    background: linear-gradient(to bottom, transparent, var(--accent), transparent);
    position: relative;
}

.vertical-line::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: var(--secondary);
    border: 2px solid var(--accent);
    border-radius: 50%;
    z-index: 2;
}

.vertical-line::after {
    content: '&';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--accent);
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 3;
}

.why-left, .why-right {
    padding: 30px;
}

.philosophy-container {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 4vw, 40px);
}

.philosophy-item {
    display: flex;
    align-items: flex-start;
    gap: clamp(15px, 3vw, 25px);
    padding: clamp(20px, 4vw, 25px);
    border-radius: 16px;
    background: rgba(30, 41, 59, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.philosophy-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
    opacity: 0.8;
}

.philosophy-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: rgba(56, 189, 248, 0.2);
}

.philosophy-icon {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--accent);
    background: rgba(56, 189, 248, 0.1);
    width: clamp(45px, 8vw, 60px);
    height: clamp(45px, 8vw, 60px);
    min-width: clamp(45px, 8vw, 60px);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.philosophy-item:hover .philosophy-icon {
    transform: scale(1.1) rotate(5deg);
}

.philosophy-content h3 {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 700;
    margin-bottom: clamp(8px, 2vw, 10px);
    color: var(--text);
    position: relative;
    padding-bottom: clamp(8px, 2vw, 10px);
}

.philosophy-content h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--accent);
    border-radius: 3px;
}

.philosophy-content p {
    font-size: clamp(0.9rem, 1.8vw, 1.05rem);
    line-height: 1.7;
    color: var(--text-secondary);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: clamp(20px, 4vw, 30px);
}

.feature-card {
    padding: clamp(20px, 4vw, 25px);
    border-radius: 16px;
    background: rgba(30, 41, 59, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.feature-icon {
    font-size: clamp(1.5rem, 3vw, 1.8rem);
    margin-bottom: clamp(12px, 2vw, 20px);
    color: var(--accent);
    background: rgba(56, 189, 248, 0.1);
    width: clamp(40px, 8vw, 50px);
    height: clamp(40px, 8vw, 50px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature-title {
    font-size: clamp(1.1rem, 2.2vw, 1.3rem);
    font-weight: 700;
    margin-bottom: clamp(10px, 2vw, 15px);
    color: var(--text);
}

.feature-content {
    font-size: clamp(0.9rem, 1.8vw, 1rem);
    line-height: 1.7;
    color: var(--text-secondary);
}

.cta-wrapper {
    margin-top: clamp(40px, 6vw, 60px);
    margin-bottom: clamp(30px, 4vw, 50px);
    text-align: center;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 30px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    border-radius: 30px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(56, 189, 248, 0.4);
}

.cta-button i {
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.cta-button:hover i {
    transform: translateX(5px);
}

.quote-box {
    max-width: 900px;
    margin: clamp(30px, 4vw, 50px) auto 0;
    text-align: center;
    position: relative;
    padding: clamp(30px, 4vw, 50px) clamp(20px, 3vw, 30px);
    background: rgba(15, 23, 42, 0.4);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.quote-box::before, .quote-box::after {
    content: '"';
    font-family: 'Georgia', serif;
    font-size: clamp(6rem, 10vw, 10rem);
    color: var(--accent);
    opacity: 0.2;
    position: absolute;
    line-height: 1;
    z-index: 0;
}

.quote-box::before {
    top: -20px;
    left: 20px;
}

.quote-box::after {
    bottom: -60px;
    right: 20px;
}

.quote-box blockquote {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    color: var(--text);
    font-style: italic;
    line-height: 1.6;
    font-weight: 300;
    position: relative;
    z-index: 1;
    margin-bottom: clamp(15px, 2vw, 20px);
}

.quote-author {
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    color: var(--accent);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.quote-author::before, .quote-author::after {
    content: '';
    width: clamp(20px, 3vw, 30px);
    height: 1px;
    background: var(--accent);
    opacity: 0.5;
}

@media (max-width: 992px) {
    .why-layout {
        grid-template-columns: 1fr;
    }
    
    .vertical-line {
        display: none;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .section-header h2 {
        font-size: 2.5rem;
    }
    
    .quote-box blockquote {
        font-size: 1.4rem;
    }
}

@media (max-width: 768px) {
    .philosophy-item {
        flex-direction: column;
    }
    
    .philosophy-icon {
        margin-bottom: 15px;
    }
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.why-card {
    opacity: 0;
    animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.why-card:nth-child(1) { animation-delay: 0.3s; }
.why-card:nth-child(2) { animation-delay: 0.5s; }
.why-card:nth-child(3) { animation-delay: 0.7s; }

.nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.language-switch {
    margin-right: 20px;
    position: relative;
    z-index: 1000;
}

.lang-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    color: var(--text);
    padding: 6px 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    font-size: 0.9rem;
    font-weight: 500;
}

.lang-btn:hover {
    background: rgba(56, 189, 248, 0.1);
    border-color: var(--accent);
    transform: translateY(-2px);
}

.lang-separator {
    margin: 0 5px;
    opacity: 0.5;
}

.lang-text {
    transition: all 0.3s ease;
}

.lang-text.active {
    opacity: 1;
    font-weight: 700;
    color: var(--accent);
}

.lang-text:not(.active) {
    opacity: 0.6;
}

/* 响应式设计更新 */
@media (max-width: 768px) {
    .nav-right {
        gap: 10px;
    }
    
    .language-switch {
        margin-right: 10px;
    }
    
    .cta-buttons {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 300px;
    }
    
    .cta-primary, .cta-secondary {
        width: 100%;
        text-align: center;
    }
    
    .section-header h2 {
        font-size: 2.2rem;
    }
    
    .quote-box blockquote {
        font-size: 1.2rem;
    }
}

/* 添加语言切换过渡效果 */
[data-en], [data-zh] {
    transition: opacity 0.3s ease;
}

/* 移动端响应式调整 */
@media (max-width: 768px) {
    .footer {
        padding: 15px 0;
    }
    
    .footer-content {
        padding: 0 15px;
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .footer-links {
        justify-content: center;
    }
}

/* 大屏幕优化 */
@media (min-width: 1400px) {
    .hero-text h1 {
        font-size: 5rem;
    }
    
    .title {
        font-size: 2.2rem;
    }
    
    .position {
        font-size: 1.8rem;
    }
    
    .description {
        font-size: 1.5rem;
    }
    
    .section-header h2 {
        font-size: 3.5rem;
    }
}

/* 社交媒体图标样式 */
.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.social-icon:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.social-icon i {
    font-size: 1.2rem;
    z-index: 2;
    transition: all 0.3s ease;
}

.social-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
}

.social-icon:hover::before {
    opacity: 1;
}

.social-icon:hover i {
    transform: scale(1.2);
}

.github::before {
    background: var(--github);
}

.twitter::before {
    background: var(--twitter);
}

.linkedin::before {
    background: var(--linkedin);
}

.instagram::before {
    background: var(--instagram);
}

.wechat::before {
    background: var(--wechat);
}

/* 加入QR码弹出效果 */
.wechat {
    position: relative;
}

.qr-code {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) scale(0);
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    pointer-events: none;
    z-index: 100;
}

.qr-code img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.qr-code::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}

.wechat:hover .qr-code {
    transform: translateX(-50%) scale(1);
    opacity: 1;
}

/* 社交媒体动态展示区域 */
.social-feed {
    padding: clamp(40px, 6vw, 60px) 20px;
    background: rgba(15, 23, 42, 0.5);
    position: relative;
}

.social-feed::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.feed-container {
    max-width: 1200px;
    margin: 0 auto;
}

.feed-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
}

.feed-header h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    letter-spacing: -1px;
}

.feed-header::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
    margin: 20px auto 0;
    border-radius: 2px;
}

.feed-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.feed-card {
    background: var(--card-bg);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feed-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(56, 189, 248, 0.3);
}

.feed-header-bar {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.feed-platform-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    margin-right: 10px;
}

.feed-platform-icon i {
    font-size: 0.9rem;
    color: var(--text);
}

.feed-date {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-left: auto;
}

.feed-content {
    padding: 20px;
}

.feed-text {
    color: var(--text);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
}

.feed-image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
}

.feed-image img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}

.feed-card:hover .feed-image img {
    transform: scale(1.05);
}

.feed-stats {
    display: flex;
    gap: 15px;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.feed-stat {
    display: flex;
    align-items: center;
    gap: 5px;
}

.feed-stat i {
    font-size: 0.9rem;
}

/* 社交分享按钮 */
.share-container {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 100;
}

.share-button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    opacity: 0;
    transform: translateX(-20px);
}

.share-button.active {
    opacity: 1;
    transform: translateX(0);
}

.share-button:hover {
    transform: scale(1.1) translateX(0);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.share-button i {
    font-size: 1.2rem;
    color: var(--text);
    transition: all 0.3s ease;
}

.share-button:hover i {
    color: var(--accent);
}

.share-tooltip {
    position: absolute;
    left: 110%;
    top: 50%;
    transform: translateY(-50%);
    background: var(--nav-bg);
    padding: 5px 12px;
    border-radius: 4px;
    color: var(--text);
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.share-tooltip::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent var(--nav-bg) transparent transparent;
}

.share-button:hover .share-tooltip {
    opacity: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .share-container {
        left: auto;
        right: 10px;
        top: auto;
        bottom: 20px;
        flex-direction: row;
    }
    
    .share-tooltip {
        left: 50%;
        top: auto;
        bottom: 130%;
        transform: translateX(-50%);
    }
    
    .share-tooltip::before {
        right: auto;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        border-color: var(--nav-bg) transparent transparent transparent;
    }
    
    .feed-grid {
        grid-template-columns: 1fr;
    }
}

/* 新增过渡内容样式 */
.journey-bridge p {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin: 0 auto;
    max-width: 600px;
    line-height: 1.7;
}
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Jiongtao Huang</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
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
                    <li><a href="introduction/" data-en="Introduction" data-zh="简介">Introduction</a></li>
                    <li><a href="education/" data-en="Education" data-zh="教育">Education</a></li>
                    <li><a href="entrepreneurship/" data-en="Entrepreneurship" data-zh="创业">Entrepreneurship</a></li>
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
                    <a href="introduction/" class="cta-secondary" data-en="Learn More" data-zh="了解更多">Learn More</a>
                </div>
                
                <!-- 添加社交媒体图标 -->
                <div class="social-icons">
                    <a href="https://github.com/Kantrum" target="_blank" class="social-icon github">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/Kantrum88" target="_blank" class="social-icon twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jiongtao-huang-150709203/" target="_blank" class="social-icon linkedin">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com/kantrums" target="_blank" class="social-icon instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <div class="social-icon wechat" id="wechat-icon">
                        <i class="fab fa-weixin"></i>
                        <div class="qr-code">
                            <img src="images/wechat-qrcode.png" alt="WeChat QR Code for www.kantrum.cn">
                        </div>
                    </div>
                </div>
            </section>

            <!-- 重新设计的"Why This Website?"部分 -->
            <section class="why-section" id="why">
                <div class="container">
                <div class="section-header">
                        <h2 data-en="Why This Digital Space?" data-zh="为何创建这个数字空间？">Why This Digital Space?</h2>
                        <p class="subtitle" data-en="A showcase of ideas, a canvas for creative expressions, and a bridge connecting diverse perspectives." 
                           data-zh="这是一个展示思想的平台，创意表达的画布，连接多元视角的桥梁。">
                           A showcase of ideas, a canvas for creative expressions, and a bridge connecting diverse perspectives.
                        </p>
                </div>
                
                    <div class="why-layout">
                        <div class="why-left">
                            <div class="philosophy-container">
                                <div class="philosophy-item" data-aos="fade-right" data-aos-delay="100">
                                    <div class="philosophy-icon">
                                        <i class="fas fa-lightbulb"></i>
                                    </div>
                                    <div class="philosophy-content">
                                        <h3 data-en="Innovation Nexus" data-zh="创新枢纽">Innovation Nexus</h3>
                                        <p data-en="This platform serves as a convergence point where academic rigor meets entrepreneurial spirit, fostering creative problem-solving and technological advancement." 
                                           data-zh="这个平台是学术严谨与创业精神的交汇点，促进创造性解决问题和技术进步。">
                                           This platform serves as a convergence point where academic rigor meets entrepreneurial spirit, fostering creative problem-solving and technological advancement.
                                        </p>
                                    </div>
                    </div>
                    
                                <div class="philosophy-item" data-aos="fade-right" data-aos-delay="200">
                                    <div class="philosophy-icon">
                                        <i class="fas fa-network-wired"></i>
                                    </div>
                                    <div class="philosophy-content">
                                        <h3 data-en="Knowledge Exchange" data-zh="知识交流">Knowledge Exchange</h3>
                                        <p data-en="Beyond a portfolio, this space facilitates the exchange of ideas and expertise, creating value through shared insights and collaborative exploration." 
                                           data-zh="超越作品集的范畴，这个空间促进思想和专业知识的交流，通过共享见解和协作探索创造价值。">
                                           Beyond a portfolio, this space facilitates the exchange of ideas and expertise, creating value through shared insights and collaborative exploration.
                                        </p>
                                    </div>
                    </div>
                    
                                <div class="philosophy-item" data-aos="fade-right" data-aos-delay="300">
                                    <div class="philosophy-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="philosophy-content">
                                        <h3 data-en="Progress Narrative" data-zh="进步叙事">Progress Narrative</h3>
                                        <p data-en="Documenting the journey of continuous improvement and transformation, this platform captures the evolution of projects, ideas, and professional growth." 
                                           data-zh="记录持续改进和转变的旅程，这个平台捕捉项目、想法和专业成长的演变过程。">
                                           Documenting the journey of continuous improvement and transformation, this platform captures the evolution of projects, ideas, and professional growth.
                                        </p>
                                    </div>
                                </div>
                    </div>
                </div>
                
                        <div class="vertical-line"></div>
                        
                        <div class="why-right">
                            <div class="features-grid">
                                <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                                    <div class="feature-icon">
                                        <i class="fas fa-microscope"></i>
                                    </div>
                                    <h4 class="feature-title" data-en="Research Insights" data-zh="研究洞见">Research Insights</h4>
                                    <p class="feature-content" data-en="Exploring cutting-edge developments in electrical and computer engineering, with a focus on practical applications and future technologies." 
                                       data-zh="探索电子与计算机工程的前沿发展，重点关注实际应用和未来技术。">
                                       Exploring cutting-edge developments in electrical and computer engineering, with a focus on practical applications and future technologies.
                                    </p>
                                </div>
                                
                                <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                                    <div class="feature-icon">
                                        <i class="fas fa-rocket"></i>
                                    </div>
                                    <h4 class="feature-title" data-en="Startup Journey" data-zh="创业历程">Startup Journey</h4>
                                    <p class="feature-content" data-en="Chronicles of building and scaling technological ventures, sharing lessons learned and strategies for navigating the entrepreneurial landscape." 
                                       data-zh="记录建立和扩展科技企业的历程，分享学到的经验教训和应对创业环境的策略。">
                                       Chronicles of building and scaling technological ventures, sharing lessons learned and strategies for navigating the entrepreneurial landscape.
                                    </p>
                                </div>
                                
                                <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                                    <div class="feature-icon">
                                        <i class="fas fa-project-diagram"></i>
                                    </div>
                                    <h4 class="feature-title" data-en="Project Portfolio" data-zh="项目作品集">Project Portfolio</h4>
                                    <p class="feature-content" data-en="Curated collection of technical projects, academic work, and professional achievements that demonstrate problem-solving capabilities and technical expertise." 
                                       data-zh="精心策划的技术项目、学术作品和专业成就集合，展示解决问题的能力和技术专长。">
                                       Curated collection of technical projects, academic work, and professional achievements that demonstrate problem-solving capabilities and technical expertise.
                                    </p>
                                </div>
                                
                                <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
                                    <div class="feature-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <h4 class="feature-title" data-en="Community Engagement" data-zh="社区参与">Community Engagement</h4>
                                    <p class="feature-content" data-en="A platform for meaningful connections with peers, mentors, and collaborators who share a passion for innovation and technological advancement." 
                                       data-zh="一个与志同道合的同行、导师和合作者建立有意义联系的平台，共同热爱创新和技术进步。">
                                       A platform for meaningful connections with peers, mentors, and collaborators who share a passion for innovation and technological advancement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cta-wrapper">
                        <a href="introduction/" class="cta-button" data-en="Explore My Journey" data-zh="探索我的旅程">
                            <span data-en="Explore My Journey" data-zh="探索我的旅程">Explore My Journey</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <!-- 新增过渡内容 -->
                    <div class="journey-bridge" style="margin: 24px 0; text-align: center;">
                      <p data-en="Every journey is unique. Here's a glimpse into mine—full of curiosity, challenges, and growth." 
                         data-zh="每一段旅程都独一无二。这里是我的缩影——充满好奇、挑战与成长。">
                        Every journey is unique. Here's a glimpse into mine—full of curiosity, challenges, and growth.
                      </p>
                    </div>
                    <!-- quote-box已移除 -->
                </div>
            </section>
            
            <!-- 添加社交媒体动态区域 -->
            <section class="social-feed" id="social-feed">
                <div class="feed-container">
                    <div class="feed-header">
                        <h2 data-en="Social Updates" data-zh="社交动态">Social Updates</h2>
                    </div>
                    
                    <div class="feed-grid" id="social-feed-grid">
                        <!-- 动态内容将通过JavaScript加载 -->
                        <div class="feed-loading" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 15px;"></i>
                            <p data-en="Loading social updates..." data-zh="正在加载社交动态...">Loading social updates...</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- 社交分享按钮 -->
        <div class="share-container">
            <div class="share-button" data-platform="twitter">
                <i class="fab fa-twitter"></i>
                <span class="share-tooltip" data-en="Share on Twitter" data-zh="分享到推特">Share on Twitter</span>
            </div>
            <div class="share-button" data-platform="facebook">
                <i class="fab fa-facebook-f"></i>
                <span class="share-tooltip" data-en="Share on Facebook" data-zh="分享到脸书">Share on Facebook</span>
            </div>
            <div class="share-button" data-platform="linkedin">
                <i class="fab fa-linkedin-in"></i>
                <span class="share-tooltip" data-en="Share on LinkedIn" data-zh="分享到领英">Share on LinkedIn</span>
            </div>
            <div class="share-button" data-platform="wechat">
                <i class="fab fa-weixin"></i>
                <span class="share-tooltip" data-en="Scan QR code for www.kantrum.cn" data-zh="扫码访问 www.kantrum.cn">Scan QR code for www.kantrum.cn</span>
            </div>
        </div>

        <!-- 页脚 -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-info">
                    <p data-en="&copy; 2025 Jiongtao Huang. All rights reserved." 
                       data-zh="&copy; 2025 黄炯涛。保留所有权利。">&copy; 2025 Jiongtao Huang. All rights reserved.</p>
                </div>
                <div class="footer-links">
                    <a href="https://www.linkedin.com/in/jiongtao-huang-150709203/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/Kantrum" target="_blank">GitHub</a>
                    <a href="https://twitter.com/Kantrum88" target="_blank">Twitter</a>
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
    antialias: true,
    alpha: true
});

// 设置渲染器
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// 创建粒子
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 6000;
const posArray = new Float32Array(particlesCount * 3);

// 随机成粒子位置
for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// 创建粒子材质
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: '#38bdf8',
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
});

// 创建粒子系统
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// 动画函数
function animate() {
    requestAnimationFrame(animate);
    
    // 粒子旋转
    particlesMesh.rotation.x += 0.0002;
    particlesMesh.rotation.y += 0.0001;
    
    // 让粒子随鼠标移动
    if (mouseX > 0 || mouseY > 0) {
        particlesMesh.rotation.x = mouseY * 0.0001;
        particlesMesh.rotation.y = mouseX * 0.0001;
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
}, {
    threshold: 0.1
});

document.querySelectorAll('.why-card').forEach((card) => {
    observer.observe(card);
}); 

// 页面加载时的动画效果
document.addEventListener('DOMContentLoaded', () => {
    // GSAP动画初始化
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from(".section-header", {
        scrollTrigger: {
            trigger: ".why-section",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from(".quote-box", {
        scrollTrigger: {
            trigger: ".quote-box",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "15px 40px";
        navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.padding = "20px 40px";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
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
    // 添加过渡动画效果
    document.querySelectorAll('[data-en], [data-zh]').forEach(element => {
        element.style.opacity = 0;
    });
    
    setTimeout(() => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage();
        
        // 恢复元素可见性
        document.querySelectorAll('[data-en], [data-zh]').forEach(element => {
            element.style.opacity = 1;
        });
    
    // 恢复所有分享tooltip为CSS控制
    document.querySelectorAll('.share-tooltip').forEach(tip => {
        tip.style.opacity = '';
    });
    
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', currentLang);
    }, 300);
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
    
    // 更新页面标题
    document.title = currentLang === 'en' ? 'Home | Jiongtao Huang' : '首页 | 黄炯涛';
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', () => {
    // 从本地存储获取语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    // 为微信图标添加点击事件处理
    const wechatIcon = document.getElementById('wechat-icon');
    wechatIcon.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认事件
        e.stopPropagation(); // 阻止事件冒泡
        
        // 创建模态弹窗
        const qrModal = document.createElement('div');
        qrModal.style.position = 'fixed';
        qrModal.style.top = '0';
        qrModal.style.left = '0';
        qrModal.style.width = '100%';
        qrModal.style.height = '100%';
        qrModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        qrModal.style.display = 'flex';
        qrModal.style.justifyContent = 'center';
        qrModal.style.alignItems = 'center';
        qrModal.style.zIndex = '9999';
        qrModal.style.cursor = 'pointer';
        
        const qrContainer = document.createElement('div');
        qrContainer.style.backgroundColor = '#fff';
        qrContainer.style.padding = '20px';
        qrContainer.style.borderRadius = '12px';
        qrContainer.style.textAlign = 'center';
        qrContainer.style.animation = 'fadeIn 0.3s ease, scaleIn 0.3s ease';
        
        // 添加动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from { transform: scale(0.8); }
                to { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        const qrImage = document.createElement('img');
        qrImage.src = 'images/wechat-qrcode.png';
        qrImage.style.width = '200px';
        qrImage.style.height = '200px';
        qrImage.style.objectFit = 'contain';
        
        const qrText = document.createElement('p');
        qrText.textContent = currentLang === 'en' ? 'Scan to visit www.kantrum.cn' : '扫描二维码访问 www.kantrum.cn';
        qrText.style.marginTop = '15px';
        qrText.style.color = '#333';
        qrText.style.fontWeight = '500';
        
        qrContainer.appendChild(qrImage);
        qrContainer.appendChild(qrText);
        qrModal.appendChild(qrContainer);
        
        document.body.appendChild(qrModal);
        
        qrModal.addEventListener('click', () => {
            document.body.removeChild(qrModal);
        });
    });
    
    // 为所有卡片添加鼠标悬停发光效果
    const cards = document.querySelectorAll('.why-card, .feed-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), rgba(30, 41, 59, 0.5) 40%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(30, 41, 59, 0.5)';
        });
    });
    
    // 初始化社交分享按钮的动画显示
    gsap.registerPlugin(ScrollTrigger);
    
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach((button, index) => {
        gsap.to(button, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.1 * index + 0.5,
            ease: "power2.out"
        });
        
        // 添加分享功能
        button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            let shareUrl = '';
            
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'wechat':
                    // 为微信显示二维码
                    const qrModal = document.createElement('div');
                    qrModal.style.position = 'fixed';
                    qrModal.style.top = '0';
                    qrModal.style.left = '0';
                    qrModal.style.width = '100%';
                    qrModal.style.height = '100%';
                    qrModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    qrModal.style.display = 'flex';
                    qrModal.style.justifyContent = 'center';
                    qrModal.style.alignItems = 'center';
                    qrModal.style.zIndex = '9999';
                    qrModal.style.cursor = 'pointer';
                    
                    const qrContainer = document.createElement('div');
                    qrContainer.style.backgroundColor = '#fff';
                    qrContainer.style.padding = '20px';
                    qrContainer.style.borderRadius = '12px';
                    qrContainer.style.textAlign = 'center';
                    qrContainer.style.animation = 'fadeIn 0.3s ease, scaleIn 0.3s ease';
                    
                    // 添加动画样式
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes scaleIn {
                            from { transform: scale(0.8); }
                            to { transform: scale(1); }
                        }
                    `;
                    document.head.appendChild(style);
                    
                    const qrImage = document.createElement('img');
                    qrImage.src = 'images/wechat-qrcode.png';
                    qrImage.style.width = '200px';
                    qrImage.style.height = '200px';
                    qrImage.style.objectFit = 'contain';
                    
                    const qrText = document.createElement('p');
                    qrText.textContent = currentLang === 'en' ? 'Scan to visit www.kantrum.cn' : '扫描二维码访问 www.kantrum.cn';
                    qrText.style.marginTop = '15px';
                    qrText.style.color = '#333';
                    qrText.style.fontWeight = '500';
                    
                    qrContainer.appendChild(qrImage);
                    qrContainer.appendChild(qrText);
                    qrModal.appendChild(qrContainer);
                    
                    document.body.appendChild(qrModal);
                    
                    qrModal.addEventListener('click', () => {
                        document.body.removeChild(qrModal);
                    });
                    return;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
    
    // 为社交媒体动态添加滚动触发动画
    const feedCards = document.querySelectorAll('.feed-card');
    feedCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });
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
        
        // 添加菜单项动画效果
        if (navLinks.classList.contains('active')) {
            const links = document.querySelectorAll('.nav-links li');
            links.forEach((link, index) => {
                link.style.opacity = 0;
                link.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.3s ease';
                    link.style.opacity = 1;
                    link.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        }
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
    
    // 为页面添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 为CTA按钮添加悬停效果
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        });
    });
    
    // 添加页面载入动画
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        body.style.opacity = 1;
    }, 100);
});
</script>

<script>
// 社交媒体动态加载功能
document.addEventListener('DOMContentLoaded', () => {
    const feedGrid = document.getElementById('social-feed-grid');
    if (!feedGrid) return;
    
    // 配置社交媒体账号
    const socialConfig = {
        twitter: {
            username: 'Kantrum88',
            rssUrl: 'https://nitter.net/Kantrum88/rss' // 使用Nitter作为Twitter RSS代理
        },
        weibo: {
            username: 'Kantrum',
            profileUrl: 'https://m.weibo.cn/u/5217974261',
            uid: '5217974261'
        },
        instagram: {
            username: 'kantrums',
            profileUrl: 'https://instagram.com/kantrums'
        }
    };
    
    // 格式化时间
    function formatTime(dateString) {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0) return `${days} ${lang === 'en' ? 'day' : '天'}${days > 1 ? (lang === 'en' ? 's' : '') : ''} ago`;
        if (hours > 0) return `${hours} ${lang === 'en' ? 'hour' : '小时'}${hours > 1 ? (lang === 'en' ? 's' : '') : ''} ago`;
        if (minutes > 0) return `${minutes} ${lang === 'en' ? 'minute' : '分钟'}${minutes > 1 ? (lang === 'en' ? 's' : '') : ''} ago`;
        return lang === 'en' ? 'Just now' : '刚刚';
    }
    
    // 创建Feed卡片
    function createFeedCard(platform, data) {
        const card = document.createElement('div');
        card.className = 'feed-card';
        
        let headerContent = '';
        let contentHTML = '';
        let statsHTML = '';
        
        switch(platform) {
            case 'twitter':
                headerContent = `
                    <div class="feed-platform-icon">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <span class="feed-username">@${socialConfig.twitter.username}</span>
                    <span class="feed-date">${formatTime(data.date)}</span>
                `;
                contentHTML = `<p class="feed-text">${data.text}</p>`;
                statsHTML = `
                    <div class="feed-stat">
                        <i class="far fa-heart"></i>
                        <span>${data.likes || 0}</span>
                    </div>
                    <div class="feed-stat">
                        <i class="far fa-comment"></i>
                        <span>${data.comments || 0}</span>
                    </div>
                    <div class="feed-stat">
                        <i class="fas fa-retweet"></i>
                        <span>${data.retweets || 0}</span>
                    </div>
                `;
                break;
                
            case 'weibo':
                headerContent = `
                    <div class="feed-platform-icon">
                        <i class="fab fa-weibo" style="color: #e6162d;"></i>
                    </div>
                    <span class="feed-username">@${socialConfig.weibo.username}</span>
                    <span class="feed-date">${formatTime(data.date)}</span>
                `;
                contentHTML = `<p class="feed-text">${data.text}</p>`;
                statsHTML = `
                    <div class="feed-stat">
                        <i class="far fa-heart"></i>
                        <span>${data.likes || 0}</span>
                    </div>
                    <div class="feed-stat">
                        <i class="far fa-comment"></i>
                        <span>${data.comments || 0}</span>
                    </div>
                    <div class="feed-stat">
                        <i class="fas fa-retweet"></i>
                        <span>${data.reposts || 0}</span>
                    </div>
                `;
                break;
                
            case 'instagram':
                headerContent = `
                    <div class="feed-platform-icon">
                        <i class="fab fa-instagram" style="color: #E4405F;"></i>
                    </div>
                    <span class="feed-username">@${socialConfig.instagram.username}</span>
                    <span class="feed-date">${formatTime(data.date)}</span>
                `;
                contentHTML = `
                    <p class="feed-text">${data.text}</p>
                    ${data.image ? `<div class="feed-image"><img src="${data.image}" alt="Instagram Post"></div>` : ''}
                `;
                statsHTML = `
                    <div class="feed-stat">
                        <i class="far fa-heart"></i>
                        <span>${data.likes || 0}</span>
                    </div>
                    <div class="feed-stat">
                        <i class="far fa-comment"></i>
                        <span>${data.comments || 0}</span>
                    </div>
                `;
                break;
        }
        
        card.innerHTML = `
            <div class="feed-header-bar">
                ${headerContent}
            </div>
            <div class="feed-content">
                ${contentHTML}
                <div class="feed-stats">
                    ${statsHTML}
                </div>
            </div>
        `;
        
        return card;
    }
    
    // 获取Twitter动态（通过RSS）
    async function fetchTwitterFeed() {
        try {
            // 使用CORS代理来获取RSS
            const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(socialConfig.twitter.rssUrl)}`;
            const response = await fetch(proxyUrl);
            
            if (!response.ok) throw new Error('Twitter RSS error');
            
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                return data.items.slice(0, 2).map(item => ({
                    text: item.title || item.description,
                    date: item.pubDate,
                    link: item.link,
                    likes: 0,
                    comments: 0,
                    retweets: 0
                }));
            }
            return [];
        } catch (error) {
            console.error('Error fetching Twitter feed:', error);
            // 如果RSS失败，返回一个链接卡片
            const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
            return [{
                text: lang === 'en' 
                    ? 'Follow me on Twitter for the latest updates!'
                    : '在Twitter上关注我获取最新动态！',
                date: new Date().toISOString(),
                link: `https://twitter.com/${socialConfig.twitter.username}`,
                isLink: true
            }];
        }
    }
    
    // 获取微博动态（由于API限制，显示引导卡片）
    function getWeiboFeed() {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
        return [{
            text: lang === 'en'
                ? 'Follow me on Weibo for the latest updates, thoughts, and daily life sharing!'
                : '在微博上关注我，获取最新动态、想法和日常生活分享！',
            date: new Date().toISOString(),
            link: socialConfig.weibo.profileUrl,
            likes: 0,
            comments: 0,
            reposts: 0,
            isLink: true
        }];
    }
    
    // 获取Instagram动态（由于API限制，显示链接卡片）
    function getInstagramFeed() {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
        return [{
            text: lang === 'en'
                ? 'Follow me on Instagram to see my latest photos, stories, and moments from daily life!'
                : '在Instagram上关注我，查看我的最新照片、故事和日常生活瞬间！',
            date: new Date().toISOString(),
            link: socialConfig.instagram.profileUrl,
            image: null,
            likes: 0,
            comments: 0,
            isLink: true
        }];
    }
    
    // 加载所有社交媒体动态
    async function loadSocialFeeds() {
        const loadingElement = feedGrid.querySelector('.feed-loading');
        if (loadingElement) {
            loadingElement.remove();
        }
        
        feedGrid.innerHTML = '';
        
        try {
            // 并行获取所有数据
            const [twitterPosts, weiboPosts, instagramPosts] = await Promise.all([
                fetchTwitterFeed(),
                Promise.resolve(getWeiboFeed()),
                Promise.resolve(getInstagramFeed())
            ]);
            
            // 创建Twitter卡片
            twitterPosts.forEach(post => {
                const card = createFeedCard('twitter', post);
                if (post.link) {
                    card.querySelector('.feed-content').addEventListener('click', () => {
                        window.open(post.link, '_blank');
                    });
                    card.style.cursor = 'pointer';
                }
                feedGrid.appendChild(card);
            });
            
            // 创建微博卡片
            weiboPosts.forEach(post => {
                const card = createFeedCard('weibo', post);
                if (post.link) {
                    card.querySelector('.feed-content').addEventListener('click', () => {
                        window.open(post.link, '_blank');
                    });
                    card.style.cursor = 'pointer';
                }
                feedGrid.appendChild(card);
            });
            
            // 创建Instagram卡片
            instagramPosts.forEach(post => {
                const card = createFeedCard('instagram', post);
                if (post.link) {
                    card.querySelector('.feed-content').addEventListener('click', () => {
                        window.open(post.link, '_blank');
                    });
                    card.style.cursor = 'pointer';
                }
                feedGrid.appendChild(card);
            });
            
            // 如果没有获取到任何内容，显示提示
            if (feedGrid.children.length === 0) {
                feedGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                        <p data-en="Unable to load social updates. Please visit my profiles directly:" data-zh="无法加载社交动态。请直接访问我的个人资料：">Unable to load social updates. Please visit my profiles directly:</p>
                        <div style="margin-top: 20px; display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                            <a href="https://twitter.com/${socialConfig.twitter.username}" target="_blank" style="color: var(--accent);">Twitter</a>
                            <a href="${socialConfig.weibo.profileUrl}" target="_blank" style="color: var(--accent);">微博</a>
                            <a href="${socialConfig.instagram.profileUrl}" target="_blank" style="color: var(--accent);">Instagram</a>
                        </div>
                    </div>
                `;
            }
            
            // 添加滚动动画
            const feedCards = feedGrid.querySelectorAll('.feed-card');
            feedCards.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "power3.out"
                });
            });
            
        } catch (error) {
            console.error('Error loading social feeds:', error);
            feedGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <p data-en="Error loading social updates. Please try again later." data-zh="加载社交动态时出错。请稍后再试。">Error loading social updates. Please try again later.</p>
                </div>
            `;
        }
    }
    
    // 页面加载后获取动态
    loadSocialFeeds();
    
    // 每5分钟刷新一次
    setInterval(loadSocialFeeds, 5 * 60 * 1000);
});
</script>

<script>
// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    
    // 初始化AOS动画库
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    // ... existing code ...
});
</script>
</html>
