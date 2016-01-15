$(document).ready(function() {

  $("#blanks form").submit(function(event){

    var blanksArray = ["place", "dinner", "night", "activity", "spirit"];
    var userAnswer = 0
    // var total= 0;
    // var array = [parseInt($('input[name=place]:checked').val()), parseInt($('input[name=dinner]:checked').val()), parseInt($('input[name=night]:checked').val()), parseInt($('input[name=activity]:checked').val()), parseInt($('input[name=spirit]:checked').val())];

    // for (var i = 0; i < array.lenth; i++) {
    //   total += array[i];
    // }
    //
    // console.log(total);

    blanksArray.forEach(function(blank) {
      userAnswer += parseInt($(".radio:checked" + blank).val());
    });

    if (userAnswer < 6) {
      hideAll();
      $("#banf").show();
    }
    else if (userAnswer > 5 && total < 11) {
      hideAll();
      $("#costa").show();
    }
    else if (userAnswer > 10 && total <16) {
      hideAll();
      $("#italy").show();
    }

    function hideAll(argument) {
     $("#banf").hide();
     $("#costa").hide();
     $("#italy").hide();
    }

    event.preventDefault();
  });
});
