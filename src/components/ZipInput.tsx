import { Button } from './Button.tsx';
import { Input } from './Input.tsx';
import { useCreateLead } from 'hooks';
import { ProjectAliasesEnum } from '../const/ProjectAliasesEnum.ts';

export function ZipInput() {
  const { create, loading } = useCreateLead();
  const clickHandler = () => {
    create({
      zipCode: '10001',
      projectAlias: ProjectAliasesEnum.WalkInShowers
    });
  };

  return <div className="flex">
    <Input/>
    <Button loading={loading} onClick={clickHandler}>Get estimate</Button>
  </div>;
}
