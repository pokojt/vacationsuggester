$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var array = [parseInt($('input[name=place]:checked').val()), parseInt($('input[name=dinner]:checked').val()), parseInt($('input[name=night]:checked').val()), parseInt($('input[name=activity]:checked').val()), parseInt($('input[name=spirit]:checked').val())];
    var total = 0;

    for (var i = 0; i < array.length; i++) {
      total += array[i];
      console.log(total);
    }
    
    if (total < 6) {
      hideAll();
      $("#banfAnswer").show();
    }else if (total > 5 && total < 9) {
      hideAll();
      $("#costaAnswer").show();
    }else if (total > 8 && total <16) {
      hideAll();
      $("#italyAnswer").show();
    }else {
      hideAll();
      alert("Please answer all of the questions!")
    }
    function hideAll(argument) {
      $("#banfAnswer").hide();
      $("#costaAnswer").hide();
      $("#italyAnswer").hide();
    }
    event.preventDefault();
  });
});
