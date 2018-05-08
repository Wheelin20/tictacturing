import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            rows: 3
        }
    }

    componentWillMount()
    {
        let height = window.innerHeight
        let width = window.innerWidth
        let size = height < width ? height*0.8 : width*0.8
        let rows = this.state.rows
        let unit = size / rows
        let coordinates = []

        for (let y = 0; y < rows; y++)
        {
            for (let x = 0; x < rows; x++)
            {
                coordinates.push([x*unit, y*unit])
            }
        }

        this.setState(
        {
            size,
            rows,
            unit,
            coordinates
        })
    }

    move = (marker, index) =>
    {
        console.log('Move made', marker, index)
        // placeholder for player move
    }

    makeAiMove = () =>
    {
        // placeholder for Ai move
    }

    turingTest = () => 
    {
        // placeholder
    }

    recordGame = () =>
    {
        // placeholder
    }

    render()
    {
        let
        {
            size,
            unit,
            rows,
            coordinates,
            gameState,
            win,
            gameOver,
            yourTurn,
            ownMark
        } = this.state

        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Board unit={unit} rows={rows} size={size} />
                    <Squares unit={unit} coordinates={coordinates} gameState={gameState} yourTurn={yourTurn} ownMark={ownMark} move={this.move} />
                </Stage>
            </div>
        )
    }
}

export default TicTacToe