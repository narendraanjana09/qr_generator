const databaseRef = firebase.database().ref("qr_attendance_app");
const subjectRef = databaseRef.child("subjects");
const attendanceRef = databaseRef.child("attendance");

const subjectSelect=document.getElementById("subject_select");
const dateSelect=document.getElementById("date_select");

const tableBody=document.getElementById("table_body");
console.log("version 1.0");


var userModel = {
      name: "",
      enrolment: ""
};
var subjectSelectedName="";

subjectRef.on("child_added", (data) => {
      var subject = data.val();
      subjectSelect.innerHTML+=`<option>${subject}</option>`
    });
var attendanceNewRef=attendanceRef;    
 function subjectSelected(chosen) {
      tableBody.innerHTML=''
      dateSelect.innerHTML=' <option selected>Select Date</option>'
      if(chosen=="Select Subject"){
            if(attendanceNewRef!=null){
                  attendanceNewRef.off();
            }
            if(userAttendanceref!=null){
                  userAttendanceref.off();
            }
            return
      }

      subjectSelectedName=chosen
      if(attendanceNewRef!=null){
            attendanceNewRef.off();
      }
      attendanceNewRef= attendanceRef.child(chosen).child("dates");
      attendanceNewRef.on("child_added", (data) => {
      var date = data.val();
      let result = date.replace(/_/g, "-");
      dateSelect.innerHTML+=`<option>${result}</option>`
    });

    }
    var userAttendanceref=attendanceRef;
function dateSelected(chosen) {
      if(userAttendanceref!=null){
            userAttendanceref.off();
      }
      if(chosen=="Select Date"){
      
            return
      }


      tableBody.innerHTML=''
      let result = chosen.replace(/-/g, "_");
      var count=0;
     
      userAttendanceref=attendanceRef.child(subjectSelectedName).child(result);
      userAttendanceref.on("child_added", (data) => {
            userModel = data.val();
           count++
           tableBody.innerHTML+=` <tr>
           <td>${count}</td>
           <td>${userModel.name}</td>
           <td>${userModel.enrolment}</td>
         </tr>`
          });

     }       

