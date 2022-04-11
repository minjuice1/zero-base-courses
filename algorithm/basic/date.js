// Date
// 표준 Bulit-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
// Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현
/*
생성자 및 대표 메서드 (method)
Date 객체 생성자 : new Date()
현재 시간 기준 문자열: Date()
날짜 정보 얻기 (년/월/일): Date.getFullYear(), Date.getMonth(), Date.getDate()
날짜 정보 얻기 (시/분/초/ms): Date.getHours(), Date.getMinutes(), Date.getSeconds()
날짜 정보 설정 (년/월/일): Date.setFullYear(), Date.setMonth(), Date.setDate()
날짜 정보 설정 (시/분/초/ms): Date.setHours(), Date.setMinutes(), DAte.setSeconds()
그 외 날짜 정보 얻기: Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
그 외 날짜 정보 설정: Date.parse(string)
*/

// new를 붙일 경우에는 object타입의 숫자형태 날짜표기
let date_new = new Date();
console.log("date_new", typeof date_new);
console.log("date_new", date_new);

// new를 안 붙일 경우에는 string타입의 한글, 영어 날짜표기
let date_str = Date();
console.log("date_str", typeof date_str);
console.log("date_str", date_str);

let date_ms_1 = new Date(0);
console.log(date_ms_1);
let date_ms_2 = new Date(1000 * 3600 * 24); // 하루
console.log(date_ms_2);

let date_string = new Date("2020-01-01");
console.log(date_string);

let date_params_1 = new Date(2021, 0, 1); // 0부터 시작으로 0이 1월
console.log(date_params_1); // 우리나라 기준이 아니기때문에 12월31일로 뜸
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); // 0부터 시작으로 0이 1월
console.log(date_params_2);

let date = new Date(Date.UTC(2022, 0, 1));
console.log("date", date);

console.log(date.getFullYear());
console.log(date.getMonth());

// 일요일(0) - 토요일(6)
console.log(date.getDay()); // 6으로 토요일

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime()); // ms으로 받음.
console.log(date.getTimezoneOffset()); // 540 / 60 = 9로 9시간의 시차

let ms_year = date.setFullYear(2023, 0, 1);
console.log(ms_year);
console.log(new Date(ms_year));
date.setDate(3);
console.log(date);
date.setDate(0); // 0을 하게 될 경우, date의 전날로 설정 됨.
console.log(date);

let ms_parse = Date.parse("2010-01-01T00:00:00.000");
console.log(ms_parse);
console.log(new Date(ms_parse)); // 우리나라 기준 9시간 전으로 나오게 됨

console.log(new Date(Date.parse("2010-01-01T00:00:00.000Z"))); // new Date를 바로 넣어주고, 마지막에 Z 추가

console.log("============성능평가============");

function dateSub(old_date, new_date) {
	return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
	return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
	let date_1 = new Date("2020-01-01");
	let date_2 = new Date();

	let start = Date.now();
	for (let i = 0; i < 100000; i++) {
		callback_func(date_1, date_2);
	}
	return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms");
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms");
// 결론: ms으로 변환을 하여 Date를 수행하는 것이 더 효율적이다.
