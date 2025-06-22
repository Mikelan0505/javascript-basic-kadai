//============================
// 課題　：　四則演算をしよう
//============================

// 体重 = weight
// 身長 = height とする。
// waight = 68 (kg)
// height = 1.7 (m)

// 計算式：[体重(kg)]÷[身長(m)×身長(m)]より、
// BMI（体格指数） = weigth / (height * height)
// 数値を代入　BMI = 68(kg) / (1.7(m) * 1.7(m))


// 体重と身長の変数を宣言
const weight = 68;
const height = 1.7;

// 計算式：[体重(kg)]÷[身長(m)×身長(m)]
const bmi = weight / (height * height);

// コンソールにBMIを表示
console.log(bmi);