import React, { createContext, useState, useEffect } from "react";
import * as event from 'mocks/events'

const EventContext = createContext()

export const EventProvider = ({children}) => {
    const [events, setEvents] = useState({})
    
    async function getUserEvents(creatorId){
        const response = await event.UserEvents(creatorId)
        setEvents(response.data)
    }
    async function getCommunityEvents(){
        const response = await event.CommunityEvents()
        console.log(response.data)
        setEvents(response.data)
    }
    async function createUserEvents(dataValue, creatorId){
        const response = await event.CreateEvent(dataValue, creatorId)
        setEvents(response.data)
        console.log(response.data)
        getCommunityEvents()
    }

    useEffect(() => {
        getCommunityEvents()
    },[])
    
    return(
        <EventContext.Provider value={{events, getUserEvents, createUserEvents, getCommunityEvents}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContext;
