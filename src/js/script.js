const $nextButton = document.querySelector("#next");
const $prevButton = document.querySelector("#prev");
const $testimonalImage = document.querySelector('#testimonial-image');
const $tesimonalText = document.querySelector('#testimonial-text');
const $testimonalName = document.querySelector('#testimonial-name');
const $testimonalCareer = document.querySelector('#testimonial-career');

$nextButton.addEventListener('click', () => {
    $testimonalImage.src = "./src/images/image-john.jpg";
    $tesimonalText.innerHTML = "<q> If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. </q>";
    $testimonalName.innerHTML = "John Tarkpor";
    $testimonalCareer.innerHTML = "Junior Front-end Developer";
});

$prevButton.addEventListener('click', () => {
    $testimonalImage.src = "./src/images/image-tanya.jpg";
    $tesimonalText.innerHTML = "<q> I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. </q>";
    $testimonalName.innerHTML = "Tanya Sinclair";
    $testimonalCareer.innerHTML = "UX Engineer";
});