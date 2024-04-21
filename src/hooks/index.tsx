import { useState } from 'react';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { createLead } from 'api/api.ts';
import { setWizardProps } from 'api/utils.ts';

export function useCreateLead() {
  const [ loading, setLoading ] = useState(false);

  return {
    create: (params: { projectAlias: ProjectAliasesEnum, zipCode: string }) => {
      setLoading(true);

      createLead(params).then((response) => {
        setWizardProps(response);
        import('components/Wizard.tsx').catch(() => {
          // window.location.href = '/error';
        });
      }).catch(() => {
        // window.location.href = '/error';
        setLoading(false);
      });
    },
    loading
  };
}
