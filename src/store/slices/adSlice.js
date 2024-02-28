import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    all: [],
    my: [],
    seller: [],
    filtered: [],
}

export const adSlice = createSlice({
    name: "advertisement",
    initialState,
    reducers: {
        setAllAds: (state, action) => {
            state.all = action.payload
            state.filtered = action.payload
        },
        setMyAds: (state, action) => {
            state.my = action.payload
        },
        setSellerAds: (state, action) => {
            state.seller = action.payload
        },
        setFilteredAds: (state, action) => {
            const result = state.filtered.filter(item => {
                return item.title.toLowerCase().startsWith(action.payload.toLowerCase())
            })
            state.all = action.payload ? result : state.filtered
        },
    }
})

export const { setAllAds, setMyAds, setSellerAds, setFilteredAds } = adSlice.actions
export default adSlice.reducer