// 関数をMDNで調べて使ってみよう

// １，今日の日付を取得して、コンソールに出力するコードを記述
// ２，2024年10月12日にプログラムを実行した場合

// ----以下　回答----


// １，今日の日付を取得して、コンソールに出力するコードを記述

// 月は0~11 コンソール表示時は+１
{
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();

	console.log(`${year}年${month}月${day}日`);
}

// ２，2024年10月12日にプログラムを実行した場合

// 月は0~11 2024年10月12日は2024, 9, 12となる。コンソール表示時は+１
{
	const date = new Date(2024, 9, 12); 
	const year = date.getFullYear();
	const month = date.getMonth() + 1;  
	const day = date.getDate();

	console.log(`${year}年${month}月${day}日`);
}