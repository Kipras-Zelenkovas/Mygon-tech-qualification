import React, { FC } from "react"
import { itemsInterface } from "../../utils/interface/itemsInterface"

export const DropdownItem:FC<itemsInterface> = ({item, setState}) => {
    return (
        <div onClick={() => setState(item)}>{item}</div>
    )
}