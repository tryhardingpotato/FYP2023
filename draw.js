function draw2x1MUX(X, Y, Z) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //drawing 2x1mux
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";
  // Drawing the Mux box
  ctx.beginPath();
  const rectWidth = 230;
  const rectHeight = 330;

  const startX = (canvas.width - rectWidth) / 2;
  const startY = (canvas.height - rectHeight) / 2;
  ctx.rect(startX, startY, rectWidth, rectHeight);
  ctx.stroke();

  // Drawing the input lines
  ctx.beginPath();
  ctx.moveTo(startX, startY + 110); // Input line 2 (B)
  ctx.lineTo(startX - 50, startY + 110);

  ctx.moveTo(startX, startY + 220); // Input line 3 (C)
  ctx.lineTo(startX - 50, startY + 220);

  ctx.moveTo(startX + 110, startY + 330); // Select line (S)
  ctx.lineTo(startX + 110, startY + 360);

  // Drawing the output line
  ctx.moveTo(startX + 230, startY + 165); // Output line start
  ctx.lineTo(startX + 280, startY + 165); // Output line end
  ctx.stroke();
 //I0 = ${Y} , I1 = ${Z} , S0 = ${X},
  // Drawing labels
  ctx.font = "16px Arial";
  ctx.fillStyle = " rgb(0, 255, 34)";
  ctx.fillText(Y, startX - 70, startY + 114);
  ctx.fillText("I0", startX + 10, startY + 114);
  ctx.fillText(Z, startX - 70, startY + 226);
  ctx.fillText("I1", startX + 10, startY + 226);
  ctx.fillText("S0", startX + 100, startY + 315);
  ctx.fillText(X, startX + 105, startY + 380);

  ctx.fillStyle = "violet";
  ctx.font = "18px Arial";
  ctx.fillText("2 X 1 Multiplexer", startX + 52, startY + 170);
  ctx.fillStyle = "red";
  ctx.fillText("Y", startX + 210, startY + 170);
  ctx.font = "16px Arial";
  ctx.fillText("F(A,B,C)", startX+300 , startY+170);
}

function draw4x1Mux(S0,S1,I0,I1,I2,I3) { //TOCHANGE
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //drawing 2x1mux
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";
  // Drawing the Mux box
  ctx.beginPath();
  const rectWidth = 230;
  const rectHeight = 330;

  const startX = (canvas.width - rectWidth) / 2;
  const startY = (canvas.height - rectHeight) / 2;
  ctx.rect(startX, startY, rectWidth, rectHeight);
  ctx.stroke();

  // Drawing the data input lines
  ctx.beginPath();
  ctx.moveTo(startX, startY + 66); // Data input line 1 (A)
  ctx.lineTo(startX - 50, startY + 66);

  ctx.moveTo(startX, startY + 132); // Data input line 2 (B)
  ctx.lineTo(startX - 50, startY + 132);

  ctx.moveTo(startX, startY + 198); // Data input line 3 (C)
  ctx.lineTo(startX - 50, startY + 198);

  ctx.moveTo(startX, startY + 264); // Data input line 4 (D)
  ctx.lineTo(startX - 50, startY + 264);

  // Drawing the control (select) input lines
  ctx.moveTo(startX + 76, startY + 330); // Select line 1 (S0)
  ctx.lineTo(startX + 76, startY + 360);

  ctx.moveTo(startX + 152, startY + 330); // Select line 2 (S1)
  ctx.lineTo(startX + 152, startY + 360);

  // Drawing the output line
  ctx.moveTo(startX + 230, startY + 165); // Output line start (Y)
  ctx.lineTo(startX + 280, startY + 165); // Output line end

  ctx.stroke();

  // Drawing labels
  ctx.font = "16px Arial";
  ctx.fillStyle = " rgb(0, 255, 34)";
  ctx.fillText("I0", startX + 20, startY + 72);
  ctx.fillText( I0, startX - 73, startY + 72);
  ctx.fillText("I1", startX + 20, startY + 137);
  ctx.fillText( I1, startX - 73, startY + 137);
  ctx.fillText("I2", startX + 20, startY + 203);
  ctx.fillText(I2, startX - 73, startY + 203);
  ctx.fillText("I3", startX + 20, startY + 270);
  ctx.fillText(I3, startX - 73, startY + 269);
  ctx.fillText("S0", startX + 142, startY + 318);
  ctx.fillText(S0, startX + 147, startY + 378);
  ctx.fillText("S1", startX + 66, startY + 318);
  ctx.fillText(S1, startX + 71, startY + 378);
  ctx.font = "18px Arial";
  ctx.fillStyle = "violet";
  //name label
  ctx.fillText("4 X 1 Multiplexer", startX + 52, startY + 170);
  ctx.fillStyle = "red";
  ctx.fillText("Y", startX + 210, startY + 170);
  ctx.font = "16px Arial";
  ctx.fillText("F(A,B,C)", startX+300 , startY+170);
}

function draw1to2Decoder(input, gates) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log(gates);
  //drawing Decoder
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";
  // Drawing the decoder box
  ctx.beginPath();
  const rectWidth = 230;
  const rectHeight = 330;

  const startX = (canvas.width - rectWidth) / 2;
  const startY = (canvas.height - rectHeight) / 2;
  ctx.rect(startX, startY, rectWidth, rectHeight);
  ctx.stroke();
  // Drawing the lines and labels
  const lineHeight = rectHeight / 3; // Divide the height of the rectangle into 3 equal parts
  const labelPadding = 10; // Padding between the lines and labels

  // Drawing the line on the left labeled "I0"
  const lineX = startX - 30;
  const lineY = startY + rectHeight / 2;
  const lineLength = 30; // Length of the line
  ctx.beginPath();
  ctx.moveTo(lineX - 7, lineY);
  ctx.lineTo(lineX + lineLength, lineY);
  ctx.stroke();
  // Drawing the label "I0"
  ctx.fillStyle = "rgb(0, 255, 34)";
  ctx.font = "16px Arial";
  ctx.fillText("I0", lineX - labelPadding - 20, lineY + 5);

  // Drawing the lines on the right labeled "Y0" and "Y1"
  const rightLineX = startX + rectWidth + labelPadding;
  const rightLineY0 = startY + lineHeight;
  const rightLineY1 = startY + 2 * lineHeight; // Move down by one line height

  // Drawing the lines and labels for Y0 and Y1
  for (let i = 0; i < 2; i++) {
    const lineY = i === 0 ? rightLineY0 : rightLineY1;
    if (input == GateSettingHigh) {
      ctx.beginPath();
      ctx.moveTo(rightLineX - 10, lineY);
      ctx.lineTo(rightLineX + lineLength, lineY);
      ctx.stroke();
    }
    else {

      ctx.moveTo(rightLineX, lineY);
      ctx.lineTo(rightLineX + lineLength, lineY);
      ctx.arc(rightLineX - 4, lineY, 5, 0, Math.PI * 2);
      ctx.stroke();

    }
    // Drawing the labels "Y0" and "Y1"
    ctx.fillStyle = "rgb(0, 255, 34)";
    ctx.font = "16px Arial";
    ctx.fillText(`Y${i}`, rightLineX - 40, lineY + 6);
  }
  let connectFirstInput, connectSecondInput;  //controls the input 
  do {
    // Randomly set connectFirstInput and connectSecondInput
    connectFirstInput = Math.random() < 0.5; // 50% chance of being true
    connectSecondInput = Math.random() < 0.5; // 50% chance of being true
  } while (!(connectFirstInput || connectSecondInput)); // Repeat until at least one input is true

  if (connectFirstInput) {
    ctx.beginPath(); //connection to first input
    ctx.moveTo(rightLineX + lineLength, lineY - 55);
    ctx.lineTo(rightLineX + lineLength, lineY - 15)
    ctx.lineTo(rightLineX + lineLength + 150, lineY - 15)
    ctx.stroke();
  }
  //connection to 2nd input

  if (connectSecondInput) {
    ctx.beginPath();
    ctx.moveTo(rightLineX + lineLength, lineY + 55);
    ctx.lineTo(rightLineX + lineLength, lineY + 15)
    ctx.lineTo(rightLineX + lineLength + 150, lineY + 15)
    ctx.stroke();
  }
  connection1 = connectFirstInput;
  connection2 = connectSecondInput;

  ctx.fillStyle = "violet";
  //name label
  ctx.fillText("1 - to - 2 Decoder", startX + 52, startY + 170);

  console.log(input);
  if (gates === GateTypeOr) {
    console.log(gates);
    OR = [GateTypeNor, GateTypeOr];
    gate_setting = get_gate_setting(OR);
    ORGate(rightLineX + lineLength + 200, lineY - 20, gate_setting, DecoderType1to2);
    return [connection1, connection2, gate_setting];
  }
  else if (gates === GateTypeAnd) {
    console.log(gates);
    AND = [GateTypeNand, GateTypeAnd];
    gate_setting = get_gate_setting(AND);
    ANDGate(rightLineX + lineLength + 200, lineY - 20, gate_setting, DecoderType1to2);
    return [connection1, connection2, gate_setting];

  }

}

const get_gate_setting = (types) => {
  const randomIndex = Math.floor(Math.random() * types.length);

  return types[randomIndex];
}


function draw2to4Decoder(input, gates) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log(input);
  // Drawing the decoder box
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  const rectWidth = 230;
  const rectHeight = 330;
  const startX = (canvas.width - rectWidth) / 2;
  const startY = (canvas.height - rectHeight) / 2;
  ctx.rect(startX, startY, rectWidth, rectHeight);
  ctx.stroke();

  // Drawing the lines and labels on the left side
  const leftLineX = startX - 30;
  const leftLineY1 = startY + 100;
  const leftLineY2 = startY + 200;
  const leftLineLength = 30;

  ctx.beginPath();
  ctx.moveTo(leftLineX - 7, leftLineY1);
  ctx.lineTo(leftLineX + leftLineLength, leftLineY1);
  ctx.moveTo(leftLineX - 7, leftLineY2);
  ctx.lineTo(leftLineX + leftLineLength, leftLineY2);
  ctx.stroke();

  ctx.fillStyle = "rgb(0, 255, 34)";
  ctx.font = "16px Arial";
  ctx.fillText("I0", leftLineX - 40, leftLineY1 + 5);
  ctx.fillText("I1", leftLineX - 40, leftLineY2 + 5);
  const rightLineX = startX + rectWidth + 10;
  const rightLineY = startY + rectHeight / 5;
  const rightLineSpacing = rectHeight / 5; // Spacing between lines
  // Drawing the lines and labels on the right side

  ctx.beginPath();
  console.log('In 2to4Decoder high/low:', input);
  for (let i = 0; i < 4; i++) {

    if (input === GateSettingLow) {
      const lineY = rightLineY + i * rightLineSpacing;
      ctx.moveTo(rightLineX + 10, lineY);
      ctx.lineTo(rightLineX + rightLineY - 100, lineY);
      ctx.fillText(`Y${i}`, rightLineX - 40, lineY + 5);
      ctx.arc(rightLineX - 4, lineY, 5, 0, Math.PI * 2);
      ctx.stroke();
    }
    else {
      const lineY = rightLineY + i * rightLineSpacing;
      ctx.moveTo(rightLineX - 10, lineY);
      ctx.lineTo(rightLineX + rightLineY - 100, lineY);
      ctx.stroke();
      ctx.fillText(`Y${i}`, rightLineX - 40, lineY + 5);
    }

  }
  // Drawing the connection lines
  //FLAG!!!
  const connectionLines = getRandomConnectionLines();
  console.log('ConnectionLines:', connectionLines[0], connectionLines[1], connectionLines[2], connectionLines[3]); //get true or false for connection lines
  let connection1 = connectionLines[0];
  let connection2 = connectionLines[1];
  let connection3 = connectionLines[2];
  let connection4 = connectionLines[3];

  if (connection1 === true) {
    console.log('Connection line 0 connected')
    ctx.beginPath();
    ctx.moveTo(rightLineX + leftLineLength, rightLineY);
    ctx.lineTo(rightLineX + leftLineLength + 150, rightLineY);
    ctx.moveTo(rightLineX + leftLineLength + 150, rightLineY);
    ctx.lineTo(rightLineX + leftLineLength + 150, rightLineY + 60);
    ctx.stroke();

  }
  if (connection2 === true) {
    console.log('Connection line 1 connected')
    ctx.beginPath();
    ctx.moveTo(rightLineX + leftLineLength, rightLineY + 66);
    ctx.lineTo(rightLineX + leftLineLength + 130, rightLineY + 66);
    ctx.moveTo(rightLineX + leftLineLength + 130, rightLineY + 66);
    ctx.lineTo(rightLineX + leftLineLength + 130, rightLineY + 79);
    ctx.moveTo(rightLineX + leftLineLength + 130, rightLineY + 79);
    ctx.lineTo(rightLineX + leftLineLength + 155, rightLineY + 79);
    ctx.stroke();

  }
  if (connection3 === true) {
    console.log('Connection line 2 connected')
    ctx.beginPath();
    ctx.moveTo(rightLineX + leftLineLength, rightLineY + 132);
    ctx.lineTo(rightLineX + leftLineLength + 110, rightLineY + 132);
    ctx.moveTo(rightLineX + leftLineLength + 110, rightLineY + 132);
    ctx.lineTo(rightLineX + leftLineLength + 110, rightLineY + 104);
    ctx.moveTo(rightLineX + leftLineLength + 110, rightLineY + 104);
    ctx.lineTo(rightLineX + leftLineLength + 151, rightLineY + 104);
    ctx.stroke();

  }
  if (connection4 === true) {
    console.log('Connection line 3 connected')
    ctx.beginPath();
    ctx.moveTo(rightLineX + leftLineLength, rightLineY + 198);
    ctx.lineTo(rightLineX + leftLineLength + 80, rightLineY + 198);
    ctx.moveTo(rightLineX + leftLineLength + 80, rightLineY + 198);
    ctx.lineTo(rightLineX + leftLineLength + 149, rightLineY + 198);
    ctx.moveTo(rightLineX + leftLineLength + 149, rightLineY + 198);
    ctx.lineTo(rightLineX + leftLineLength + 149, rightLineY + 128);
    ctx.stroke();

  }

  // Drawing the decoder name label
  ctx.fillStyle = "violet";
  ctx.fillText("2-to-4 Decoder", startX + 60, startY + 170);

  if (gates == GateTypeOr) {
    OR = [GateTypeNor, GateTypeOr];
    gate_setting = get_gate_setting(OR);
    ORGate(rightLineX + leftLineLength + 200, startY + 140, gate_setting, DecoderType2to4);
    console.log(connection1, connection2, connection3, connection4);
    return [connection1, connection2, connection3, connection4, gate_setting];
  } else if (gates == GateTypeAnd) {
    AND = [GateTypeNand, GateTypeAnd];
    gate_setting = get_gate_setting(AND);
    ANDGate(rightLineX + leftLineLength + 200, startY + 140, gate_setting, DecoderType2to4);
    console.log(connection1, connection2, connection3, connection4);
    return [connection1, connection2, connection3, connection4, gate_setting];
  }
  return null;
}

function getRandomConnectionLines() {
  const connectionLines = [];
  for (let i = 0; i < 4; i++) {
    connectionLines.push(Math.random() < 0.5); // 50% chance of being true
  }
  if (connectionLines.every(line => !line)) {
    // If all connectionLines are false, rerun getRandomConnectionLines
    getRandomConnectionLines();
  }
  console.log(connectionLines);
  return connectionLines;
}

function ANDGate(startX, startY, gateType, decodertype) { // 2 input OR gate
  const scaleFactor = 1.5; // Enlargement factor
  // Enlarged dimensions

  const enlargedWidth = 60 * scaleFactor;
  const enlargedHeight = 40 * scaleFactor;

  // Enlarged coordinates
  const enlargedStartX = startX - (enlargedWidth - 60) / 2;
  const enlargedStartY = startY - (enlargedHeight - 40) / 2;
  //connection lines
  if (decodertype === DecoderType1to2) {

    ctx.beginPath();
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 15);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 15);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 45);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 45);
    ctx.stroke();
    ctx.strokeStyle = "aqua";
  }
  else {
    ctx.beginPath();
    ctx.moveTo(enlargedStartX + 12, enlargedStartY - 5);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY - 5);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 15);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 15);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 40);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 40);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 65);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 65);
    ctx.stroke();
    ctx.strokeStyle = "aqua";
  }

  if (gateType === GateTypeNand) {
    // Output line
    ctx.moveTo(enlargedStartX + 70, enlargedStartY + 30);
    ctx.lineTo(enlargedStartX + 110, enlargedStartY + 30);
    // Drawing the small circle
    ctx.arc(enlargedStartX + 66, enlargedStartY + 30, 5, 0, Math.PI * 2);
  } else if (gateType === GateTypeAnd) {
    // Output line
    ctx.moveTo(enlargedStartX + 60, enlargedStartY + 30);
    ctx.lineTo(enlargedStartX + 100, enlargedStartY + 30);

    // AND gate body
  }
  ctx.moveTo(enlargedStartX + 11, enlargedStartY + 81);
  ctx.arc(enlargedStartX + 11, enlargedStartY + 30, 50, -Math.PI / 2, Math.PI / 2); // a curve
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.font = "16px Arial";
  ctx.fillText("F ( A, B )", enlargedStartX + 65, enlargedStartY + 10);
}


function ORGate(startX, startY, gateType, decodertype) {
  const scaleFactor = 1.5; // Enlargement factor

  // Enlarged dimensions
  const enlargedWidth = 60 * scaleFactor;
  const enlargedHeight = 40 * scaleFactor;

  // Enlarged coordinates
  const enlargedStartX = startX - (enlargedWidth - 60) / 2;
  const enlargedStartY = startY - (enlargedHeight - 40) / 2;


  //connection lines

  console.log(gateType, decodertype);
  if (decodertype === DecoderType1to2) {

    ctx.beginPath();
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 15);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 15);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 45);
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 45);
    ctx.strokeStyle = "aqua";
  }

  else {
    ctx.beginPath();
    ctx.moveTo(enlargedStartX + 4, enlargedStartY - 5); //line1
    ctx.lineTo(enlargedStartX - 35, enlargedStartY - 5);
    ctx.moveTo(enlargedStartX + 12, enlargedStartY + 15);//line 2
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 15);
    ctx.moveTo(enlargedStartX + 14, enlargedStartY + 40);//line3
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 40);
    ctx.moveTo(enlargedStartX + 4, enlargedStartY + 65);//line4
    ctx.lineTo(enlargedStartX - 35, enlargedStartY + 65);
    ctx.stroke();
    ctx.strokeStyle = "aqua";
  }

  if (gateType === GateTypeNor) {
    // Output line
    ctx.moveTo(enlargedStartX + 70, enlargedStartY + 30);
    ctx.lineTo(enlargedStartX + 110, enlargedStartY + 30);
    // Drawing the small circle
    ctx.arc(enlargedStartX + 65, enlargedStartY + 30, 5, 0, Math.PI * 2);
  } else if (gateType === GateTypeOr) {
    // Output line
    ctx.moveTo(enlargedStartX + 60, enlargedStartY + 30);
    ctx.lineTo(enlargedStartX + 100, enlargedStartY + 30);
  }

  // Gate body
  ctx.moveTo(enlargedStartX, enlargedStartY - 10);
  ctx.quadraticCurveTo(enlargedStartX + 30, enlargedStartY + 30, enlargedStartX, enlargedStartY + 70); // left curve
  ctx.quadraticCurveTo(enlargedStartX + 120, enlargedStartY + 30, enlargedStartX, enlargedStartY - 10); // right curve

  ctx.stroke();

  ctx.fillStyle = "red";
  ctx.font = "16px Arial";
  ctx.fillText("F ( A, B )", enlargedStartX + (gateType === GateTypeNor ? 75 : 65), enlargedStartY + 15);
}

