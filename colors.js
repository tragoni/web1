var Body = {
  setBackgroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  },
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  }
}

var Links = {
   setColor : function(color) {
     // var alist = document.querySelectorAll('a');
     // var i = 0;
     // while(i<alist.length) {
     //   alist[i].style.color=color;
     //   i++;
     // }
     $('a').css('color',color);
   }
}

function nightDayChange(self){
  if(self.value === 'Night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='Day';
    Links.setColor('red');
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='Night';
    Links.setColor('blue');
  }
}
