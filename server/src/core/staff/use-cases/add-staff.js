/**
 * Dependencies: {
 *   makeStaff {from entity},
 *   companyDb {inserted from data-access adapter}
 * }
 */

import makeStaff from '../entity';

export default function makeAddStaff({ staffDb, companyDb }) {
  return async function addStaff (staffInfo) {
    const exists = await staffDb.findByEmail({ email: staffInfo.email });
    
    if (exists) throw new Error("Staff already exists")

    const company = await companyDb.findOne(staffInfo.company)

    if (!company) throw new Error("Company entered does not match any company")

    staffInfo['billingMethod'] = staffInfo['billingMethod'] || company.billingMethod

    const staffData = makeStaff(staffInfo)

    const newStaff = await staffDb.create(staffData)

    if (!newStaff) throw new Error(newStaff)

    return newStaff;
  }
}