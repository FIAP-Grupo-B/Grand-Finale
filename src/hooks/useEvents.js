import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { loadEvents } from 'services/loadData'
import axios from 'axios'

export default function useEvents() {
  const [events, setEvents] = useState(loadEvents)
  
  
  function createEvent(newEvent, id){
    axios.post(`http://localhost:8080/user/${id}/event/create`, newEvent)
  }
  function myEvent(id){
    axios.post(`http://10.0.2.2:8080/user/${id}/eventList`)
  }

  return {
    createEvent,
    events
  }
}
