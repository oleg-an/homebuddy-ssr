import { Button } from 'components/Button.tsx';
import { ZipInput } from 'components/ZipInput.tsx';
import { useCreateLead } from '../../hooks';
import { ProjectAliasesEnum } from '../../const/ProjectAliasesEnum.ts';
import { Wizard } from './Wizard.tsx';
import { WizardWrapper } from 'components/WizardWrapper.tsx';

export function GetEstimate() {
  const { create, loading, leadResponse } = useCreateLead();
  const clickHandler = () => {
    create({
      zipCode: '10001',
      projectAlias: ProjectAliasesEnum.WalkInShowers
    });
  };

  return <div className="flex">
    <ZipInput/>
    <Button loading={loading} onClick={clickHandler}>Get estimate</Button>
    {leadResponse && <WizardWrapper>
        <Wizard leadResponse={leadResponse}/>
    </WizardWrapper>}
  </div>;
}
