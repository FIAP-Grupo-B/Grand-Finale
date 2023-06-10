import React, { createContext, useState, useEffect } from "react";
import * as goal from 'mocks/goal'

const GoalContext = createContext()

export const GoalProvider = ({children}) => {
    const [goals, setGoals] = useState({})
    
    async function createWeightGoal(dataValue, creatorId){
        const response = await goal.weightGoal(dataValue, creatorId)
    } 

    async function createHydrationGoal(dataValue, creatorId){
        const response = await goal.hydrationGoal(dataValue, creatorId)
    }
    
    return(
        <GoalContext.Provider value={{createWeightGoal, createHydrationGoal}}>
            {children}
        </GoalContext.Provider>
    )
}

export default GoalContext;
