import { getStorage } from 'api/utils.ts';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { makeRequest } from './makeRequest.ts';
import type { CreateLeadResponseModel } from '../model';

function getApiHost() {
  return import.meta.env.PUBLIC_API_HOST;
}

export async function createLead({ projectAlias, zipCode }: { projectAlias: ProjectAliasesEnum, zipCode: string }) {
  //setProjectAlias(projectAlias);
  //zipDataLayer(zipCode);

  return makeRequest<{ data: CreateLeadResponseModel }>('POST', `${getApiHost()}/leads`, {
    zipCode,
    projectAlias,
    queryData: getQuery(),
    browserData: await getBrowserData(),
  }).then((x) => x.data);
}

function getQuery() {
  let data = getStorage('queryData');

  if (!data) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const newUrlParams = new URLSearchParams();

    // eslint-disable-next-line no-restricted-syntax
    for (const key of urlParams.keys()) {
      if (key === 'id' || key === 'gclid' || key === 't_id') {
        newUrlParams.append(key, <string>urlParams.get(key));
      } else {
        newUrlParams.append(key, (<string>urlParams.get(key)).toLowerCase());
      }
    }
    data = newUrlParams.toString();
  }

  return data;
}

async function getBrowserData() {
  const landingPage = await getLandingPageUrl();
  const browserData = getBrowserDataHB();

  // replace new keys on old to keep old format
  const { cookiesStr, userAgent } = browserData;
  // delete browserData.cookiesStr;
  //delete browserData.userAgent;

  return {
    ...browserData,
    cookies_str: cookiesStr,
    agent: userAgent,
    landingPage,
  };
}

export function getBrowserDataHB() {
  let gaClientId;
  try {
    const tracker = window.ga.getAll()[0];
    gaClientId = tracker.get('clientId');
  } catch (e) {
    gaClientId = null;
  }

  return {
    gaClientId,
    ...(localStorage.getItem('pageReferer') ? { referer: localStorage.getItem('pageReferer') } : {}),
    cookiesStr: document.cookie,
    userAgent: navigator.userAgent,
    screen: {
      height: window.innerHeight,
      width: window.innerWidth,
    },
  };
}

async function getLandingPageUrl() {
  const getUrlWithoutQueries = window.location.origin + window.location.pathname;
  try {
    return (await getXLandingPage()) || getUrlWithoutQueries;
  } catch (error) {
    return getUrlWithoutQueries;
  }
}

function getXLandingPage(): Promise<string | null> {
  return new Promise((resolve) => {
    const client = new XMLHttpRequest();
    client.open('HEAD', window.location.href, true);
    client.send();
    client.onreadystatechange = () => {
      if (client.readyState === client.HEADERS_RECEIVED) {
        resolve(client.getResponseHeader('x-landing-page'));
      }
    };
  });
}
