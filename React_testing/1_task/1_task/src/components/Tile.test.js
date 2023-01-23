import { render, screen } from "@testing-library/react"
import Tile from "./Tile"
import '@testing-library/jest-dom'

const mockedColor = 'red'

describe('Tile Component', () => {
    it('renders with correct background color', () => {
        render(<Tile color={mockedColor}/>)
        const styles = getComputedStyle(screen.getByTestId('tile'))
        expect(styles.backgroundColor).toBe('red')
    })

})