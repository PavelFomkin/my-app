export class Order {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  participants: number = 1;
  bookingDate: Date = new Date();
  comment: string;

  confirmation: boolean = false;
  vacantDateId: number;
  tourId: number;
}
