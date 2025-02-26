import { add, differenceInDays, differenceInHours, format } from "date-fns";

export default function (start: Date, end: Date, isFullDay: boolean) {
  const nextAttributes = [];

  // Single day events
  if (differenceInDays(end, start) === 0) {
    if (differenceInHours(end, start) > 8) {
      // Whole day event
      // Display a highlight
      nextAttributes.push({
        highlight: "red",
        dates: { start, end },
        popover: {
          hideIndicator: true,
          label: "Réservé pour la journée",
        },
      });
    } else {
      // Short event
      // Display a dot
      nextAttributes.push({
        dot: "orange",
        dates: { start, end },
        popover: {
          hideIndicator: true,
          label: `Réservé de ${format(start, "HH:mm")} à ${format(
            end,
            "HH:mm"
          )}`,
        },
      });
    }
  } else {
    // Longer events
    // Display a global highlight
    // Display an event from (start+1) to (end-1) to display a popover
    // Display events at start and end with time popovers
    nextAttributes.push({
      highlight: "red",
      dates: { start, end },
    });

    nextAttributes.push({
      highlight: "red",
      dates: start,
      popover: {
        hideIndicator: true,
        label: isFullDay
          ? "Réservé toute la période"
          : `Réservé dès ${format(start, "HH:mm")}`,
      },
    });

    nextAttributes.push({
      highlight: "red",
      dates: end,
      popover: {
        hideIndicator: true,
        label: isFullDay
          ? "Réservé toute la période"
          : `Réservé jusqu'à ${format(end, "HH:mm")}`,
      },
    });
  }

  return nextAttributes;
}
