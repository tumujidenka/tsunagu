// ページトップボタン
var topBtn = $('.js-pagetop');
topBtn.hide();

// ページトップボタンの表示設定
$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    topBtn.fadeIn();
  } else {
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
    if (menu.classList.contains('active')) {
      // メニューを閉じる処理
      menu.classList.remove('active');

      greenLogo.style.display = 'none';
      whiteLogo.style.display = 'block';
    } else {
      // メニューを表示する処理
      menu.classList.add('active');
      greenLogo.style.display = 'block';
      whiteLogo.style.display = 'none';
    }

    navToggle.classList.toggle('active');
  });

  // 各メニュー項目をクリックした際にメニューを閉じる
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');

      menu.classList.remove('active');  // 表示クラスを削除

      greenLogo.style.display = 'none';   // 緑のロゴを非表示
      whiteLogo.style.display = 'block';  // 白のロゴを表示
    });
  });
});

// スクロールイベントを監視し、トップに戻るボタンを表示・非表示にする
window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('back-to-top');

  if (window.pageYOffset > 100) { // 少しスクロールしたら表示
      backToTopButton.classList.add('visible');
  } else {
      backToTopButton.classList.remove('visible');
  }
});

// ボタンクリックでトップに戻る
document.getElementById('back-to-top').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


//p-tsunagu-about--beforeImageの高さの設定
$(document).ready(function() {
  function setBeforeImageTop() {
    // .p-tsunagu-mvの高さを取得
    var mvHeight = $('.p-tsunagu-mv').outerHeight() - 90;

    // .p-tsunagu-about--beforeImageにtopの値を動的に設定
    $('.p-tsunagu-about--beforeImage').css('top', mvHeight + 'px');
  }

  // 初回ロード時に高さを設定
  setBeforeImageTop();

  // ウィンドウリサイズ時にも高さを再設定
  $(window).resize(function() {
    setBeforeImageTop();
  });
});