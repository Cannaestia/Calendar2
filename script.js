$('.container').on('click', '.save', function(){
    var parentId = $(this).parent().attr('data-id');
    var appt = $(this).prev().val();
    console.log(appt);
    localStorage.setItem(parentId, appt);
  });

  $('.appt').each(function(){
    var parentId = $(this).parent().attr('data-id');
    var appt = localStorage.getItem(parentId);
    $(this).val(appt);
  })

  var date = moment().format('dddd MMM Do YYYY');
      $('#currentDay').text(date);

$('textarea').each(function(){
    var currentTime = moment().format('HH');
    var dataID = $(this).attr('data-hour');
    if (currentTime === dataID) {
        $(this).attr("class", "present");
    } else if (currentTime < dataID) {
        $(this).attr("class", "future");
    } else {
        $(this).attr("class", "past");
    }

});