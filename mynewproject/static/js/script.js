function keepHighlighted() {
  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Get all the navbar links
  var navLinks = document.querySelectorAll('.nav-link');

  // Loop through the navbar links and add the "active" class to the appropriate link
  navLinks.forEach(function (link) {
      if (link.href === currentPageUrl) {
          link.classList.add('active');
      }
  });
}

// /* Login JS */
localStorage.setItem("Ayaali22","Aya");
function validateLogIn(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(localStorage.getItem(username)!=password){
      document.getElementById("wrong").style.display="block";
      document.getElementById("loginButton").style.marginTop = "15px";
  }else{
      if(localStorage.getItem(username)===password){
          const button = document.querySelector('#loginButton');
          window.location.href = "studentAffairs/Homepage.html";
      }
  }
}
function validateID(){
  var id=document.getElementById("id-field").value;
  const exp = /^[0-9]+$/;
  if(exp.test(id)==0){
    return false;
  }
  else{
    return true;
  }
}
function validatePhone(){
  var id=document.getElementById("phone-field").value;
  const exp = /^[0-9]+$/;
  if(exp.test(id)==0){
    return false;
  }
  else {
    return true;
  }
}
function validate(){
  var flag=true;
  if(validateID()==0||validatePhone()==0){
    alert("Invalid Phone number or ID please try again!");
    flag=false;
  }
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get('id');
  let arr=[
    document.getElementById("name-field").value,
    document.getElementById("id-field").value,
    document.getElementById("level-field").value,
    document.getElementById("department-field").value,
    document.getElementById("gpa-field").value,
    document.getElementById("status-field").value,
    document.getElementById("email-field").value,
    document.getElementById("phone-field").value,
    document.getElementById("dob-field").value,
    document.getElementById("gender-field").value,
  ];
  if(arr[9]==1){
    arr[9]="Female";
  }
  else{
    arr[9]="Male";
  }
  if(flag==true){
    localStorage.removeItem(id , JSON.stringify(arr));
    localStorage.setItem(document.getElementById("id-field").value , JSON.stringify(arr));
    alert("Data Saved!");
  }
}
function depart(){
  var lvl=document.getElementById("level-field").value;
  if(lvl>2){
    document.getElementById("department-field").disabled=false;
    return true;
  }
  else{
    document.getElementById("department-field").disabled=true;
    document.getElementById("department-field").value="General";
    return false;
  }
}
function search(){
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get('id');
  var result=JSON.parse(localStorage.getItem(id));
  document.getElementById("name-field").value=result[0];
  document.getElementById("id-field").value=result[1];
  document.getElementById("level-field").value=result[2];
  document.getElementById("department-field").value=result[3];
  document.getElementById("gpa-field").value=result[4];
  document.getElementById("status-field").value=result[5];
  document.getElementById("email-field").value=result[6];
  document.getElementById("phone-field").value=result[7];
  document.getElementById("dob-field").value=result[8];
  document.getElementById("gender-field").value=result[9];
  depart();
}
function DeleteUser(){
  let arr=[
    document.getElementById("name-field").value,
    document.getElementById("id-field").value,
    document.getElementById("level-field").value,
    document.getElementById("department-field").value,
    document.getElementById("gpa-field").value,
    document.getElementById("status-field").value,
    document.getElementById("email-field").value,
    document.getElementById("phone-field").value,
    document.getElementById("dob-field").value,
    document.getElementById("gender-field").value,
  ];
  localStorage.removeItem(document.getElementById("id-field").value , JSON.stringify(arr));
  alert("Data Deleted!");
}
function getStatus(ev) {
  let tbody = document.getElementById("status-tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let key in localStorage) {
    if (/^\d+$/.test(key) == false)continue;
    let data = JSON.parse(localStorage.getItem(key));
    if (data != null && (ev === data[5] || ev === "true")) {
      tbody.appendChild(document.createElement("tr"));
      for (let values = 0; values < 5; values++) {
        tbody.lastChild.appendChild(document.createElement("td"));
        tbody.lastChild.lastChild.appendChild(
          document.createTextNode(data[values])
        );
      }
      tbody.lastChild.appendChild(document.createElement("td"));
      let sel = document.createElement("select");
      let op1 = document.createElement("option");
      op1.text = op1.value = "Active";
      let op2 = document.createElement("option");
      op2.text = op2.value = "Inactive";
      sel.appendChild(op1);
      sel.appendChild(op2);
      sel.value = data[5];
      sel.addEventListener('change',()=>{
        data[5]=sel.value;
        localStorage.setItem(key,JSON.stringify(data));
      })
      tbody.lastChild.lastChild.appendChild(sel);
    }
  }
}
let btnall = document.getElementById("status-all");
let btnactive = document.getElementById("status-active");
let btninactive = document.getElementById("status-inactive");
window.addEventListener("load", () => {
  let ev = "true";
  getStatus(ev);
});
btnall.addEventListener("click", () => {
  let ev = "true";
  getStatus(ev);
});
btnactive.addEventListener("click", () => {
  let ev = "Active";
  getStatus(ev);
});
btninactive.addEventListener("click", () => {
  let ev = "Inactive";
  getStatus(ev);
});

// --------------------------------------
function resetDepartmentForm(event){
  event.preventDefault();
  let dep = document.getElementById("departmentForm");
  dep.style.display = "none"
}

function validateSubmit(){
  var flag=true;
  if(validateID()==0||validatePhone()==0){
    alert("Invalid Phone number or ID please try again!");
    flag=false;
  }
  else {
    storeData();
    alert("Student data has been registered successfully");
  }
}
function storeData(){
  let stdData=[
    document.getElementById("name-field").value,
    document.getElementById("id-field").value,
    document.getElementById("level-field").value,
    document.getElementById("department-field").value,
    document.getElementById("gpa-field").value,
    document.getElementById("status-field").value,
    document.getElementById("email-field").value,
    document.getElementById("phone-field").value,
    document.getElementById("dob-field").value,
    document.getElementById("gender-field").value,
  ];
  let id = document.getElementById("id-field").value;
  localStorage.setItem(id , JSON.stringify(stdData));
}
function departmentTable(event){
  event.preventDefault();
  let tbody = document.getElementById("dptBody");
  let stdID = document.getElementById("searchByID").value;
  tbody.innerHTML="";
  for (let key in localStorage){
    if (/^\d+$/.test(key)){
      let data = JSON.parse(localStorage.getItem(key));
      if (data != null && data[1] === stdID){
        document.getElementById("departmentForm").classList.remove('hide');
        tbody.appendChild(document.createElement("tr"));
        for (let values = 0; values < 3; values++){
          tbody.lastChild.appendChild(document.createElement("td"));
          tbody.lastChild.lastChild.appendChild(document.createTextNode(data[values]));
        }
        tbody.lastChild.appendChild(document.createElement("td"));
        let sel = document.createElement("select");
        
        sel.setAttribute("data-stuid", data[1]);
          if (data[2] < 3) {
              let op1 = document.createElement("option");
              op1.text = op1.value = "General";
              sel.appendChild(op1);
              sel.disabled = true;
          }
          else {
              let op2 = document.createElement("option");
              op2.text = op2.value = "CS";
              let op3 = document.createElement("option");
              op3.text = op3.value = "IS";
              let op4 = document.createElement("option");
              op4.text = op4.value = "AI";
              let op5 = document.createElement("option");
              op5.text = op5.value = "IT";
              let op6 = document.createElement("option");
              op6.text = op6.value = "DS";
              sel.appendChild(op2);
              sel.appendChild(op3);
              sel.appendChild(op4);
              sel.appendChild(op5);
              sel.appendChild(op6);
              sel.disabled = false;
          }

          sel.value = data[3];

        tbody.lastChild.lastChild.appendChild(sel);
      }
    }
  }
}
function setDepartment(event){
  let formDpt = document.getElementById("departmentForm");
  event.preventDefault();
  let allSelects = formDpt.querySelectorAll("select");
  for (const select of allSelects){
    let stuid=select.getAttribute("data-stuid");
    let student = JSON.parse(localStorage.getItem(stuid));
    student[3] = select.value;
    localStorage.setItem(stuid,JSON.stringify(student));
  }
  alert("Department has been changed successfully");
}
function resetDptPage() {
  document.getElementById("departmentForm").classList.add('hide');
}

function handleDelete() {
    document.getElementById('id01').style.display = 'none';
    return DeleteUser();
}
/* Student Data Page */
submitButton = document.querySelector("#SDatasubmit")
if(submitButton!=null){
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
        let req = new XMLHttpRequest()
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);    
                fillTable(data)  
            }
        };
        req.open("POST", "Stud/");
        let csrfToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;
        req.setRequestHeader("X-CSRFToken", csrfToken);
        let searchval = document.querySelector("#searchB").value
        req.send(searchval);
    })
}
function fillTable(data) {
    let tbody = document.querySelector("#SDatadata");
    if(data.length == 0){
        alert("Student Not Found!")
        return;
    }
    tbody.innerHTML = ""; 
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = item.fields.Name;
        row.appendChild(nameCell);
        let idCell = document.createElement("td");
        idCell.textContent = item.pk;
        row.appendChild(idCell);
        let levelCell = document.createElement("td");
        levelCell.textContent = item.fields.Level;
        row.appendChild(levelCell);
        let departmentCell = document.createElement("td");
        departmentCell.textContent = item.fields.Department;
        row.appendChild(departmentCell);
        let gpaCell = document.createElement("td");
        gpaCell.textContent = item.fields.GPA;
        row.appendChild(gpaCell);
        let statusCell = document.createElement("td");
        statusCell.textContent = item.fields.Status;
        row.appendChild(statusCell);
        let emailCell = document.createElement("td");
        emailCell.textContent = item.fields.Email;
        row.appendChild(emailCell);
        let phoneCell = document.createElement("td");
        phoneCell.textContent = item.fields.Phone;
        row.appendChild(phoneCell);
        let dateCell = document.createElement("td");
        dateCell.textContent = item.fields.BirthDate ;
        row.appendChild(dateCell);
        let genderCell = document.createElement("td");
        genderCell.textContent = item.fields.Gender;
        row.appendChild(genderCell);
        let edit = document.createElement("td");
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.setAttribute("data-id", item.pk);
        anchor.addEventListener("click", handleEditClick);
        let img = document.createElement("img");
        img.setAttribute("src","/static/images/edit.jpg");
        anchor.appendChild(img);
        edit.appendChild(anchor);
        row.appendChild(edit);
        tbody.appendChild(row);       
      
    }
}
function handleEditClick(event) {
  event.preventDefault();
  let itemId = this.getAttribute("data-id");
  window.location.href = "Edit/" + itemId;
}

resetButton = document.querySelector("#SDatareset")
if( resetButton!=null){
    resetButton.addEventListener("click",(event)=>{
        event.preventDefault()
        let req = new XMLHttpRequest()
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);    
                fillTable(data)  
            }
        };
        req.open("POST", "res/");
        let csrfToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;
        req.setRequestHeader("X-CSRFToken", csrfToken);
        req.send();
    })
}
/*------------------------------------------*/