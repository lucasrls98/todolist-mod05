//componente da pesquisa
const Search = ( {search, setSearch} ) => {
    return (
        <div className="search">
            <h2>🔎Pesquisar: </h2>
            <input type="text" value={search} 
            onChange={(e)=> setSearch(e.target.value)}
            placeholder="Digite para Pesquisar..." />

        </div>
    )
}

export default Search