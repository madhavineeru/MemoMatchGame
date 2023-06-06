import './index.css'

const ResultCard = props =>{
    const {isWonGame, gameScore, onClickPlayAgain } = props

    const resultStatus = isWonGame?"You win ":"You Lose";
    const scoreResult = isWonGame ? "Best Score":"Score";

    return(
        <div className='main-container'>
            <div className='score-container'>
                <h1 className='game-status'>{resultStatus}</h1>
                <p className='score-status'>{scoreResult}</p>
                <p className='score-status'>{gameScore}/12</p>
                <button className='button' type='button' onClick={onClickPlayAgain}>
                    Play Again
                </button>
            </div>


        </div>
    )
}
export default ResultCard