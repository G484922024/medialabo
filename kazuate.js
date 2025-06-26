// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // テキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input#t');
  let yoso = Number(i.value);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;
  let p = document.querySelector('span#yoso');
  let p2 = document.querySelector('span#kaisu');
  p2.textContent = kaisu + '回目の予想: ' + yoso;
  if(kaisu >= 4){
    p.textContent = '答えは'+kotae+'でした.すでにゲームは終わっています';
  }
  else if(yoso === kotae){
    p.textContent = '正解です.おめでとう!';
    kaisu = 4;
  }
  else if(yoso !== kotae){
    if(kaisu === 3){
        p.textContent = 'まちがい.残念でした答えは'+kotae+'です';
    }
    else if(kaisu <= 2 && yoso < kotae){
        p.textContent = 'まちがい.答えはもっと大きいですよ';
    }
    else if(kaisu <= 2 && yoso > kotae){
        p.textContent = 'まちがい.答えはもっと小さいですよ';
    }
  }

}

