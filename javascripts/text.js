const editable = document.querySelector('.changing-text');

const words = [
  'Hi...',
  'Welcome to my Java development portfolio!',
  'My name is Deep',
  'I am a skilled Java developer',
  'I am a BCA Student',
  'Here you will find my projects...'
];
const animationTimeInms = 45;
const delayInms = 1000;

function close(index) {
  editable.textContent = words[index % words.length];
  const interval = setInterval(function() {
    const text = editable.textContent;
    if (!text) {
      clearInterval(interval);
      setTimeout(function() {
        open(++index);
      }, 100);
    }
    editable.textContent = text.slice(0, -1);
  }, animationTimeInms);
}

function open(index) {
  const initialText = words[index % words.length];
  let i = 1;
  editable.textContent = '';
  const interval = setInterval(function() {
    const text = editable.textContent;
    console.log(text.length === initialText.length);
    if (text.length === initialText.length) {
      clearInterval(interval);
      setTimeout(function() {
        close(index);
      }, delayInms);
    }
    editable.textContent = initialText.slice(0, i++);
  }, animationTimeInms);
}

function writeWords() {
  const i = 0;
  open(i);
}

writeWords();