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
localStorage.setItem(20210083,"Aya")
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
/*Data JS*/
function GetData(){
    /*test */
    const arr = ["Hany",2003,20210083,3.8,"Male","AI",2,"Active","hanyhanon@gmail.com","01234567"];
    localStorage.setItem("Data", JSON.stringify(arr));
    const arr2 = ["dydy",2003,20210083,3.8,"Female","AI",2,"Active","dydydodo@gmail.com","01234567"];
    localStorage.setItem("Data2", JSON.stringify(arr2));
    const arr3 = ["dydy",2003,20210093,3.8,"Female","AI",2,"Inactive","dydydodo2@gmail.com","01234567"];
    localStorage.setItem("Data3", JSON.stringify(arr3));
    /* don't forget to remove the things above me*/
    var table = document.getElementById("Table");
    var HtmlTable = "";
    for(let key in localStorage){
        if(key==20210083)continue;
        const valuesArray = JSON.parse(localStorage.getItem(key));
        HtmlTable += "<tr>";
        if(valuesArray!=null){
            for(let i=0;i<valuesArray.length;i++){
                HtmlTable += "<td>" + valuesArray[i] + "</td>";
            }
            HtmlTable += "<td><a href=\"Edit.html\"><img src=\"pen3.png\" alt=\"\"></a></td>";
            HtmlTable += "</tr>";
        }
    }
    if(HtmlTable != null){
        table.innerHTML = "<table><thead><tr><th>Name</th><th>Date</th><th>ID</th><th>GPA</th><th>Gender</th><th>Department</th><th>Level</th><th>Status</th><th>Email</th><th>Mobile</th><th></th></tr></thead>"+"<tbody>"+ HtmlTable +"</tbody></table>";
    }
}

function filterdata(){
    var name = document.getElementById("searchB").value;
    var table = document.getElementById("Table");
    table.innerHTML="";
    var HtmlTable = "";
    console.log(table.innerHTML);
    for(let key in localStorage){
        if(key==20210083)continue;
        const valuesArray = JSON.parse(localStorage.getItem(key));
        if(valuesArray!=null){
           if(valuesArray[0].toLowerCase()==name.toLowerCase() && valuesArray[7]=="Active"){
                HtmlTable += "<tr>";
                for(let i=0;i<valuesArray.length;i++){
                    HtmlTable += "<td>" + valuesArray[i] + "</td>";
                }
                HtmlTable += "<td><a href=\"Edit.html\"><img src=\"pen3.png\" alt=\"\"></a></td>";
                HtmlTable += "</tr>";
           }
        }
    }
    console.log(table.innerHTML);
    if(HtmlTable != null){
        table.innerHTML = "<table><thead><tr><th>Name</th><th>Date</th><th>ID</th><th>GPA</th><th>Gender</th><th>Department</th><th>Level</th><th>Status</th><th>Email</th><th>Mobile</th><th></th></tr></thead>"+"<tbody>"+ HtmlTable +"</tbody></table>";
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
function validate(PreviousID){
  var flag=true;
  if(validateID()==0||validatePhone()==0){
    alert("Invalid Phone number or ID please try again!");
    flag=false;
  }
  let id=document.getElementById("id-field").value;
  var arr=[
    document.getElementById("name-field").value,
    document.getElementById("id-field").value,
    document.getElementById("gpa-field").value,
    document.getElementById("gender-field").value,
    document.getElementById("department-field").value,
    document.getElementById("level-field").value,
    document.getElementById("status-field").value,
    document.getElementById("email-field").value,
    document.getElementById("phone-field").value,
    document.getElementById("address-field").value
  ];
  if(flag==true){
    localStorage.removeItem(PreviousID);
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
function search(id){
    localStorage.clear();
    const arr = ["Hany",20210083,3.8,"1","AI",2,"Active","hanyhanon@gmail.com","01234567","4are3 el most4fa"];
    const arr2 = ["mohamed",202102343,3.8,"Male","AI",2,"Active","hanyhanon@gmail.com","01234567"];
    const arr3 = ["ali",2021024323,3.8,"2","AI",3,"Inactive","hanyhanon@gmail.com","01234567","4are3 el 3aree4"];
    localStorage.setItem(JSON.stringify(20210083), JSON.stringify(arr));
    localStorage.setItem(JSON.stringify(202102343), JSON.stringify(arr2));
    localStorage.setItem(JSON.stringify(2021024323), JSON.stringify(arr3));
    var result=JSON.parse(localStorage.getItem(id));
    document.getElementById("name-field").value=result[0];
    //document.getElementById("dob-field").value=result[1];
    document.getElementById("id-field").value=result[1];
    document.getElementById("gpa-field").value=result[2];
    document.getElementById("gender-field").value=result[3];
    document.getElementById("department-field").value=result[4];
    document.getElementById("level-field").value=result[5];
    document.getElementById("status-field").value=result[6];
    document.getElementById("email-field").value=result[7];
    document.getElementById("phone-field").value=result[8];
    document.getElementById("address-field").value=result[9];    
    depart();
}
function save(key,arr){
  alert("Data Saved!");
  localStorage.setItem(key,JSON.stringify(arr));
}












