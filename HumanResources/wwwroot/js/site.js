﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
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
