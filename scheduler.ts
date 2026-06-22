export function nextExecution(
  interval: string
) {
  switch (interval) {
    case "daily":
      return "24 hours";

    case "weekly":
      return "7 days";

    default:
      return "30 days";
  }
}
