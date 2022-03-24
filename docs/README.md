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
#### Front-end

●●●○○ HTML / CSS ｜●●○○○ RWD ｜●●○○○ Javascript (ES6)
●●○○○ React ｜ ●●○○○ JavaScript
#### Back-end

●●○○○ Flask ｜ ●●●○○ MySQL ｜ ●●●○○ python ｜●●○○○ Node.js ｜ ●●○○○ Heroku

#### Graphic Design

●●●○○ Figma ｜ ●●●○○ Adobe Photoshop ｜ ●●○○○ Adobe Illustrator

## 幹部與社團經歷 :dizzy:

- 雲林科技大學 公關
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

<ProjectCard image="/projects/project.jpg" hideBorder=true>

**智慧學習輔導系統**

此系統可預測學生針對某些科目可能遇到的困難，透過事先蒐集的資料進行分析，為學生提供客觀的建議及反饋。

</ProjectCard>

<ProjectCard hideBorder=true>

**Hsieh and the Deathly Hallows**

根據每個學生的背景和學習進度對學生進行一對一的適性化輔導，讓學生提前規劃學習策略、彌補自身不足，緩解現今許多大學生嚴重缺乏時間規劃與管理的陋習，目的是希望此智慧學習輔導系統可挖掘學生潛在的優勢與機會，一旦學生能在自身有興趣的領域上獲得好成績，便能從中得到成就感，進而大大提升學習成效。

</ProjectCard>



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 17px
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
