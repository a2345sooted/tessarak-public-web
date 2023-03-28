import React, { useState } from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider, Typography, Container, Divider, Card, CardContent, Link } from '@mui/material';
import { DARK_THEME } from './themes';
import Grid from '@mui/material/Unstable_Grid2';

type InfoCardProps = {
    title: string;
    subtitle: string;
    color: string;
}

function InfoCard({title, subtitle, color}: InfoCardProps): JSX.Element {
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h3" sx={[styles.cardSubtitle, {fontWeight: '600', color}]}>{title}</Typography>
                </Box>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h5" sx={[styles.cardSubtitle, {fontWeight: 'bold'}]}>{subtitle}</Typography>
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
                    <Typography variant="h2" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#029aa8', textAlign: 'center'}}>Tessarak</Typography>
                </Box>
                {/*<Box>*/}
                {/*    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: '400', color: '#e1e1e1'}}>Indestructible, opensource, decentralized social media.</Typography>*/}
                {/*</Box>*/}
                <Grid container spacing={2} sx={{marginTop: '20px'}}>
                    <Grid xs={12} md={4}><InfoCard title="INFINITE" subtitle="Dimensions" color={'#c66ef1'}/></Grid>
                    <Grid xs={12} md={4}><InfoCard title="ONE" subtitle="Requirement" color={'#e851be'}/></Grid>
                    <Grid xs={12} md={4}><InfoCard title="ZERO" subtitle="Compromises" color={'#f3f3f3'}/></Grid>
                </Grid>
                <Box sx={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <Box sx={{marginTop: '30px'}}>
                        <Typography variant="body1" sx={[styles.subHeader, {fontWeight: 'bold', color: '#f3f3f3'}]}>-Requirement-</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography variant="h6" sx={[styles.needTitle, {color: '#f3f3f3'}]}>It is impossible for The Tessarak to be shut down by governments or corporations.</Typography>
                    </Box>
                    <Divider sx={{marginTop: '20px'}}/>
                    <Box sx={{marginTop: '30px'}}>
                        <Typography variant="h6" sx={[styles.needTitle, {color: '#c66ef1'}]}>THE Tessarak is a network of decentralized social media servers that can not be shut down or censored by centralized agencies.</Typography>
                    </Box>
                    <Divider sx={{marginTop: '20px'}}/>
                    <Box sx={{marginTop: '30px'}}>
                        <Typography variant="h6" sx={[styles.needTitle, {color: '#e851be'}]}>Tessarak is a social meda app that incorporates many loved features from TikTok, Signal, Facebook, etc.</Typography>
                    </Box>
                    <Divider sx={{marginTop: '20px'}}/>
                    <Box sx={{marginTop: '30px'}}>
                        <Typography variant="h6" sx={[styles.needTitle, {color: '#029aa8'}]}>Tessa is an ai chatbot built into the Tessarak app. She is eager to help you navigate the Tessarak, and anything else a cool chatbot can do.</Typography>
                    </Box>
                    <Divider sx={{marginTop: '20px'}}/>
                    <Box sx={{marginTop: '30px'}}>
                        <Typography variant="h5" sx={[styles.needTitle, {color: '#f3f3f3'}]}>You can get the Tessarak app right now and start chatting with Tessa.</Typography>
                    </Box>
                    {/*<Box sx={{marginTop: '10px'}}>*/}
                    {/*    <Typography variant="h6" sx={[styles.needText, {fontWeight: 'bold', color: '#e851be'}]}>If we can not do that with our current tech, then we will build new tech that can.</Typography>*/}
                    {/*</Box>*/}
                    <Box sx={{marginTop: '50px'}}>
                        <Typography variant="h5" sx={styles.subHeader}>Congrats, you are the earliest of early adopters!</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography variant="h6" sx={styles.needTitle}>- Android Users: Download the apk.</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Box sx={{marginTop: '10px'}}>
                            <Typography
                                component={Link}
                                target="_blank"
                                href="https://tessarak-android-alpha-apk.s3.amazonaws.com/tessarak_social_release_1.0.apk"
                                variant="subtitle1"
                                sx={[styles.needText, {color: '#029aa8'}]}>
                                Click here to start download / installation
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '10px', marginBottom: '20px'}}>
                        <Typography variant="subtitle2" sx={styles.needText}>* You'll have to accept installs from unknown developers since this isn't in the Play Store yet.</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography variant="h6" sx={styles.needTitle}>- iPhone Users: Sign up for the iOS TestFlight.</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Box sx={{marginTop: '10px'}}>
                            <Typography
                                component={Link}
                                target="_blank"
                                href="https://testflight.apple.com/join/t1n230LE"
                                variant="subtitle1"
                                sx={[styles.needText, {color: '#029aa8'}]}>
                                Click here to sign up for Tessarak beta testing on TestFlight
                            </Typography>
                        </Box>
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
                        <Typography variant="subtitle2" sx={styles.needText}>Tessa is a hairstylist in Columbia, MO. She served as an inspiration with her name and Tessarak started as an AI companion for hairstylists.</Typography>
                    </Box>
                    <Box sx={{marginTop: '50px'}}>
                        <Typography variant="h5" sx={[styles.subHeader, {color: '#029aa8', fontWeight: 'bold'}]}>What to do right now?</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography variant="h6" sx={styles.needTitle}>- Come to the discord</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography variant="subtitle2" sx={styles.needText}>From there we can all talk about ideas and development.</Typography>
                    </Box>
                    <Box sx={{marginTop: '50px'}}>
                        <Typography variant="h4" sx={[styles.subHeader, {color: '#029aa8', fontWeight: 'bold'}]}>See you there soon!</Typography>
                    </Box>
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
