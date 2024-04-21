import type { CreateLeadResponseModel } from '../model';
import { getWizardProps, renderWizard } from 'api/utils.ts';

export function Wizard({ leadResponse }: { leadResponse: CreateLeadResponseModel }) {
  return <div>{leadResponse.uuid}</div>;
}

renderWizard(<Wizard leadResponse={getWizardProps()}/>);
