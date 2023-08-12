// import * as React from 'react'
// import { styled, useTheme } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import MuiDrawer from '@mui/material/Drawer'
// import Toolbar from '@mui/material/Toolbar'
// import List from '@mui/material/List'
// import CssBaseline from '@mui/material/CssBaseline'
// import Divider from '@mui/material/Divider'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import MailIcon from '@mui/icons-material/Mail'
// import { Autocomplete } from '@mui/material'
// import TextField from '@mui/material/TextField'
// import PublicIcon from '@mui/icons-material/Public'

// const drawerWidth = 240

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// })

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// })

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
// }))

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     })
// )

// export default function MiniDrawer() {
//     const theme = useTheme()
//     const [open, setOpen] = React.useState(false)
//     const countries = ['HCM', 'HN', 'Thu duc']

//     const handleDrawerOpen = () => {
//         setOpen(true)
//     }

//     const handleDrawerClose = () => {
//         setOpen(false)
//     }

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     {!open ? (
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={handleDrawerOpen}
//                             edge="start"
//                             style={{
//                                 marginLeft: 15,
//                                 outline: 'none',
//                                 ...(open && { display: 'none' }),
//                             }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     ) : (
//                         <IconButton onClick={handleDrawerClose} style={{ outline: 'none' }}>
//                             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                         </IconButton>
//                     )}
//                 </DrawerHeader>
//                 <Divider />
//                 <List>
//                     <ListItem disablePadding sx={{ display: 'block' }}>
//                         <ListItemButton
//                             sx={{
//                                 minHeight: 48,
//                                 justifyContent: open ? 'initial' : 'center',
//                                 px: 2.5,
//                             }}
//                         >
//                             <ListItemIcon
//                                 temIcon
//                                 sx={{
//                                     minWidth: 0,
//                                     mr: open ? 3 : 'auto',
//                                     justifyContent: 'center',
//                                 }}
//                             >
//                                 <PublicIcon />
//                             </ListItemIcon>
//                             <Autocomplete
//                                 disablePortal
//                                 id="combo-box-demo"
//                                 options={countries}
//                                 sx={{ opacity: open ? 1 : 0, width: open ? 300 : 0 }}
//                                 renderInput={(params) => <TextField {...params} label="Country" />}
//                             />
//                         </ListItemButton>
//                     </ListItem>
//                 </List>

//                 <List>
//                     <ListItem disablePadding sx={{ display: 'block' }}>
//                         <ListItemButton
//                             sx={{
//                                 minHeight: 48,
//                                 justifyContent: open ? 'initial' : 'center',
//                                 px: 2.5,
//                             }}
//                         >
//                             <ListItemIcon
//                                 temIcon
//                                 sx={{
//                                     minWidth: 0,
//                                     mr: open ? 3 : 'auto',
//                                     justifyContent: 'center',
//                                 }}
//                             >
//                                 <PublicIcon />
//                             </ListItemIcon>
//                             <Autocomplete
//                                 disablePortal
//                                 id="combo-box-demo"
//                                 options={countries}
//                                 sx={{ opacity: open ? 1 : 0, width: open ? 300 : 0 }}
//                                 renderInput={(params) => <TextField {...params} label="Country" />}
//                             />
//                         </ListItemButton>
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </Box>
//     )
// }

import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Unstable_Grid2'
import SearchIcon from '@mui/icons-material/Search'
import {
    Button,
    Slider,
    Input,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    Stack,
    Typography,
    Collapse,
} from '@mui/material'
import { useState } from 'react'

const countries = [
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
]
const meal = [
    { label: 'Lunch' },
    { label: 'Breakfast' },
    { label: 'Healthy' },
    { label: 'Salads' },
    { label: 'Soups' },
    { label: 'Drinks' },
    { label: 'Bread' },
]
const nutrition = [
    { label: 'Protein' },
    { label: 'Grains' },
    { label: 'Fruits' },
    { label: 'Vegetables' },
    { label: 'Dairy' },
]
const serving = [
    { label: 'Protein' },
    { label: 'Grains' },
    { label: 'Fruits' },
    { label: 'Vegetables' },
    { label: 'Dairy' },
]

export default function SearchFilter() {
    const minmin = 0
    const maxmax = 200
    const [timeValue, setTimeValue] = useState([0, 200])
    const [isCollapsed, setIsCollapsed] = useState(true)

    const handleTimeChange = (event, newValue) => {
        setTimeValue(newValue)
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2}>
                    <Grid xs={2} md={2}>
                        <Autocomplete
                            id="country"
                            size="small"
                            sx={{ width: 200 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    {option.label} ({option.code}) +{option.phone}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} label="Choose a country" />
                            )}
                        />
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Autocomplete
                            id="meal"
                            size="small"
                            sx={{ width: 200 }}
                            options={meal}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    {option.label}
                                </Box>
                            )}
                            renderInput={(params) => <TextField {...params} label="Meal" />}
                        />
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Autocomplete
                            id="nutrition"
                            size="small"
                            sx={{ width: 200 }}
                            options={nutrition}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    {option.label} ({option.code}) +{option.phone}
                                </Box>
                            )}
                            renderInput={(params) => <TextField {...params} label="Nutrition" />}
                        />
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Button
                            size="large"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            style={{ outline: 'none' }}
                        >
                            Total Time Cook
                        </Button>
                        <Collapse in={!isCollapsed}>
                            <Slider
                                getAriaLabel={() => 'Time range'}
                                value={timeValue}
                                onChange={handleTimeChange}
                                valueLabelDisplay="auto"
                                min={minmin}
                                max={maxmax}
                            />
                            <Stack
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <TextField
                                    label="min"
                                    type="number"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ width: '90px' }}
                                    value={timeValue[0]}
                                    onChange={(e) => {
                                        setTimeValue([Number(e.target.value), timeValue[1]])
                                    }}
                                />
                                <Typography> - </Typography>
                                <TextField
                                    label="max"
                                    type="number"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ width: '90px' }}
                                    value={timeValue[1]}
                                    onChange={(e) => {
                                        setTimeValue([timeValue[0], Number(e.target.value)])
                                    }}
                                />
                                <Button
                                    size="large"
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    style={{ outline: 'none' }}
                                >
                                    Enter
                                </Button>
                            </Stack>
                        </Collapse>
                    </Grid>

                    <Grid xs={2} md={2}>
                        <Autocomplete
                            id="serving"
                            size="small"
                            sx={{ width: 200 }}
                            options={serving}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    {option.label} ({option.code}) +{option.phone}
                                </Box>
                            )}
                            renderInput={(params) => <TextField {...params} label="Serving" />}
                        />
                    </Grid>
                    <Grid xs={2} md={2}>
                        <TextField
                            label="Recipe"
                            id="outlined-size-small"
                            size="small"
                            placeholder="Enter Name Recipe"
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{ textAlign: 'center', marginTop: 30 }}>
                <Button variant="outlined" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </div>
        </>
    )
}
