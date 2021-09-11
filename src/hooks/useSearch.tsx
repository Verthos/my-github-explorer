import { createContext, useState, ReactNode, useContext } from "react";

interface SearchProviderProps {
    children: ReactNode
}
interface SearchProviderData{
    queryType: string;
    argument: string;
    handleNewArgument: (argument: string) => void;
    handleQueryType: (type: string) => void;
}


const SearchContext = createContext<SearchProviderData>({} as SearchProviderData);

export function SearchProvider({children} : SearchProviderProps) {
    
    const [argument, setArgument] = useState("Verthos");
    const [queryType, setQueryType] = useState("repositories")

    function handleQueryType(type: string){
        setQueryType(type);
        console.log(queryType)
    }


    function handleNewArgument(argument: string){
        setArgument(argument)
    }

    return(
        
        <SearchContext.Provider value={{handleNewArgument, handleQueryType, argument, queryType}}>
            {children}
        </SearchContext.Provider>
    )


}

export function useSearch() {
    const context = useContext(SearchContext)
    return context
}