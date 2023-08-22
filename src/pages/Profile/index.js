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
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';


const Profile = () => {

    const storedUserData = JSON.parse(localStorage.getItem('user'))
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
                        {storedUserData?.fullname}
                    </Typography>

                </Box>
                <Box sx={{ padding: "50px 50px" }}>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: '', width: "250px" }}
                        >
                            <Tab sx={{ fontWeight: "bold" }} label="Personal Info" {...a11yProps(0)} />

                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <CssBaseline />
                            <Container maxWidth="1000px">
                                <Box sx={{ border: "ridge", padding: "30px 25px", maxWidth: "800px" }} >

                                    <div style={{ paddingBottom: "20px", borderBottom: "1px solid" }}>
                                        <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Bebas Neue" }}>My Basic Info</Typography>
                                    </div>

                                    <Typography sx={{ paddingTop: "45px", lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Email Address* </Typography>
                                    <OutlinedInput placeholder={storedUserData.email} sx={{ width: "320px" }} readOnly />

                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Name </Typography>
                                            <OutlinedInput placeholder={storedUserData.fullname} sx={{ width: "320px" }} />
                                        </Box>

                                        <Box sx={{ paddingLeft: "20px", paddingTop: "25px" }}>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom>Phone </Typography>
                                            <OutlinedInput placeholder="123456789" sx={{ width: "320px" }} />
                                        </Box>

                                    </Box>
                                    <Box sx={{ paddingTop: "25px" }}>
                                        <Box>
                                            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom>Tagline</Typography>
                                            <CustomInput aria-label="Demo input" multiline='true' placeholder="Tell everyone about you or your cooking slogan. " />
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
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <Input
            slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
            {...props}
            ref={ref}

        />
    );
});

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
const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);
const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};
const StyledTextareaElement = styled('textarea', {
    shouldForwardProp: (prop) =>
        !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);