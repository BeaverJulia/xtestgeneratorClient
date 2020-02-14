document.getElementById('ExerciseInputForm').addEventListener('submit', saveIssue);
document.getElementById('FindExerciseInputForm').addEventListener('submit', GetExercise, fetchIssues);
function saveIssue(e) {
    var exerciseYear = document.getElementById('exerciseYear').value;
     var exerciseText = document.getElementById('exerciseText').value;
     var exerciseA = document.getElementById('exerciseA').value;
     var exerciseB = document.getElementById('exerciseB').value;
     var exerciseC = document.getElementById('exerciseC').value;
     var exerciseKey = document.getElementById('exerciseKey').value;
 
  
    console.log("bl")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var formdata = new FormData();
    formdata.append("year", exerciseYear)
    formdata.append("text", exerciseText)
    formdata.append("answerA", exerciseA)
    formdata.append("answerB", exerciseB)
    formdata.append ("answerC",exerciseC)
    formdata.append("key", exerciseKey);
  
    console.log(formdata)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
      mode:'no-cors'
    };
    
console.log(xhr)
    fetch("http://localhost:61234/api/v1/exercises/CheckBoxes", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      e.preventDefault();
 
}

function GetExercise(e)
{
  console.log('mamo')
  var exerciseYear = document.getElementById('exerciseYearGet').value;
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append( "Access-Control-Allow-Credentials","true",)
  
  var requestOptions = {
    method:'GET',
    headers: myHeaders,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
  };
 let data
 
  fetch(`https://localhost:5001/api/v1/exercise/GetByYear?year=${exerciseYear}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(output => { data = output;})
  .catch(error => console.log('error', error));
  e.preventDefault();

console.log(getdata.JSON)
function fetchIssues() {
  var exercisesList =   data.JSON
  var issuesListe = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < exercisesList.length; i++) {
    
    var exerciseYear = exercisesList[i].exerciseYear
    var exerciseText = exercisesList[i].exerciseText
    var exerciseA = exercisesList[i].exerciseA
    var exerciseB = exercisesList[i].exerciseB
    var exerciseC = exercisesList[i].exerciseC
   
    issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Issue ID: ' + exerciseYear+ '</h6>'+
                              '<p><span class="label label-info">' + exerciseText + '</span></p>'+
                              '<h3>' + exerciseA + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + exerciseB + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + exerciseC + '</p>'+
                              '<a href="#" onclick="Download()" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="Delete()" class="btn btn-danger">Delete</a>'+
                              '</div>';
    }
  }
}
  



function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

function fetchIssues() {
  var exercisesList =  getdata
  var issuesListe = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < exercisesList.length; i++) {
    
    var exerciseYear = exercisesList[i].exerciseYear
    var exerciseText = exercisesList[i].exerciseText
    var exerciseA = exercisesList[i].exerciseA
    var exerciseB = exercisesList[i].exerciseB
    var exerciseC = exercisesList[i].exerciseC
   
    issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Issue ID: ' + exerciseYear+ '</h6>'+
                              '<p><span class="label label-info">' + exerciseText + '</span></p>'+
                              '<h3>' + exerciseA + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + exerciseB + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + exerciseC + '</p>'+
                              '<a href="#" onclick="Download()" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="Delete()" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}
