import {configureStore} from '@reduxjs/toolkit'
import {stateReducer} from './reducer/table'

const store = configureStore({
    reducer: {
        addTable: stateReducer

    }
})
export default store