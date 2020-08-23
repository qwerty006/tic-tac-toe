import React, {useState} from 'react'
import Board from "./Board";
import {calculateWinner} from "../helpers";

const styles = {
    fontSize: '20px',
    width: '200px',
    margin: '20px auto',
    textAlign: 'center'
};

const buttonStyle = {

}

let firstMove = true;

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        firstMove =false;
        const boardCopy = [...board]
        if(winner || boardCopy[i])
            return;
        boardCopy[i] = xIsNext ?  'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const boldValue = ()=>{ return(
        <b>{winner? (xIsNext ? 'O' : 'X'): (xIsNext ? 'X' : 'O')}</b>
    )
    }

    const renderMoves = () => {
        return (
            <button style={buttonStyle} onClick={() => {firstMove = true; return (setBoard(Array(9).fill(null)))}}>
                Restart game
            </button>
        )
    }

    return(
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                <p>
                    {winner ? 'Winner: ': (firstMove? "First Player: ":"Next Player: ")}
                    {boldValue()}
                </p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;

