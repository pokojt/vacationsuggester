$(document).ready(function() {

  $('#blanks input:radio').addClass('input_hidden');
  $('#blanks label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
  });

  $("form#questions").submit(function(event) {

    // var blanksArray = ["place", "dinner", "night", "activity", "spirit"];
    // var userAnswer = 0
    //
    // blanksArray.forEach(function(blank) {
    //   userAnswer += parseInt($(".input:checked" + blank).val());
    // });

    var array = [parseInt($('input[name=place]:selected').val()), parseInt($('input[name=dinner]:selected').val()), parseInt($('input[name=night]:selected').val()), parseInt($('input[name=activity]:selected').val()), parseInt($('input[name=spirit]:selected').val())];
    var total = 0;

    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }

    console.log(total);

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
