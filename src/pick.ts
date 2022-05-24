interface Employee {
  name: string;
  lastName: string;
  salary: string;
  area: string;
}

type Person = Pick<Employee, 'name' | 'lastName'>;

const person: Person = {
  name: 'John',
  lastName: 'Smith',
};

console.log(person);
