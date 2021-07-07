const body = document.getElementsByTagName("body")[0];
const li = document.createElement("li")
const p = document.createElement("p");


for (let i = 0 ; i <= 50; i++){
  body.append(p);
  p.append(i)

};