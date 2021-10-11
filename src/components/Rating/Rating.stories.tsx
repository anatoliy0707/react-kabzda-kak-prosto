import React, { useState } from "react";
import {actions} from "@storybook/addon-actions"
import { Rating, RatingValueType } from "./Rating";

export default {
    title: "RatingStories",
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return (
        <Rating value={value} onClick={setValue}/>
    )
}