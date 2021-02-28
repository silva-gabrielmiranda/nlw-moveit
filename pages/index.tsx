import Head from 'next/head';
import { ChallengeBox } from '../src/components/ChallengeBox';
import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import styles from '../src/styles/pages/Home.module.css';
import { CountdownProvider } from '../src/contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';
import { useSession } from 'next-auth/client'
import { useEffect } from 'react';




interface ChallengeProviderProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props) {

  const [session, loading] = useSession();

  useEffect(() => {
    if(session === null)
      window.location.href = "/login";
  }, [session])

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}

    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}