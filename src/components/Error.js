import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h3>Something went wrong!</h3>
      <h1>Error Page</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </>
  );
};

export default Error;
