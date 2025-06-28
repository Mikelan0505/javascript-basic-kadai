// 課題：非同期処理を使用して、2秒後に文章を書き換えよう
// JavaScriptにおける非同期処理を理解すること。


// －－－以下　回答ーーー

// ボタン要素とテキスト要素を取得。
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックして2秒後（2000ミリ秒後）に書き換える。
btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});