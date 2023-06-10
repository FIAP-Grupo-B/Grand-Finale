import React, { createContext, useState, useEffect, useContext } from "react";
import * as goal from 'mocks/goal'
import AuthContext from "./auth";

const GoalContext = createContext()

export const GoalProvider = ({children}) => {

    const { user } = useContext(AuthContext)
    const [goals, setGoals] = useState({})
    
    async function createWeightGoal(dataValue, creatorId){
        const response = await goal.weightGoal(dataValue, creatorId)
    } 

    async function createHydrationGoal(dataValue, creatorId){
        const response = await goal.hydrationGoal(dataValue, creatorId)
    }

    // async function getGoals(creatorId){
    //     let array = []
    //     console.log((await goal.getHydration(creatorId)).data)
    // }


    useEffect(() => {
        // getGoals(user.id)
    },[])
    
    return(
        <GoalContext.Provider value={{goals, createWeightGoal, createHydrationGoal}}>
            {children}
        </GoalContext.Provider>
    )
}

export default GoalContext;
