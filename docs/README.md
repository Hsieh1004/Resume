---
pageClass: home-page
# some data for the components

name: Hsieh
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/mtobeiyf
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com

email: harry (at) hogwarts (dot) edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## 關於我 🧏🏻‍♀️

1999 年生，即將大學畢業的社會新鮮人，樂於接受不同的挑戰，享受生活樂趣帶來靈感，喜歡實踐所好奇及感興趣的事物 :dizzy:

## 技能 🔨

### Front-end

<img :src="$withBase('/projects/HTML5.png')" alt=""> HTML
｜ <img :src="$withBase('/projects/CSS3.png')" alt=""> CSS
｜ <img :src="$withBase('/projects/javascript.svg')" alt=""> Javascript (ES6)
｜ <img :src="$withBase('/projects/React.png')" alt=""> React

### Back-end

<img :src="$withBase('/projects/MySQL.png')" alt=""> MySQL
｜ <img :src="$withBase('/projects/Python.webp')" alt=""> Python
｜ <img :src="$withBase('/projects/Flask.png')" alt=""> Flask
｜ <img :src="$withBase('/projects/Node.png')" alt=""> Node.js
｜ <img :src="$withBase('/projects/heroku.png')" alt=""> Heroku

### Graphic Design

<img :src="$withBase('/projects/figma.png')" alt=""> Figma
｜<img :src="$withBase('/projects/Photoshop.png')" alt=""> Adobe Photoshop
｜<img :src="$withBase('/projects/illustrator.png')" alt=""> Adobe Illustrator

## 幹部與社團經歷 :dizzy:

- 雲林科技大學 公關長
  - 協助班上進行聯誼活動
- 雲林科技大學 班級代表
  - 處理班上行政事務
- 學生自治會幹部 資訊長
  - 管理及修改學校網頁
  - 管理及維護學校影音設備
- 學生自治會粉絲專頁小編
  - 製作影音素材
  - 規劃貼文主題
  - 粉絲專頁貼文撰寫
- 全國大專院校學生會成果競賽暨觀摩活動
  - 檢視組織發展狀況
  - 落實檔案保存與傳承
- 全國大專院校運動會攝影組
  - 紀錄選手比賽花絮

## 語言能力 💬

- Chinese (Native)
- English(Basic, TOEIC 600)

## 工作經歷 💼

<work>

<!-- - MLD 台鋁 2016/1~2016/7 <img :src="$withBase('/projects/MLD.jpeg')" alt="" >
- 王品集團陶板屋 2018/5~2018/9 <img :src="$withBase('/projects/house.webp')" alt="" >
  -  -->

- H&M <div class="position">門市銷售人員 Apr 2019 - July 2019</div> <img :src="$withBase('/projects/H&M.svg')" alt="" >
  - 賣場的整理以及維護
  - 卸貨協助及售貨前的整理
- SSU <div class="position">大專媒體志工 Sep 2019 - Feb 2020 </div>  <img :src="$withBase('/projects/SSU.png')" alt=""></div>
  - 撰寫體育賽事新聞
  - 協助體協進行體育賽事
- 創科資訊 Trunk Studio <div class="position">實習生 Feb 2022 - Present</div>  <img :src="$withBase('/projects/trunk.png')" alt="trunk">

</work>

## 專案 💻

[→ Full list](/projects/)

<!-- <ProjectCard image="/projects/project.jpg" hideBorder=true>

**智慧學習輔導系統**

此系統可預測學生針對某些科目可能遇到的困難，透過事先蒐集的資料進行分析，為學生提供客觀的建議及反饋。

</ProjectCard>

<ProjectCard hideBorder=true>

</ProjectCard> -->

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 20px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  height 70px
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem
  img
    max-width 40px
    max-height 40px
    vertical-align:middle
  
  .position
    font-size 17px
    color #8E8E8E

  

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em
      
    

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
