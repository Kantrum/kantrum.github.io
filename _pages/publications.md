---
layout: archive
title: "About Myself"
permalink: /publications/
author_profile: true
---

{% include base_path %}
## 🌟 Personal Information
---
- **Name (Chinese):** `黄炯涛`
- **Name (Pinyin):** `Huang Jiongtao`
- **Name (English):** `Simon`
- **Gender:** `Male`
- **Date of Birth:** `10/2001`
- **Nationality:** `Chinese`
- **Contact Address:** `No.999 Xian Rd, Pidu District, Chengdu, 611000, Sichuan, China`
- **Postal Code:** `611000`
- **Email:** `kantrum@163.com`
- **Mobile Number:** `+86-155-8888-8888`

## 📘 Academic Background
---
- **Current Institution:** `University of Leeds | Southwest Jiaotong University`
- **Major/Area of Study:** `Electronic and Electrical Engineering`
- **Expected Graduation Date:** `07/2024`

## 🏆 Personal Honors
---
### 2023
- **December:** Attained the bronze medal at the national level in the China International Student Innovation Competition.
- **August:** Awarded the provincial gold medal in the Ninth China International "Internet +" Student Innovation and Entrepreneurship Competition.

### 2022
- **June:** Received the Best Research Paper Award at the National Engineering Conference.
- **April:** Honored with the Outstanding Young Innovator Award by the National Technology Forum.

### 2021
- **November:** Won the first prize in the National Student Science and Technology Competition.
- **March:** Recognized as the Student of the Year by [University/Institution Name].

### 2020
- **September:** Earned the top prize in the Regional Engineering Design Challenge.
- **February:** Selected for the Prestigious [Scholarship/Award Name].

---

## 📸 Photograph
---
*Attach a recent personal photograph here.*
<p float="left">
  <img src="huangjiongtao.github.io/images/500x300.png" width="30%" />
  <img src="huangjiongtao.github.io/images/500x300.png" width="30%" />
  <img src="huangjiongtao.github.io/images/500x300.png" width="30%" />
</p>

![Attach a recent personal photograph here](huangjiongtao.github.io/images/500x300.png)

![Attach a recent personal photograph here](huangjiongtao.github.io/images/500x300.png)

![Attach a recent personal photograph here](huangjiongtao.github.io/images/500x300.png)






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
