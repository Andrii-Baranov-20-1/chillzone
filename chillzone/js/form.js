$(document).ready(function() {
   //E-mail Ajax Send
   $("form").submit(function () {
       var th = $(this);
       $.ajax({
           type: "POST",
           url: "mail.php",
           data: th.serialize()
       }).done(function (){
           alert("Дякую за відгук!");
           setTimeout(function (){
               th.trigger("Перезавантажити");
           }, 1000);
       });
       return false;
   });
});