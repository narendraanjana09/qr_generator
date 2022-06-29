const databaseRef = firebase.database().ref("qr_attendance_app");
const subjectRef = databaseRef.child("subjects");
const attendanceRef = databaseRef.child("attendance");

const subjectSelect=document.getElementById("subject_select");
const dateSelect=document.getElementById("date_select");

const tableBody=document.getElementById("table_body");


var userModel = {
      name: "",
      enrolment: ""
};
var subjectSelectedName="";

subjectRef.on("child_added", (data) => {
      var subject = data.val();
      subjectSelect.innerHTML+=`<option>${subject}</option>`
    });
 function subjectSelected(chosen) {
      subjectSelectedName=chosen
     attendanceRef.child(chosen).child("dates").on("child_added", (data) => {
      var date = data.val();
      let result = date.replace(/_/g, "-");
      dateSelect.innerHTML+=`<option>${result}</option>`
    });
    tableBody.innerHTML=''
     dateSelect.innerHTML=' <option selected>Select Date</option>'
    }
function dateSelected(chosen) {
      tableBody.innerHTML=''
      let result = chosen.replace(/-/g, "_");
      var count=0;
      attendanceRef.child(subjectSelectedName).child(result).on("child_added", (data) => {
            userModel = data.val();
           count++
           tableBody.innerHTML+=` <tr>
           <td>${count}</td>
           <td>${userModel.name}</td>
           <td>${userModel.enrolment}</td>
         </tr>`
          });

     }       

