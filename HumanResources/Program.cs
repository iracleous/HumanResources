using HumanResources.HrDbContenxts;
 
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//cors 1 
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<HrDbContext>(options =>
        options.UseSqlServer(builder.Configuration
           .GetConnectionString("MyConn")));
 

//cors 2 
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("https://localhost:7110")
                                                    .AllowAnyHeader()
                                                  .AllowAnyMethod();
                      });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

//cors 3
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
