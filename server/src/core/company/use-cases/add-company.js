import makeCompany from '../entity'

export default function makeAddCompany({
  companyDb,
  mailingService,
}) {
  return async function addCompany(companyInfo) {
    const company = makeCompany(companyInfo)
    const { email, company_name } = company
    const exists = await companyDb.findIfExists({
      email,
      company_name,
    })
    if (exists) {
      throw new Error('company already exists')
    }

    const createNewCompany = await companyDb.create({ ...company })

    if (!createNewCompany._id)
      throw new Error('User could not be created')

    const mailData = {
      to: company.email,
      subject: 'Welcome to coaup',
      html: 'register',
      data: {
        name: company_name,
        message: 'welcome to coaup',
      },
    }

    await mailingService.sendMail(mailData)

    return 'Registration successful'
  }
}
