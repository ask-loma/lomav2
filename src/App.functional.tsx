import React, { useCallback, useState } from 'react';
import { SearchBar } from './Components/SearchBar';
import { Landing } from './Components/Landing';

const App: React.FC = () => {
    const [, setSearchQuery] = useState("")
    const [landing, setLanding] = useState(true)

    const onSearch = useCallback((query: string) => {
        setSearchQuery(query)
        setLanding(false)
    }, [])

    return (<div className="App w-screen h-full bg-white">
        <SearchBar onChange={onSearch} />
        {landing ? <Landing /> : <p></p >}
    </div>)
};

export default App