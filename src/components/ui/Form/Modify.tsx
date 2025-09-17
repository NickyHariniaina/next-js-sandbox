import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

function Modify() {
  return (
    <>
      <div className="flex w-full p-4 max-w-sm items-center gap-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </div>
      <div className="grid w-full p-4 max-w-sm items-center gap-3">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    </>
  );
}

export default Modify;
