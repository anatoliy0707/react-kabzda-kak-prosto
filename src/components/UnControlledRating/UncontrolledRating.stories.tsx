import React, { useState } from "react";
import {actions} from "@storybook/addon-actions"
import {UnControlledRating} from "./UnControlledRating";
import {RatingValueType} from "../Rating/Rating";

export default {
    title: "UnControlledRating",
    component: UnControlledRating
}
const callBack = actions("Rating changed insaid component")

export const EmptyRating = () => <UnControlledRating defaultValue={0}/>
export const Rating1 = () => <UnControlledRating defaultValue={1} />
export const Rating2 = () => <UnControlledRating defaultValue={2} />
export const Rating3 = () => <UnControlledRating defaultValue={3} />
export const Rating4 = () => <UnControlledRating defaultValue={4} />
export const Rating5 = () => <UnControlledRating defaultValue={5} />

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return (
        <UnControlledRating defaultValue={value} />
    )
}