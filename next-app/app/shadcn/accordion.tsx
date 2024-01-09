import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-[1000px] mx-auto mt-12">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-outfit font-[500]">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-lg font-outfit">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-outfit">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-outfit">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-outfit">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-outfit">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
    </Accordion>
  );
}
