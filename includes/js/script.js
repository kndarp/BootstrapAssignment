/*

My Custom JS
============

Author:  Kndarp Patel
Updated: June 2016

*/

$(function(){

  $('#alertMe').click(function(e){
    e.preventDefault();
    $('#meetingModal').modal('toggle');
    $('#successAlert').slideDown();
  });

  $('a.pop').click(function(e){
    e.preventDefault();
  });

  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();

});
