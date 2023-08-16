import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Unstable_Grid2'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Slider, Stack, Typography, Collapse, FormControl, FormGroup } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useState } from 'react'
import Search from './Search/Search'

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

    const [isCollapsedServing, setIsCollapsedServing] = useState(true)
    const [openFilter, setOpenFilter] = useState(false)

    const handleTimeChange = (event, newValue) => {
        setTimeValue(newValue)
    }
    const handleServingChange = (event, newValue) => {
        setServing(newValue)
    }

    return (
        <>
            <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <Search />
                </div>
                <div style={{ marginLeft: 10 }}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => setOpenFilter(!openFilter)}
                        style={{
                            backgroundColor: '#f39c12',
                            outline: 'none',
                            width: 100,
                            height: 40,
                        }}
                    >
                        <FilterListIcon />
                    </Button>
                </div>
            </div>

            {openFilter && (
                <div className="" style={{ position: 'absolute', zIndex: 100, backgroundColor: '#fff' }}>
                    <FormControl>
                        <FormGroup>
                            <Grid container spacing={2}>
                                <Grid xs={4}>
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
                                <Grid xs={4}>
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
                                        renderInput={(params) => (
                                            <TextField {...params} label="Meal" />
                                        )}
                                    />
                                </Grid>
                                <Grid xs={4}>
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
                                        renderInput={(params) => (
                                            <TextField {...params} label="Nutrition" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} textAlign={'center'} marginTop={5}>
                                <Grid xs={6}>
                                    <Button
                                        size="large"
                                        onClick={() => setIsCollapsed(!isCollapsed)}
                                        style={{
                                            outline: 'none',
                                            backgroundColor: '#f39c12',
                                            width: 200,
                                        }}
                                        variant="contained"
                                    >
                                        Total Time
                                    </Button>
                                    <Collapse in={!isCollapsed}>
                                        <Slider
                                            getAriaLabel={() => 'Time range'}
                                            value={timeValue}
                                            onChange={handleTimeChange}
                                            valueLabelDisplay="auto"
                                            min={minmin}
                                            max={maxmax}
                                            style={{ color: '#f39c12', width: 220 }}
                                        />
                                        <Stack
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            textAlign={'center'}
                                        >
                                            <TextField
                                                label="min(s)"
                                                type="number"
                                                variant="outlined"
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ width: '90px' }}
                                                value={timeValue[0]}
                                                onChange={(e) => {
                                                    setTimeValue([
                                                        Number(e.target.value),
                                                        timeValue[1],
                                                    ])
                                                }}
                                            />
                                            <Typography> - </Typography>
                                            <TextField
                                                label="min(s)"
                                                type="number"
                                                variant="outlined"
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ width: '90px' }}
                                                value={timeValue[1]}
                                                onChange={(e) => {
                                                    setTimeValue([
                                                        timeValue[0],
                                                        Number(e.target.value),
                                                    ])
                                                }}
                                            />
                                        </Stack>
                                    </Collapse>
                                </Grid>
                                <Grid xs={6}>
                                    <Button
                                        size="large"
                                        onClick={() => setIsCollapsedServing(!isCollapsedServing)}
                                        style={{
                                            outline: 'none',
                                            backgroundColor: '#f39c12',
                                            width: 200,
                                        }}
                                        variant="contained"
                                    >
                                        Serving
                                    </Button>
                                    <Collapse in={!isCollapsedServing}>
                                        <Slider
                                            getAriaLabel={() => 'Serving'}
                                            value={serving}
                                            onChange={handleServingChange}
                                            valueLabelDisplay="auto"
                                            min={minServing}
                                            max={maxServing}
                                            style={{ color: '#f39c12', width: 220 }}
                                        />
                                        <Stack
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            textAlign={'center'}
                                        >
                                            <TextField
                                                label="person(s)"
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
                                                label="person(s)"
                                                type="number"
                                                variant="outlined"
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ width: '90px' }}
                                                value={serving[1]}
                                                onChange={(e) => {
                                                    setServing([serving[0], Number(e.target.value)])
                                                }}
                                            />
                                        </Stack>
                                    </Collapse>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                </div>
            )}
        </>
    )
}

export default SearchFilter
