export class Tour {
  id: number;
  price: number;
  dates: Array<number>;

  constructor(public name: string,
              public description: string,
              public imageSrc: string = 'assets/img/nature.jpg'){
  }
}
