create database uni_dash_db;
use uni_dash_db;

create Table earnings(
er_id int, 
year int ,
month varchar(20), 
amount decimal(12,2)
);


create table employees(
emp_id int ,
name varchar(100), 
department varchar(100)
);

create Table students(
s_id int ,
name varchar(100), 
program varchar(100)
);

create Table teachers(
t_id int ,
name varchar(100) ,
designation varchar(100)
);


select
  (select count(*) from students) as total_students,
  (select count(*) from earnings) as total_earnings_records,
  (select count(*) from employees) as total_employees,
  (select count(*) from teachers) as total_teachers;
