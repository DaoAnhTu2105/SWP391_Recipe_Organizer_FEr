import React from 'react'
import { Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material'

const CreateRecipe = () => {
    return (
        <Box>
            <FormControl sx={{}}>
                <InputLabel htmlFor="my-input">Give your recipe a title</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default CreateRecipe
