import { createContext, useState, ReactNode, useContext } from "react";

interface SearchProviderProps {
    children: ReactNode
}
interface SearchProviderData{
    argument: string;
    handleNewArgument: (input: string) => void
}


const SearchContext = createContext<SearchProviderData>({} as SearchProviderData);

export function SearchProvider({children} : SearchProviderProps) {
    
    const [argument, setArgument] = useState("ignite-reactjs1");


    function handleNewArgument(input: string){
        setArgument(input)
    }

    return(
        
        <SearchContext.Provider value={{handleNewArgument, argument}}>
            {children}
        </SearchContext.Provider>
    )


}

export function useSearch() {
    const context = useContext(SearchContext)
    return context
}