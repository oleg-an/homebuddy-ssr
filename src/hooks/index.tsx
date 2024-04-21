import { useState } from 'react';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { createLead } from 'api/api.ts';

export function useCreateLead() {
  const [ loading, setLoading ] = useState(false);

  return {
    create: (params: { projectAlias: ProjectAliasesEnum, zipCode: string }) => {
      setLoading(true);

      Promise.all([ createLead(params), import('components/Wizard.tsx') ]).then((x, y) => {
        console.log(x);
        setLoading(false);
      }).catch(() => {
       // window.location.href = '/error';
        setLoading(false);
      });
    },
    loading
  };
}