import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/config/faq.data";

export default function FAQList() {
  return (
    <section className="space-y-8">
      {FAQ_DATA.map((section, sectionIndex) => (
        <section key={section.title} className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-serif text-primary text-3xl md:text-4xl">
              {section.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          </div>
          <Accordion type="single" collapsible>
            {section.items.map((item, itemIndex) => (
              <AccordionItem
                key={item.question}
                value={`section-${sectionIndex}-item-${itemIndex}`}
              >
                <AccordionTrigger className="text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base whitespace-normal wrap-break-word">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </section>
  );
}
