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










