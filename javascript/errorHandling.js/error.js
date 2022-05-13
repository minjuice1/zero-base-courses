/* 에러 던지기 */

function login(id, pw) {
	if (id === "zero" && pw === 0000) {
		return true;
	}

	throw new Error("로그인 실패");
}

try {
	login("haha", 1234);
} catch (error) {
	console.error(error);
} finally {
	console.info("로그인 시도 시간 : " + new Date());
}
