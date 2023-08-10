import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const SearchFilter = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Name Recipe
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Name Recipe</MenuItem>
                        <MenuItem onClick={handleClose}>Name Recipe</MenuItem>
                        <MenuItem onClick={handleClose}>Name Recipe</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Country
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>country</MenuItem>
                        <MenuItem onClick={handleClose}>country</MenuItem>
                        <MenuItem onClick={handleClose}>country</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Meal
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>meal</MenuItem>
                        <MenuItem onClick={handleClose}>meal</MenuItem>
                        <MenuItem onClick={handleClose}>meal</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Nutrition
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>nutrition</MenuItem>
                        <MenuItem onClick={handleClose}>nutrition</MenuItem>
                        <MenuItem onClick={handleClose}>nutrition</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Total Time Cook
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>totaltimecook</MenuItem>
                        <MenuItem onClick={handleClose}>totaltimecook</MenuItem>
                        <MenuItem onClick={handleClose}>totaltimecook</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ outline: 'none' }}
                    >
                        Serving
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>serving</MenuItem>
                        <MenuItem onClick={handleClose}>serving</MenuItem>
                        <MenuItem onClick={handleClose}>serving</MenuItem>
                    </Menu>
                </Grid>
                <Button variant="contained" endIcon={<SearchIcon />} sx={{ marginLeft: 7 }}>
                    Search
                </Button>
            </Grid>
        </div>
    )
}
export default SearchFilter
