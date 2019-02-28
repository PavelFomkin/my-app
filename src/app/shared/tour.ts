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

  constructor(title: string, public imageSrc: string = 'assets/img/nature.jpg'){
    this.title = title;
  }
}
