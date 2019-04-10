export class Tour {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  participants: number;
  venue: string;
  price: number;
  visible: boolean = false;
  imageUrl: string = 'assets/img/nature.jpg';
  minStartTime: number;
  maxStartTime: number;

  disabledDaysOfWeek: number[];
  disabledDates: Date[];

  constructor(title: string){
    this.title = title;
  }
}
