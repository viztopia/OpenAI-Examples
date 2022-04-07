
import { authOpenai, completePrompt, filterPrompt, extractPrompt } from '../openai/config.mjs';

const inputText = "Ada loves hotpot and boxing.";

const openai = authOpenai();

console.log("Filtering input text.");
const isUnsave = await filterPrompt(openai, inputText);
if (isUnsave == 0){
  console.log("Input text safe. extracting info.");

  const extractedInfo = await extractPrompt(openai, inputText);
  console.log(extractedInfo);

  let promptText = undefined; //change your prompt here
  const ouput = await completePrompt(openai, "text-curie-001", promptText);
  console.log(ouput);
} else {
  console.log("Input text unsafe.");
}

