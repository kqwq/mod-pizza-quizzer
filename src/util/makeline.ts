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
  balsamic_fig_glaze = "balsamic fig glaze",
  bbq_swirl = "bbq swirl",
  hot_buffalo_sauce = "hot buffalo sauce",
  mikes_hot_honey = "Mike's Hot Honey",
  pesto_drizzle = "Pesto Drizzle", // 7-Finish
  ranch_finish = "ranch finish",
  red_sauce_dollops = "red sauce dollops",
  sri_rancha_sauce = "Sri-Rancha Sauce",
  red_sauce = "red sauce",
}
export enum Dressing {
  balsamic = "balsamic dressing",
  caesar = "caesar dressing",
  oil_and_vinegar = "oil and vinegar",
  olive_oil = "olive oil",
  ranch = "ranch dressing",
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

// Row 1 - Farthest from workers, closest to customers
// Row 2 - Middle
// Row 3 - Closest to workers, farthest from customers
const ingredientLayout = [
  {
    station: "Point",
    width: 4,
    row1: [
      [Greens.arugula, 2],
      [Greens.spinach, 2],
    ],
    row2: [[Greens.mixed_greens, 2]],
    row3: [[Greens.romaine, 2]],
  },
  {
    station: "Sauce & Cheese",
    width: 4,
    row1: [
      [Cheese.asiago, 1],
      [Cheese.feta, 1],
    ],
    row2: [
      [Cheese.gorgonzola, 1],
      [Cheese.parmesan, 1],
    ],
    row3: [
      [Cheese.cheddar, 1],
      [Cheese.mozzarella, 2],
    ],
  },
  {
    station: "Meat",
    width: 4,
    row1: [
      [Meat.anchovies, 1],
      [Meat.bacon, 1],
    ],
    row2: [
      [Meat.canadian_bacon, 1],
      [Meat.grilled_chicken, 1],
      [Meat.ground_beef, 1],
    ],
    row3: [
      [Meat.mild_sausage, 1],
      [Meat.pepperoni, 1],
      [Meat.plant_based_italian_sausage, 1],
    ],
  },
  {
    station: "Veggies",
    width: 4,
    row1: [
      [Topping.artichokes, 1],
      [Topping.basil, 1],
    ],
    row2: [
      [Topping.black_olives, 1],
      [Topping.corn, 1],
    ],
    row3: [
      [Topping.croutons, 1],
      [Topping.chickpeas, 1],
    ],
  },
  {
    station: "Veggies",
    width: 4,
    row1: [
      [Topping.cucumbers, 1],
      [Topping.garlic_chopped, 1],
    ],
    row2: [
      [Topping.garlic_roasted, 1],
      [Topping.green_bell_peppers, 1],
    ],
    row3: [
      [Topping.jalapenos, 1],
      [Topping.mama_lils_sweet_hot_peppers, 1],
    ],
  },
  {
    station: "Veggies",
    width: 4,
    row1: [
      [Topping.mushrooms, 1],
      [Topping.pineapple, 1],
    ],
    row2: [
      [Topping.red_onion, 1],
      [Topping.roasted_red_peppers, 1],
    ],
    row3: [
      [Topping.sliced_tomatoes, 1],
      [Topping.diced_tomatoes, 1],
    ],
  },
  {
    station: "Herbs & Salt/Pepper",
    width: 4,
    row1: [
      [Topping.rosemary, 1],
      [Topping.oregano, 1],
    ],
    row2: [
      [Topping.salt, 1],
      [Topping.salt_and_pepper, 1],
    ],
    row3: [],
  },
];

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
  Tristin: [
    Sauce.olive_oil, // Not sauce so olive oil
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
    Topping.garlic_chopped, // I think?
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
    Cheese.feta,
    Topping.red_onion,
    Topping.black_olives,
    Topping.mama_lils_sweet_hot_peppers,
    Topping.diced_tomatoes,
    Topping.chickpeas,
    Topping.cucumbers,
    // Dressing.greek_herb_and_tahini_dressing,
  ],
  ItalianChop: [
    // Check if we make this still.
    Greens.romaine,
    Greens.arugula,
    Cheese.mozzarella,
    Cheese.parmesan,
    Meat.salami,
    Topping.red_onion,
    Topping.black_olives,
    Topping.chickpeas,
    Topping.green_bell_peppers,
    Dressing.zesty_roma,
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
    Greens.arugula,
    Finish.red_sauce,
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

export { Ticket, menuItems, menuItemNames, ingredientLayout };
