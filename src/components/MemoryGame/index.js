/* eslint-disable no-unused-vars */
import { Component } from "react";
import ResultCard from '../ResultCard'
import Score from "../Score";
import Card from '../Card';

import './index.css'


class MemoryGame extends Component{
    state = {
        checkFruitsList:[],
        isGameStart:true,
        HighestScore:0,
    }
    
    replayGame = () =>{
        this.setState({checkFruitsList:[],isGameStart:true})
    }

    getScore = () =>{
        const {fruitsList} = this.props
        const {checkFruitsList} = this.state
        const isWonGame = checkFruitsList.length === fruitsList.length
        
        return(
            <ResultCard 
             isWonGame = {isWonGame}
             gameScore = {checkFruitsList.length}
             onClickPlayAgain = {this.replayGame}
                 />
        )

    }

    endsGame = score =>{
        const{HighestScore} = this.state
        let newHighestScore = HighestScore

        if (score > newHighestScore){
            newHighestScore = score

        }
        this.setState({HighestScore:newHighestScore, isGameStart:false})
    }

    checkFruits = id =>{
        const {fruitsList} = this.props
        const {checkFruitsList} = this.state
        const isFruitChecked = checkFruitsList.includes(id)
        const checkFruitsListLength = checkFruitsList.length

        if(isFruitChecked){
            this.endsGame(checkFruitsListLength)
        }
        else{
            if(checkFruitsListLength === fruitsList.length - 1){
                this.endsGame(fruitsList.length)
            }
            this.setState(prevState =>({
                checkFruitsList:[...prevState.checkFruitsList,id],
            }))
        }
    }

    getFilteredFruitsList = () =>{
        const {fruitsList} = this.props

        return fruitsList.sort(()=>Math.random()-0.5)
    }

    getFruitsList = () =>{
        const filteredFruitsList = this.getFilteredFruitsList()

        return(
            <ul className="fruits-container">
                {filteredFruitsList.map(eachFruit => (
                    <Card
                      key={eachFruit.id}
                      fruitDetails = {eachFruit}
                      checkFruits = {this.checkFruits}
               />
                      ))}
            </ul>
        )

    }
    render(){
        const {checkFruitsList,HighestScore,isGameStart} = this.state

        return(
            <div className="main-container">
                <Score
                HighestScore={HighestScore}
                isGameStart = {isGameStart}
                score = {checkFruitsList.length}/>
<div className="fruits-list-container">
    {isGameStart ? this.getFruitsList():this.getScore()}
</div>
    
            </div>

        )
    }



}
export default MemoryGame