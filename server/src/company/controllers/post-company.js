export default function makeAddCompany ({ addCompany, Resp }) { //inject the use-case for adding company
  return async function PostCompany(req, res) {
    try {
      const { body } = req;

      const newCompany = await addCompany({...body})

      const response = {
        status: "success",
        company: newCompany
      }

      // Resp.responseJSON(res, "Created", response)
      return res.status().json();

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}