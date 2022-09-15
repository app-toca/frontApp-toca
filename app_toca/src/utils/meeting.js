export const nextMeeting = (day, hour) => {
  const currentDate = new Date();
  let meetingDay;

  console.log(currentDate.getDay());
  console.log(day);
  if (currentDate.getDay() > day) {
    meetingDay = currentDate.getDate() - currentDate.getDay() + day + 7;
  } else if (currentDate.getDay() < day) {
    meetingDay = currentDate.getDate() + day - currentDate.getDay();
  } else {
    if (currentDate.getHours() >= +hour.split(":")[0]) {
      meetingDay = currentDate.getDate() + 7;
    } else {
      meetingDay = currentDate.getDate();
    }
  }

  const finalMeetingDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    meetingDay
  );

  return `${finalMeetingDate.getDate()}/${finalMeetingDate.getMonth()}/${finalMeetingDate.getFullYear()} - ${hour}`;
};
