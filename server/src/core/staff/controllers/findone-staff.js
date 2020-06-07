export default function makeFindOneStaff ({ findOneStaff }) { 
  return async function findAStaff(req, res) {
    try {
      const { id } = req.params;

      const foundStaff = await findOneStaff(id)

      return res.status(200).json({
        status: "success",
        staff: foundStaff
      });

    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  }
}