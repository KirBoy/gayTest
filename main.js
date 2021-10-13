const btns = document.querySelectorAll('.box__button');
const main = document.querySelector('.main');
const gachi = document.querySelectorAll('button')

btns[0].onmouseover = (e) => {
  if (e.target.innerHTML == 'NO') {
    e.target.innerHTML = 'Yes, im gay';
    btns[1].innerHTML = 'NO'
  }
}


btns[1].onmouseover = (e) => {
  if (e.target.innerHTML == 'NO') {
    e.target.innerHTML = 'Yes, im gay';
    btns[0].innerHTML = 'NO'
  }
}

const btnClose = document.querySelector('.box__close');

btnClose.onmouseover = (e) => {
  e.target.classList.add('active');
  e.target.innerHTML = 'Yes'
}

btnClose.onmouseout = (e) => {
  e.target.classList.remove('active');
  e.target.innerHTML = ''
}

for (let i = 0; i <= 3; i++) {
  document.querySelectorAll('button')[i].onclick = (e) => {
    console.log(e)
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', ` <img class="gachi" src="https://c.tenor.com/7Oyfyw2oz8EAAAAC/gachi-gachimuchi.gif" alt="">
    <audio autoplay
    src="./sounds/gachi.mp3"></audio>
    <p class="congrats">You are GAY!!!</p>
    <p class="grats">Congratulation</p>
    <img class="dick" src="./assets/i.jpg" alt="">
    `)

  }
}

document.querySelector('.gay').onclick = (e) => {
  document.querySelector('.box').style.display = 'flex';
  e.target.style.display = 'none'
}