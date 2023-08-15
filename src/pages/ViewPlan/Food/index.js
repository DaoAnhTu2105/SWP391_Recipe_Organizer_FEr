import React from 'react'
import './index.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: max-content;
    padding: 5px;
    font-size: 12px;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: ${props => props.backgroundColor};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.hoverBackgroundColor};
    }
`;

const Food = ({ foodName, calo, meal }) => {
    let bgColor, bgColorHover;
    switch (meal) {
        case 'breakfast': {
            bgColor = '#c1e4f5'
            bgColorHover = '#32a6de99'
            break
        }
        case 'lunch': {
            bgColor = '#f6e1bb'
            bgColorHover = '#e29d1d99'
            break
        }
        default: {
            bgColor = '#d1b9e1'
            bgColorHover = '#68169c99'
        }
    }
    return (
        <a href="/recipe-detail" className='link'>
            <StyledDiv backgroundColor={bgColor} hoverBackgroundColor={bgColorHover}>
                <div>{foodName}</div>
                <div style={{ color: '#718093' }}>Calories: {calo} kcal</div>
            </StyledDiv>
        </a>
    )
}

export default Food
