var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  var currentlyServing = katzDeliLine[0];
  katzDeliLine.shift()
  if (katzDeliLine > 0) {
    return `Currently serving ` +currentlyServing +`.`
  } else {
      return "There is nobody waiting to be served!"
  }
}
