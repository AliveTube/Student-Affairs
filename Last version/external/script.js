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
  // name id level dep gpa status email phone date gender
  var arr=[
    document.getElementById("name-field").value,
    document.getElementById("id-field").value,
    document.getElementById("level-field").value,
    document.getElementById("department-field").value,
    document.getElementById("gpa-field").value,
    document.getElementById("status-field").value,
    document.getElementById("email-field").value,
    document.getElementById("phone-field").value,
    document.getElementById("date-field").value,
    document.getElementById("gender-field").value
  ];
  if(flag==true){
    localStorage.removeItem(id);
    save(id,arr);
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
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const id = searchParams.get('id');
    var result=JSON.parse(localStorage.getItem(id));
    // name id level dep gpa status email phone date gender
    document.getElementById("name-field").value=result[0];
    document.getElementById("id-field").value=result[1];
    document.getElementById("level-field").value=result[2];
    document.getElementById("department-field").value=result[3];
    document.getElementById("gpa-field").value=result[4];
    document.getElementById("status-field").value=result[5];
    document.getElementById("email-field").value=result[6];
    document.getElementById("phone-field").value=result[7];
    document.getElementById("date-field").value=result[8];
    document.getElementById("gender-field").value=result[9];
    depart();
}
function save(key,arr){
  alert("Data Saved!");
  localStorage.setItem(key,JSON.stringify(arr));
}

function getStatus() {
  let tbody = document.getElementById("status-tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let key in localStorage) {
    let data = JSON.parse(localStorage.getItem(key));
    if (data != null) {
      tbody.appendChild(document.createElement("tr"));
      for (let values in data) {
        tbody.lastChild.appendChild(document.createElement("td"));
        tbody.lastChild.lastChild.appendChild(
          document.createTextNode(data[values])
        );
      }
    }
  }
}
