import * as React from 'react';
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';
import { Typography, CssBaseline, Container, Box, FormControl, OutlinedInput } from '@mui/material';
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <Input
            slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
            {...props}
            ref={ref}
        />
    );
});

function CreateRecipe() {
    return (
        <React.Fragment>


            <CssBaseline />
            <Container sx={{ bgcolor: '#fff' }} maxWidth="sm">
                <Typography sx={{ fontFamily: "Cursive", paddingBottom: "10px", paddingBottom: "20px" }} variant="h2" component="h2"> Add recipe </Typography>
                <Box sx={{ height: '100vh' }} component="form" noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch', paddingBottom: "20px" }}>
                        <Box>
                            <Typography sx={{ lineHeight: '0.8' }} variant="h6" gutterBottom> Recipe Title </Typography>
                            <OutlinedInput placeholder="Give your recipe a title" />
                            <Typography sx={{ lineHeight: '0.8' }} variant="h6" gutterBottom> Recipe Description </Typography>
                            <CustomInput aria-label="Demo input" multiline placeholder="Type something…" />
                        </Box>

                    </FormControl>
                </Box>

            </Container>
        </React.Fragment>
    );
}

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
export default CreateRecipe