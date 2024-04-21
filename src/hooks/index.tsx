import { useState } from 'react';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { createLead } from 'api/api.ts';
import type { CreateLeadResponseModel } from '../model';

export function useCreateLead() {
  const [ loading, setLoading ] = useState(false);
  const [ leadResponse, setLeadResponse ] = useState<CreateLeadResponseModel>();

  return {
    create: (params: { projectAlias: ProjectAliasesEnum, zipCode: string }) => {
      setLoading(true);

      createLead(params).then((response) => {
        setLeadResponse(response);
      }).catch(() => {
        // window.location.href = '/error';
        setLoading(false);
      });
    },
    loading,
    leadResponse
  };
}
