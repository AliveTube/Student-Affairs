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
window.addEventListener("load",()=>{
  const statusSelectors = document.querySelectorAll('.status-selectors');
  statusSelectors.forEach((selector) => {
      selector.addEventListener('change', (event) => {
          const newStatus = event.target.value;
          const studentRow = event.target.closest('tr');
          const id = parseInt(studentRow.querySelector('td:nth-child(2)').textContent);
          const xhttp = new XMLHttpRequest();
          xhttp.open("POST", '/Status/Updated/');
          xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhttp.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
          xhttp.onreadystatechange = function() {
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
              location.reload(); // Reload the page after receiving a successful response
            }
          };
          xhttp.send(`ID=${id}&newStatus=${newStatus}`);
  });
});
})
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookieValue ? cookieValue[2] : null;
}
// --------------------------------------
function resetDepartmentForm(event){
  event.preventDefault();
  let dep = document.getElementById("departmentForm");
  dep.style.display = "none"
}
function departmentChange(event){
  alert("Department has been changed successfully");
}

function resetDptPage() {
  document.getElementById("departmentForm").classList.add('hide');
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
        alert("Student Not Found or Inactive!")
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
        img.setAttribute("src","/students/static/images/edit.jpg");
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
function successful(){
  Submit = document.querySelector("#submitStudent")
  if( Submit!=null){
      Submit.addEventListener("click",(event)=>{
        alert("Student Added Successfully!")
      })
  }

}