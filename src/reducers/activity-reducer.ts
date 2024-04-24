import { Activity } from "../types"

const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id']} } |
    { type: 'delete-activity', payload: { id: Activity['id']} } |
    { type: 'set-date', payload: { date : string} } |
    { type: 'restart-app' } 


export type ActivityState = {
    activities : Activity[],
    activeId: Activity['id'],
    date: string
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem("activities")
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities: localStorageActivities(),
    activeId: '',
    date: getFormattedDate()
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    if(action.type === 'save-activity'){

        let updatedActivities : Activity[] = [] 

        if(state.activeId) {
            updatedActivities = state.activities.map(activity =>  
                activity.id === state.activeId 
                    ? action.payload.newActivity
                    : activity
            )
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId'){
        
        return {
            ...state,
            activeId: action.payload.id,
        }
    }

    if(action.type === 'set-date'){
        
        return {
            ...state,
            date: action.payload.date
        }
    }

    if(action.type === 'delete-activity') {

        return {
            ...state,
            activities: state.activities.filter( activity => activity.id !== action.payload.id)
        }

    }


    if(action.type === 'restart-app') {
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
}
