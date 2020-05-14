export default function makePostStaff ({ addStaff }) { //inject the use-case for adding staff
  return async function PostStaff(req, res) {
    try {
      const { body } = req;

      const newStaff = await addStaff({...body})

      return res.status(201).json({
        status: "success",
        staff: newStaff
      });

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}