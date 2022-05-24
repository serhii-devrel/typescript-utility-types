{
  interface Employee {
    name: string;
    lastName: string;
    salary: string;
    area: string;
  }

  type Person = Extract<keyof Employee, 'salary' | 'area'>;
  const person: Person = 'area';
  console.log(person);
}
