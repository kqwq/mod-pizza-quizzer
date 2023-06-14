enum Crust {
  // Comes in mini, mod, and mega sizes
  mini, // 6" crust
  mod, // 11" crust
  mega, // 11" thick crust

  // Options
  gf, // frozen, mod size only
  cauli, // frozen, mod size only
}
export enum Greens {
  arugula = "arugula",
  romaine = "romaine",
  mixed_greens = "mixed greens",
  spinach = "spinach",
}
export enum Sauce {
  bbq = "bbq sauce",
  garlic_rub = "garlic rub",
  olive_oil = "olive oil",
  pesto = "pesto",
  red = "red sauce",
  spicy_red = "spicy red sauce",
  white = "white sauce",
  gooey_cinnamon = "gooey cinnamon",
  cream_cheese_icing = "cream cheese icing",
  balsamic_fig_glaze = "balsamic big glaze",
}
export enum Cheese {
  asiago = "asiago",
  dairy_free = "dairy free cheese",
  feta = "feta",
  gorgonzola = "gorgonzola",
  mozzarella = "mozzarella",
  parmesan = "parmesan",
  cheddar = "cheddar",
}
export enum Meat {
  anchovies = "anchovies",
  bacon = "bacon",
  canadian_bacon = "canadian bacon",
  grilled_chicken = "grilled chicken",
  ground_beef = "ground beef",
  mild_sausage = "mild sausage",
  pepperoni = "pepperoni",
  plant_based_italian_sausage = "plant based italian sausage",
  salami = "salami",
  spicy_chicken_sausage = "spicy chicken sausage",
}
export enum Topping {
  artichokes = "artichokes",
  basil = "basil",
  black_olives = "black olives",
  corn = "corn",
  croutons = "croutons",
  chickpeas = "chickpeas",
  cucumbers = "cucumbers",
  garlic_chopped = "chopped garlic",
  garlic_roasted = "roasted garlic",
  green_bell_peppers = "green bell peppers",
  jalapenos = "jalapenos",
  mama_lils_sweet_hot_peppers = "Mama Lil's Sweet Hot Peppers",
  mushrooms = "mushrooms",
  pineapple = "pineapple",
  red_onion = "red onion",
  roasted_red_peppers = "roasted red peppers",
  sliced_tomatoes = "sliced tomatoes",
  diced_tomatoes = "diced tomatoes",
  // Herbs
  rosemary = "rosemary",
  oregano = "oregano",
  // Salt/Pepper
  salt = "salt",
  salt_and_pepper = "salt and pepper",
}
export enum Finish {
  balsamic_fig_glaze = "XPO balsamic fig glaze",
  bbq_swirl = "XPO bbq swirl",
  hot_buffalo_sauce = "XPO hot buffalo sauce",
  mikes_hot_honey = "XPO Mike's Hot Honey",
  pesto_drizzle = "XPO pesto drizzle", // 7-Finish
  ranch_finish = "XPO ranch finish",
  red_sauce_dollops = "XPO red sauce dollops",
  sri_rancha_sauce = "XPO Sri-Rancha Sauce",
  red_sauce = "XPO red sauce",
  arugula = "XPO arugula",
  cream_cheese_icing = "XPO cream cheese icing",
  cinnamon_sugar = "XPO cinnamon sugar",
}
export enum Dressing {
  balsamic = "balsamic dressing",
  caesar = "caesar dressing",
  oil_and_vinegar = "oil and vinegar",
  olive_oil = "olive oil",
  ranch = "ranch dressing",
  greek_herb_and_tahini_dressing = "greek herb & tahini dressing",
  sherry_dijon_vinaigrette = "sherry dijon vinaigrette",
  zesty_roma = "zesty roma dressing",
}
export type Ingredient =
  | Greens
  | Sauce
  | Cheese
  | Meat
  | Topping
  | Finish
  | Dressing;

const pizzaMenuItems = {
  // #1 - maddy
  Maddy: [Sauce.red, Cheese.mozzarella],
  // #2 - maddy + pepperoni, mild sausage, ground beef
  MadDog: [
    Sauce.red,
    Cheese.mozzarella,
    Meat.pepperoni,
    Meat.mild_sausage,
    Meat.ground_beef,
  ],
  // #3 - MA cheese + mushrooms, roasted red peppers, pesto
  Tristan: [
    Cheese.mozzarella,
    Cheese.asiago,
    Topping.mushrooms,
    Topping.roasted_red_peppers,
    Finish.pesto_drizzle,
  ],
  // #4 - white sauce, basil, A cheese, mild sausage, red onion, sliced tomatoes
  Dominic: [
    Sauce.white,
    Topping.basil,
    Cheese.asiago,
    Meat.mild_sausage,
    Topping.red_onion,
    Topping.sliced_tomatoes,
  ],
  // #5 - garlic rub, MP cheese, artichokes, red sauce dollops
  LucySunshine: [
    // Is it garlic rub or garlic on top?
    Topping.garlic_chopped,
    Cheese.mozzarella,
    Cheese.parmesan,
    Topping.artichokes,
    Finish.red_sauce_dollops,
  ],
  // #6 - maddy + mushrooms, spicy chicken sausage
  Jasper: [
    Sauce.red,
    Cheese.mozzarella,
    Meat.spicy_chicken_sausage,
    Topping.mushrooms,
  ],
  // #7 - red sauce, garlic, basil, MA cheese, sliced tomatoes
  DillonJames: [
    Sauce.red,
    Topping.garlic_chopped,
    Topping.basil,
    Cheese.mozzarella,
    Cheese.asiago,
    Topping.sliced_tomatoes,
  ],
  // #8 - the spicy pizza
  Calexico: [
    Sauce.red,
    Cheese.mozzarella,
    Cheese.gorgonzola,
    Meat.grilled_chicken,
    Topping.jalapenos,
    Finish.hot_buffalo_sauce, // 7-Finish
  ],
  // #9 - the bbq pizza
  Caspian: [
    Sauce.bbq,
    Cheese.mozzarella,
    Cheese.gorgonzola,
    Meat.grilled_chicken,
    Topping.red_onion,
    Finish.bbq_swirl, // Swirl finish
  ],
};

const saladMenuItems = {
  Caesar: [
    Greens.romaine,
    Dressing.caesar,
    Cheese.parmesan,
    Cheese.asiago,
    Topping.diced_tomatoes,
    Topping.croutons,
  ],
  Garden: [
    Greens.mixed_greens,
    Greens.romaine,
    Dressing.sherry_dijon_vinaigrette,
    Topping.cucumbers,
    Topping.diced_tomatoes,
  ],
  Greek: [
    // Check if we make this still. Tahini dressing?
    Greens.romaine,
    Dressing.greek_herb_and_tahini_dressing,
    Cheese.feta,
    Topping.red_onion,
    Topping.black_olives,
    Topping.mama_lils_sweet_hot_peppers,
    Topping.diced_tomatoes,
    Topping.chickpeas,
    Topping.cucumbers,
  ],
  ItalianChop: [
    // Check if we make this still.
    Greens.romaine,
    Greens.arugula,
    Dressing.zesty_roma,
    Cheese.mozzarella,
    Cheese.parmesan,
    Meat.salami,
    Topping.red_onion,
    Topping.black_olives,
    Topping.chickpeas,
    Topping.green_bell_peppers,
  ],
};

const otherMenuItems = {
  CheesyGarlicBread: [Cheese.mozzarella, Cheese.parmesan, Topping.rosemary],
  FourCheesePocketPie: [
    Sauce.white,
    Cheese.cheddar,
    Cheese.mozzarella,
    Cheese.asiago,
    Cheese.parmesan,
  ],
  ChickenBaconRanchPocketPie: [
    Sauce.white,
    Cheese.cheddar,
    Meat.grilled_chicken,
    Meat.bacon,
    Finish.ranch_finish,
  ],
  ItalianoPocketPie: [
    Sauce.white,
    Cheese.mozzarella,
    Cheese.parmesan,
    Meat.pepperoni,
    Meat.salami,
    Topping.roasted_red_peppers,
    Topping.diced_tomatoes,
    Topping.basil,
    Finish.red_sauce,
    Finish.arugula,
  ],
  Cinnaslice: [
    Sauce.gooey_cinnamon,
    Sauce.cream_cheese_icing,
    Finish.cream_cheese_icing,
    Finish.cinnamon_sugar,
  ],
};

const menuItems = {
  ...pizzaMenuItems,
  ...saladMenuItems,
  ...otherMenuItems,
};
const menuItemNames = Object.keys(menuItems);

class Ticket {
  name: string;
  pizzaNumber: number;
  hereOrTogo: "here" | "togo";
  // pizzas: Pizza[];

  constructor(name: string, hereOrTogo: string) {
    this.name = name;
    this.pizzaNumber = ~~(Math.random() * 300) + 1;
    this.hereOrTogo = hereOrTogo as "here" | "togo";
  }
}

function menuItemFriendlyNameOf(menuItemName: string): string {
  // Convert camel case to space-separated words
  const words = menuItemName.replace(/([a-z])([A-Z])/g, "$1 $2");
  if (menuItemName in pizzaMenuItems) {
    return words;
    // return words + " Pizza";
  }
  if (menuItemName in saladMenuItems) {
    return words + " Salad";
  }
  return words;
}

function menuItemImageSourceOf(menuItemName: string): string {
  if (menuItemName === "CheesyGarlicBread") {
    return "/assets/other_menu/CheesyGarlicBread.png";
  }
  if (menuItemName in pizzaMenuItems) {
    return `/assets/pizza/${menuItemName}.png`;
  }
  if (menuItemName in saladMenuItems) {
    return `/assets/salad/${menuItemName}.png`;
  }
  return `/assets/other_menu/${menuItemName}.webp`;
}

function menuItemToppingsMinusExpo(menuItemName: string): Topping[] {
  // Gets the list of toppings minus any toppings that begin with "XPO"
  const toppings = menuItems[
    menuItemName as keyof typeof menuItems
  ] as Topping[];
  return toppings.filter((topping) => !topping.startsWith("XPO"));
}

export {
  Ticket,
  menuItems,
  menuItemNames,
  menuItemToppingsMinusExpo,
  menuItemFriendlyNameOf,
  menuItemImageSourceOf,
};
