const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Starting Page";
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`User input: ${action} \n Current Page: ${currentPage} \n Top Back Page: ${backPages.peek()} \n Top Next Page: ${nextPages.peek()}`);
}

function newPage(page) {
  // console.log(`I'm in the new page function!`)
  backPages.push(currentPage);
  currentPage = page;
  while (nextPages.size > 0) {
    // console.log(`I'm in the while function!`);
    nextPages.pop();
  }
  showCurrentPage('New Page');
}

function backPage() {
  // console.log(`I'm in the back pages function!`)
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('Back');
}

function nextPage() {
  // console.log(`I'm in the next pages function!`)
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage('Next')
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;

while (!finish) {
  let instructions = baseInfo;
  if (backPages.size > 0) {
    instructions += `, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (nextPages.size > 0) {
    instructions += `, ${nextInfo}`
    showNext = true;
  } else {
    showNext = false;
  }
  
  instructions += `, ${quitInfo}`;
  console.log(instructions);

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  
  if(lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q') {
    newPage(answer);
  } else if (lowerCaseAnswer === 'b') {
    if (showBack) {
      backPage();
    } else {
      console.log("Sorry, there is no previous page to visit.");
    }
  } else if (lowerCaseAnswer === 'n') {
    if (showNext) {
      nextPage();
    } else {
      console.log("Sorry, there is no next page to visit.")
    }
  } else if (lowerCaseAnswer === 'q') {
    finish = true;
  }
}
  
  