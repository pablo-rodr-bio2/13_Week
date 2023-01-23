const Tile = ({ color }) => {

    const toggle = (e) => {
        console.log(e.target)
    }
    return <button onClick={(e) => toggle(e)} className='tile' data-testid="tile" style={{backgroundColor: color}} >{color}</button>
}

export default Tile