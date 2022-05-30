//Question1
document.querySelector(".title").innerHTML = "<h1>Group 5: Team Ares</h1>";
document.querySelector("h1").style.color = "aquamarine";
//end of Question  1
//Question 2
let teamName = [
  "Giyaatha ",
  "Izzyman",
  "Sammie🥴",
  "Amos Thibault BIKARI ",
  "Susan Chepkosgei",
  "susan Mwende",
  "Austin Tonayam",
  "khalid",
];
console.log(
  "                                                                                                                              "
);
console.log("==================question 2=====================");
console.log(teamName[3]);
//end of question 2
//Question 3
let personalInfo = {
  firstName: "Amos Thibault ",
  lastName: "BIKARI",
  bestMovie: "SUITS",
  bestFood: "PIZZA",
  complexion: "black",
  birthMonth: "september",
  state: "Kigali",
  groupName: "Eagle Team",
};
console.log(
  "                                                                                                                              "
);
console.log("==================question 3=====================");
console.log(personalInfo.bestMovie);
//end of question 3
//question 4
let noum = ["cat", "car", "john", "sandra", "taylor"];
let verb = ["running", "driving", "jumping", "eating", "sleeping"];
console.log(
  "                                                                                                                              "
);
console.log("==================question 4=====================");
console.log(noum[0] + " " + "is" + " " + verb[2]);
console.log(noum[1] + " " + "is" + " " + verb[1] + " " + "by paul");
console.log(noum[2] + " " + "is" + " " + verb[0]);
console.log(noum[3] + " " + "is" + " " + verb[3]);
console.log(noum[4] + " " + "is" + " " + verb[4]);
//end of question 4
//quetion 5
function remainder(a = 10, b = 3) {
  console.log(
    "                                                                                                                              "
  );
  console.log("==================question 5=====================");
  console.log("the remainder is equal to:" + " " + (a % b));
}
remainder();
//end of question 5
//question 6
function almightyFormula(a = 5, b = 7, c = 3) {
  console.log(
    "                                                                                                                              "
  );
  console.log("==================question 6=====================");
  console.log("x1 = " + " " + (-b + (b ** 2 - 4 * a * c)) / (2 * a));
  console.log("x2 = " + " " + (-b - (b ** 2 - 4 * a * c)) / (2 * a));
}
almightyFormula();
//end of question 6
//question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "don't";
console.log(
  "                                                                                                                              "
);
console.log("==================question 7=====================");
console.log(
  myAdjective + " " + myNoun + " " + wordBlanks + " " + myVerb + " " + myAdverb
);
//end of question 7
//question 8
function areaCircle(r = 9) {
  let area = Math.PI * r * r;
  console.log(
    "                                                                                                                              "
  );
  console.log("==================question 8=====================");
  console.log("the area of circle is equal to =" + " " + area.toFixed(2));
}
areaCircle();
//end of question 8
//question 9
function simpleInterest(p = 8200, r = 17.5, t = 2.6) {
  var interest = (p * r * t) / 100;
  console.log(
    "                                                                                                                              "
  );
  console.log("==================question 9=====================");
  console.log("the interest is equal to =" + " " + interest.toFixed(2));
}
simpleInterest();
//end of question 9
//question 10
let results = 10 % 4;
console.log(
  "                                                                                                                              "
);
console.log("==================question 10=====================");
console.log("the result is equal to =" + " " + results);
//end of question 10
//question 11
function BodyMassIndex() {
  let Merit = {
    height: 1.69,
    weight: 78,
  };
  let Nutjob = {
    height: 1.95,
    weight: 92,
  };
  let bmi1 = Merit.weight / (Merit.height * Merit.height);
  let bmi2 = Nutjob.weight / (Nutjob.height * Nutjob.height);
  let meritHigherBMI = bmi1 > bmi2;
  console.log(
    "                                                                                                                              "
  );
  console.log("==================question 11=====================");
  console.log("the bmi of  Merit is equal to =" + " " + bmi1.toFixed(2));
  console.log("the bmi of Nutjob is equal to =" + " " + bmi2.toFixed(2));
  console.log("Merit has a higher BMI than Nutjob =" + " " + meritHigherBMI);
}
BodyMassIndex();
//end of question 11
