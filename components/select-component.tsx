import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectComponetProps {
    placeholder: string
    items: string[]
    handleChange: (value: string) => void
}

export function SelectComponet(props: SelectComponetProps) {
    return (
        <div className="mx-1">
            <Select onValueChange={props.handleChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {props.items.map((item) => {
                            return <SelectItem key={item} value={item}>{item}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
