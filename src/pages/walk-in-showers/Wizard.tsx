import type { CreateLeadResponseModel } from '../../model';

export function Wizard({ leadResponse }: { leadResponse: CreateLeadResponseModel }) {
  return <>
    {leadResponse.uuid}
  </>;
}
