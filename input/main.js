'use strict';

const Links = {
  setColor: function (color) {
    const menuList = document.querySelectorAll('a');
    let i = 0;
    while (i < menuList.length) {
      menuList[i].style.color = color;
      i++;
    }
  },
};

const Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
};

function nightDayHandler(mode) {
  const target = document.querySelector('body');
  if (mode.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    mode.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    mode.value = 'night';

    Links.setColor('black');
  }
}
