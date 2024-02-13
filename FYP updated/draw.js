function draw2x1MUX() { 

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

  // Drawing labels
  ctx.font = "16px Arial";
  ctx.fillStyle = " rgb(0, 255, 34)";
  ctx.fillText("B", startX - 70, startY + 114);
  ctx.fillText("I0", startX + 10, startY + 114);
  ctx.fillText("C", startX - 70, startY + 226);
  ctx.fillText("I1", startX + 10, startY + 226);
  ctx.fillText("S0", startX + 100, startY + 315);
  ctx.fillText("A", startX + 105, startY + 380);

  ctx.fillStyle = "violet";
  ctx.font = "18px Arial";
  ctx.fillText("2 X 1 Multiplexer", startX + 52, startY + 170);
  ctx.fillStyle = "red";
  ctx.fillText("Y", startX + 210, startY + 170);
}

function draw4x1Mux() {
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
  ctx.fillText("I0", startX - 75, startY + 72);
 
  ctx.fillText("I1", startX - 75, startY + 137);

  ctx.fillText("I2", startX - 75, startY + 203);

  ctx.fillText("I3", startX - 75, startY + 270);

  ctx.fillText("S0", startX + 66, startY + 318);
  ctx.fillText("A", startX + 71, startY + 378);
  ctx.fillText("S1", startX + 142, startY + 318);
  ctx.fillText("B", startX + 147, startY + 378);
  ctx.font = "18px Arial";
  ctx.fillStyle = "violet";
  //name label
  ctx.fillText("4 X 1 Multiplexer", startX + 52, startY + 170);
  ctx.fillStyle = "red";
  ctx.fillText("Y", startX + 210, startY + 170);
}
