const Filter = () => {
    return (
        <div className="filter">
            <h2>📌Filtrar: </h2>
            <div className="filter-options">
                <div>
                    <p>Status: </p>
                    <select>
                        <option value="ALL">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética: </p>
                    <button>Ascendente</button>
                    <button>Descendente</button>
                </div>
            </div>
        </div>
    )
}

export default Filter