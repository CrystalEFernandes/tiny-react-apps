import React,{useState} from 'react'
import '../Component/RoleStyles.css'
import Navbar from '../Component/Navbar'
import Dice1 from '../Dice/1.svg'
import Dice2 from '../Dice/2.svg'
import Dice3 from '../Dice/3.svg'
import Dice4 from '../Dice/4.svg'
import Dice5 from '../Dice/5.svg'
import Dice6 from '../Dice/6.svg'

const Roll = () => {
    const dices=[Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]
    const [won,setWon]=useState(null)
    const [dice,setDice]=useState(dices[0])
    const [selected,setSelected]=useState(null)
    const [winScore,setWinScore]=useState(0)
    const [loseScore,setLoseScore]=useState(0)
    
    const handleClick=()=>{
        var i=Math.floor(Math.random()*6)
        setDice(dices[i])
        if(selected===i){
            setWon(true)
            setWinScore(winScore+1)
        }
        else if(selected===null){

        }
        else if(selected!==i){
            setWon(false)
            setLoseScore(loseScore+1)
        }
    }   
    const rollbutton=({face}) => {
        setSelected(face-1);
    }
      
    const reset=()=>{
        setWinScore(0)
        setLoseScore(0)
    }
    
  return (
    <div className='row'>
        <div>
            <Navbar/>
            <div className='griddy'>
                <button onClick={()=>rollbutton({face:1})} style={{backgroundColor: selected===0?'#ffffff':'#000000',color:selected===0?'#000000':'#ffffff'}} className='number_btn'>1</button>
                <button onClick={()=>rollbutton({face:2})} style={{backgroundColor:selected===1?"#ffffff":"#000000",color:selected===1?'#000000':'#ffffff'}} className='number_btn'>2</button>
                <button onClick={()=>rollbutton({face:3})} style={{backgroundColor:selected===2?"#ffffff":"#000000",color:selected===2?'#000000':'#ffffff'}} className='number_btn'>3</button>
                <button onClick={()=>rollbutton({face:4})} style={{backgroundColor:selected===3?"#ffffff":"#000000",color:selected===3?'#000000':'#ffffff'}} className='number_btn'>4</button>
                <button onClick={()=>rollbutton({face:5})} style={{backgroundColor:selected===4?"#ffffff":"#000000",color:selected===4?'#000000':'#ffffff'}} className='number_btn'>5</button>
                <button onClick={()=>rollbutton({face:6})} style={{backgroundColor:selected===5?"#ffffff":"#000000",color:selected===5?'#000000':'#ffffff'}} className='number_btn'>6</button>
                
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={reset} className='reset_btn'>Reset Score</button>
            </div>
        </div>
        <div className='col'>
            <div className='contentroll'>
                <h1>SELECT A NUMBER</h1>
                <h2>GET ROLLING</h2>
                <img src={dice} className='diceimg'/>
                <button onClick={handleClick} className='reset_btn'>Roll me</button>
                <div className='score'>
                    <h4>WINS: {winScore}</h4>
                    <h4>LOSES: {loseScore}</h4>
                    <h5>{won===null?"SELECT A NUMBER":won?"YAY":"NO YAY"}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roll