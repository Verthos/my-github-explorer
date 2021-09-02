import { Header } from './components/Header';
import { RepositoryList } from './components/RepositoryList';
import { Search } from './components/Search';
import { SearchProvider } from './hooks/useSearch';
import { GlobalStyle } from './styles/global';

//https://api.github.com/search/repositories?q={variavel}%20in:name,description&per_page=10


export function App() {




  return (
    <>  
      <Header />

      <SearchProvider>

        <Search />
        <RepositoryList />

      </SearchProvider>

      
      <GlobalStyle/>
    </>
    
  );
}



