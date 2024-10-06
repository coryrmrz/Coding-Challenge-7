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
                    salary: 85000
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