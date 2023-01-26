const paragraphs = document.querySelectorAll('.paragraph');

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = "New text for paragraph " + (i+1);
}

const headers = document.querySelectorAll('h1, h3');

for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = "New text for header " + (i+1);
  }
  