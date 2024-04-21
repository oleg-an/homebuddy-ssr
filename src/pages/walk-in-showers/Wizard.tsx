import type { CreateLeadResponseModel } from '../../model';

export function Wizard({ leadResponse }: { leadResponse: CreateLeadResponseModel }) {
  return <div>{leadResponse.uuid}</div>;
}
