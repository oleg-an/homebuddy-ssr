import type { CreateLeadResponseModel } from '../model';
import { getWizardProps, renderWizard } from 'api/utils.ts';

export function Wizard({ params }: { params: CreateLeadResponseModel }) {
  return <div>svds</div>;
}

renderWizard(<Wizard params={getWizardProps()}/>);
