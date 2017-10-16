
$(document).ready(function () {
 
    $('.select2').select2({ minimumResultsForSearch: Infinity });
   
    $('.flatpickr').flatpickr({
        onChange: function (dateObj, dateStr) {
           console.log(dateObj)
           console.log(dateStr)
        }
    });



});