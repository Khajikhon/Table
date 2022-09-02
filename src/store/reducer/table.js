const initialState = []


function stateReducer(state = initialState, action) {
      if(action.type === "addTable"){
        let currentTable = [
          ...state
        ]
        currentTable.push(action.payload )
            return state = currentTable
      }
      if(action.type === "delItem"){
        let currentTable = [...state]

        currentTable.splice(action.payload.index, 1)

        return state = currentTable
      }

      if(action.type === "editItem"){
        let currentTable = [...state]

        currentTable.splice(action.payload.index, 1 ,action.payload)

        return state = currentTable
      }
      
      return state
      
}

export {stateReducer}