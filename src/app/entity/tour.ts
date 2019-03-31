export class Tour {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  participants: number;
  venue: string;
  price: number;
  visible: boolean = false;
  imageUrl: string = 'assets/img/nature.jpg';
  pictures: string[] = [];
  minStartTime: number;
  maxStartTime: number;

  constructor(title: string){
    this.title = title;
  }
}
