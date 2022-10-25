import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { Section, Input, Title } from "./styled";

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
    <Section>
      <Title>Szukaj pracownika</Title>
      <Input
        placeholder="Wpisz nazwisko pracownika"
        value={query || ""}
        onChange={onInputChange}
      />
    </Section>
  );
};
