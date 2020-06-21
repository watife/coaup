/**
 * Dependencies (depends on use-cases)
 */
import eventService from '../use-cases'

/**
 * controllers
 */
import makeAddEvent from './add-event'

const {
  addEvent,
} = eventService //grab all the use-cases {right now just read-only and cannot be modified}

const postEvent = makeAddEvent({ addEvent })

const eventController = Object.freeze({
  postEvent,
})

export default eventController
