fetch('getcounts.php')
.then(res =>res.json())
.then(data =>{
    document.querySelector('.number.students').textContent=data.students;
        document.querySelector('.number.teachers').textContent=data.teachers;
            document.querySelector('.number.employees').textContent=data.employees;
                document.querySelector('.number.earnings').textContent=data.earnings;
} )

.catch(err=> console.error('Fetch Error:',err));
