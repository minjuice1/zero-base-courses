/*
 *  CommonJS (Import)
 */
const Person = require("./module");

const me = new Person("park", 10, "Korea");
const you = new Person("kim", 20, "Japan");

console.log(me.getName()); // park입니다
console.log(you.getName()); // kim입니다
