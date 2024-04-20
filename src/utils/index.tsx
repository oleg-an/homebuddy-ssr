import { render } from 'react-dom';

export function renderWizardBuilder(wizardComponent: JSX.Element) {
  const div = document.createElement('div');
  div.classList.add('h-100');
  document.getElementsByTagName('body')[0].innerHTML = '';
  document.body.append(div);

  render(wizardComponent, div);
}
