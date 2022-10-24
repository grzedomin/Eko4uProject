import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  let navigate = useNavigate();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
};
