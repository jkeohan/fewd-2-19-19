$(function () {
  $('#ryan.solomons@yahoo.com').on('click', function (event) {
      event.preventDefault();
    alert("Huh");
    var email = 'test@theearth.com';
    var subject = 'Circle Around';
    var emailBody = 'Some blah';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
});
