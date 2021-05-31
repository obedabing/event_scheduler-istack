import * as types from '../constants'
import {
  getCookieJwt,
  replaceArrayObjectElement,
} from '../utils'

import {
  fetchEventDates as fetchEvents,
  fetchSchedules as fetchEventSchedules,
} from '../api'


export const fetchEventDates = () => async (dispatch) => {
  try {
    const res = await fetchEvents()
    const { data } = res.data

    dispatch({
      type: types.SET_PUBLIC_EVENTS,
      payload: data,
    })
    return res
  } catch ({ response }) {
    return response
  }
}

export const fetchSchedules = (eventId) => async (dispatch) => {
  try {
    const res = await fetchEventSchedules({ event_id: eventId })
    const { data } = res.data

    dispatch({
      type: types.SET_PUBLIC_SCHEDULES,
      payload: { eventId, schedules: data },
    })
    return res
  } catch ({ response }) {
    return response
  }
}

