import { contractorsList } from './mock/contractors';
import { states } from './mock/states';

export function getContractors() {
  return Promise.resolve(contractorsList);
}

export function getStates() {
  return Promise.resolve(states);
}
