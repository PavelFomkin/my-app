export class Tour {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  participants: number;
  venue: string;
  price: number;
  imageUrl: string = 'assets/img/nature.jpg';
  pictures: string[] = [];
  visible: boolean = false;

  disabledDaysOfWeek: number[];
  disabledDates: Date[];
  minStartTime: number;
  maxStartTime: number;

  constructor(title: string){
    this.title = title;
  }
}
