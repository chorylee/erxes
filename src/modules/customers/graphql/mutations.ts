const commonFields = `
  $avatar: String,
  $firstName: String,
  $lastName: String,
  $primaryEmail: String,
  $primaryPhone: String,
  $phones: [String],
  $emails: [String],
  $ownerId: String,
  $position: String,
  $department: String,
  $leadStatus: String,
  $lifecycleState: String,
  $hasAuthority: String,
  $description: String,
  $doNotDisturb: String,
  $links: JSON,
  $customFieldsData: JSON
`;

const commonVariables = `
  avatar: $avatar,
  firstName: $firstName,
  lastName: $lastName,
  primaryEmail: $primaryEmail,
  primaryPhone: $primaryPhone,
  phones: $phones,
  emails: $emails,
  ownerId: $ownerId,
  position: $position,
  department: $department,
  leadStatus: $leadStatus,
  lifecycleState: $lifecycleState,
  hasAuthority: $hasAuthority,
  description: $description,
  doNotDisturb: $doNotDisturb,
  links: $links,
  customFieldsData: $customFieldsData
`;

const customersAdd = `
  mutation customersAdd(${commonFields}) {
    customersAdd(${commonVariables}) {
      _id
    }
  }
`;

const customersEdit = `
  mutation customersEdit($_id: String!, ${commonFields}) {
    customersEdit(_id: $_id, ${commonVariables}) {
      _id
      avatar
      firstName
      lastName
      primaryEmail
      primaryPhone
      phones
      emails
      ownerId
      position
      department
      leadStatus
      lifecycleState
      hasAuthority
      description
      doNotDisturb
      links {
        linkedIn
        twitter
        facebook
        github
        youtube
        website
      }
    }
  }
`;

const customersAddCompany = `
  mutation customersAddCompany($_id: String!, $name: String!, $website: String) {
    customersAddCompany(_id: $_id, name: $name, website: $website) {
      _id
    }
  }
`;

const customersEditCompanies = `
  mutation customersEditCompanies($_id: String!, $companyIds: [String]) {
    customersEditCompanies(_id: $_id, companyIds: $companyIds) {
      companies {
        _id
        primaryName
        website
      }
    }
  }
`;

const customersRemove = `
  mutation customersRemove($customerIds: [String]) {
    customersRemove(customerIds: $customerIds)
  }
`;

const customersMerge = `
  mutation customersMerge($customerIds: [String], $customerFields: JSON) {
    customersMerge(customerIds: $customerIds, customerFields: $customerFields) {
      _id
    }
  }
`;

export default {
  customersAdd,
  customersEdit,
  customersAddCompany,
  customersEditCompanies,
  customersRemove,
  customersMerge
};
