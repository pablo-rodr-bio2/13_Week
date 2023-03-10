const Button = ({ totalTiles, setTiles, children }) => {

    
      // move it to parent //
      // being
    const getRandomLightColor = () => {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
      }

    const handleNumberTiles = (event) => {

        event.target.textContent === '+' 
        ? setTiles(current => [...current, getRandomLightColor()])
        : setTiles(current => current.slice(0, -1))
    
      }

    
    const isDisabled = ((children === '+' && totalTiles === 9) || (children === '-' && totalTiles === 0)) 


    // end
    return <button onClick={handleNumberTiles} className="btn__number" data-testid={children === '+' ? 'adds' : 'takes-out'} disabled={isDisabled}>{children}</button>
}

export default Button