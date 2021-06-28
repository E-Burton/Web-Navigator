const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = null;
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`User input: ${action} \n Current Page: ${currentPage} \n Top Back Page: ${backPages.head} \n Top Next Page: ${nextPages.head}`);
}

function newPage(page) {
  backPages.push(currentPage);
  currentPage = page;
  while (nextPages !== null) {
    nextPages.pop();
  }
  showCurrentPage();
}

function backPage() {
  nextPage.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('Back');
}

function nextPage() {
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

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
