export type INPUT_TYPES = "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range" ;
export interface INPUT_PROPS{
    type:INPUT_TYPES,
    label:string,
    defaultVale?:string,
    onChange: (value: string) => void

}