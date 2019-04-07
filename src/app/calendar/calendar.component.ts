import {Component, Input, OnInit} from '@angular/core';
import {TourService} from '../services/tour.service';
import {Tour} from '../entity/tour';

const RANGE_VACANT_DATES: number = 6; // months, max valid value = 12

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() tour: Tour;
  disabledDates: Date[] = [];
  minDate: Date;
  maxDate: Date;
  selectedDate: Date;
  active: boolean = false;
  ru: any;

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.ru = {
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Сегодня',
      clear: 'Очистить',
      dateFormat: 'mm/dd/yy'
    };
    this.setMinAndMaxDates();
    this.getDisabledDates();
  }

  getDisabledDates() {
    this.tourService.getCalendarDisableDates()
      .subscribe(dates => {
        for (let i=0; i<dates.length; i++) {
          this.disabledDates.push(new Date(dates[i]));
        }
        this.setTourDisabledDates();
      });
  }

  setTourDisabledDates() {
    if (this.tour === undefined) {
      setTimeout(() => this.setTourDisabledDates(), 100);
      return;
    }
    for (let i = 0; i<this.tour.disabledDates.length; i++) {
      this.disabledDates.push(new Date(this.tour.disabledDates[i]));
    }
    this.active = true;
  }

  private setMinAndMaxDates() {
    this.minDate = new Date();
    this.maxDate = new Date();
    if ((this.minDate.getMonth() + RANGE_VACANT_DATES) <= 12) {
      this.maxDate.setFullYear(this.minDate.getFullYear());
      this.maxDate.setMonth(this.minDate.getMonth() + RANGE_VACANT_DATES);
    } else {
      this.maxDate.setFullYear(this.minDate.getFullYear() + 1);
      this.maxDate.setMonth(this.minDate.getMonth() + 12 - RANGE_VACANT_DATES);
    }
  }
}
