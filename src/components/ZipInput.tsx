import { Button } from './Button.tsx';
import { Input } from './Input.tsx';

export function ZipInput() {
  return <div className="flex">
    <Input/>
    <Button onClick={() => {

    }}>Get estimate</Button>
  </div>;
}
