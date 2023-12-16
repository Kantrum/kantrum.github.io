---
layout: archive
title: "About Myself"
permalink: /publications/
author_profile: true
---

{% include base_path %}
### Personal Information
- **Name (Chinese):** `黄炯涛`
- **Name (Pinyin/Passport):** `Huang Jiongtao`
- **Name (English):** `Simon`
- **Former Name (if applicable):** `[曾用名（中文）]` / `[曾用名（拼音）]`
- **Gender:** `[性别]`
- **Date of Birth:** `[出生日期]`
- **Place of Birth:** `[出生城市]`, `[出生省份]`
- **Nationality:** `[国籍]`
- **Other Nationalities (if any):** `[其他国籍]`
- **Marital Status:** `[婚姻状态]`
- **ID Number:** `[身份证号]`
- **ID Validity Period:** `[身份证有效期]`
- **Only Child:** `[是否是独生子女]`
- **Home Address:** `[家庭地址]`
- **Postal Code:** `[邮编]`
- **Mailing Address (if different):** `[邮寄地址]`
- **Email:** `[常用Email]`
- **Mobile Number:** `[手机号]`

### Passport and Visa Information (If Applicable)
- **Passport Number:** `[护照号码]`
- **Passport Issue Place:** `[签发城市]`, `[签发省份]`
- **Passport Issue Date:** `[签发日期]`
- **Passport Expiry Date:** `[有效期至]`
- **Current Visa Type:** `[签证类型]`
- **Visa Number:** `[签证号]`
- **Visa Validity Period:** `[签证有效期]`

### Academic Background
- **Current Institution:** `[在读学校]`
- **Major/Area of Study:** `[主修/研究领域]`
- **Expected Graduation Date:** `[预计毕业日期]`

### Photograph
- Attach a recent personal photograph here.







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
