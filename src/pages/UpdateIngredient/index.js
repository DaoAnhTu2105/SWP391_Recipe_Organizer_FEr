import React from 'react'
import { useState, useEffect, Fragment } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getIngredientDetail, updateIngredient } from '../../redux/apiThunk/ingredientThunk'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const UpdateIngredient = () => {
    const { id } = useParams();
    const [value, setValue] = useState({
        ingredientId: id,
        ingredientName: "",
        measure: ""
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientDetail({ id: id }));
    }, [dispatch, id]);

    const ingredient = useSelector((state) => state.ingredient);
    console.log(ingredient);

    useEffect(() => {
        if (ingredient.detail.data) {
            setValue({
                ingredientId: id,
                ingredientName: ingredient.detail.data.ingredientName,
                measure: ingredient.detail.data.measure
            });
        }
    }, [ingredient, id]);

    const navigate = useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateIngredient({ id: id, data: JSON.stringify(value) })).then((result) => {
            navigate('/ingredient-list')
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Fragment>
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    style={{ color: '#f39c12', marginTop: 20 }}
                    gutterBottom
                >
                    Update Ingredient
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Update ingredient item with id {id}
                </Typography>
            </Container>
            <div className="container" style={{ marginBottom: '30px' }}>
                <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                    <div className='w-50 border bg-secondary text-white p-5'>
                        <form onSubmit={e => handleSubmit(e)}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name='name' className='form-control' placeholder="Enter Name"
                                    value={value.ingredientName} onChange={e => setValue({ ...value, ingredientName: e.target.value })} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="text" name='email' className='form-control' placeholder='Enter Email'
                                    value={value.measure} onChange={e => setValue({ ...value, measure: e.target.value })} required />
                            </div >
                            <br />
                            <button className='btn btn-info'>Update</button>
                            <Link to="/ingredient-list"><button className='btn btn-info'>Back to ingredient list</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default UpdateIngredient