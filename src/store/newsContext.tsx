import { createContext, useState } from "react";
import { News } from "@metronews/types";

type NewsContextProps = {
    newsData: News[] | null;
    setNewsData: (data: News[] | null) => void;
  }

export const NewsData = createContext<NewsContextProps | null>(null);

function Context({ children }:{children: React.ReactNode}) {
    const [newsData, setNewsData] = useState<News[] | null>([]);
  
    return (
      <NewsData.Provider value={{ newsData, setNewsData }}>
        {children}
      </NewsData.Provider>
    );
  }

export default Context;  