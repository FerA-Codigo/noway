import { createContext, useState } from "react";
import { News } from "@metronews/types";

type NewsContextProps = {
    weather: {} | null;
    setWeather: (data: {} | null) => void;
  }

export const NewsData = createContext<NewsContextProps | null>(null);

function Context({ children }:{children: React.ReactNode}) {
    const [weather, setWeather] = useState<any | null>({});
  
    return (
      <NewsData.Provider value={{ weather, setWeather }}>
        {children}
      </NewsData.Provider>
    );
  }

export default Context;  