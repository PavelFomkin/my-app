export class Tour {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  participants: number;
  venue: string;
  price: number;
  // pictures: Array<String>;
  visible: boolean = false;

  constructor(public imageSrc: string = 'assets/img/nature.jpg'){
  }
}
