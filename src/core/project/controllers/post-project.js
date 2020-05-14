export default function makePostProject ({ addProject }) {
  return async function PostProject(req, res) {
    try {
      const { body } = req;

      const newProject = await addProject({...body})

      return res.status(201).json({
        status: "success",
        project: newProject
      });

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}