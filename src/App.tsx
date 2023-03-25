import React, { useState } from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider, Typography, Container, Divider, Card, CardContent, Link } from '@mui/material';
import { DARK_THEME } from './themes';
import Grid from '@mui/material/Unstable_Grid2';

type InfoCardProps = {
    title: string;
    subtitle: string;
}

function InfoCard({title, subtitle}: InfoCardProps): JSX.Element {
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h2" sx={[styles.cardSubtitle, {fontWeight: '600'}]}>{title}</Typography>
                </Box>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={styles.cardSubtitle}>{subtitle}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}


function App() {
    const [theme, setTheme] = useState(DARK_THEME);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md" sx={{paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '150px'}}>
                <Box>
                    <Typography variant="h2" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#029aa8'}}>Tessarak</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: '400', color: '#e1e1e1'}}>Indestructible, opensource, decentralized social media.</Typography>
                </Box>
                <Grid container spacing={2} sx={{marginTop: '20px'}}>
                    <Grid xs={12} md={4}><InfoCard title="5+" subtitle="Dimensions"/></Grid>
                    <Grid xs={12} md={4}><InfoCard title="1" subtitle="Requirement"/></Grid>
                    <Grid xs={12} md={4}><InfoCard title="ZERO" subtitle="Compromises"/></Grid>
                </Grid>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h5" sx={styles.subHeader}>The Requirement:</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Can NOT be censored or shut down by government or corporations.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle1" sx={styles.needText}>*** If we can not meet that requirement with our current tech, then we are gonna build new tech that can meet that requirement.</Typography>
                </Box>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h5" sx={styles.subHeader}>What we urgently need from the community:</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Influencers</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>We need people with followings to bring attention here.  Are you an influencer?  Know someone?</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Early Adopters</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Get the app before it's in the app stores, be patient, be thorough, communicative, and dream BIG.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Backend Developers</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Particularly blockchain stuff, decentralized P2P, etc.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Frontend Developers</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Currently, it's React Native and React web.  But it's possible for this stack to end up somewhere we can't see quite yet.  If you are good with frontend (UI, UX, code), please come contribute.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Experienced Tech Consultants</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Even if you don't have the time to contribute to code directly, please still come and toss out ideas, help avoid pitfalls.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Business, Lawyers, Accountants</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>We are probably gonna need to create a non-profit and all that, right? :)</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Marketers</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>We need energy thrown at refining this message and making it presentable and adoptable.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Other Volunteers</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Hype this mug up!  Be available to help when needed.  Think up ideas and share them in the Discord.</Typography>
                </Box>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h5" sx={styles.subHeader}>Where can we talk for now?</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- The Tessarak Project Discord Server</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography
                        component={Link}
                        target="_blank"
                        href="https://discord.gg/jb35c6gM"
                        variant="h6"
                        sx={[styles.needText, {color: '#029aa8'}]}>
                        https://discord.gg/jb35c6gM
                    </Typography>
                </Box>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h5" sx={styles.subHeader}>Where is the code?</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Here is the code for the react native mobile app:</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography
                        component={Link}
                        target="_blank"
                        href="https://github.com/a2345sooted/tessarak-social"
                        variant="subtitle1"
                        sx={[styles.needText, {color: '#029aa8'}]}>
                        https://github.com/a2345sooted/tessarak-social
                    </Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Here is the code for this public website app:</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography
                        component={Link}
                        target="_blank"
                        href="https://github.com/a2345sooted/tessarak-public-web"
                        variant="subtitle1"
                        sx={[styles.needText, {color: '#029aa8'}]}>
                        https://github.com/a2345sooted/tessarak-public-web
                    </Typography>
                </Box>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h5" sx={styles.subHeader}>Special Thanks:</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- TheDarkNode</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>TheDarkNode setup and runs the discord server.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h6" sx={styles.needTitle}>- Tessa Glenn, The Curl Whisperer</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="subtitle2" sx={styles.needText}>Tessa is a hairstylist in Columbia, MO.  Her name served as an inspiration for Tessarak.</Typography>
                </Box>
                <Box sx={{marginTop: '50px'}}>
                    <Typography variant="h4" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#029aa8'}}>Come to the discord server to chat, get setup on the repos, and/or get the mobile app!</Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

const styles = {
    cardSubtitle: {
        fontFamily: 'Exo 2',
        fontWeight: '400',
        color: '#f3f3f3'
    },
    subHeader: {
        fontFamily: 'Exo 2',
        fontWeight: '400',
        color: '#e1e1e1'
    },
    needTitle: {
        fontFamily: 'Exo 2',
        fontWeight: 'bold',
        color: '#e1e1e1'
    },
    needText: {
        fontFamily: 'Exo 2',
        color: '#e1e1e1'
    }
};

export default App;
