import * as React from 'react';
import { Box, Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { useCookies } from 'react-cookie'


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
            <Box>
                <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar
                                    sx={{ width: 32, height: 32 }}
                                    src={storedUserData.picture}
                                ></Avatar>
                            </ListItemIcon>
                            <ListItemText primary={storedUserData.name} />
                        </ListItemButton>

                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemText sx={{ fontSize: "30px", fontWeight: "bold" }} primary="Personal Info" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemText primary="Change password" />
                        </ListItemButton>
                    </List>
                </Box>


                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Box>
            </Box>


        </>

    )
}
export default Profile;