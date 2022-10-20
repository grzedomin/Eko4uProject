import { useDate } from "./useDate";
import { DateInfo } from "./styled";

export const Clock = () => {
  const date = useDate();

  const formatDate = () =>
    date.toLocaleDateString("pl", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return <DateInfo>{formatDate(date)}</DateInfo>;
};
