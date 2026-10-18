import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function PresskitForm() {
  return (
    <form className="space-y-4">
      <Field>
        <FieldLabel htmlFor="email" className="text-foreground">
          Email for press-kit access
        </FieldLabel>
        <Input id="email" placeholder="you@example.com" />
      </Field>
      <p className="text-xs text-muted-foreground">
        By submitting, you request press-kit updates at this email address.
      </p>
      <Button className="w-full">Request Press Kit</Button>
    </form>
  );
}
