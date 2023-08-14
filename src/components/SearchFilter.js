import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Unstable_Grid2'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Slider, Stack, Typography, Collapse } from '@mui/material'
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

const SearchFilter = () => {
    const minmin = 0
    const maxmax = 200
    const minServing = 1
    const maxServing = 20
    const [serving, setServing] = useState([1, 20])
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
                        <Button
                            size="large"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            style={{ outline: 'none' }}
                        >
                            Serving
                        </Button>
                        <Collapse in={!isCollapsed}>
                            <Slider
                                getAriaLabel={() => 'Serving'}
                                value={serving}
                                onChange={handleTimeChange}
                                valueLabelDisplay="auto"
                                min={minServing}
                                max={maxServing}
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
                                    value={serving[0]}
                                    onChange={(e) => {
                                        setServing([Number(e.target.value), serving[1]])
                                    }}
                                />
                                <Typography> - </Typography>
                                <TextField
                                    label="max"
                                    type="number"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ width: '90px' }}
                                    value={serving[1]}
                                    onChange={(e) => {
                                        setServing([serving[0], Number(e.target.value)])
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

export default SearchFilter
