import anime from 'animejs';

var bubble = document.getElementsByClassName('bubble');
var pourIn = document.getElementsByClassName('pour-in');
var juice = document.getElementsByClassName('juice');
var activate = document.getElementById('pour');
var drink = document.getElementById('drink');

var randomSpeed = function () {
  return anime.random(500, 2000) + 'ms';
};

var randomScale = function () {
  return anime.random(0.1, 1);
};

function fizz() {
  if (drink.style.display === 'block') {
    anime({
      targets: bubble,
      translateY: [5, -250],
      easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
      delay: randomSpeed,
      duration: randomSpeed,
      loop: false,
      scale: [randomScale, randomScale],
      complete: fizz,
    });
  } else {
    return;
  }
}

var pour = anime.timeline({
  easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
  autoplay: true,
});

pour.add({
  targets: pourIn,
  translateY: [-550, 0],
  duration: 2800,
});

pour.add(
  {
    targets: juice,
    border: [0, '0.3rem solid magenta'],
    height: [0, '75%'],
    duration: 2000,
    easing: 'spring(1, 40, 10, 0)',
  },
  2700
);

pour.add(
  {
    targets: pourIn,
    scaleY: 0,
    duration: 2000,
  },
  3200
);

pour.add({
  targets: bubble,
  translateY: [5, -250],
  delay: randomSpeed,
  duration: randomSpeed,
  loop: false,
  scale: [randomScale, randomScale],
  complete: fizz,
});

// function play() {
//   pour.restart();
//   setTimeout(function () {
//     activate.style.display = 'none';
//     drink.style.display = 'block';
//   }, 5000);
// }

// function drain() {
//   anime({
//     targets: juice,
//     border: ['0.3rem solid magenta', 0],
//     height: ['75%', 0],
//     easing: 'easeInQuad',
//     duration: 1000,
//   });
//   setTimeout(function () {
//     activate.style.display = 'block';
//     drink.style.display = 'none';
//   }, 1000);
// }

// activate.addEventListener('click', play);
// //drink.addEventListener('click', drain);
