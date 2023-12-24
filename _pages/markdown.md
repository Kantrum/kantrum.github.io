---
permalink: /markdown/
title: "Markdown"
author_profile: true
redirect_from: 
  - /md/
  - /markdown.html
---

## Locations of key files/directories

* Basic config options: _config.yml
* Top navigation bar config: _data/navigation.yml
* Single pages: _pages/
* Collections of pages are .md or .html files in:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* Footer: _includes/footer.html
* Static files (like PDFs): /files/
* Profile image (can set in _config.yml): images/profile.png

## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version Github built with Jekyll. 
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built

## Resources
 * [Liquid syntax guide](https://shopify.github.io/liquid/tags/control-flow/)

## Markdown guide

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Quotes are cool.

## Tables

### Table 1

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

### Table 2

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

Make any link standout more when applying the `.btn` class.

## Notices

**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://github.com "Github").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.





  
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








{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}



  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>







{% include base_path %}


{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}










## 🌟 Personal Information
---
- **Name (Chinese):** `黄炯涛`
- **Name (Pinyin):** `Huang Jiongtao`
- **Name (English):** `Simon`
- **Nickname:** `Kantrum`
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

## 🔥 Leadership and Social Activities
---
- President of the University **Student Campus Self-Management Committee**, May 2023 – Present
- Most Contributive Volunteer Award in the **31st Chengdu World University Games**, May 2022
- Class Leader of the **New Youth Global Competency Development Programme**, Mar 2022 – Dec 2022
- Ministry of the University **Student Campus Self-Management Committee**, May 2021 – Apr 2023

## 🏆 Personal Honors
---
### 2023
- **March:** Served as the Class Officer for the New Youth Class of 2022 in the "New Youth Global Competency Development Programme" with outstanding performance.
- **February:** Received the "A Grade Certificate of Comprehensive Quality" from Sichuan University Students Union.

### 2022
- **December:** Awarded the honorary title of "Three Good Students" by Southwest Jiaotong University.
- **March:** Recognized as an Outstanding Communist Youth League Member by Southwest Jiaotong University.

### 2021
- **December** Earned the honorary title of "Three Good Students" by Southwest Jiaotong University.
- **December:** Distinguished as an Outstanding Youth League Member by Southwest Jiaotong University.
- **October:** Participated in entrepreneurship training and won the title of "excellent student".
- **August:** Engaged in community epidemic prevention volunteer activities and won the title of "Excellent Volunteer".
- **February:** Completed an internship in translation and won the title of "Excellent Intern".


<div style="display: flex; justify-content: space-between;">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1492.png" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto; margin-right: 10px;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1493.png" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto; margin-left: 5px; margin-right: 5px;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1494.JPG" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto; margin-left: 10px;" />
</div>



<div style="display: flex; justify-content: space-between;">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1492.png" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1493.png" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1494.JPG" style="flex: 1; max-width: 996px; max-height: 769px; width: 30%; height: auto;" />
</div>



<div style="display: flex; justify-content: space-between;">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1492.png" style="width: 30%; height: auto; max-width: 996px; max-height: 769px;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1493.png" style="width: 30%; height: auto; max-width: 996px; max-height: 769px;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1494.JPG" style="width: 30%; height: auto; max-width: 996px; max-height: 769px;" />
</div>


<p float="left">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1492.png" width="30%" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1493.png" width="30%" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1494.JPG" width="30%" />
</p>


<p style="float: left;">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1492.png" style="width: auto; height: 769px; max-width: 30%;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1493.png" style="width: auto; height: 769px; max-width: 30%;" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/IMG_1494.JPG" style="width: auto; height: 769px; max-width: 30%;" />
</p>






## 🗓️ **My Upcoming Schedule**
---

### 🌟 **Week 14** [Dec 4 - Dec 10]
> - **Dec 7:**
>   - 📌 ~~**Learning:** _XJEL3030 Assignment 3 DDL_~~
> - **Dec 8:**
>   - ⏰ ~~**Learning:** _XJEL3875 Interim Report DDL_~~
> - **Dec 9:**
>   - 📚 ~~**Learning:** `Report Submission`~~

---

### ✨ **Week 15** [Dec 11 - Dec 17]
> - **Dec 15:**
>   - 💼 ~~**Learning:** _XJEL3362 Mid Test_~~
> - **Dec 16:**
>   - ❤️ ~~**Learning:** _XJEL3875 Journal 8_~~

---

### 🌟 **Week 16** [Dec 18 - Dec 24]
> - **Dec 20:**
>   - 🎳 **Learning:** _XJEL3030 Assignment 4 DDL_
> - **Dec 18:**
>   - 🗣️ **Learning:** _XJEL3875 Journal 9_

---

### ✨ **Week 17** [Dec 25 - Dec 31]
> - **Dec 25:**
>   - 🎄 **Holiday:** Christmas Day
> - **Dec 28:**
>   - 📅 **Planning Session:** for Q1
> - **Dec 30:**
>   - 📝 **Learning:** _XJEL3875 Journal 10_

---

### 🎯 **Key Dates**
- **Dec 31:** 🥳 _New Year's Eve Celebration_
- **Jan 1:** 🎉 _New Year: Office Closed_

---










<p float="left">
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/profile.png" width="30%" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/profile.png" width="30%" />
  <img src="https://kantrum.github.io/huangjiongtao.github.io/images/profile.png" width="30%" />
</p>

![Attach a recent personal photograph here](https://kantrum.github.io/huangjiongtao.github.io/images/profile.png)

![Attach a recent personal photograph here](https://kantrum.github.io/huangjiongtao.github.io/images/profile.png)

![Attach a recent personal photograph here](https://kantrum.github.io/huangjiongtao.github.io/images/profile.png)















<style>
    .responsive-iframe-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
        max-width: 800px; /* Maximum width of the iframe */
        margin: auto; /* Center the iframe */
    }

    .responsive-iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>

<div class="responsive-iframe-container">
    <iframe src="https://calendar.google.com/calendar/embed?src=huangjiongtao%40gmail.com" frameborder="0" scrolling="no"></iframe>
</div>















<h2>RESEARCH PROJECTS</h2>
  <strong>
    <a href="https://kantrum.github.io/huangjiongtao.github.io/publication/2023-01-10-patent-1">
      Recognition and reconstruction of the elements in scanned page
    </a>
  </strong><strong>, Jan 2023 – Mar 2023</strong><br>
<em>Team Leader; Advisor: Prof. José Miguel Hernández-Lobato, University of Cambridge</em>
<ul>
  <li>Utilized the PaddleOCR library, employing the DBnet model for text detection with a precision of <strong>96%</strong> and a recall of <strong>94%</strong>.</li>
  <li>Applied the Mask R-CNN model and LayoutParser toolkit for layout analysis, successfully identifying and classifying page elements with <strong>95%</strong> accuracy across <strong>1,500</strong> multi-format documents.</li>
  <li>This approach was tested on a dataset of <strong>10,000</strong> images containing distorted and low-resolution text, where it maintained an accuracy rate of <strong>97%</strong>.</li>
</ul>

<p><strong>Recognition and reconstruction of the elements in scanned page, Jan 2023 – Mar 2023</strong><br>
<em>Team Leader; Advisor: Prof. José Miguel Hernández-Lobato, University of Cambridge</em>
<ul>
  <li>Utilized the PaddleOCR library, employing the DBnet model for text detection with a precision of <strong>96%</strong> and a recall of <strong>94%</strong>.</li>
  <li>Applied the Mask R-CNN model and LayoutParser toolkit for layout analysis, successfully identifying and classifying page elements with <strong>95%</strong> accuracy across <strong>1,500</strong> multi-format documents.</li>
  <li>This approach was tested on a dataset of <strong>10,000</strong> images containing distorted and low-resolution text, where it maintained an accuracy rate of <strong>97%</strong>.</li>
</ul>

<p><strong>Recognition and reconstruction of the elements in scanned page, Jan 2023 – Mar 2023</strong><br>
<em>Team Leader; Advisor: Prof. José Miguel Hernández-Lobato, University of Cambridge</em>
<ul>
  <li>Utilized the PaddleOCR library, employing the DBnet model for text detection with a precision of <strong>96%</strong> and a recall of <strong>94%</strong>.</li>
  <li>Applied the Mask R-CNN model and LayoutParser toolkit for layout analysis, successfully identifying and classifying page elements with <strong>95%</strong> accuracy across <strong>1,500</strong> multi-format documents.</li>
  <li>This approach was tested on a dataset of <strong>10,000</strong> images containing distorted and low-resolution text, where it maintained an accuracy rate of <strong>97%</strong>.</li>
</ul>

<p><strong>Recognition and reconstruction of the elements in scanned page, Jan 2023 – Mar 2023</strong><br>
<em>Team Leader; Advisor: Prof. José Miguel Hernández-Lobato, University of Cambridge</em>
<ul>
  <li>Utilized the PaddleOCR library, employing the DBnet model for text detection with a precision of <strong>96%</strong> and a recall of <strong>94%</strong>.</li>
  <li>Applied the Mask R-CNN model and LayoutParser toolkit for layout analysis, successfully identifying and classifying page elements with <strong>95%</strong> accuracy across <strong>1,500</strong> multi-format documents.</li>
  <li>This approach was tested on a dataset of <strong>10,000</strong> images containing distorted and low-resolution text, where it maintained an accuracy rate of <strong>97%</strong>.</li>
</ul>

<!-- Repeat the above structure for each research project -->


