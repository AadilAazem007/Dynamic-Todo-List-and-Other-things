import { createSlice,PayloadAction } from "@reduxjs/toolkit"
export interface Person1 {
    id: number,
    name: string
}

interface PersonState1 {
    persons: Person1[]
}

const initialState: PersonState1 = {
    persons: []
}

export const PersonSlice1 = createSlice({
    name:"person",
    initialState,
    reducers : {
        addPerson:(state, action: PayloadAction<{name: string}>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        }
    }  
})

export default PersonSlice1.reducer
export const { addPerson } = PersonSlice1.actions