import { createContext, useContext, useState } from "react";

interface RouterProviderValue {
  navigate: (page: string) => void;
  page: string;
}

const RouterContext = createContext<RouterProviderValue>({
  navigate: () => null,
  page: "",
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState("home");

  function navigate(page: string) {
    setPage(page);
  }

  return (
    <RouterContext.Provider
      value={{
        navigate,
        page,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}

export const useRouter = () => useContext(RouterContext);