export class Order {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  participants: number = 1;
  comment: string;

  bookingDate: Date = new Date();
  confirmation: boolean = false;

  tourId: number;
  date: Date;
}
