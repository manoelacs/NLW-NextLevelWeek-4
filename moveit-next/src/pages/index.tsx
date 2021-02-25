import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox';
import CompleteChallenges from '../components/CompletedChallenges';
import Countdown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (    
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
       <ExperienceBar/>
      <section>
        <div>
            <Profile/>
            <CompleteChallenges/>
            <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      
     
    </div>
  )
}