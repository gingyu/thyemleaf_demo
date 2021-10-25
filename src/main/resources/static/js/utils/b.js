import sha256 from './a.js'

$(function() {
   var $passwd = $("#passwd");
   var encoded = sha256($passwd.value());

   $passwd.value(encoded);
});