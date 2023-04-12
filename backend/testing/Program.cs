﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using testing.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<JoelHiltonMovieCollectionContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("MoviesDbConnection")));
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(p => p.WithOrigins("Http://localhost:3000"));

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
app.Run();
