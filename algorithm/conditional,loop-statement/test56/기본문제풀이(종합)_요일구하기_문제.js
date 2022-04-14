/* 4. 요일 구하기 */

/* user code */
function answer(str) {
	let week = new Array(
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일",
	);
	let day;

	let date = new Date(str).toString();
	date = date.slice(0, 3);
	switch (date) {
		case "Sun":
			day = week[0];
			break;
		case "Mon":
			day = week[1];
			break;
		case "Tue":
			day = week[2];
			break;
		case "Wed":
			day = week[3];
			break;
		case "Thu":
			day = week[4];
			break;
		case "Fri":
			day = week[5];
			break;
		case "Sat":
			day = week[6];
			break;
	}

	/* 짧은 풀이
  let date = new Date(str);
  console.log(date)
  day = week[date.getDay()];
   */

	return day;
}

/* main code */
let input = [
	// TC: 1
	"2021-01-27",
	// TC: 2
	"2021-02-27",
	// TC: 3
	"2021-03-14",
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
