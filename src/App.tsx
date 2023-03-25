import React, { useState } from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider, Typography, Container, Divider, Card, CardContent } from '@mui/material';
import { DARK_THEME } from './themes';
import Grid from '@mui/material/Unstable_Grid2';


function App() {
  const [theme, setTheme] = useState(DARK_THEME);
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Container maxWidth="md" sx={{paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px'}}>
              <Box>
                  <Typography variant="h2" sx={{fontFamily: 'Exo 2', fontWeight: 'bold', color: '#029aa8'}}>Tessarak</Typography>
              </Box>
              <Box>
                  <Typography variant="h5" sx={{fontFamily: 'Exo 2', fontWeight: '400', color: '#e1e1e1'}}>Opensource, decentralized social media.</Typography>
              </Box>
              {/*<Divider sx={{marginTop: '16px', marginBottom: '16px'}}/>*/}
              <Grid container spacing={2} sx={{marginTop: '20px'}}>
                  <Grid xs={12} md={4}>
                      <Card variant="outlined">
                          <CardContent>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h2" sx={[styles.cardSubtitle, {fontWeight: '600'}]}>5+</Typography>
                              </Box>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h6" sx={styles.cardSubtitle}>Dimensions</Typography>
                              </Box>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid xs={12} md={4}>
                      <Card variant="outlined">
                          <CardContent>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h2" sx={[styles.cardSubtitle, {fontWeight: '600'}]}>2</Typography>
                              </Box>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h6" sx={styles.cardSubtitle}>Requirements</Typography>
                              </Box>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid xs={12} md={4}>
                      <Card variant="outlined">
                          <CardContent>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h2" sx={[styles.cardSubtitle, {fontWeight: '600'}]}>ZERO</Typography>
                              </Box>
                              <Box sx={{textAlign: 'center'}}>
                                  <Typography variant="h6" sx={styles.cardSubtitle}>Compromises</Typography>
                              </Box>
                          </CardContent>
                      </Card>
                  </Grid>
              </Grid>
          </Container>
      </ThemeProvider>
  );
}

const styles = {
  cardSubtitle: {
      fontFamily: 'Exo 2',
      fontWeight: '400',
      color: '#f3f3f3'
  }
};

export default App;
