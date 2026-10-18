import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  return (
    <form className="w-full max-w-3xl space-y-6">
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" placeholder="John Doe" />
        </Field>
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="festival">Festival & Screening</SelectItem>
            <SelectItem value="press">Press & Interview</SelectItem>
            <SelectItem value="collaboration">
              Creative Collaboration
            </SelectItem>
            <SelectItem value="other">Something Else</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea
          className="resize-none h-30"
          id="message"
          placeholder="Start writing..."
        />
      </Field>
      <Button className="w-full lg:w-fit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
