import React, {Component} from 'react'
import {Stage} from 'react-konva'

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

        this.setState(
        {
            size,
            rows,
            unit
        })
    }

    move = () =>
    {
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

    }

    render()
    {
        return (
            <div>
                <Stage>
                    {/* <Board /> */}
                    {/* <Squares /> */}
                </Stage>
            </div>
        )
    }
}

export default TicTacToe