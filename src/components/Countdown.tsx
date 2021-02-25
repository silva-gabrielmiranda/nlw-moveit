import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'



export function Countdown() {

  const { minutes, seconds, resetCountdown, startCountdown, hasFinished, isActive } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //Verifica se a string possui tamanho 2, caso não tenha coloca o '0' a esquerda
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); //Verifica se a string possui tamanho 2, caso não tenha coloca o '0' a esquerda

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>) : (
          <>
            {isActive ? (
              <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                Abandonar ciclo
              </button>) : (
                <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                  Iniciar um ciclo
                </button>)
            }
          </>
        )}

    </div>
  )
}