console.log('HELLO');

const test = () => {
	console.log('this is a test');
};


var acc = document.getElementsByClassName("accordion__question");
var i;

function click_action(){
  $('.accordion__question.collapsed').removeClass('active');
  $('.accordion__collapse').removeClass('show');

  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("show");
}

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = click_action;
}
