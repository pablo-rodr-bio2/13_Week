import { render, screen } from "@testing-library/react"
import List from "./List"
import '@testing-library/jest-dom'

const mockedColors = [
    '#800000',
    '#800080',
    '#FF00FF'
]

describe('List Component', () => {
    it('renders ok', () => {
        render(<List tiles={mockedColors} />)
        expect(screen.getByTestId('list')).toBeInTheDocument()
    })

    it('renders with 3 colors', () => {
        render(<List tiles={mockedColors} />)
        expect(screen.getAllByTestId('tile')).toHaveLength(3)
    })

    it('is not rendered with 0 tiles', () => {
        render(<List />)
        expect(screen.queryByTestId('list')).not.toBeInTheDocument()
    })
})