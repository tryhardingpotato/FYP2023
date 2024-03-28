var canvas = document.getElementById("mycanvas");
canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

const option_ids = [1, 2, 3, 4].map((id) => `option${id}`);

const qns = [
  {
    question:
      "Given the above logic circuit, find the minterms of the logic function F(A,B,C) ",
    question_type: "2x1",

  },
  {
    question:
      "Given the above logic circuit, find the minterms of the logic function F(A,B,C)"  /*"Given a 4x1 Multiplexer of Y = f(A,B,C), where I0 = ${I0} , I1 = ${I1} , I2 = ${I2}, I3 = ${I3}, S0 = ${S0}, S1 = ${S1}, what are the minterms of Y"*/,
    question_type: "4x1",
  },
];

var current_qn = 0;

const map_letter_to_no_2x1 = (letter) => {
  const letterMapping = {
    'A': 1,
    'A`': 0,
    'B': 1,
    'B`': 0,
    'C': 1,
    'C`': 0,
  };
  return letterMapping[letter];
};

const generate_2x1_qn = () => {
  //Mapping for S0,I0,I1 , where S0 = A = 1 or A` = 0, I0 = B or B`, I1= C or C`
  const X = getRandomVariable(["A", "A`"]);
  const Y = getRandomVariable(["B", "B`"]);
  const Z = getRandomVariable(["C", "C`"]);
  console.log(`where I0 = ${Y} , I1 = ${Z} , S0 = ${X}`);
  const num_x = map_letter_to_no_2x1(X);
  const num_y = map_letter_to_no_2x1(Y);
  const num_z = map_letter_to_no_2x1(Z);
  console.log(`where I0 = ${num_y} , I1 = ${num_z} , S0 = ${num_x}`);
  const correct_ans = decimal_to_binary_2x1(num_y, num_z, num_x);
  console.log(correct_ans);

  console.log(X, Y, Z);
  // Generate random options with one correct answer
  const options = generateRandomOptions(correct_ans);
  return { X, Y, Z, options, correct_ans };

};

const decimal_to_binary_2x1 = (num_y, num_z, num_x,) => {
  const combinations = [];
  for (let i = 0; i < 8; i++) {
    const binary = i.toString(2).padStart(3, '0');
    console.log(binary);
    // Invert selector if num_x is 0
    const selector = num_x === 0 ? (parseInt(binary[0]) === 0 ? 1 : 0) : parseInt(binary[0]);
    // Invert input0 if num_y is 0
    const input0 = num_y === 0 ? (parseInt(binary[1]) === 0 ? 1 : 0) : parseInt(binary[1]);
    // Invert input1 if num_z is 0
    const input1 = num_z === 0 ? (parseInt(binary[2]) === 0 ? 1 : 0) : parseInt(binary[2]);

    const result = mux2x1logic(input0, input1, selector);
    if (result === 1) {
      combinations.push(i);
    }

  }
  return combinations;
}


const mux2x1logic = (input0, input1, selector) => {
  if (selector === 0) {
    return input0;
  } else if (selector === 1) {
    return input1;
  }
}


//do something similar to 2x1 mux. 
const map_letter_to_no_4x1 = (letter) => {
  const letterMapping = {
    'A': 1,
    'A`': 0,
    'B': 1,
    'B`': 0,
    'C': 1,
    'C`': 0,

  };
  return letterMapping[letter];
};

const generate_4x1_qn = () => {
  //Mapping for S0, S1,I0,I1,,I2,I3 where S0 = A = 1 or A` = 0, etc, etc. 
  const S1 = getRandomVariable(["A", "A`"]);
  const S0 = getRandomVariable(["B", "B`"]);
  const I0 = getRandomVariable(["A", "A`", "B", "B`", "C", "C`"]);
  const I1 = getRandomVariable(["A", "A`", "B", "B`", "C", "C`"]);
  const I2 = getRandomVariable(["A", "A`", "B", "B`", "C", "C`"]);
  const I3 = getRandomVariable(["A", "A`", "B", "B`", "C", "C`"]);
  console.log(`where I0 = ${I0} , I1 = ${I1} , I2 = ${I2}, I3 = ${I3} , S0 = ${S0} , S1 = ${S1}`);
  const logic_S0 = map_letter_to_no_4x1(S0); //in 0 or 1
  const logic_S1 = map_letter_to_no_4x1(S1);
  const logic_I0 = map_letter_to_no_4x1(I0);
  const logic_I1 = map_letter_to_no_4x1(I1);
  const logic_I2 = map_letter_to_no_4x1(I2);
  const logic_I3 = map_letter_to_no_4x1(I3);
  console.log(`where I0 = ${logic_I0} , I1 = ${logic_I1}, I2 = ${logic_I2}, I3 = ${logic_I3} , S0 = ${logic_S0} , S1 = ${logic_S1}`);
  const correct_ans = decimal_to_binary_4x1(I0, I1, I2, I3, S0, S1, logic_I0, logic_I1, logic_I2, logic_I3);
  //console.log(correct_ans);
  // Generate random options with one correct answer
  const options = generateRandomOptions(correct_ans);
  return { S0, S1, I0, I1, I2, I3, options, correct_ans };

};

const decimal_to_binary_4x1 = (I0, I1, I2, I3, S0, S1, logic_I0, logic_I1, logic_I2, logic_I3) => {
  const combinations = [];
  for (let i = 0; i < 8; i++) {
    const binary = i.toString(2).padStart(3, '0');
    const selector1 = parseInt(binary[0]); // A

    const selector0 = parseInt(binary[1]); // B

    const input = parseInt(binary[2]); // C


    const result = mux4x1logic(selector0, selector1, input, I0, I1, I2, I3, S0, S1, logic_I0, logic_I1, logic_I2, logic_I3);
    console.log(result)
    if (result === 1) {
      combinations.push(i);
    }
    // add a condition where if there are 0 minterms, generate the question again

  }
  if (combinations.length === 0) {
    generate_4x1_qn();//decimal_to_binary_4x1();
  }
  console.log(combinations);
  return combinations;
};

const mux4x1logic = (selector0, selector1, input, I0, I1, I2, I3, S0, S1, logic_I0, logic_I1, logic_I2, logic_I3) => {
  let invselect0 = 0;
  let invselect1 = 0;
  let invinput = 0;

  if (S0 === 'B`') {
    invselect0 = +!selector0; //inverts of selector0 is 1. 
  }
  else if (S0 === 'B') {
    invselect0 = selector0;
  }
  if (S1 === 'A`') {
    invselect1 = +!selector1; //invertsd if selecter1 is 1
  }
  else if (S1 === 'A') {
    invselect1 = selector1;
  }

  if (I0 === 'C`' || I1 === 'C`' || I2 === 'C`' || I3 === 'C`') {
    invinput = +!input;  //inverts inputs if its 1. 
  }

  console.log("binary inputs:", selector1, selector0, input);
  console.log("inverted inputs (if have):", invselect1, invselect0, invinput);
  // check this part. When selector is inverted, the order of priority of input changes. eg if after inversion, minterm 0 will be I2 if its selector is A` and B. 
  if (invselect1 === 0 && invselect0 === 0) {
    console.log("I0:", I0);
    const answer = conditions_4x1(I0, logic_I0, input, selector1, selector0);
    console.log("I0 output:", answer);
    return answer;
  } else if (invselect1 === 0 && invselect0 === 1) {
    console.log("I1:", I1);
    const answer = conditions_4x1(I1, logic_I1, input, selector1, selector0);
    console.log("I1 output:", answer);
    return answer;
  } else if (invselect1 === 1 && invselect0 === 0) {
    console.log("I2:", I2);
    const answer = conditions_4x1(I2, logic_I2, input, selector1, selector0);
    console.log("I2 output:", answer);
    return answer;
  } else if (invselect1 === 1 && invselect0 === 1) {
    console.log("I3:", I3);
    const answer = conditions_4x1(I3, logic_I3, input, selector1, selector0);
    console.log("I3 output:", answer);
    return answer;
  }
};


let conditions_4x1 = (datalines, logic, input, selector1, selector0) => {
  console.log("Reached function condition_4x1");
  let inputValue = 0;
  console.log("Logic of dataline:", logic); //  0 or 1. Datalines are letters 
  //Select 1 (A)
  if (datalines === "A") {
    inputValue = selector1;
  }
  else if (datalines === "A`") {
    inputValue = +!selector1;
  }

  else if (datalines === "B") {
    inputValue = selector0;
  }
  else if (datalines === "B`") {
    inputValue = +!selector0;
  }
  else if (datalines === "C") {
    inputValue = input;
  }
  else if (datalines === "C`") {
    inputValue = +!input;
  }



  return inputValue;
};

const getRandomMinterm = () => Math.floor(Math.random() * 8);
const generateRandomOptions = (correct_ans) => {
  const options = [];
  options.push(correct_ans);

  console.log(correct_ans.length)

  //generate random options with 1 correct ans. 
  while (options.length < 4) //One loop per option
  {
    const randomOption = [];
    for (let i = 0; i < correct_ans.length; i++) //loop to generate minterms per option.
    {
      let newRandom = getRandomMinterm();
      while (randomOption.includes(newRandom)) //remove duplicates in each option
      {
        newRandom = getRandomMinterm();
      }

      randomOption.push(newRandom); // only push the amt of options length. but i want it to be 4 options
    }


    randomOption.sort();
    console.log("Random options:", randomOption)
    // Check for duplicates in options array
    const isDuplicate = options.some(option => JSON.stringify(option) === JSON.stringify(randomOption));

    if (!isDuplicate) {
      options.push(randomOption);
    }

    //console.log(randomOption);
  }
  // Shuffle options and update button text
  const shuffledOptions = shuffle(options);
  option_ids.forEach((option, index) => {
    const btn = document.getElementById(option);
    btn.innerText = btn.innerText = " Y = Σm(" + shuffledOptions[index] + ")";
    btn.onclick = () => check_answer_2x1(option, correct_ans);
  });

};



const check_answer_2x1 = (option_id, correct_ans) => {
  const clicked_btn = document.getElementById(option_id);
  console.log(clicked_btn.innerText);
  if (clicked_btn.innerText !== "Y = Σm(" + correct_ans + ")") {
    clicked_btn.style.backgroundColor = "red";

  }
  option_ids.forEach((option) => {
    const current_btn = document.getElementById(option);
    //current_btn.disabled = true;
    current_btn.classList.add('disabled-pointer-events'); // Add the class to disable pointer events
    if ("Y = Σm(" + correct_ans + ")" === current_btn.innerText) {
      current_btn.style.backgroundColor = "green";
      return;
    }

  });
};


const getRandomVariable = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const load_qn = (question, question_type) => {
  const { draw, qn } = question_mapping_mux[question_type];
  const { S0, S1, I0, I1, I2, I3, X, Y, Z, correct_ans } = qn();
  let formattedQuestion = question
    .replace("F(A,B,C)", `<span class="output">&nbspF(A,B,C)&nbsp</span>`)

  document.getElementById("question").innerHTML = formattedQuestion;

  console.log(question_type);
  if (question_type === "2x1") {
    draw(X, Y, Z);
  }
  else {
    draw(S0, S1, I0, I1, I2, I3);
  }
};


const question_mapping_mux = {
  "2x1": {
    draw: draw2x1MUX,
    qn: generate_2x1_qn,
  },
  "4x1": {
    draw: draw4x1Mux,
    qn: generate_4x1_qn,
  },
};

const next_qn = () => {
  resetOptions();
  //current qn = 0.
  if (current_qn >= qns.length) {
    current_qn = 0;
    shuffleQuestions(qns);
  }
  const qn = qns[current_qn];
  load_qn(qn.question, qn.question_type);
  ++current_qn;
};


document.addEventListener("DOMContentLoaded", function () {
  next_qn();
});

