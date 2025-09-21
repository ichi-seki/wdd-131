const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Added by <strong>JavaScript</strong>';
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.src = 'https://placekitten.com/200/300';
newImage.alt = 'A cute kitten';
document.body.appendChild(newImage);