import Head from 'next/head';
import styles from '../src/styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';
export default function Login() {


  return (

    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section>
        <div>

        </div>
        <div>
          <button className={styles.button} onClick={() => signIn()}>Login</button>
        </div>
      </section>
    </div>
  );
}