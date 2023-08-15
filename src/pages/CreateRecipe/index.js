import * as React from 'react';
import { useRef } from 'react';
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';
import { Typography, CssBaseline, Container, Box, OutlinedInput, Divider, Autocomplete, Stack, Button, TextField, InputLabel, Select, FormControl } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <Input
      slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
      {...props}
      ref={ref}

    />
  );
});


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
function CreateRecipe() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <React.Fragment>


      <CssBaseline />
      <Container sx={{ bgcolor: '#fff', border: "ridge", maxHeight: "auto", marginBottom: "50px" }} maxWidth="sm" >
        <Typography sx={{ paddingLeft: "30px", fontFamily: "Cursive", paddingBottom: "10px", paddingBottom: "20px" }} variant="h3" component="h2"> Add recipe </Typography>
        <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Uploading personal recipes is easy! Add yours to your favorites, share with friends, family, or the Allrecipes community.</Typography>
        <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />

        <Box sx={{ height: 'auto', width: "100" }} component="form" noValidate autoComplete="off">
          {/*-----------------------------------------  Title ----------------------------------------- */}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ paddingRight: "30px" }}>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Recipe Title </Typography>
              <OutlinedInput placeholder="Give your recipe a title" sx={{ width: "320px" }} />
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", paddingTop: "20px" }} variant="h6" gutterBottom> Recipe Description </Typography>
              <CustomInput aria-label="Demo input" multiline='true' placeholder="Share the story behind your recipe and what makes it special" />
            </Box>
            <Box>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Photo </Typography>
              <Button
                onClick={handleButtonClick}
                sx={{
                  backgroundImage: "url('your-image-url.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                />
                Upload Photo
              </Button>

            </Box>
          </Box>

          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Ingredients-----------------------------------------  */}
          <Box sx={{ width: "80" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Ingredients </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped). Use optional headers to organize the different parts of the recipe (i.e. Cake, Frosting, Dressing).</Typography>

            <Stack spacing={2} sx={{ width: "auto" }}>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select ingredient" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select ingredient" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select ingredient" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Nutritions-----------------------------------------  */}
          <Box sx={{ width: "80" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Nutritions(Optional ) </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped). Use optional headers to organize the different parts of the recipe (i.e. Cake, Frosting, Dressing).</Typography>

            <Stack spacing={2} sx={{ width: "auto" }}>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select nutrition" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select nutrition" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
              <div style={{ display: "flex" }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{ width: 500, paddingRight: 2 }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params} label="Select nutrition" />}
                />
                <TextField
                  label="gram(s)"
                  type="number"
                  variant="outlined"
                  placeholder='1'
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 150 }}

                />
              </div>
            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Directions-----------------------------------------  */}
          <Box sx={{ width: "80" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Directions </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom>Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc. Use optional headers to organize the different parts of the recipe (i.e. Prep, Bake, Decorate).</Typography>

            <Stack spacing={2} sx={{ width: "auto" }}>
              <StyledTextarea aria-label="Demo input" multiline="true" placeholder="Step 1" />

              <StyledTextarea aria-label="Demo input" multiline="true" placeholder="Step 2" />

              <StyledTextarea aria-label="Demo input" multiline="true" placeholder="Step 3" />

            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />

          {/* ----------------------------------------- Time-----------------------------------------  */}
          <Box sx={{ width: "80", display: "flex", alignItems: "center" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px", width: "150px" }} variant="h6" gutterBottom> Prep Time </Typography>
            <OutlinedInput placeholder="1" type='number' sx={{ width: "70px" }} />
            <FormControl sx={{ m: 1, minWidth: 120, width: 300 }}>
              <InputLabel htmlFor="grouped-native-select">Times</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option value={"Minutes"}>mins</option>
                <option value={"Hours"}>hours</option>
                <option value={"Days"}>days</option>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "80", display: "flex", alignItems: "center" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px", width: "150px" }} variant="h6" gutterBottom> Cook Time </Typography>
            <OutlinedInput placeholder="1" type='number' sx={{ width: "70px" }} />
            <FormControl sx={{ m: 1, minWidth: 120, width: 300 }}>
              <InputLabel htmlFor="grouped-native-select">Times</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option value={"Minutes"}>mins</option>
                <option value={"Hours"}>hours</option>
                <option value={"Days"}>days</option>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "80", display: "flex", alignItems: "center" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px", width: "150px" }} variant="h6" gutterBottom> Stand Time </Typography>
            <OutlinedInput placeholder="1" type='number' sx={{ width: "70px" }} />
            <FormControl sx={{ m: 1, minWidth: 120, width: 300 }}>
              <InputLabel htmlFor="grouped-native-select">Times</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option value={"Minutes"}>mins</option>
                <option value={"Hours"}>hours</option>
                <option value={"Days"}>days</option>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "80", display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom> Total Time </Typography>

            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom> 11 </Typography>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Servings-----------------------------------------  */}
          <Box sx={{ width: "80", display: "flex" }}>
            <Box sx={{ paddingRight: "20px" }}>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Servings </Typography>
              <OutlinedInput placeholder="1" type='number' />
            </Box>

          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
        </Box>
        <Box sx={{ alignItems: "center", marginBottom: "50px", paddingLeft: "240px" }}>
          <Button sx={{ color: "black", fontWeight: "bold", paddingRight: "20px" }}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: "rgb(243, 156, 18)", width: "196" }} disableElevation>
            Submit Recipe
          </Button>
        </Box>

      </Container>
    </React.Fragment >
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
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 500fpx;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
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