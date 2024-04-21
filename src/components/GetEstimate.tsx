import { Button } from './Button.tsx';
import { ZipInput } from './ZipInput.tsx';
import { useCreateLead } from 'hooks';
import { ProjectAliasesEnum } from '../const/ProjectAliasesEnum.ts';

export function GetEstimate() {
  const { create, loading } = useCreateLead();
  const clickHandler = () => {
    create({
      zipCode: '10001',
      projectAlias: ProjectAliasesEnum.WalkInShowers
    });
  };

  return <div className="flex">
    <ZipInput/>
    <Button loading={loading} onClick={clickHandler}>Get estimate</Button>
  </div>;
}
