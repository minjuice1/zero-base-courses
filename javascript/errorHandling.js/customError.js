/* 커스텀 에러 */

// class 문법을 활용하여 login error 만들기
class LoginError extends Error {
	constructor(message) {
		super(message);

		this.name = "Login Error";
	}
}

function login(id, pw) {
	if (id !== "zero") {
		throw new LoginError("아이디 불일치");
	}

	if (id === "zero" && pw === 0000) {
		return true;
	}

	throw new Error("로그인 실패");
}

try {
	login("haha", 1234);
} catch (error) {
	console.error(error);
	if (error instanceof LoginError) {
		console.error("로그인 에러가 발생했습니다.");
	} else {
		console.error("에러가 발생했습니다.");
	}
} finally {
	console.info("로그인 시도 시간 : " + new Date());
}
