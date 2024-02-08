'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM READY")
    const moodForm = document.querySelector('#moodRing');
    const userMood = document.querySelector('#userMood');

    moodForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputMood = moodForm.querySelector('input[name=mood]:checked');
        userMood.innerText = inputMood.value;

        switch(inputMood.value) {
            case 'Very Happy':
                toggleClass(userMood, 'very-happy-mood', ['happy-mood', 'not-so-happy-mood']);
                break;
            case 'Happy':
                toggleClass(userMood, 'happy-mood', ['very-happy-mood', 'not-so-happy-mood']);
                break;
            case 'Not So Happy':
                toggleClass(userMood, 'not-so-happy-mood', ['very-happy-mood', 'happy-mood']);
                break;
            default:
                break;
        }
    });

});

function toggleClass(element, className, classesToRemove) {
    // console.log(element, className, classesToRemove);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }

    if (classesToRemove.length > 0) {
        classesToRemove.forEach(function (className) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            }
        });
    }
}