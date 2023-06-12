import React, { useEffect, useRef, WheelEvent, WheelEventHandler } from 'react'
import { MAKELINE_BOX_HEIGHT, MAKELINE_BOX_WIDTH, MAKELINE_GAP } from '../util/contsants'
import { Cheese, Greens, Meat, Sauce, Topping } from '../util/makeline'
import IngBox from './IngredientBox'

const Section = ({ name = 'none', w, gapAfter = 0, children }: { name?: string, w: number, gapAfter?: number, children: React.ReactNode }) => {
  const width = (MAKELINE_BOX_WIDTH * w)
  const height = (MAKELINE_BOX_HEIGHT * 3)
  const gapAfterAdjusted = (MAKELINE_BOX_WIDTH * gapAfter)

  return (
    <div className={`flex flex-row relative min-w-[${width}px] h-[${height}px] mr-[${gapAfterAdjusted}px]`}>
      {children}
    </div>
  )
}

const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}
const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}



const Makeline = () => {
  const makelineRef = useRef<HTMLDivElement>(null);

  function onMakelineWheel(event: any) {
    // Scroll horizontally
    event.preventDefault();
    makelineRef.current?.scrollBy({ left: event.deltaY });

  }


  React.useEffect(() => {
    const element = makelineRef.current
    if (element) {
      element.addEventListener("wheel", onMakelineWheel, { passive: false });
      return () => {
        element.removeEventListener("wheel", onMakelineWheel);
      };
    }
  }, []);

  return (
    <div id="makeline" className="overflow-x-scroll overflow-y-hidden flex flex-row z-[4]" ref={makelineRef}>
      <Section name="Greens" w={4} gapAfter={MAKELINE_GAP}>
        <Column>
          <IngBox i={Greens.mixed_greens} x={0} y={0} w={2} h={1.5} />
          <IngBox i={Greens.romaine} x={0} y={1.5} w={2} h={1.5} />
        </Column>
        <Column>
          <IngBox i={Greens.spinach} x={2} y={0} w={2} />
          <IngBox i={Greens.arugula} x={2} y={1} w={2} />
          <IngBox i={'spacer'} x={2} y={2} w={2} />
        </Column>
      </Section>
      <Section name="Sauces" w={4} gapAfter={MAKELINE_GAP}>
        <Column>
          <IngBox i={Sauce.bbq} x={0} y={0} w={2} />
          <IngBox i={Sauce.white} x={0} y={1} w={2} />
          <IngBox i={Sauce.red} x={0} y={2} w={2} />
          <IngBox i={Sauce.gooey_cinnamon} x={3} y={2} w={1} />
        </Column>
        <Column>
          <IngBox i={Cheese.cheddar} x={2} y={0} w={2} />
          <IngBox i={Topping.garlic_chopped} x={2} y={1} />
          <IngBox i={Topping.basil} x={3} y={1} />
          <IngBox i={Sauce.spicy_red} x={2} y={2} />
        </Column>
      </Section>
      <Section name="Cheeses" w={2}>
        <Grid>
          <IngBox i={Cheese.parmesan} x={0} y={0} />
          <IngBox i={Cheese.feta} x={1} y={0} />
          <IngBox i={Cheese.asiago} x={0} y={1} />
          <IngBox i={Cheese.gorgonzola} x={1} y={1} />
          <IngBox i={Cheese.mozzarella} x={0} y={2} w={2} />
        </Grid>
      </Section>
      <Section name="Meats" w={2} gapAfter={MAKELINE_GAP}>
        <Column>
          <IngBox i={Meat.salami} x={0} y={0} />
          <IngBox i={Meat.canadian_bacon} x={0} y={1} />
          <IngBox i={Meat.grilled_chicken} x={0} y={2} />
        </Column>
        <Column>
          <IngBox i={Meat.spicy_chicken_sausage} x={1} y={0} />
          <IngBox i={Meat.mild_sausage} x={1} y={1} />
          <IngBox i={Meat.pepperoni} x={1} y={2} />
        </Column>
      </Section>
      <Section name="toppings_1" w={4} gapAfter={MAKELINE_GAP}>
        <Grid>
          {/* Top row */}
          <IngBox i={Meat.bacon} x={0} y={0} />
          <IngBox i={Meat.plant_based_italian_sausage} x={1} y={0} />
          <IngBox i={Topping.jalapenos} x={2} y={0} />
          <IngBox i={Topping.corn} x={3} y={0} />

          {/* Middle row */}
          <IngBox i={Meat.ground_beef} x={0} y={1} />
          <IngBox i={Topping.pineapple} x={1} y={1} />
          <IngBox i={Topping.green_bell_peppers} x={2} y={1} />
          <IngBox i={Topping.sliced_tomatoes} x={3} y={1} />

          {/* Bottom row */}
          <IngBox i={Topping.mushrooms} x={0} y={2} w={2} />
          <IngBox i={Topping.red_onion} x={2} y={2} w={2} />
        </Grid>
      </Section>
      <Section name="toppings_2" w={4} gapAfter={0}>
        {/* Top row */}
        <IngBox i={Topping.artichokes} x={0} y={0} />
        <IngBox i={Topping.black_olives} x={1} y={0} />
        <IngBox i={"spacer"} x={2} y={0} />
        <IngBox i={Topping.chickpeas} x={3} y={0} />

        {/* Middle row */}
        <IngBox i={Topping.roasted_red_peppers} x={0} y={1} />
        <IngBox i={"spacer"} x={1} y={1} />
        <IngBox i={"spacer"} x={2} y={1} />
        <IngBox i={"spacer"} x={3} y={1} />

        {/* Bottom row */}
        <IngBox i={Topping.garlic_roasted} x={0} y={2} />
        <IngBox i={Topping.mama_lils_sweet_hot_peppers} x={1} y={2} />
        <IngBox i={Topping.diced_tomatoes} x={2} y={2} />
        <IngBox i={Topping.cucumbers} x={3} y={2} />
      </Section>
      <Section w={1} gapAfter={0}>
        <IngBox i={Topping.rosemary} x={0.1} y={0.1} w={0.8} h={0.8} round />
        <IngBox i={Topping.oregano} x={0.1} y={1.1} w={0.8} h={0.8} round />
        <IngBox i={Topping.salt_and_pepper} x={0.1} y={2.1} w={0.8} h={0.8} round />
      </Section>
      <Section w={1}>
        <IngBox i={"finish"} x={0} y={0} w={2} h={3} />
      </Section>

    </div >
  )
}

export default Makeline