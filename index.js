var qrcode = new QRCode("qrcode");

function makeCode () {    
      var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '_' + dd + '_' + yyyy;
      qrcode.makeCode(today);
}
window.onload = function exampleFunction() {
      makeCode();
  }