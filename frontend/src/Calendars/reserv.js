import { getDateFormat } from "./functions/getDateFormat";

const oneDay = 86400000;
const today = new Date().getTime() + oneDay;
const globalStartDate = new Date().getTime() - oneDay * 160;

class Reserv {
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.datesArr = [];
  }

  getDatesArr() {
    let tick = 1;
    while (tick < 1000) {
      const startDateFormat = getDateFormat(new Date(this.startDate));
      const endDateFormat = getDateFormat(new Date(this.endDate));
      this.datesArr.push(new Date(this.startDate.getTime() + oneDay * tick));
      if (startDateFormat === endDateFormat) {
        break;
      }
      tick++;
    }
    console.log(this.datesArr);
  }
}
