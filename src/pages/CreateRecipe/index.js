import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { storage } from '../../App';
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';
import { Typography, CssBaseline, Container, Box, OutlinedInput, Divider, Autocomplete, Stack, Button, TextField, InputLabel, Select, FormControl } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import './index.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredientsDataAsync } from '../../redux/reducers/getAllDataIngredients';


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
  const dispatch = useDispatch();
  const allIngredients = useSelector((state) => state.getAllIngredients.data)
  useEffect(() => {
    dispatch(fetchIngredientsDataAsync())
  }, [dispatch])
  console.log(allIngredients)
  const [recipeTitle, setRecipeTitle] = useState('');
  const handleTitleChange = (event) => {
    setRecipeTitle(event.target.value)
  }

  const [recipeDescription, setRecipeDescription] = useState('');
  const handleDescriptionChange = (event) => {
    setRecipeDescription(event.target.value)
  }
  const fileInputRef = useRef(null)
  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  //--------------------------Ingredient--------------------------
  const [ingredientFields, setIngredientFields] = useState([
    { id: Date.now(), ingredient: '', quantity: '' },
  ]);


  const handleChange = (id, field, value) => {
    const updatedFields = ingredientFields.map((field) => {
      if (field.id === id) {
        return { ...field, [field]: value };
      }
      return field;
    });

    setIngredientFields(updatedFields);
  };

  const handleAddIngredient = () => {
    setIngredientFields([
      ...ingredientFields,
      { id: Date.now(), ingredient: '', quantity: '' },
    ]);
  };

  const handleDeleteIngredient = (id) => {
    const updatedFields = ingredientFields.filter((field) => field.id !== id);
    setIngredientFields(updatedFields);
  };
  //--------------------------Images--------------------------
  const [selectedImage, setSelectedImage] = useState(null);
  const [buttonStyle, setButtonStyle] = useState({
    zIndex: 0,
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        const imageRef = ref(storage, `Recipes/${v4()}`)
        console.log(file)
        uploadBytes(imageRef, file).then(() => {
          alert("Image Uploaded")
        })
      };
      reader.readAsDataURL(file);
      setButtonStyle({
        zIndex: -1
      })
    }
  };
  //--------------------------Directions--------------------------
  const [directionFields, setDirectionFields] = useState([
    { id: 1, text: '' },
  ]);

  const nextId = directionFields.length + 1;

  const handleAddStep = () => {
    setDirectionFields([
      ...directionFields,
      { id: nextId, text: '' },
    ]);
  };

  const handleDeleteStep = (id) => {
    const updatedFields = directionFields.filter((field) => field.id !== id);

    const renumberedFields = updatedFields.map((field, index) => ({
      ...field,
      id: index + 1,
    }));

    setDirectionFields(renumberedFields);
  };
  //--------------------------Nutritions--------------------------
  const [nutritionValues, setNutritionValues] = useState({
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  const [totalCalories, setTotalCalories] = useState(0);
  const handleNutritionChange = (field, value) => {
    setNutritionValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));

    const { fat, carbs, protein } = { ...nutritionValues, [field]: value };;
    const calculatedCalories = fat * 9 + protein * 4 + carbs * 4;
    setTotalCalories(calculatedCalories);
  };
  //--------------------------Time--------------------------
  const [timeValue, setTimeValue] = useState({
    prep: 0,
    stand: 0,
    cook: 0,
  });

  const [totalTime, setTotalTime] = useState(0);
  const handleTimeChange = (field, value) => {
    setTimeValue((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));

    const { prep, stand, cook } = { ...timeValue, [field]: value };;
    const calculatedTime = prep * 1 + stand * 1 + cook * 1;
    setTotalTime(calculatedTime);
  };
  return (
    <React.Fragment>


      <CssBaseline />
      <Container sx={{ bgcolor: '#fff', border: "ridge", maxHeight: "auto", marginBottom: "50px", marginTop: "80px" }} maxWidth="sm" >
        <Typography sx={{ paddingLeft: "30px", fontFamily: "Cursive", paddingBottom: "20px" }} variant="h3" component="h2"> Add recipe </Typography>
        <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Uploading personal recipes is easy! Add yours to your favorites, share with friends, family, or the Allrecipes community.</Typography>
        <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />

        <Box sx={{ height: 'auto', width: "100" }} component="form" noValidate autoComplete="off">
          {/*-----------------------------------------  Title ----------------------------------------- */}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ paddingRight: "30px" }}>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Recipe Title </Typography>
              <OutlinedInput
                placeholder="Give your recipe a title"
                sx={{ width: "320px" }}
                value={recipeTitle}
                onChange={handleTitleChange} />
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", paddingTop: "20px" }} variant="h6" gutterBottom> Recipe Description </Typography>
              <CustomInput
                aria-label="Demo input"
                multiline='true'
                placeholder="Share the story behind your recipe and what makes it special"
                value={recipeDescription}
                onChange={handleDescriptionChange}
              />
            </Box>
            <Box>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Photo </Typography>
              <Button
                onClick={handleUploadImage}
                sx={{
                  backgroundImage: `url(${selectedImage || 'your-default-image-url.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '2px dashed rgb(243, 156, 18)',
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}

                />
                <AddPhotoAlternateIcon fontSize='large' sx={{ ...buttonStyle, }} />
              </Button>

            </Box>
          </Box>

          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Ingredients-----------------------------------------  */}
          <Box sx={{ width: '80' }}>
            <Typography
              sx={{ lineHeight: '0.8', fontSize: '15px', fontWeight: 'bold' }}
              variant="h6"
              gutterBottom
            >
              Ingredients
            </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped). Use optional headers to organize the different parts of the recipe (i.e. Cake, Frosting, Dressing).</Typography>
            {/* ...other code for instructions */}
            <Stack spacing={2} sx={{ width: 'auto' }}>
              {ingredientFields.map((field) => (
                <div style={{ display: 'flex' }} key={`${field.id}-${field.ingredient}`}>
                  <Autocomplete
                    freeSolo
                    sx={{ width: 500, paddingRight: 2 }}
                    options={allIngredients.data && allIngredients.data.map((option) => option.ingredientName)}

                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select ingredient"
                        value={field.ingredient}
                        onChange={(e) =>
                          handleChange(field.id, 'ingredient', e.target.value)
                        }
                      />
                    )}
                  />
                  <TextField
                    label="gram(s)"
                    type="number"
                    variant="outlined"
                    placeholder="1"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: 0 }}
                    sx={{ width: 150 }}
                    value={field.quantity}
                    onChange={(e) =>
                      handleChange(field.id, 'quantity', e.target.value)
                    }

                  />
                  <Button
                    variant="text"
                    className='btn-delete-recipe'
                    onClick={() => handleDeleteIngredient(field.id)}
                  >
                    <HighlightOffIcon color="warning" />
                  </Button>
                </div>
              ))}
              <Box>
                <Button onClick={handleAddIngredient} variant="contained">
                  Add more ingredients
                </Button>
              </Box>
            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Nutritions-----------------------------------------  */}
          <Box sx={{ width: "80" }}>
            <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Nutritions (Optional) </Typography>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle1" gutterBottom> Enter 3 main nutrions in your recipe .</Typography>

            <Stack spacing={2} sx={{ width: "auto" }}>
              <div style={{ display: "flex" }}>
                <Box sx={{ marginRight: "20px" }}>
                  <Typography className='typo-nutritions' variant="h5" gutterBottom> Fat</Typography>
                  <TextField
                    label="gram(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={nutritionValues.fat}
                    onChange={(e) => handleNutritionChange('fat', e.target.value)}
                  />
                </Box>
                <Box sx={{ marginRight: "20px" }}>
                  <Typography className='typo-nutritions' variant="h5" gutterBottom> Carbs</Typography>
                  <TextField
                    label="gram(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={nutritionValues.carbs}
                    onChange={(e) => handleNutritionChange('carbs', e.target.value)}
                  />
                </Box>
                <Box>
                  <Typography className='typo-nutritions' variant="h5" gutterBottom> Protein</Typography>
                  <TextField
                    label="gram(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={nutritionValues.protein}
                    onChange={(e) => handleNutritionChange('protein', e.target.value)}
                  />
                </Box>

              </div>
              <Box sx={{ width: "80", display: "flex", alignItems: "center", paddingTop: "30px" }}>
                <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom> Total Calories (Calo): </Typography>

                <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom>{totalCalories} </Typography>
              </Box>
            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Directions-----------------------------------------  */}
          <Box sx={{ width: '80' }}>
            <Typography
              sx={{ lineHeight: '0.8', fontSize: '15px', fontWeight: 'bold' }}
              variant="h6"
              gutterBottom
            >
              Directions
            </Typography>
            <Typography
              sx={{ fontSize: '15px' }}
              variant="subtitle1"
              gutterBottom
            >
              Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc. Use optional headers to organize the different parts of the recipe (i.e. Prep, Bake, Decorate).
            </Typography>

            {directionFields.map((field) => (
              <Box key={field.id}>
                <Typography sx={{ fontSize: '15px' }} variant="subtitle1" gutterBottom>
                  Step {field.id}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <TextareaAutosize
                    aria-label={`Step ${field.id}`}
                    style={{ width: '400px', paddingLeft: "10px" }}
                    minRows={2}
                    placeholder={`eg. Preheat oven to 350 degree F`}
                    value={field.text}
                    onChange={(e) => {
                      const updatedFields = directionFields.map((dirField) => {
                        if (dirField.id === field.id) {
                          return { ...dirField, text: e.target.value };
                        }
                        return dirField;
                      });
                      setDirectionFields(updatedFields);
                    }}
                  />
                  <Button
                    variant="text"
                    className="btn-delete-recipe"
                    style={{ outline: 'none', marginLeft: '10px', color: '#fff' }}
                    onClick={() => handleDeleteStep(field.id)}
                  >
                    <HighlightOffIcon color="warning" />
                  </Button>
                </Box>
              </Box>
            ))}
            <Box sx={{ marginTop: "10px" }}>
              <Button onClick={handleAddStep} variant="contained">
                Add more steps
              </Button>
            </Box>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />

          {/* ----------------------------------------- Time-----------------------------------------  */}
          <Box sx={{ width: "80", display: "flex", alignItems: "center" }}>
            <Stack spacing={2} sx={{ width: "auto" }}>
              <div style={{ display: "flex" }}>
                <Box sx={{ marginRight: "20px" }}>
                  <Typography className='typo-nutritions' variant="h6" gutterBottom> Prep Time</Typography>
                  <TextField
                    label="min(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={timeValue.prep}
                    onChange={(e) => handleTimeChange('prep', e.target.value)}
                  />
                </Box>
                <Box sx={{ marginRight: "20px" }}>
                  <Typography className='typo-nutritions' variant="h6" gutterBottom> Stand Time</Typography>
                  <TextField
                    label="min(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={timeValue.stand}
                    onChange={(e) => handleTimeChange('stand', e.target.value)}
                  />
                </Box>
                <Box>
                  <Typography className='typo-nutritions' variant="h6" gutterBottom> Cook Time</Typography>
                  <TextField
                    label="min(s)"
                    type="number"
                    variant="outlined"
                    placeholder='1'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 150 }}
                    inputProps={{ min: 0 }}
                    value={timeValue.cook}
                    onChange={(e) => handleTimeChange('cook', e.target.value)}
                  />
                </Box>

              </div>
              <Box sx={{ width: "80", display: "flex", alignItems: "center", paddingTop: "30px" }}>
                <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom> Total time (mins): </Typography>

                <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold", marginRight: "10px" }} variant="h6" gutterBottom>{totalTime} </Typography>
              </Box>
            </Stack>
          </Box>
          <Divider sx={{ width: "70", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }} />
          {/* ----------------------------------------- Servings-----------------------------------------  */}
          <Box sx={{ width: "80", display: "flex" }}>
            <Box sx={{ paddingRight: "20px" }}>
              <Typography sx={{ lineHeight: '0.8', fontSize: "15px", fontWeight: "bold" }} variant="h6" gutterBottom> Servings </Typography>
              <OutlinedInput placeholder="1" type='number' inputProps={{ min: 1 }} />
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