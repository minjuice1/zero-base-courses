// for .. in 반복문
// for (key in obeject) {
//   code block to be executed
// }

const person = { fname: "park", Lname: "haha", age: 20 };

let text = "";
for (let x in person) {
	text += person[x];
	console.log("text", text);
	console.log("x", x);
}

console.log("global_text", text);
console.log("person", person);

// for .. of 반복문
// for (varible of iterable) {
//   code block to be executed
// }

let language = "JavaScript";
let text2 = "";
for (let x of language) {
	text2 += x;
	console.log("x", x);
	console.log("text2", text2);
}
console.log("global_text2", text2);
