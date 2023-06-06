import './index.css'

const Score = props =>{
    const {score, HighestScore,isGameStart} = props
    return(
        <nav className='nav-container'>
            <div className='nav-display-container'>           
             <div className='navbar-title-container'>
        <h1 className='title'>Memory Match Game</h1>

            </div>
            {isGameStart && (
                <div className='score-container'>
                    <p className='score-text'>Score:{score}</p>
                    <p className='score-text'>HighestScore: {HighestScore}</p>
                </div>
            )

            }
            </div>

        </nav>
    )
}

export default Score