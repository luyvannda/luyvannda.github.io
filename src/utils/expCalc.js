function convertDateToMonths(dateString) {
  const date = new Date(dateString);
  return date.getFullYear() * 12 + date.getMonth();
}

export function calculateExperience(startDate) {
  const currentDate = new Date();
  const startMonth = convertDateToMonths(startDate);

  const currentMonth = convertDateToMonths(currentDate);

  const monthInterval = currentMonth - startMonth;

  const yearsOfExperience = Math.floor(monthInterval / 12);

  const monthsOfExperience = monthInterval % 12;

  if (yearsOfExperience > 0) {
    return `${yearsOfExperience} Year ${
      yearsOfExperience > 1 ? "s" : ""
    } ${monthsOfExperience} Month${monthsOfExperience > 1 ? "s" : ""}`;
  } else {
    return `${monthsOfExperience} Month${monthsOfExperience > 1 ? "s" : ""}`;
  }
}
