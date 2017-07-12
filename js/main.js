(function() {
  'use strict';

  var time_limit = 10000;
  var main = document.getElementById('main');
  // 表示用の単語
  var words = [
    'apple', 'delegate', 'primary', 'summary', 'product',
    'surplus', 'cache', 'available', 'expire', 'value',
    'summer', 'operation', 'development', 'medical', 'submit',
  ];
  // キーコードのオブジェクト
  var key_codes = {
    '65': 'a', '66': 'b', '67': 'c', '68': 'd', '69': 'e', '70': 'f',
    '71': 'g', '72': 'h', '73': 'i', '74': 'j', '75': 'k', '76': 'l',
    '77': 'm', '78': 'n', '79': 'o', '80': 'p', '81': 'q', '82': 'r',
    '83': 's', '84': 't', '85': 'u', '86': 'v', '87': 'w', '88': 'x',
    '89': 'y', '90': 'z',
  };

  // 経過時間の計算
  function calcElapsedTime() {
    var date = new Date();
    var now = date.getTime();
    var elapsed_time = now - start_time;
    if (elapsed_time >= time_limit) {
      alert('終了！');
    }
  }

  // 初回の画面クリック時の動作
  var started = false;
  document.addEventListener('click', function() {
    if (started == false) {
      started = true;
      var start_date_obj = new Date();
      // 開始時間(ミリ秒)の取得
      var start_time = start_date_obj.getTime();
      setInterval(calcElapsedTime, 100);
      startGame();
    } else {
      return;
    }
  });

  // 単語を表示する
  function displayWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    main.innerText = word;
  }

  // メイン処理
  function startGame() {
    // 単語を表示する
    displayWord();
  }

  // キーイベント
  document.addEventListener('keydown', function(e) {
    // 押された文字の取得
    key_codes[e.keyCode]);
  })
})();
