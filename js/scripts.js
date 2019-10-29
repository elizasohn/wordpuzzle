$(document).ready(function(){
 $("form.puzzle").submit(function(event){

   var sentence = $("#string").val();
   event.preventDefault();

   var s = sentence.split('');

   for (var i = 0; i < s.length; i++) {
     if (s[i] == "a" || s[i] == "e" || s[i] == "i" ||s[i] == "o" ||s[i] == "u")
     s[i] = "-"
   }

console.log(s);
  var newSentence = s.join('');

  console.log(newSentence);
  $(".wordPuzzle").append("<h3>" + newSentence + "</h3>");
  $("form.puzzle")[0].reset();



 });
});
