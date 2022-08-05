const root = document.querySelector('body')
const eyeLeft = document.querySelector('.eye_left');
const eyeRight = document.querySelector('.eye_right')

root.addEventListener('mousemove', (event)=>{
    const rectLeft = eyeLeft.getBoundingClientRect();

    let divX = (rectLeft.width) / 2 + rectLeft.x ;
    let divY = (rectLeft.height) / 2 + rectLeft.y;
    let radianDegrees = Math.atan2(event.pageY - divY, event.pageX - divX);
    eyeLeft.style.transform = `rotate(${radianDegrees}rad)`;
})

root.addEventListener('mousemove',(event)=>{
    const rectRight = eyeRight.getBoundingClientRect();

    let divX = (rectRight.width) / 2 + rectRight.x ;
    let divY = (rectRight.height) / 2 + rectRight.y;
    let radianDegrees = Math.atan2(event.pageY - divY, event.pageX - divX);
    eyeRight.style.transform = `rotate(${radianDegrees}rad)`;
})

