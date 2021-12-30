/*

Counting Sundays
Problem 19

You are given the following information, but you may prefer to do some research for yourself.

1 jan 2022 is sat. // 6 //  + 28 + 3 // 9 % 7 == 2
1 feb 2022 is tue // 2
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

const howManySundaysBetween1901And2000 = () => {
  let year = 1901;
  let sundaysOnFirstOfMonth = 0;
  let dayOfWeek = 2; // jan 1 1901 was tuesday

  while (year < 2001) {

    for (let i = 1; i <= 12; i++) {
      // calculate day of week after current month
      if (i === 12 && year === 2000) {
        break;
      }

      if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) { // 31 days
        dayOfWeek = (dayOfWeek + 31) % 7;
      } else if (i === 4 || i === 6 || i === 9 || i === 11) { // 30 days
        dayOfWeek = (dayOfWeek + 30) % 7;
      } else if (i === 2) {
        if (year % 4 === 0) { // 29 days
          dayOfWeek = (dayOfWeek + 29) % 7;
        } else {
          dayOfWeek = (dayOfWeek + 28) % 7;
        }
      }

      // if sunday, add to count
      if (dayOfWeek === 0) {
        sundaysOnFirstOfMonth++;
      }

    }

    // increment year
    year++;

  };

  return sundaysOnFirstOfMonth;
};

console.log(howManySundaysBetween1901And2000())