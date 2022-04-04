import React, { FC, useState } from "react"
import { DropdownItem } from "./DropdownItem"
import { SelectedItem } from "./SelectedItem"

export const Dropdown:FC<{itemsData: string[]}> = ({itemsData}) => {
    
    const [list, setList] = useState<string[]>(itemsData)
    const [selected, setSelected] = useState<string[]>([])
    const [dropdown, setDropdown] = useState<boolean>(false)

    const onSelect = (item: string) => {
        console.log(item)
    }

    const addToSelected = (item: string) => {
        setSelected([...selected, item])
        setList(list.filter((a) => a !== item))
        onSelect("Deleted: " + item)
    }

    const deleteFromSelected = (item: string) => {
        setSelected(selected.filter((a) => a !== item))
        setList([...list, item])
        onSelect("Added: " + item)
    }

    return (
        <div>
            {selected.map((x, index) => {
                return <SelectedItem key={index.toString()} item={x} setState={deleteFromSelected}/>
            })}<button onClick={() => setDropdown(!dropdown)}>{(dropdown) ? "Close" : "Open"}</button>
            <br /><br />
            {dropdown && 
                <div>
                    {list.map((x, index) => {
                        return <DropdownItem key={index.toString()} item={x} setState={addToSelected}/>
                    })}
                </div>
            }
        </div>
    )


}
