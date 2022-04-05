import React, { FC } from "react"
import { itemsInterface } from "../../utils/interface/itemsInterface"

export const SelectedItem:FC<itemsInterface> = ({item, setState}) => {
    return (
        <button onClick={() => setState(item)}>{item}</button>
    )
}