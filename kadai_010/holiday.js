
// 課題：繰り返し処理を使用して祝日を表示しよう

// holidaysというリストに祝日の一覧が入っている。
// リストの中にindexがあり、正月（0番）から勤労感謝の日まで順番に表示する
// 変数をiとする。

const holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]


// ーーーー以下　回答－－－－－－－

// for文の場合

// 宣言：let i = 0 

for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}


// while文の場合

// 宣言：let i = 0 

let i = 0;
while (i < holidays.length) {
  console.log(holidays[i]);
  i++;
}
