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

1999 年生，樂於接受不同的挑戰，享受生活樂趣帶來靈感，激發想法和行動 :dizzy:

## 技能 🔨
### Front-end

●●●○○ HTML <img :src="$withBase('/projects/HTML5.png')" alt="">
｜●●○○○ Javascript (ES6)  <img :src="$withBase('/projects/javascript.svg')" alt="">
｜●●○○○ React <img :src="$withBase('/projects/React.png')" alt="">
｜●●●○○ CSS <img :src="$withBase('/projects/CSS3.png')" alt="">
### Back-end

●●○○○ Flask <img :src="$withBase('/projects/Flask.png')" alt="">
｜●●●○○ MySQL  <img :src="$withBase('/projects/MySQL.png')" alt="">
 ｜ ●●●○○ python <img :src="$withBase('/projects/Python.webp')" alt="">
 ｜●●○○○ Node.js <img :src="$withBase('/projects/Node.png')" alt=""> 
 ｜ ●●○○○ Heroku <img :src="$withBase('/projects/heroku.png')" alt=""> 

### Graphic Design

●●●○○ Figma ｜ ●●●○○ Adobe Photoshop ｜ ●●○○○ Adobe Illustrator

## 幹部與社團經歷 :dizzy:

- 雲林科技大學 公關長
- 雲林科技大學 班級代表
- 學生自治會幹部 資訊長
- 學生自治會粉絲專頁小編
- 106 年大專院校學生會成果競賽暨觀摩活動
- 107 年大專院校學生會成果競賽暨觀摩活動
- 107 年全國大專院校運動會攝影組

## 語言能力 💬

- Chinese (Native)
- English(Basic, TOEIC 600)

## 工作經歷 💼

- MLD 台鋁 2016/1~2016/7
- 王品集團陶板屋
- H&M 2019/4~2019/7
- SSU 大專體總體育記者 2019/9~/2020/2 


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
  font-size 18px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    max-width 50px
    max-height 50px
    vertical-align:middle


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
