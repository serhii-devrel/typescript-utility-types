{
  interface Employee {
    name: string;
    lastName: string;
    salary: string;
    area: string;
  }

  type Person = Omit<Employee, 'salary' | 'area'>;
  const character: Person = { name: 'John', lastName: 'Smith' };

  console.log(character);
}
