interface Car {
  mark: string;
  color: string;
}

const car: Readonly<Car> = { mark: 'BMW', color: 'black' };
car.color = 'white'; // cause en error
