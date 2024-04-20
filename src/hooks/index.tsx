import { useState } from 'react';
import type { ProjectAliasesEnum } from '../const/ProjectAliasesEnum.ts';

export function useCreateLead() {
  const [ loading, setLoading ] = useState(false);

  return {
    create: (params: { projectAlias: ProjectAliasesEnum, zipCode: string }) => {
      setLoading(true);
      import('components/Wizard.tsx').then();

      /*
        createLead(params).then(_ => {
          setLoading(false);
        }).catch(() => setLoading(false));
       */
    },
    loading
  };
}