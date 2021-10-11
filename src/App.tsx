import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

import {Rating, RatingValueType} from "./components/Rating/Rating";
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {OnOff} from "./components/OnOff/OnOff";
import { UncontrolInput } from './components/UncontroiInput';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    const [rating, setRating] = useState<RatingValueType>(0)
    return (
        <div className={"App"}>
           
        <Rating value={rating} onClick={setRating}/>
     
        </div>
    );
}

export default App;


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    );
}

