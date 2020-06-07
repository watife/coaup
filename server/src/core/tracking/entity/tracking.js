const modelTracking = ({ validate }) => {
  return function makeProject ({
    time,
    date,
    staff,
    project,
    company,
  } = {}) {

    validate({ time, date, staff, project, company });

    return Object.freeze({
      time,
      date,
      staff,
      project,
      company,
    })
  }
}

export default modelProject;