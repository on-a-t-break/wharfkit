import styles from '../styles/Home.module.css'
import { useEffect, useState, useContext } from 'react';
import { SessionContext } from "../context";
import Head from 'next/head'
import Link from 'next/link';
 
import styled from '@emotion/styled'; 
import Layout from '../layouts'
import { Button, Container, Typography } from '@mui/material';

 const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0.888rem auto;
  width: 444px;
  max-width: 444px;
  word-wrap: break-word;
  color: var(--blue-color-9);
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
 

const otherPage = () => {
const { account } = useContext(SessionContext);
const [accountDetails, setAccountDetails] = useState<any>(null)
    useEffect(() => {
        if (account) {
            setAccountDetails(account)
        }
        return () => {
            setAccountDetails(null)
          }
    }, [account])
    return (
        <Container className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main id="app" className={styles.main}>
            <Typography variant="h1" component="span" gutterBottom >
        <h1 className={styles.title}>
         {accountDetails ? `Hi, ${accountDetails?.actor}! ` : ''} 
         <br/>  Welcome to The Other <br/> <Link target={'_blank'} href="https://nextjs.org">Next.js </Link>
          & <Link target={'_blank'} style={{color: '#1cb095'}} href="https://wharfkit.com/">Wharf </Link>
          Page!
        </h1>
 </Typography>
        <Button variant="outlined" sx={{mt:4}}> 
        <Link href="/">Back to Home</Link>
        </Button>
        
            </main>
        </Container>
    )
}


otherPage.getLayout = function getLayout(page: any) {
    return <Layout simpleFooter simpleHeader>{page}</Layout>;
  };
  
  export default otherPage