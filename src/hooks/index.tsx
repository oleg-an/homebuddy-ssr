import { useState } from 'react';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { createLead } from 'api/api.ts';
import { setWizardProps } from 'api/utils.ts';

export function useCreateLead() {
  const [ loading, setLoading ] = useState(false);

  return {
    create: async (params: { projectAlias: ProjectAliasesEnum, zipCode: string }) => {
      setLoading(true);

      try {
        const leadResponse = await createLead(params);
        setWizardProps(leadResponse);
        await import('components/Wizard.tsx');
      } catch (e) {
        // window.location.href = '/error';
        setLoading(false);
      }
    },
    loading
  };
}
