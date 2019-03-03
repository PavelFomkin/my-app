import {Tour} from './tour';

export class VacantDate {
  id: number;
  startDate: Date;
  vacantPlaces: number;
  vacant: boolean = true;
  tour: Tour;
}
