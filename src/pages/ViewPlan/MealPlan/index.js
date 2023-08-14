import * as React from 'react'
import './index.css'
import Food from '../Food'

const meal = {
    status: 1,
    food: {
        mon: {
            breakfast: [{ food: 'Pho', calo: '400' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
    },
}

export default function MealPlan() {
    return (
        <div className="plan-meal">
            <div className="table-header">
                <div></div>
                <div className="">
                    <a href="/meal-detail">Monday</a>
                </div>
                <div className="">Tuesday</div>
                <div className="">Wednesday</div>
                <div className="">Thursday</div>
                <div className="">Friday</div>
                <div className="">Saturday</div>
                <div className="">Sunday</div>
            </div>
            <div className="table-body">
                <div className="table-body-content">
                    <div className="meal" style={{ color: '#32a6de' }}>
                        <div>
                            <b>BreakFast</b>
                        </div>
                        <div>
                            <b>6AM - 8AM</b>
                        </div>
                    </div>
                    <div className="item">
                        <Food foodName={'Perfect Pancakes'} calo={'409'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Slow Cooker Buffalo Chicken Sandwiches'} calo={'578'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Fiesta Slow Cooker Shredded Chicken Tacos'} calo={'71'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Deep-Fried Oreos'} calo={'156'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Funnel Cakes'} calo={'524'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Fried Egg Tortilla'} calo={'473'} meal={'breakfast'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Breakfast Burrito Bowl'} calo={'152'} meal={'breakfast'} />
                    </div>
                </div>
                <div className="table-body-content">
                    <div style={{ color: '#e29d1d' }}>
                        <div>
                            <b>Lunch</b>
                        </div>
                        <div>
                            <b>12:30AM - 2PM</b>
                        </div>
                    </div>
                    <div className="item">
                        <Food foodName={'Deep-Fried Oreos'} calo={'450'} meal={'lunch'} />
                        <Food foodName={'Sesame Noodles'} calo={'450'} meal={'lunch'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Day-After-Thanksgiving Turkey Carcass Soup'} calo={'370'} meal={'lunch'} />
                        <Food foodName={'Quick Italian Pasta Salad'} calo={'371'} meal={'lunch'} />
                    </div>
                    <div className="item"> <Food foodName={'Lemon Chicken Orzo Soup'} calo={'187'} meal={'lunch'} /></div>
                    <div className="item">
                        <Food foodName={'Quick Italian Pasta Salad'} calo={'63'} meal={'lunch'} />
                        <Food foodName={'Garlic Bread Spread'} calo={'167'} meal={'lunch'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Awesome Hot Ham and Cheese'} calo={'200'} meal={'lunch'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Eggplant Caponata (Sicilian Version)'} calo={'320'} meal={'lunch'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Pastrami Reuben Sandwich'} calo={'380'} meal={'lunch'} />
                    </div>
                </div>
                <div className="table-body-content">
                    <div style={{ color: '#68169c' }}>
                        <div>
                            <b>Dinner</b>
                        </div>
                        <div>
                            <b>6PM - 9PM</b>
                        </div>
                    </div>
                    <div className="item"><Food foodName={'Grilled Turkey Legs'} calo={'450'} /></div>
                    <div className="item">
                        <Food foodName={'Tex-Mex Pork Chops and Rice Skillet'} calo={'682'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Lasagna Flatbread'} calo={'620'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Slow-Cooker Corned Beef and Cabbage'} calo={'670'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Stout-Braised Lamb Shanks'} calo={'620'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Empanadas (Beef Turnovers)'} calo={'620'} />
                    </div>
                    <div className="item">
                        <Food foodName={'Slow Cooker Texas Pulled Pork'} calo={'620'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
