import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-[1000px] mx-auto px-8 mt-12"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-outfit font-[500]">
          Is it accessible 1?
        </AccordionTrigger>
        <AccordionContent className="text-lg font-outfit">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-outfit">
            Is it accessible 2?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-outfit">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-outfit">
            Is it accessible 3?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-outfit">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
    </Accordion>
  );
}
