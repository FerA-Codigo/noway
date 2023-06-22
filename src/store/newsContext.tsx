import { createContext, useState } from "react";
import { News } from "@metronews/types";

type NewsContextProps = {
    page: number | null;
    setPage: (data: number | null) => void;
  }

export const NewsData = createContext<NewsContextProps | null>(null);

function Context({ children }:{children: React.ReactNode}) {
    const [page, setPage] = useState<any | null>();
  
    return (
      <NewsData.Provider value={{ page, setPage }}>
        {children}
      </NewsData.Provider>
    );
  }

export default Context;  