import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
import { useSession } from 'next-auth/client'

export function Profile() {

  const [session, loading] = useSession();
  const { level } = useContext(ChallengesContext);

  useEffect(() => {
    console.log("Session on profile ->", session)
  }, [session])

  return (
    <div className={styles.profileContainer}>
      <img
        src={(session !== undefined && session !== null) ? session.user.image : "/profile.png"}
        alt={(session !== undefined && session !== null) ? session.user.name : "User"}
      />
      <div>
        <strong>Gabriel Miranda</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}