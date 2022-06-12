import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
