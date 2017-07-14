(function() {
  'use strict';

  var time_limit = 10;
  var word;
  var letter_pos;
  var letter_count = 0;
  var miss_count = 0;
  var isStarted = false;
  var timer_id;
  var main = document.getElementById('main');
  var letter_count_ele = document.getElementById('letter-count');
  var miss_count_ele = document.getElementById('miss-count');
  var remaining_time_ele = document.getElementById('remaining-time');
  // 表示用の単語
  var words = [
    'apple', 'delegate', 'primary', 'summary', 'product',
    'surplus', 'cache', 'available', 'expire', 'value',
    'summer', 'operation', 'development', 'medical', 'submit',
  ];

  function displayWord() {
    word = words[Math.floor(Math.random() * words.length)];
    letter_pos = 0;
    main.innerText = word;
  }

  function setTimer() {
    timer_id = setInterval(function() {
      time_limit--;
      remaining_time_ele.innerText = time_limit;
      if (time_limit <= 0) {
        clearInterval(timer_id);
        setTimeout(function() {
          alert('accuracy: ' + Math.round(letter_count / (letter_count + miss_count) * 100) + '%');
        }, 200);
      }
    }, 1000);
  }

  window.addEventListener('click', function() {
    if (!isStarted) {
      isStarted = true;
      setTimer();
      displayWord();
    } else {
      return;
    }
  })

  window.addEventListener('keydown', function(e) {
    if (word.substr(letter_pos, 1) == String.fromCharCode(e.keyCode).toLowerCase()) {
      letter_pos++;
      letter_count++;
      letter_count_ele.innerText = letter_count;
      var placeholder = '';
      for (var i = 0; i < letter_pos; i++) {
        placeholder += '_';
      }
      main.innerText = placeholder + word.substring(letter_pos, word.length);
      if (letter_pos == word.length) {
        displayWord();
      }
    } else {
      miss_count++;
      miss_count_ele.innerText = miss_count;
    }
  })
})();
