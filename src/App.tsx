import React, { useState } from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider, Typography, Container, Divider, Card, CardContent, Link, Button } from '@mui/material';
import { DARK_THEME } from './themes';
import Grid from '@mui/material/Unstable_Grid2';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import tessarakTypography from './images/tessarak-typography-one.png';

type InfoCardProps = {
    title: string;
    subtitle: string;
    color: string;
}

function InfoCard({title, subtitle, color}: InfoCardProps): JSX.Element {
    return (
        <Box sx={{padding: '20px'}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h3" sx={[styles.cardSubtitle, {fontWeight: '600', color}]}>{title}</Typography>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h5" sx={[styles.cardSubtitle, {fontWeight: 'bold'}]}>{subtitle}</Typography>
            </Box>
        </Box>
    );
}

type CTACardProps = {
    title: string;
    subtitle: string;
}

function CTACard({title, subtitle}: CTACardProps): JSX.Element {
    return (
        <Box sx={{padding: '8px'}}>
            <Card>
                <CardContent>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant="h5" sx={[styles.cardSubtitle, {fontWeight: '600', color: '#FFFFFF'}]}>{title}</Typography>
                    </Box>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant="body1" sx={[styles.cardSubtitle, {color: '#FFFFFF'}]}>{subtitle}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

type TkLinkProps = {
    url: string;
    display: string;
}
function TkLink({url, display}: TkLinkProps): JSX.Element {
    return (
        <Typography component={Link} target="_blank" href={url} variant="h5" sx={[styles.needText, {color: '#029aa8'}]}>{display}</Typography>
    );
}

function MainBullets(): JSX.Element {
    return (
        <Grid container spacing={1} sx={{marginTop: '0px'}}>
            <Grid xs={12} md={4}><InfoCard title="INFINITE" subtitle="Dimensions" color={'#c66ef1'}/></Grid>
            <Grid xs={12} md={4}><InfoCard title="ONE" subtitle="Requirement" color={'#e851be'}/></Grid>
            <Grid xs={12} md={4}><InfoCard title="ZERO" subtitle="Compromises" color={'#f3f3f3'}/></Grid>
        </Grid>
    );
}

function TheRequirementSection(): JSX.Element {
    return (
        <Box sx={{textAlign: 'center', marginTop: '10px'}}>
            <Typography variant="h6" sx={[styles.subHeader, {fontWeight: '900', color: '#f3f3f3'}]}>THE REQUIREMENT</Typography>
            <Box sx={{marginTop: '10px', textAlign: 'center', paddingLeft: '35px', paddingRight: '35px'}}>
                <Typography variant="h4" sx={[styles.needTitle, {color: '#f39509'}]}>It is impossible for The Tessarak to be censored or shut down by governments and corporations.</Typography>
            </Box>
        </Box>
    );
}

function App() {
    const [theme, setTheme] = useState(DARK_THEME);

    async function getAndroidApp(): Promise<void> {
        const response = await fetch('https://tessarak-webserver-prod-u4686.kinsta.app/v1/apk');
        const url = await response.text();
        window.open(url, '_blank');
    }

    async function getIphoneApp(): Promise<void> {
        window.open('https://testflight.apple.com/join/t1n230LE', '_blank');
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md" sx={{paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '50px'}}>
                <Box sx={{textAlign: 'center'}}>
                    <img src={tessarakTypography} width="250px"/>
                </Box>
                <MainBullets/>
                <Divider sx={{marginTop: '5px', marginBottom: '15px'}}/>
                <TheRequirementSection/>
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h6" sx={[styles.needTitle, {color: '#c66ef1'}]}>THE Tessarak is a network of decentralized social media servers that can not be shut down or censored by centralized agencies.</Typography>
                </Box>

                {/*EXPLANATION SECTION*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h6" sx={[styles.needTitle, {color: '#e851be'}]}>Tessarak is a social meda app that incorporates many loved features from TikTok, Signal, Facebook, etc.</Typography>
                </Box>
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h6" sx={[styles.needTitle, {color: '#029aa8'}]}>Tessa is an ai chatbot built into the Tessarak app. She is eager to help you navigate the Tessarak, and anything else a cool chatbot can do.</Typography>
                </Box>

                {/*GET APP SECTION*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h5" sx={[styles.needTitle, {color: '#f3f3f3'}]}>You can get the Tessarak app right now and start chatting with Tessa.</Typography>
                </Box>
                <Box sx={{marginTop: '30px'}}>
                    <Button onClick={getAndroidApp} variant="contained" color="secondary" startIcon={<AndroidIcon/>}><Typography variant="h6" sx={{fontWeight: 'bold'}}>Get the Android App</Typography></Button>
                </Box>
                <Box sx={{marginTop: '20px', marginBottom: '20px'}}>
                    <Typography variant="subtitle1" sx={styles.needText}>You'll have to accept installs from unknown developers since this isn't in the Play Store yet.</Typography>
                </Box>
                <Box sx={{marginTop: '30px'}}>
                    <Button onClick={getIphoneApp} variant="contained" color="secondary" startIcon={<AppleIcon/>}><Typography variant="h6" sx={{fontWeight: 'bold'}}>Get the Iphone App</Typography></Button>
                </Box>
                <Box sx={{marginTop: '20px', marginBottom: '20px'}}>
                    <Typography variant="subtitle1" sx={styles.needText}>For iphone users, you will be directed to enroll in the Testflight beta testing of Tessarak, since the app isn't in the app store yet.</Typography>
                </Box>

                {/*CALL TO ACTION SECTION*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h4" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#e851be'}}>YOU, yes YOU, MUST help to make this happen.</Typography>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#f3f3f3'}}>Here's how you can help:</Typography>
                </Box>

                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 650: 2, 900: 3}}>
                    <Masonry><CTACard key="1" title="Frontend Developers" subtitle="Currently, it's React Native and React web.  But it's possible for this stack to end up somewhere we can't see quite yet.  If you are good with frontend (UI, UX, code), please come contribute."/>
                        <CTACard key="2" title="Backend Developers" subtitle="Particularly blockchain stuff, decentralized P2P, etc."/>
                        <CTACard key="3" title="Influencers" subtitle="We need people with followings to bring attention here.  Are you an influencer?  Know someone?"/>
                        <CTACard key="4" title="Early Adopters" subtitle="Get the app before it's in the app stores, be patient, be thorough, communicative, and dream BIG."/>
                        <CTACard key="5" title="Consultants" subtitle="Even if you don't have the time to contribute to code directly, please still come and toss out ideas, help avoid pitfalls."/>
                        <CTACard key="6" title="Business/Accounting" subtitle="We are probably gonna need to create a non-profit and all that, right? :)"/>
                        <CTACard key="7" title="Marketing" subtitle="We need energy thrown at refining this message and making it presentable and adoptable."/>
                        <CTACard key="8" title="Other Volunteers" subtitle="Hype this mug up!  Be available to help when needed.  Think up ideas and share them in the Discord."/>
                        <CTACard key="9" title="Signal Experts" subtitle="If you have implemented the Signal Protocol before and/or know a lot about it, we need you!!!  We are using it for the e2ee messaging feature."/>
                    </Masonry>
                </ResponsiveMasonry>


                {/*CODE LINKS SECTION*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#c66ef1'}}>Here's where the code is: </Typography>
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <TkLink url={'https://github.com/a2345sooted/tessarak-social'} display={'REACT NATIVE APP'}/>
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <TkLink url={'https://github.com/a2345sooted/tessarak-webserver'} display={'NODEJS API SERVER'}/>
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <TkLink url={'https://github.com/a2345sooted/tessarak-public-web'} display={'THIS VERY PUBLIC WEBSITE'}/>
                </Box>

                {/*DISCORD SECTION*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#e851be'}}>Here's the discord:</Typography>
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <TkLink url={'https://discord.gg/jb35c6gM'} display={'Join the Discord'}/>
                </Box>

                {/*SPECIAL THANKS*/}
                <Divider sx={{marginTop: '20px'}}/>
                <Box sx={{marginTop: '30px', marginBottom: '20px'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#c66ef1'}}>Special Thanks:</Typography>
                </Box>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 650: 2, 900: 3}}>
                    <Masonry>
                        <CTACard key="1" title="TheDarkNode" subtitle="TheDarkNode is true OG, and the admin of the Discord server."/>
                        <CTACard key="2" title="Tessa Glenn" subtitle="Tessa is a hairstylist in Columbia, MO. She served as an inspiration with her name and Tessarak started as an AI companion for hairstylists."/>
                        <CTACard key="3" title="LeAnn Holtmeyer" subtitle="LeAnn is good friend of the foundation and she has helped a lot to keep the path cleared for the devs."/>
                    </Masonry>
                </ResponsiveMasonry>

                {/*FOOTER SECTION*/}
                <Box sx={{marginTop: '75px', textAlign: 'center'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#f3f3f3'}}>The Tessarak Project &middot; 2023</Typography>
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
        // fontWeight: '400',
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
