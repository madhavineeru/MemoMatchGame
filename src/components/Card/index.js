import './index.css'

const Card = props =>{
    const {fruitDetails,checkFruits} = props
    const {id,fruitUrl,fruitName} = fruitDetails

     const onClickFruit = () =>{
        checkFruits(id)
    }

    return(
        <li className='fruits-list'>
            <button className='fruit-btn' type='button' onClick={onClickFruit}>
                <img src={fruitUrl} alt={fruitName} className='fruit-img'/>

            </button>
        </li>
    )

}

export default Card