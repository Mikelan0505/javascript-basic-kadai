// 課題：DOM操作を使用して文字表示を変えよう
// JavaScriptで基本的なDOM操作ができるようになること。


// ーーーー以下　回答ーーーー

// テキスト要素とボタン要素を取得。
const text = document.getElementById("text");
const button = document.getElementById("btn");

// ボタンがクリックされたらテキストを書き換える。
button.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});