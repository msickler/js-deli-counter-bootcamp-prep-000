var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  var currentlyServing = katzDeliLine[0];
  katzDeliLine.shift()
  if (katzDeliLine > 0) {
    return `Currently serving ` + currentlyServing +`.`
  } else {
      return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  var array = [];
if (line.length !== 0) {
for (var i = 0; i < line.length; i++) {
 array.push(" " + `${i + 1}` + ". " + `${line[i]}` + "");
  }
 } else {
  return "The line is currently empty.";
 }
 return "The line is currently:" + `${array}`;
}
