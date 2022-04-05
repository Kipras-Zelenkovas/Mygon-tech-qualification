import React, { FC, useRef, useState } from "react"
import { useClickOutside } from "../../utils/hooks/useClickOutside"
import { DropdownItem } from "./DropdownItem"
import { SelectedItem } from "./SelectedItem"

export const Dropdown:FC<{itemsData: string[]}> = ({itemsData}) => {
    
    const [list, setList] = useState<string[]>(itemsData)
    const [selected, setSelected] = useState<string[]>([])
    const [dropdown, setDropdown] = useState<boolean>(false)

    const containerRef = useRef<HTMLDivElement>(null)

    useClickOutside(containerRef, () => setDropdown(false))

    const onSelect = (item: string) => {
        console.log(item)
    }

    const addToSelected = (item: string) => {
        setSelected([...selected, item])
        setList(list.filter((a) => a !== item))
        onSelect("Added: " + item)
    }

    const deleteFromSelected = (item: string) => {
        setSelected(selected.filter((a) => a !== item))
        setList([...list, item])
        onSelect("Deleted: " + item)
    }

    return (
        <div className="container">
      
            <div className="dropdown" ref={containerRef}>
                <button className="controll-button" onClick={() => setDropdown(!dropdown)}>{(dropdown) ? "Close" : "Open"}</button>
                {dropdown  && 
                    <div className="dropdown-list" >
                        {list.sort().map((x, index) => {
                            return <DropdownItem key={index} item={x} setState={addToSelected}/>
                        })}
                    </div>
                }
            </div>
            <div className="list">
                  {selected.map((x, index) => {
                return <SelectedItem key={index} item={x} setState={deleteFromSelected}/>
            })}
            </div>
        </div>
    )


}
