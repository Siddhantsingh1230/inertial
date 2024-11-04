export const getTimeDifference=(fromDate, toDate = new Date())=> {
  const diffMilliseconds = toDate - fromDate;

  const diffYears = toDate.getFullYear() - fromDate.getFullYear();
  if (diffYears > 0) return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;

  const diffMonths =
    toDate.getFullYear() * 12 +
    toDate.getMonth() -
    (fromDate.getFullYear() * 12 + fromDate.getMonth());
  if (diffMonths > 0) return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;

  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

  const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  if (diffMinutes > 0)
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;

  return "just now"; // for cases where the difference is less than a minute
}
