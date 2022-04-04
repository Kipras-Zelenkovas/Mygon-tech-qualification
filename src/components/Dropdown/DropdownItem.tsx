import React, { FC } from "react"
import { ItemsInterface } from "./ItemsInterface"

export const DropdownItem:FC<ItemsInterface> = ({item, setState}) => {
    return (
        <div>{item} <button onClick={() => setState(item)}>add</button> </div>
    )
}