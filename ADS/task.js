const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function changeRotator() {

    rotatorCases[currentIndex].classList.remove('rotator__case_active');

    currentIndex = (currentIndex + 1) % rotatorCases.length;

    rotatorCases[currentIndex].classList.add('rotator__case_active');

    const currentCase = rotatorCases[currentIndex];
    currentCase.style.color = currentCase.dataset.color;

    setTimeout(changeRotator, currentCase.dataset.speed);
}

setTimeout(changeRotator, 1000);
