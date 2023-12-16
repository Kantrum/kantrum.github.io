---
layout: archive
title: "About Myself"
permalink: /publications/
author_profile: true
---

{% include base_path %}
## Personal Information
- **Name (Chinese):** `黄炯涛`
- **Name (Pinyin):** `Huang Jiongtao`
- **Name (English):** `Simon`
- **Gender:** `Male`
- **Date of Birth:** `10/2001`
- **Nationality:** `Chinese`
- **Contact Address:** `No.999 Xian Rd, Pidu District, Chengdu, 611000, Sichuan, China`
- **Postal Code:** `611000`
- **Email:** `[kantrum@163.com](mailto:kantrum@163.com)`
- **Mobile Number:** `+86-155-8888-8888`

## Academic Background
- **Current Institution:** `University of Leeds | Southwest Jiaotong University`
- **Major/Area of Study:** `Electronic and Electrical Engineering`
- **Expected Graduation Date:** `07/2024`

## Photograph
- Attach a recent personal photograph here.
![Attach a recent personal photograph here](link-to-your-photograph.jpg)



## 📌 Personal Information
- **Name (Chinese):** 黄炯涛
- **Name (Pinyin/Passport):** Huang Jiongtao
- **Name (English):** Simon
- **Gender:** Male
- **Date of Birth:** 10/2001
- **Nationality:** Chinese
- **Contact Address:** No.999 Xian Rd, Pidu District, Chengdu, 611000, Sichuan, China
- **Postal Code:** 611000
- **Email:** [kantrum@163.com](mailto:kantrum@163.com)
- **Mobile Number:** +86-155-8888-8888

## 📘 Academic Background
- **Current Institution:** University of Leeds & Southwest Jiaotong University
- **Major/Area of Study:** Electronic and Electrical Engineering
- **Expected Graduation Date:** 07/2024

## 📸 Photograph
*Attach a recent personal photograph here.*




Meet Jiongtao Huang (Simon, 黄炯涛), an ambitious and multifaceted individual.

I’m currently pursuing my degree in Electronic and Electrical Engineering at the University of Leeds and Southwest Jiaotong University (SWJTU-Leeds Joint School). My academic journey is complemented by my entrepreneurial spirit, as I am the founder of Sichuan Jie Min Technology Co., Ltd. and Hunan Chuangben Technology Co., Ltd..

In addition to my academic and entrepreneurial endeavors, I actively contribute to student life as a member of the Student Campus Self-Management Committee at SWJTU. I also hold the distinction of being the men’s 100m record holder in the general student group at Southwest Jiaotong University, a testament to my dedication and versatility.

If you are interested in any aspect of me, I would love to chat and collaborate, please email me at - kantrum@163.com


Academic
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Entrepreneurship
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Entrepreneurship
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams









{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
