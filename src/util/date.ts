import moment from "moment";

const transformIsoDateToReadableDate = (isoDate:string) => {
    const currentDate = moment().startOf('day');
    const inputDate = moment(isoDate).startOf('day');
    if (isoDate === "2025-03-20T12:30:00.000Z")
    console.log(currentDate.diff(inputDate, 'days'));
    

    if (currentDate.diff(inputDate, 'days') === 0) {
      return 'Today';
    } else if (currentDate.diff(inputDate, 'days') === 1) {
      return 'Yesterday';
    } else if (currentDate.diff(inputDate, 'days') === -1) {
        return 'Tomorrow';
    } else if (currentDate.diff(inputDate, 'days')  >= -7 && currentDate.diff(inputDate, 'days')  <= 7) {
      return inputDate.format('dddd');
    } else {
      return inputDate.format('YYYY-MM-DD');
    }
}

const transformIsoDateToReadableTime = (isoDate:string) => {
    return moment(isoDate).format("h:mm A");
}
const transformIsoDateToReadable = (isoDate:string) => {
    return `${transformIsoDateToReadableDate(isoDate)} ${transformIsoDateToReadableTime(isoDate)}`
}

export {transformIsoDateToReadable}