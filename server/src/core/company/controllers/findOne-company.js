export default function makeFindOneCompany ({ findOneCompany }) { 
  return async function FindCompany(req, res) {
    try {
      const { id } = req.params;

      const foundCompany = await findOneCompany(id)

      delete foundCompany.password

      return res.status(200).json({
        status: "success",
        company: foundCompany
      });

    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  }
}