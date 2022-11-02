import { useDate } from "./useDate";
import { DateWrapper, Day } from "./styled";

export const Clock = () => {
  const date = useDate();

  const day = () =>
    date.toLocaleString("pl", {
      weekday: "long",
    });
  const formatDate = () =>
    date.toLocaleDateString("pl", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

  return (
    <DateWrapper>
      <Day>{day(date).toLocaleUpperCase()}</Day>
      <span>{formatDate(date)}</span>
    </DateWrapper>
  );
};
