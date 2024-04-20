import { Button } from './Button.tsx';
import { Input } from './Input.tsx';
import { useCreateLead } from 'api/api.ts';
import { ProjectAliasesEnum } from '../const/ProjectAliasesEnum.ts';

export function ZipInput() {
  const { createLead, loading } = useCreateLead();

  const clickHandler = () => {
    createLead({
      zipCode: '10001',
      projectAlias: ProjectAliasesEnum.WalkInShowers
    });
  };

  return <div className="flex">
    <Input/>
    <Button loading={loading} onClick={clickHandler}>Get estimate</Button>
  </div>;
}
