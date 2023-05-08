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

/* Login JS */
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
          window.location.href = "Homepage.html";
      }
  }
}

function getData() {
  const regex = /^[0-9]+$/;
  let tbody = document.getElementById("data");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let key in localStorage) {
      if(regex.test(key)==false)continue;
      let data = JSON.parse(localStorage.getItem(key));
      if (data != null) {
          tbody.appendChild(document.createElement("tr"));
          for (let values in data) {
          tbody.lastChild.appendChild(document.createElement("td"));
          tbody.lastChild.lastChild.appendChild(
              document.createTextNode(data[values])
          );
          }
          tbody.lastChild.appendChild(document.createElement("td"));
          let anchor = document.createElement("a");
          anchor.setAttribute("href","Edit.html?id=" +key+ "");
          let img = document.createElement("img");
          img.setAttribute("src","../images/edit.jpg");
          anchor.appendChild(img);
          tbody.lastChild.lastChild.appendChild(anchor);
      }
    }
}

function filterdata(){
  const regex = /^[0-9]+$/;
  var name = document.getElementById("searchB").value;
  flag = false;
  for (let key in localStorage) {
    if(regex.test(key)==false)continue;
    let data = JSON.parse(localStorage.getItem(key));
    if (data != null && data[0].toLowerCase()==name.toLowerCase() && data[5]=="Active") {
      flag = true;
    }
  }
  if(name.trim() != ""){
    let tbody = document.getElementById("data");
  if(flag){
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    for (let key in localStorage) {
      if(regex.test(key)==false)continue;
      let data = JSON.parse(localStorage.getItem(key));
      if (data != null && data[0].toLowerCase()==name.toLowerCase() && data[5]=="Active") {
        tbody.appendChild(document.createElement("tr"));
        for (let values in data) {
          tbody.lastChild.appendChild(document.createElement("td"));
          tbody.lastChild.lastChild.appendChild(
            document.createTextNode(data[values])
          );
        }
        tbody.lastChild.appendChild(document.createElement("td"));
        let anchor = document.createElement("a");
        anchor.setAttribute("href","Edit.html?id=" +key+ "");
        let img = document.createElement("img");
        img.setAttribute("src","../images/edit.jpg");
        anchor.appendChild(img);
        tbody.lastChild.lastChild.appendChild(anchor);
      }
    }
  }
  else{
    getData();
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