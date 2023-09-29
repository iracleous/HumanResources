// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function createEmployee() {

    // Name = document.getElementById("Name").value
    Name = $("#Name").val()

    JobTitle = document.getElementById("JobTitle").value
    Salary = document.getElementById("Salary").value
    HiringDate = document.getElementById("HiringDate").value

    document.getElementById("myTextArea").innerHTML = "Action starts. Name= " + Name
        + "<br>JobTitle= " + JobTitle
        + "<br>Salary= " + Salary;
    document.getElementById("myTextArea").innerHTML += "<br>HiringDate= " + HiringDate;


    //Ajax call
    //backend url
    let url = "https://localhost:7127/api/Employees";
    let method = "POST";

    let data = JSON.stringify({
        Name: $('#Name').val(),
        JobTitle: $('#JobTitle').val(),
        HiringDate: $('#HiringDate').val(),
        Salary: $('#Salary').val()
    });

    let contentType = 'application/json';

    $.ajax(
        {
            url: url,
            method: method,
            contentType: contentType,
            data: data
        })
        .done(result => alert(JSON.stringify(result)))
        .fail(failure => alert(JSON.stringify(failure)));

}



function loadEmployees() {
    if (document.getElementById("employeesDiv") == null) {
     //   alert("code not running");
        return;
    }

    let urlAPI = "https://localhost:7127/api/Employees";
    let method = "GET";

    $.ajax(
    {
        url: urlAPI,
    method: method
            })
            .done(result => {
        let resultData = "<table class='table'> <tr><th>Id</th><th>Name</th><th>HiringDate</th></tr>";
                result.forEach(employee => resultData += ('<tr>'
            + '<td>' + employee.id + '</td>'
            + '<td>' + employee.name + '</td>'
             + '<td>' + employee.hiringDate + '</td>'
                    + '<td><a href=# onclick=loadEmployee(' + employee.id + ')>Show details</a></td>'
                    + '<td><a href=# onclick=deleteEmployee(' + employee.id + ')>Delete</a></td>'
            + '</tr>'));

        resultData += '</table>';
    $("#employeesDiv").html(resultData);

            })
            .fail(failure => {
        console.log('error in communication');
                console.log(JSON.stringify(failure));

            });
}

function loadEmployees2() {
    if (document.getElementById("employeesDiv") == null) {
     //   alert("code not running");
        return;
    }

    let urlAPI = "https://localhost:7127/api/Employees";
    let method = "GET";

    $.ajax(
    {
        url: urlAPI,
        method: method
     })
    .done(result => {
        let resultData = "";
        result.forEach(employee => resultData += ( 
             '<p><a href=# onclick=loadEmployee2(' + employee.id + ')>' + employee.name + '</a></p>'
        ));
        $("#employeesDiv").html(resultData);

    })
    .fail(failure => {
        console.log('error in communication');
        console.log(JSON.stringify(failure));
    });
}


function loadEmployee2(id) {
    let urlAPI = "https://localhost:7127/api/Employees/" + id;
    let method = "GET";

    $.ajax(
        {
            url: urlAPI,
            method: method
        })
        .done(employee => {
            let resultData = '<ul>'
                + '<li> id = ' + employee.id + '</li>'
                + '<li> name = ' + employee.name + '</li>'
                + '<li> salary = ' + employee.salary + '</li>'
                + '<li> jobTitle = ' + employee.jobTitle + '</li>'
                + '<li> hiringDate = ' + employee.hiringDate + '</li>'
                + '</ul>';
            $("#employeeDetails").html(resultData);
        })
        .fail(failure => {
            console.log('error in communication');
            console.log(JSON.stringify(failure));
            $("#employeesDiv").html(JSON.stringify(failure));
        });
}

function loadEmployee(id) {
    let urlAPI = "https://localhost:7127/api/Employees/"+id;
    let method = "GET";

    $.ajax(
        {
            url: urlAPI,
            method: method
        })
        .done(employee => {
            let resultData = '<ul>' 
                + '<li> id = ' + employee.id + '</li>'
                + '<li> name = ' + employee.name + '</li>'
                + '<li> salary = ' + employee.salary + '</li>'
                + '<li> jobTitle = ' + employee.jobTitle + '</li>'
                + '<li> hiringDate = ' + employee.hiringDate + '</li>'
                + '</ul>';
            $("#employeesDiv").html(resultData);
        })
        .fail(failure => {
            console.log('error in communication');
            console.log(JSON.stringify(failure));
            $("#employeesDiv").html(JSON.stringify(failure));
        });
}

function deleteEmployee1(id) {  
 
    if (confirm("Do you want to delete the employee") != true) {
        return;
    }

    let urlAPI = "https://localhost:7127/api/Employees/" + id;
    let method = "DELETE";
    $.ajax(
        {
            url: urlAPI,
            method: method
        })
        .done(() => { loadEmployees(); })
        .fail(failure => {
            console.log('error in communication');
            console.log(JSON.stringify(failure));
            $("#employeesDiv").html(JSON.stringify(failure));
        });
 
}

function deleteEmployee(id) {

    if (confirm("Do you want to delete the employee") != true) {
        return;
    }

    let urlAPI = "https://localhost:7127/api/Employees/" + id;
    let method = "DELETE";

    fetch(urlAPI, {
        method: method,
     //   body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
 //   .then(res => res.json())
    .then(response => {
        console.log('Success:', JSON.stringify(response));
        loadEmployees();
    })
    .catch(error => console.error('Error:', error));

}




//loadEmployees();

 
 