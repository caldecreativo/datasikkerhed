function generateOneTimePads(padCount, padLength) {
  let pads = [];

  for (let i = 0; i < padCount; i++) {
    let pad = "";
    for (let j = 0; j < padLength; j++) {
      pad += Math.random().toString(36).substring(2, 3);
    }
    pads.push(pad);
  }

  return pads;
}
generateOneTimePads(5,20);