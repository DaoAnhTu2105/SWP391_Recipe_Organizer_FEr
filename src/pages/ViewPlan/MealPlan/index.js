import * as React from 'react'
import './index.css'
import Food from '../Food'

const meal = {
    status: 1,
    food: {
        mon: {
            breakfast: [
                { food: "Pho", calo: "400" }
            ],
            lunch: [
                { food: "Ca kho", calo: "400" },
                { food: "Thit luoc", calo: "400" },
                { food: "Ca kho", calo: "400" }
            ],
            dinner: [
                { food: "Ca kho", calo: "400" },
                { food: "Thit luoc", calo: "400" },
                { food: "Ca kho", calo: "400" }
            ]
        },
    }
}

export default function MealPlan() {
    return (
        <div className='plan-meal'>
            <div className='table-header'>
                <div></div>
                <div className=''><a href="/meal-detail">Monday</a></div>
                <div className=''>Tuesday</div>
                <div className=''>Wednesday</div>
                <div className=''>Thursday</div>
                <div className=''>Friday</div>
                <div className=''>Saturday</div>
                <div className=''>Sunday</div>
            </div>
            <div className='table-body'>
                <div className='table-body-content'>
                    <div className='meal' style={{ color: "#32a6de" }}>
                        <div><b>BreakFast</b></div>
                        <div><b>6AM - 8AM</b></div>
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Cơm tấm"}
                            calo={"300"}
                            meal={"breakfast"}
                        />
                        <Food
                            foodName={"Cơm chiên dương châu"}
                            calo={"400"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Mì xào thập cẩm"}
                            calo={"450"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Xôi mặn"}
                            calo={"450"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Bánh canh giò heo"}
                            calo={"450"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Bánh mì thịt bò nướng"}
                            calo={"450"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Xôi gà"}
                            calo={"250"}
                            meal={"breakfast"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Mì xào bò"}
                            calo={"450"}
                            meal={"breakfast"}
                        />
                    </div>
                </div>
                <div className='table-body-content'>
                    <div style={{ color: "#e29d1d" }}>
                        <div><b>Lunch</b></div>
                        <div><b>12:30AM - 2PM</b></div>
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Canh sườn mọc rau củ"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Chả lá lốt"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Bí ngô bao tử sốt cà chua"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"dưa hấu"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Bún bò"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                    </div>
                    <div className='item'></div>
                    <div className='item'>
                        <Food
                            foodName={"Canh chua nấu dọc mùng"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Cá khô tộ"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Đậu luộc"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Hoa quả tráng miệng"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                    </div>
                    <div className='item'></div>
                    <div className='item'>
                        <Food
                            foodName={"Nem rau củ"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Cá kình kình sốt tỏi ớt"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"SU su, cà rốt luộc"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                    </div>
                    <div className='item'>
                        <Food
                            foodName={"Thịt vịt luộc"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Rau muống luộc"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                        <Food
                            foodName={"Rau bí xào tỏi"}
                            calo={"450"}
                            meal={"lunch"}
                        />
                    </div>
                </div>
                <div className='table-body-content'>
                    <div style={{ color: "#68169c" }}>
                        <div><b>Dinner</b></div>
                        <div><b>6PM - 9PM</b></div>
                    </div>
                    <div className='item'></div>
                    <div className='item'>
                        <Food
                            foodName={"Thịt vịt luộc"}
                            calo={"450"}
                        />
                        <Food
                            foodName={"Rau muống luộc"}
                            calo={"450"}
                        />
                        <Food
                            foodName={"Rau bí xào tỏi"}
                            calo={"450"}
                        />
                        <Food
                            foodName={"Thịt vịt luộc"}
                            calo={"450"}
                        />
                        <Food
                            foodName={"Rau muống luộc"}
                            calo={"450"}
                        />
                        <Food
                            foodName={"Rau bí xào tỏi"}
                            calo={"450"}
                        />
                    </div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
            </div>
        </div>
    )
}
