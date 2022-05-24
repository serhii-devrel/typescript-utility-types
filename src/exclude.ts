{
  interface Employee {
    name: string;
    lastName: string;
    salary: string;
    area: string;
  }

  type Person = Exclude<keyof Employee, 'salary' | 'area'>;
  const person: Person = 'lastName';
  console.log(person);
}
