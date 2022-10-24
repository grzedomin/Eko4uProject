import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { Input, Title } from "./styled";

export const SearchBar = () => {
  const query = useQueryParameter("szukaj");
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: "szukaj",
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  return (
    <div>
      <Title>Szukaj pracownika</Title>
      <Input
        placeholder="Wpisz nazwisko pracownika"
        value={query || ""}
        onChange={onInputChange}
      />
    </div>
  );
};
