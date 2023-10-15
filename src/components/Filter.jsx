//Componente do filtro e ordenação
const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>📌Filtrar: </h2>
            <div className="filter-options">
                <div>
                    <p className="filter-title">Status: </p>
                    <select className="select-filter" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética: </p>
                    <button className="sort-button" onClick={()=> setSort("Desc")}>⬇Desc (Z - A)</button>
                    <button className="sort-button" onClick={()=> setSort("Asc")}>⬆Asc (A-Z)</button>
                </div>
            </div>
        </div>
    )
}

export default Filter