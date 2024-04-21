import Cookies from 'js-cookie';
import type { ProjectAliasesEnum } from 'const/ProjectAliasesEnum.ts';
import { render } from 'react-dom';

export function GoToVerticalMainPage() {
  window.location.reload();
}

export function GoToMainPage() {
  window.location.href = '/';
}

export const setStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
    try {
      Cookies.set(key, value);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (err) {
      console.error(err);
    }
  }
};

export const getStorage = (key: string) => {
  let data;
  try {
    data = localStorage.getItem(key);
  } catch (err) {
    console.error(err);
  }

  if (!data) {
    try {
      data = Cookies.get(key);
    } catch (err) {
      console.error(err);
    }
  }

  return data;
};

export const removeStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }

  try {
    Cookies.remove(key);
  } catch (err) {
    console.error(err);
  }
};

export function setProjectAlias(projectAlias: ProjectAliasesEnum) {
  setStorage('projectAlias', projectAlias);
}

export function getProjectAlias(clear = false) {
  try {
    const projectAlias = getStorage('projectAlias');
    if (clear) {
      removeStorage('projectAlias');
    }
    return projectAlias;
  } catch (e) {
    return null;
  }
}

export function zipDataLayer(zip: string) {
  localStorage.setItem('DataLayerZip', zip);
  window.dataLayer.push({ event: 'autoEvent', eventCategory: 'FormSubmits', eventAction: 'Step1Submit' });
  window.dataLayer.push({ zip });
}

export function renderWizard(wizardComponent: JSX.Element) {
  const div = document.createElement('div');
  div.classList.add('h-100');
  document.getElementsByTagName('body')[0].innerHTML = '';
  document.body.append(div);

  render(wizardComponent, div);
}
