import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity' , payload:{ newActivity : Activity } } | 
    { type: 'set-activeId' , payload:{ id : Activity['id'] } } 

export type ActivityState = {
    activities : Activity[] ,
    activeId : Activity['id']
}

export const initialState : ActivityState = {
    activities:[] ,
    activeId : ''
}

export const activityReducer = (state : ActivityState = initialState , action:ActivityActions) => {
    if(action.type === 'save-activity'){
        //Este codigo maneja la logica para actualizar el state
        let updateActivity : Activity[] = []
        if (state.activeId){
            updateActivity = state.activities.map(activity => activity.id === state.activeId ? 
                action.payload.newActivity :  activity)
        }else{
            updateActivity = [...state.activities,action.payload.newActivity]
        }
        return {
            ...state,
            activities : updateActivity,
            activeId : ''
        }
    }

    if(action.type === 'set-activeId'){
        return{
            ...state,
            activeId : action.payload.id
        }
    }

    return state
}