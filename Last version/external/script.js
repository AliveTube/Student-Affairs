function autoSlideShow() {
  let slideIndex = 0;
  carousel();

  function carousel() {
      let x = document.getElementsByClassName("mySlides");
      for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > x.length) {
          slideIndex = 1
      }

      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 3000); // Change image every 3 seconds
  }
}

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
localStorage.setItem("Ayaali22","Aya")
function validate(){
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
//TEST
// const arr = ["Hany",2003,20210083,3.8,"Male","AI",2,"Active","hanyhanon@gmail.com","01234567"];
// localStorage.setItem(JSON.stringify(20210083), JSON.stringify(arr));
// const arr2 = ["dydy",2003,20210003,3.8,"Female","AI",2,"Active","dydydodo@gmail.com","01234567"];
// localStorage.setItem(JSON.stringify(20210003), JSON.stringify(arr2));
// const arr3 = ["dydy",2003,20210093,3.8,"Female","AI",2,"Inactive","dydydodo2@gmail.com","01234567"];
// localStorage.setItem(JSON.stringify(20210093), JSON.stringify(arr3));

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
          img.setAttribute("src","pen3.png");
          anchor.appendChild(img);
          tbody.lastChild.lastChild.appendChild(anchor);
      }
    }
}

function filterdata(){
  const regex = /^[0-9]+$/;
  var name = document.getElementById("searchB").value;
  let tbody = document.getElementById("data");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let key in localStorage) {
    if(regex.test(key)==false)continue;
    let data = JSON.parse(localStorage.getItem(key));
    if (data != null && data[0].toLowerCase()==name.toLowerCase() && data[7]=="Active") {
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
        img.setAttribute("src","pen3.png");
        anchor.appendChild(img);
        tbody.lastChild.lastChild.appendChild(anchor);
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
    return false;
  }
}
function search(){
  // const arr = ["Hany","2012-03-23",20210083,3.8,"1","AI",2,"Active","hanyhanon@gmail.com","01234567"];
  // const arr3 = ["ali","2012-03-23",2021024323,3.8,"2","AI",3,"Inactive","hanyhanon@gmail.com","01234567"];
  // localStorage.setItem(JSON.stringify(20210083), JSON.stringify(arr));
  // localStorage.setItem(JSON.stringify(2021024323), JSON.stringify(arr3));
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

function getStatus(ev) {
  let tbody = document.getElementById("status-tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let key in localStorage) {
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
function showDepartmentForm(event){
    event.preventDefault();
    let dep = document.getElementById("departmentForm");
    dep.style.display = "block";
}
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
