import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getIngredientDetail, updateIngredient } from '../../redux/apiThunk/ingredientThunk'
import { useDispatch, useSelector } from 'react-redux'

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
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control' placeholder="Enter Name"
                            value={value.ingredientName} onChange={e => setValue({ ...value, ingredientName: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email' className='form-control' placeholder='Enter Email'
                            value={value.measure} onChange={e => setValue({ ...value, measure: e.target.value })} />
                    </div >
                    <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateIngredient