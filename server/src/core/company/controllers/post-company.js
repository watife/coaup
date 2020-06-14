export default function makeAddCompany ({ addCompany }) { //inject the use-case for adding company
  return async function PostCompany(req, res) {
    try {
      const { body } = req;

      const newCompany = await addCompany({...body})

      const response = {
        status: "success",
        company: newCompany
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