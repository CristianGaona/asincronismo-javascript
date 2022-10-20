function showMessage() {
  return message = console.log('Log after 2s');
}
function runCode(callback) {
  setTimeout(() => {
     callback();
  }, 2000);
}
runCode(showMessage);