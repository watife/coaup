export default function makeAddEvent ({ addEvent }) { //inject the use-case for adding event
  return async function PostEvent(req, res) {
    try {
      const { body } = req;

      const newEvent = await addEvent({...body})

      const response = {
        status: "success",
        message: newEvent
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}