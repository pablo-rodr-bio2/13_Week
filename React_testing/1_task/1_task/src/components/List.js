import Tile from './Tile'

const List = ({ tiles }) => {
    if(!tiles) return null

    return(
        <div data-testid="list">
            {tiles.map(color => <Tile key={color} color={color}/>)}
        </div>
    )

}

export default List