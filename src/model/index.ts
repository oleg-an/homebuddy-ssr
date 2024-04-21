export interface CreateLeadResponseModel {
  isOutOfArea?: boolean;
  uuid?: string;
  subscriptionAlias?: string;
  subscriptionType?: string;
  campaign?: {
    alias: string;
  };
}
