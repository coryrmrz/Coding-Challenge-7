//Task 1: Create a department structire
const company = {
    departments: [
        {
            departmentName: 'Engineering', //engineering department string
            employees: [ //array of employees in Engineering department
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [ //employee Alice with subordinate Bob
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [ //employee Bob with subordinate Charlie
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: [] //employee Charlie with no subordinates
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: [] //employee David with no subordinates
                }
            ]
        },
        {
            departmentName: 'Sales', //sales department string
            employees: [ //array of employees in Sales department
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [ //employee Eve with subordinate Frank
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: [] //employee frank with no subordinates
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: [] //employee Grace with no subordinates
                }
            ]
        }
    ]
};

//Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) { //creating function to calculate salsries in different departments
    let totalSalary = 0; //intializing total salary variable

    department.employees.forEach(employee => {
        totalSalary += employee.salary; //finding total salary of each employee and adding them for total salary

        if (employee.subordinates && employee.subordinates.length > 0) {
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates}); //if employees have subordinates, then salary will also be added
        }
    });
    return totalSalary; //return total salary
}
const engineeringSalary = calculateDepartmentSalary(company.departments[0]); //use function on engineering department
console.log(`Total salary for ${company.departments[0].departmentName} is ${engineeringSalary}`); //Ouput engineering department total salary

const salesSalary = calculateDepartmentSalary(company.departments[1]); //use function on sales department
console.log(`Total salary for ${company.departments[1].departmentName} is ${salesSalary}`); //output sales department total salary