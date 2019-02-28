import {Tour} from './tour';

export class VacantTour {
  id: number;
  startDate: Date;
  vacantPlaces: number;
  vacant: boolean = true;
  tour: Tour;
}
