interface Employee {
  name: string;
  lastName: string;
  salary: string;
  area: string;
}

interface SalaryCalculator {
  (employee: Partial<Employee>): string;
}

const getEmployeeSalary: SalaryCalculator = function (em: Partial<Employee>) {
  return em.salary;
};

console.log(getEmployeeSalary({ name: 'John', salary: '2000' }));
