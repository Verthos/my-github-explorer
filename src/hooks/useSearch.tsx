import { createContext, useState, ReactNode, useContext } from "react";

interface SearchProviderProps {
    children: ReactNode
}

interface SearchProviderData{
    queryType: string;
    argument: string;
    usersIsSelected: string;
    repositoriesIsSelected: string;
    handleNewArgument: (argument: string) => void;
    userButtomIsSelected: (isSelected: string) => void;
    repositoriesButtomIsSelected: (isSelected: string) => void;

}


const SearchContext = createContext<SearchProviderData>({} as SearchProviderData);

export function SearchProvider({children} : SearchProviderProps) {
    
    
    const [repositoriesIsSelected, setRepositoriesIsSelected] = useState("selected")
    const [usersIsSelected, setUsersIsSelected] = useState("notSelected")
    const [argument, setArgument] = useState("Verthos");
    const [queryType, setQueryType] = useState("repositories")


    function handleNewArgument(argument: string){
        setArgument(argument)
    }

    const userButtomIsSelected = function (usersIsSelected: string){
        if(usersIsSelected === "notSelected") {
            setUsersIsSelected("selected")
            setRepositoriesIsSelected("notSelected")
            setQueryType("users")
        }else return;
    }

    const repositoriesButtomIsSelected = function (repositoriesIsSelected: string){
        if(repositoriesIsSelected === "notSelected") {
            setRepositoriesIsSelected("selected")
            setUsersIsSelected("notSelected")
            setQueryType("repositories")
        }else return;
    }



    return(
        
        <SearchContext.Provider value={{handleNewArgument, argument, queryType, usersIsSelected, repositoriesIsSelected, userButtomIsSelected, repositoriesButtomIsSelected}}>
            {children}
        </SearchContext.Provider>
    )


}

export function useSearch() {
    const context = useContext(SearchContext)
    return context
}