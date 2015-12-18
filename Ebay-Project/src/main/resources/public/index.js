$(document).ready(function(){

  $('#collapse1').on("click", function(){
    fieldReset();
    c1();
  });

  $('#collapse2').on("click", function(){
    fieldReset();
    c2();
  });

  $('#collapse3').on("click", function(){
    fieldReset();
    c3();
  });

});

function fieldReset(){
  $('#extra-info').empty();
}

function c1(){
  $('#extra-info').append('<div class="info"><div>Words</div></div>');
}

function c2(){
  $('#extra-info').append('<div><div>Lorem ipquip ex ea commodo consequat.</div></div>');
}

function c3(){
  $('#extra-info').append('<div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,'+
    'sed do eiusmod tempor incididunt ut labore ut aliquip ex ea commodo consequat.</div></div>');
}
