const menuButton = document.querySelector('#dropbtn');
const contentButton = document.querySelector('#content');

function dropdown(){
    contentButton.classList.toggle('hide');
}

menuButton.addEventListener('click', dropdown);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close_viewer">X</button>
        <img src='${pic}' alt='${alt}' class="viewer_img">
    </div>`;
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

function viewHandler(event) {
    const clickedElement = event.target;
    const splitSrc = clickedElement.src.split('_');
    const toBigPic = splitSrc[0] + '_big.jpeg'
    document.body.insertAdjacentHTML('afterbegin',viewerTemplate(toBigPic, clickedElement.alt));
    document.querySelector('.close_viewer').addEventListener('click', closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector('.viewer')
    if (viewer) {
        viewer.remove();
    }
}