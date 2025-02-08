// //INcrease Number Onscrolling

// let number = document.querySelectorAll('.stats .number');
// let section = document.querySelector('.stats');
// let start = false;

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!start) {
//       number.forEach((num) => startCount(num));
//     }
//     start = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }

// // // // //INcrease Number Onscrolling [02]

// let price = document.querySelectorAll('.pricing .amount');
// let sectionPricing = document.querySelector('.pricing');

// window.onscroll = function () {
//   if (window.scrollY >= sectionPricing.offsetTop) {
//     if (!start) {
//       price.forEach((numo) => startpricing(numo));
//     }
//     start = true;
//   }
// };

//  function startpricing(el) {
//   let result = parseInt(el.dataset.result);
//   let counto = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == result) {
//       clearInterval(counto);
//     }
//   }, 3000 / result);
// }

//////////////////////////////////////////////////////////////////////////////////////////
// chatgtp

// let sections = [
//   {
//     elements: document.querySelectorAll('.stats .number'),
//     section: document.querySelector('.stats'),
//     // start: false
//   },
//   {
//     elements: document.querySelectorAll('.pricing .amount'),
//     section: document.querySelector('.pricing'),
//     start: false,
//   },
// ];

// window.onscroll = function () {
//   sections.forEach(({ elements, section, start }) => {
//     if (!start && window.scrollY >= section.offsetTop) {
//       elements.forEach((num) => {
//         if (section.classList.contains('stats')) {
//           startCount(num);
//         } else {
//           startpricing(num);
//         }
//       });
//       start = true; // تحديث الحالة
//     }
//   });
// };

// function startCount(el) {
//   let goal = parseInt(el.dataset.goal);
//   let count = setInterval(() => {
//     el.textContent++;
//     if (parseInt(el.textContent) >= goal) {
//       el.textContent = goal; // تأكد من القيمة النهائية
//       clearInterval(count);
//     }
//   }, 4000 / goal);
// }

// function startpricing(el) {
//   let result = parseInt(el.dataset.result);
//   let counto = setInterval(() => {
//     el.textContent++;
//     if (parseInt(el.textContent) >= result) {
//       el.textContent = result; // تأكد من القيمة النهائية
//       clearInterval(counto);
//     }
//   }, 4000 / result);
// }
///////////////////////////////////////////////////////////////////////////////////

//Random Background-color

let hexcolor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let colorParts = [];

for (let i = 0; i < 6; i++) {
  colorParts.push(hexcolor[Math.floor(Math.random() * hexcolor.length)]);
}
let finalClor = `#${colorParts.join('')}`;
console.log(finalClor);

//Strat Page Scroller

let el = document.querySelector('.scroller');
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(height);

// chang Background-Color
el.style.backgroundColor = finalClor;

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop)
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// قسم الأرقام
let number = document.querySelectorAll('.stats .number');
let section = document.querySelector('.stats');
let startStats = false;

window.onscroll = function () {
  // Number Scrolling

  if (window.scrollY >= section.offsetTop) {
    if (!startStats) {
      number.forEach((num) => startCount(num));
      startStats = true; // تحديث الحالة
    }
  }

  // pricing Scrolling
  let price = document.querySelectorAll('.pricing .amount');
  let sectionPricing = document.querySelector('.pricing');
  let startPricing = false;

  if (window.scrollY >= sectionPricing.offsetTop + 800) {
    if (!startPricing) {
      price.forEach((numo) => startpricing(numo));
      startPricing = true; // تحديث الحالة
    }
  }

  // Skills Animate Width

  let sectionSkills = document.querySelector('.our-skills');
  let spanProgress = document.querySelectorAll('.the-progress span');

  if (window.scrollY >= sectionSkills.offsetTop + 800) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Start Button Up
  let spanUp = document.querySelector('.up-up');

  if (window.scrollY >= 1000) {
    spanUp.classList.add('show');
  } else {
    spanUp.classList.remove('show');
  }

  spanUp.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
};

//Function Number

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    el.textContent++;
    if (parseInt(el.textContent) >= goal) {
      el.textContent = goal; // تأكد من القيمة النهائية
      clearInterval(count);
    }
  }, 4000 / goal);
}

// Function Pricing

function startpricing(el) {
  let result = parseInt(el.dataset.result);
  let counto = setInterval(() => {
    el.textContent++;
    if (parseInt(el.textContent) >= result) {
      el.textContent = result; // تأكد من القيمة النهائية
      clearInterval(counto);
    }
  }, 3000 / result);
}

//Create Countdown Timer

// let countDownDate = new Date();
// console.log(countDownDate);
let countDownDate = new Date('Dec 31,2024 23:59:59').getTime();

let counter = setInterval(() => {
  // Date Now 1000
  let dateNow = new Date();

  // Deffrent Date
  let dateDff = countDownDate - dateNow;

  // Time Units
  // Days
  let days = Math.floor(dateDff / (1000 * 60 * 60 * 24));
  // Hours
  let hours = Math.floor((dateDff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Minutes
  let minutes = Math.floor((dateDff % (1000 * 60 * 60)) / (1000 * 60));
  // Seconds
  let seconds = Math.floor((dateDff % (1000 * 60)) / 1000);

  // HTML

  document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.minutes').innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.seconds').innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDff < 0) {
    clearInterval(counter);
  }
}, 1000);
