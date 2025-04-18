import { Navbar } from "~/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function RulesAndFAQ() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid md:grid-cols-2">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">📜 Rules</h1>
            <ol className="list-decimal list-inside space-y-2 text-zinc-300">
              <li>
                Be respectful to everyone. Harassment or hate speech is not tolerated.
              </li>
              <li>No spamming, advertising, or self-promotion without permission.</li>
              <li>Use channels appropriately and stay on topic.</li>
              <li>Do not share personal information of others.</li>
              <li>Follow Discord’s Terms of Service and Community Guidelines.</li>
            </ol>
          </section>
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">❓ FAQ</h1>
            <div className="space-y-6 text-zinc-300">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I get a role?</AccordionTrigger>
                  <AccordionContent>
                    Head to the #role-select channel and click the buttons to assign roles
                    to yourself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Who do I contact if I need help?</AccordionTrigger>
                  <AccordionContent>
                    You can DM any mod or open a ticket in the #support channel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I promote my own server?</AccordionTrigger>
                  <AccordionContent>
                    Promotion is only allowed with prior permission from the admin team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What are server levels?</AccordionTrigger>
                  <AccordionContent>
                    Server levels are based on activity. Participate in chat and events to
                    level up!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
