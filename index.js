
  var qr;
                (function() {
                    qr = new QRious({
                    element: document.getElementById('qr-code'),
                    size: 500,
                    value: ''
                });
            })();
            
            function generateQRCode(subject) {
                  var today = new Date();
                  var dd = String(today.getDate()).padStart(2, '0');
                  var mm = String(today.getMonth() + 1).padStart(2, '0');
                  var yyyy = today.getFullYear();
                  
                  today = dd + '_' + mm + '_' + yyyy;
                 var data= {"subject":subject, "date":today}
                 const myJSON = JSON.stringify(data);
                qr.set({
                    foreground: 'black',
                    size: 500,
                    value: myJSON
                });
            }
            function myFunction(chosen) {
                const element = document.getElementById("qr-div");
                if(chosen=="Please select a subject to create QR"){
                    element.style.display = 'none'
                }else{
                  element.style.display = 'flex'
                  generateQRCode(chosen)
                }
                }
            // window.onload = function exampleFunction() {
            //       generateQRCode();
            //   }
           