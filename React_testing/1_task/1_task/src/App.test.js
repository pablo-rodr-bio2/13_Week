import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from './App.js'
import { useState } from "react"

jest.mock('react', ()=> ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}))

const mockedSetTiles = jest.fn()

describe('App Component', () => {

    beforeEach(() => {
        useState.mockClear()
        useState.mockImplementation(jest.requireActual('react').useState)
    })

    it('renders in first load', () => {
        render(<App />)
        expect(screen.getByTestId('App')).toBeInTheDocument()
    })

    it('adds a tile when button is clicked', () => {
        render(<App />)
        const addButton = screen.getByTestId('adds')
        fireEvent.click(addButton)
        expect(screen.getAllByTestId('tile')).toHaveLength(1)
    })

    it('has 4 tiles if button was clicked 4 times', ()=> {
        const mockedColors = ['red', 'blue', 'green', 'yellow']
        useState.mockImplementation(() => [mockedColors, mockedSetTiles])
        render(<App />)
        expect(screen.getAllByTestId('tile')).toHaveLength(4)
    })
    
})