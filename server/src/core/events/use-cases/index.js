import makeAddEvent from './add-event';

/**
 * Database access {from data-acess}
 */
import db from '../../../database';


const { eventDb, staffDb, companyDb } = db;

const addEvent = makeAddEvent({ eventDb, staffDb, companyDb })

const eventService = Object.freeze({
  addEvent,
})

export default eventService;
