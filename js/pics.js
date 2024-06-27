const pictures = [
    'img/marcel.jpg',
    'img/marcel2.jpg',
    'img/marcel3.jpg',
    'img/marcel4.jpg'
];

const pictureElement = document.querySelector('.picture');

let currentPictureIndex = 0;

function changePicture() {
    currentPictureIndex = (currentPictureIndex + 1) % pictures.length;
    pictureElement.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
}

// Add an event listener for the end of the animation
pictureElement.addEventListener('animationiteration', changePicture);

// Initial picture
pictureElement.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;