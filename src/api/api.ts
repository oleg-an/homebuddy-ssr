import { contractorsList } from './mock/contractors';

export function getContractors() {
  return Promise.resolve(contractorsList);
}
