import { isSameDay, sub } from "date-fns";

export default function (start: string, end: string) {
  // We want to check if the date include a time part, otherwise it represents the whole day
  // Note that it goes up to the next day, so we need to subtract one day

  if (start.length === 10 && end.length === 10) {
    // Whole day
    const [startYear, startMonth, startDay] = start.split("-").map(Number);
    const [endYear, endMonth, endDay] = end.split("-").map(Number);

    return {
      isFullDay: true,
      start: new Date(startYear, startMonth - 1, startDay, 0, 0, 0),
      end: sub(new Date(endYear, endMonth - 1, endDay, 23, 59, 59), {
        days: 1,
      }),
    };
  }

  return {
    isFullDay: false,
    start: new Date(start),
    end: new Date(end),
  };
}
