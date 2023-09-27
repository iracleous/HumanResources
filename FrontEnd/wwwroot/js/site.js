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
        let urlAPI = "https://localhost:7127/api/Employees";
    let method = "GET";

    $.ajax(
    {
        url: urlAPI,
    method: method
            })
            .done(result => {
        let resultData = "<table class='table'>";
                result.forEach(employee => resultData += ('<tr>'
            + '<td>' + employee.id + '</td>'
            + '<td>' + employee.name + '</td>'
            + '<td>' + employee.salary + '</td>'
            + '<td>' + employee.jobTitle + '</td>'
            + '<td>' + employee.hiringDate + '</td>'

            + '</tr>'));

        resultData += '</table>';
    $("#employeesDiv").html(resultData);

            })
            .fail(failure => {
        console.log('error in communication');
    console.log(JSON.stringify(failure));
            });





}

loadEmployees();

 
 