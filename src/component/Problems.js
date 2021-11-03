import React, { useEffect } from 'react'
import Card from './Card';
import data from '../DataApi/ProblemApi';
import './problems.css'
import Navbar from './Navbar';

function Problems() {
    useEffect(() => {
        document.title = "Problems || PrepAvenger";
    }, [])
    return (
        <>
            <Navbar/>
            <div className="mainContainer my-4">
                <h1 className="text-light my-2">The PrepAvenger Problem Solving Kit</h1>
                <div className="cardContainer">
                    {data.map((value) => {
                        return <Card
                        key={value.id}
                        id={value.id}
                        title={value.title}
                        text={value.text}
                        class={value.class}
                        bclass={value.bclass}
                        url={value.url}
                         />
                    })};
                </div>
            </div>

        </>
    )
}

export default Problems