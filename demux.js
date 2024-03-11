var canvas = document.getElementById("mycanvas");
canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

const option_ids = [1, 2, 3, 4].map((id) => `option${id}`);

const qns = [
  {
    question:
      "Given an 1-to-2 Decoder circuit, what are the Minterms of Y?",
    question_type: DecoderType1to2,

  },
  {
    question:
      "Given an 2-to-4 Decoder circuit, what are the Minterms of Y?",
    question_type: DecoderType2to4,
  },
];
var current_qn = 0;


const generate_1_to_2_qn = () => {

  //to get the correct ans: 1. check active high/active low, 2. check gates status. 3. Check number of connections. 
  const decoder_status = draw1to2Decoder(setting, gates);
  console.log(decoder_status[0], decoder_status[1], decoder_status[2]); //0 = connection1, 1 = connection2, 2 = Get gates setting (NOR/OR/NAND/AND)
  const correct_ans = minterms_calculation1to2(decoder_status[2], decoder_status[0], decoder_status[1], setting);
  return correct_ans;
}


const minterms_calculation1to2 = (gate_status, connection1, connection2, setting) => {  //returning MINTERM/ maxterm 


  if (gate_status == GateTypeOr) {
    if (setting == GateSettingHigh) {
      if (connection1 && connection2) {
        return [0, 1];
      } if (connection1 && !connection2) {
        return [0];
      } if (!connection1 && connection2) {
        return [1];
      }
    } if (setting == GateSettingLow) {
      if (connection1 && connection2) {
        return AnsNoMinterms;
      } if (connection1 && !connection2) {
        return [1];
      } if (!connection1 && connection2) {
        return [0];
      }
    }
  } if (gate_status == GateTypeNor) {
    if (setting == GateSettingHigh) {
      if (connection1 && connection2) {
        return AnsNoMinterms;
      } if (connection1 && !connection2) {
        return [1];
      } if (!connection1 && connection2) {
        return [0];
      }
    } if (setting == GateSettingLow) {
      if (connection1 && connection2) {
        return [0, 1];
      } if (connection1 && !connection2) {
        return [0];
      } if (!connection1 && connection2) {
        return [1];
      }
    }
  } if (gate_status == GateTypeAnd) {
    if (setting == GateSettingHigh) {
      if (connection1 && connection2) {
        return [0, 1];
      } if (connection1 && !connection2) {
        return AnsNoMinterms;
      } if (!connection1 && connection2) {
        return AnsNoMinterms;
      }
    } if (setting == GateSettingLow) {
      if (connection1 && connection2) {
        return AnsNoMinterms;
      } if (connection1 && !connection2) {
        return [1];
      } if (!connection1 && connection2) {
        return [0];
      }
    }
  } if (gate_status == GateTypeNand) {
    if (setting == GateSettingHigh) {
      if (connection1 && connection2) {
        return AnsNoMinterms;
      } if (!connection1 && connection2) {
        return [0];
      } if (connection1 && !connection2) {
        return [1];
      }
    } if (setting == GateSettingLow) {
      if (connection1 && connection2) {
        return [0, 1];
      } if (!connection1 && connection2) {
        return [1];
      } if (connection1 && !connection2) {
        return [0];
      }
    }
  }


}

const generate_2_to_4_qn = () => {
  const decoder_status = draw2to4Decoder(setting, gates); //returns 5 values: connection1 ,2,3,4 and gate (OR/NOR/AND/NAND) Returns an array
  console.log(decoder_status[0], decoder_status[1], decoder_status[2], decoder_status[3], decoder_status[4]); //0 = connection1, 1 = connection2, 2 = connection3, 3= connection4, 4 = Get gates setting (NOR/OR/NAND/AND)
  const correct_ans = minterms_calculation2to4(decoder_status[4], decoder_status[0], decoder_status[1], decoder_status[2], decoder_status[3], setting);
  console.log('Correctans for 2to4:', correct_ans);
  return correct_ans;
}

const minterms_calculation2to4 = (gate_status, connection1, connection2, connection3, connection4, setting) => {
  const combinedValue = (connection1 ? 1 : 0) | (connection2 ? 2 : 0) | (connection3 ? 4 : 0) | (connection4 ? 8 : 0);
  console.log(gate_status, setting);
  if (gate_status == GateTypeOr || gate_status === GateTypeNor) {
    if ((setting == GateSettingHigh && gate_status == GateTypeOr) || (setting === GateSettingLow && gate_status === GateTypeNor)) {
      switch (combinedValue) {
        case 15: console.log("Case 15"); return [0, 1, 2, 3];
        case 14: console.log("Case 14"); return [1, 2, 3];
        case 13: console.log("Case 13"); return [0, 2, 3];
        case 12: console.log("Case 12"); return [2, 3];
        case 11: console.log("Case 11"); return [0, 1, 3];
        case 10: console.log("Case 10"); return [1, 3];
        case 9: console.log("Case 9"); return [0, 3];
        case 8: console.log("Case 8"); return [3];
        case 7: console.log("Case 7"); return [0, 1, 2];
        case 6: console.log("Case 6"); return [1, 2];
        case 5: console.log("Case 5"); return [0, 2];
        case 4: console.log("Case 4"); return [2];
        case 3: console.log("Case 3"); return [0, 1];
        case 2: console.log("Case 2"); return [1];
        case 1: console.log("Case 1"); return [0];
        case 0: console.log("Case 0"); return AnsNoMinterms;
      }
    } else if ((setting === GateSettingLow && gate_status === GateTypeOr) || (setting === GateSettingHigh && gate_status === GateTypeNor)) {
      switch (combinedValue) {
        case 15: console.log("Case 15"); return AnsNoMinterms;
        case 14: console.log("Case 14"); return [0];
        case 13: console.log("Case 13"); return [1];
        case 12: console.log("Case 12"); return [0, 1];
        case 11: console.log("Case 11"); return [2];
        case 10: console.log("Case 10"); return [0, 2];
        case 9: console.log("Case 9"); return [1, 2];
        case 8: console.log("Case 8"); return [0, 1, 2];
        case 7: console.log("Case 7"); return [3];
        case 6: console.log("Case 6"); return [0, 3];
        case 5: console.log("Case 5"); return [1, 3];
        case 4: console.log("Case 4"); return [0, 1, 3];
        case 3: console.log("Case 3"); return [2, 3];
        case 2: console.log("Case 2"); return [0, 2, 3];
        case 1: console.log("Case 1"); return [1, 2, 3];
        case 0: console.log("Case 0"); return [0, 1, 2, 3];
      }
    }
  }
  // Handle AND & NAND
  if (gate_status == GateTypeAnd || gate_status === GateTypeNand) {
    if ((setting == GateSettingHigh && gate_status == GateTypeAnd) || (setting == GateSettingLow && gate_status == GateTypeNand)) {
      switch (combinedValue) {
        case 15: console.log("Case 15"); return [0, 1, 2, 3];
        case 14: console.log("Case 14"); return [1, 2, 3];
        case 13: console.log("Case 13"); return [0, 2, 3];
        case 12: console.log("Case 12"); return [2, 3];
        case 11: console.log("Case 11"); return [0, 1, 3];
        case 10: console.log("Case 10"); return [1, 3];
        case 9: console.log("Case 9"); return [0, 3];
        case 8: console.log("Case 8"); return [3];
        case 7: console.log("Case 7"); return [0, 1, 2];
        case 6: console.log("Case 6"); return [1, 2];
        case 5: console.log("Case 5"); return [0, 2];
        case 4: console.log("Case 4"); return [2];
        case 3: console.log("Case 3"); return [0, 1];
        case 2: console.log("Case 2"); return [1];
        case 1: console.log("Case 1"); return [0];
        case 0: console.log("Case 0"); return AnsNoMinterms;
      }
    }
    else if ((setting == GateSettingLow && gate_status == GateTypeAnd) || (setting == GateSettingHigh && gate_status == GateTypeNand)) {
      switch (combinedValue) {
        case 15: console.log("Case 15"); return AnsNoMinterms;
        case 14: console.log("Case 14"); return [0];
        case 13: console.log("Case 13"); return [1];
        case 12: console.log("Case 12"); return [0, 1];
        case 11: console.log("Case 11"); return [2];
        case 10: console.log("Case 10"); return [0, 2];
        case 9: console.log("Case 9"); return [1, 2];
        case 8: console.log("Case 8"); return [0, 1, 2];
        case 7: console.log("Case 7"); return [3];
        case 6: console.log("Case 6"); return [0, 3];
        case 5: console.log("Case 5"); return [1, 3];
        case 4: console.log("Case 4"); return [0, 1, 3];
        case 3: console.log("Case 3"); return [2, 3];
        case 2: console.log("Case 2"); return [0, 2, 3];
        case 1: console.log("Case 1"); return [1, 2, 3];
        case 0: console.log("Case 0"); return [0, 1, 2, 3];
      }
    }
  }
}



/*const check_answer_2to4 = (option, correct_ans) => {
  // TODO //
  const clicked_btn = document.getElementById(option_id);
  console.log(clicked_btn.innerText);
  if (clicked_btn.innerText !== "Y = Σm(" + correct_ans + ")") {
    clicked_btn.style.backgroundColor = "red";
  }
  option_ids.forEach((option) => {
    const current_btn = document.getElementById(option);
    current_btn.classList.add('disabled-pointer-events'); // Add the class to disable pointer events
    if ("Y = Σm(" + correct_ans + ")" === current_btn.innerText || current_btn.innerText === correct_ans) {
      current_btn.style.backgroundColor = "green";
      return;
    }

  });
}*/

const generaterandomlength = (x) => {
  return Math.floor(Math.random() * (x - 1) + 1);
}

const generate_random_ans_2to4 = (correct_ans) => { //see code might have error
  const options = [];
  options.push(correct_ans);

  //generate random options with 1 correct ans. 
  while (options.length < 4) //One loop per option
  {
    const randomOption = [];
    for (let i = 0; i < generaterandomlength(correct_ans.length); i++) //loop to generate minterms per option.
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

  }
  // Shuffle options and update button text
  const shuffledOptions = shuffle(options);
  option_ids.forEach((option, index) => {
    const btn = document.getElementById(option);
    btn.innerText = btn.innerText = " Y = Σm(" + shuffledOptions[index] + ")";
    btn.onclick = () => check_answer_1to2(option, correct_ans);
  });
}

const getRandomMinterm = () => Math.floor(Math.random() * 4);

const generate_random_ans_1to2 = (correct_ans) => {
  const options = [AnsNoMaxterms, AnsNoMinterms, [0], [1], [0, 1]].filter((e) => e != correct_ans); //removes correct ans
  console.log('correctans:', correct_ans);

  // Shuffle options and update button text
  const shuffledOptions = shuffle(options);
  const uniqueOptions = shuffledOptions.slice(0, 3);
  const isCorrectAnsDuplicate = uniqueOptions.some(opt => JSON.stringify(opt) === JSON.stringify(correct_ans));
  if (!isCorrectAnsDuplicate) {
    uniqueOptions.push(correct_ans); //add correct ans after shuffling.
  }

  shuffledOptions.forEach(option => {
    if (!uniqueOptions.some(opt => opt[0] === option[0])) {
      uniqueOptions.push(option);
    }
  });
  option_ids.forEach((option, index) => {
    const btn = document.getElementById(option);
    const optionText = uniqueOptions[index] ?
      uniqueOptions[index] !== AnsNoMinterms && uniqueOptions[index] !== AnsNoMaxterms ?
        "Y = Σm(" + uniqueOptions[index] + ")" : uniqueOptions[index] :
      "None of the above";

    btn.innerText = optionText;
    btn.onclick = () => check_answer_1to2(option, correct_ans);
  });
}

const check_answer_1to2 = (option_id, correct_ans) => {
  const clicked_btn = document.getElementById(option_id);
  console.log(clicked_btn.innerText);
  if (clicked_btn.innerText !== "Y = Σm(" + correct_ans + ")") {
    clicked_btn.style.backgroundColor = "red";

  }
  option_ids.forEach((option) => {
    const current_btn = document.getElementById(option);
    current_btn.classList.add('disabled-pointer-events'); // Add the class to disable pointer events
    if ("Y = Σm(" + correct_ans + ")" === current_btn.innerText || current_btn.innerText === correct_ans) {
      current_btn.style.backgroundColor = "green";
      return;
    }

  });
};


const get_Random_gates = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.5 ? GateTypeOr : GateTypeAnd;
}
const get_Random_setting = () => {
  const randomNumber = Math.random();
  // If the random number is less than 0.5, return "low", otherwise return GateSettingHigh
  return randomNumber < 0.5 ? GateSettingLow : GateSettingHigh;
}
let gates;
let setting;

const question_mapping_demux = {
  [DecoderType1to2]: {
    draw: draw1to2Decoder,
    qn: generate_1_to_2_qn,
  },
  [DecoderType2to4]: {
    draw: draw2to4Decoder,
    qn: generate_2_to_4_qn,
  }
};
const load_qn = (question, question_type) => {
  gates = get_Random_gates();
  setting = get_Random_setting();
  const { draw, qn } = question_mapping_demux[question_type];
  const correct_ans = qn();
  if (question_type === DecoderType1to2) {
    generate_random_ans_1to2(correct_ans);
  } else if (question_type === DecoderType2to4) {
    generate_random_ans_2to4(correct_ans);
  }
  //generate_random_ans_1to2(correct_ans);
  document.getElementById("question").innerHTML = question;
  //draw(setting, gates);
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

