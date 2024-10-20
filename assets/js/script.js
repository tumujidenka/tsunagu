// ページトップボタン
var topBtn = $('.js-pagetop');
topBtn.hide();

// ページトップボタンの表示設定
$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    // 指定px以上のスクロールでボタンを表示
    topBtn.fadeIn();
  } else {
    // 画面が指定pxより上ならボタンを非表示
    topBtn.fadeOut();
  }
});

// ページトップボタンをクリックしたらスクロールして上に戻る
topBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 300, 'swing');
  return false;
});

// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
$(document).on('click', 'a[href*="#"]', function () {
  let time = 400;
  let header = $('header').innerHeight();
  let target = $(this.hash);
  if (!target.length) return;
  let targetY = target.offset().top - header;
  $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  return false;
});


//スマホメニュー表示
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu__list a'); // メニュー内のリンクを取得
  const greenLogo = document.querySelector('.header__logo.green');
  const whiteLogo = document.querySelector('.header__logo');

  // ナビゲーションボタンのクリックイベント
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');  // ハンバーガーメニューのアニメーション
    menu.classList.toggle('active');  // メニューの表示/非表示を切り替え

    // ロゴの表示・非表示を切り替える
    if (menu.classList.contains('active')) {
      greenLogo.style.display = 'block';  // 緑のロゴを表示
      whiteLogo.style.display = 'none';   // 白のロゴを非表示
    } else {
      greenLogo.style.display = 'none';   // 緑のロゴを非表示
      whiteLogo.style.display = 'block';  // 白のロゴを表示
    }
  });

  // 各メニュー項目をクリックした際にメニューを閉じる
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');  // ハンバーガーメニューのアニメーションを元に戻す
      menu.classList.remove('active');  // メニューを非表示にする

      // ロゴを元に戻す
      greenLogo.style.display = 'none';   // 緑のロゴを非表示
      whiteLogo.style.display = 'block';  // 白のロゴを表示
    });
  });
});