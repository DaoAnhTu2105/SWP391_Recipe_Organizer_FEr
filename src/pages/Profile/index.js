import * as React from 'react';
import { Box, Avatar } from '@mui/material';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Typography, OutlinedInput } from '@mui/material';
import { useCookies } from 'react-cookie'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,

    };
}
const Profile = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const [cookies] = useCookies(['user'])
    const storedUserData = cookies.user
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Box sx={{ display: "flex", paddingTop: "20px", paddingLeft: "200px" }}>
                
                        <Typography sx={{ color: "#f5b041" }} variant='h6' gutterBottom>Hi ! </Typography><Typography sx={{ paddingLeft: "5px", fontWeight: "bold" }} variant='h6' gutterBottom>
                            {storedUserData.name}
                        </Typography>
                        <Avatar
                            sx={{ width: 32, height: 32 }}
                            src={storedUserData.picture}
                        ></Avatar>
                </Box>
                <Box sx={{ padding: "50px 50px" }}>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 380 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: '#f39c12', width: "250px" }}
                        >
                            <Tab sx={{ fontWeight: "bold" }} label="Personal Info" {...a11yProps(0)} />
                            <Tab sx={{ fontWeight: "bold" }} label="Change Password" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <CssBaseline />
                            <Container maxWidth="lg">
                                <Box sx={{ border: "ridge", padding: "30px 25px", maxWidth: "800px" }} >

                                    <div style={{ paddingBottom: "20px" }}>
                                        <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Bebas Neue" }}>My Basic Info</Typography>
                                    </div>

                                    <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Email Address* </Typography>
                                    <OutlinedInput placeholder={storedUserData.email} sx={{ width: "320px" }} readOnly />
                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Name </Typography>
                                            <OutlinedInput placeholder={storedUserData.name} sx={{ width: "320px" }} />
                                        </Box>

                                        <Box sx={{ paddingLeft: "20px", paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom>Phone num </Typography>
                                            <OutlinedInput placeholder="123456789" sx={{ width: "320px" }} />
                                        </Box>

                                    </Box>
                                    <Box sx={{ paddingTop: "30px", display: "flex", justifyContent: "flex-end" }}>
                                        <Fab variant="extended">
                                            SAVE CHANGES
                                        </Fab>
                                    </Box>

                                </Box>
                            </Container>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CssBaseline />
                            <Container maxWidth="lg">
                                <Box sx={{ border: "ridge", padding: "30px 25px", maxWidth: "800px" }} >

                                    <div style={{ paddingBottom: "20px" }}>
                                        <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Bebas Neue" }}>Change password</Typography>
                                    </div>

                                    <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Email Address* </Typography>
                                    <OutlinedInput placeholder={storedUserData.email} sx={{ width: "320px" }} readOnly />
                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Name </Typography>
                                            <OutlinedInput placeholder={storedUserData.name} sx={{ width: "320px" }} />
                                        </Box>

                                        <Box sx={{ paddingLeft: "20px", paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom>Phone num </Typography>
                                            <OutlinedInput placeholder="123456789" sx={{ width: "320px" }} />
                                        </Box>

                                    </Box>
                                    <Box sx={{ paddingTop: "30px", display: "flex", justifyContent: "flex-end" }}>
                                        <Fab variant="extended">
                                            SAVE CHANGES
                                        </Fab>
                                    </Box>
                                </Box>
                            </Container>
                        </TabPanel>

                    </Box>
                </Box >
            </Container >



        </>

    )
}
export default Profile;