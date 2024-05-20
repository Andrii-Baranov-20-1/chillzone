$(document).ready(function() {
   //E-mail Ajax Send
   $("form").submit(function () {
       var th = $(this);
       $.ajax({
           type: "POST",
           url: "mail.php",
           data: th.serialize()
       }).done(function (){
           alert("Дякую!");
           setTimeout(function (){
               th.trigger("reset");
           }, 1000);
       });
       return false;
   });
});