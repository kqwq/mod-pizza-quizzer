enum Crust {
  // Comes in mini, mod, and mega sizes
  mini, // 6" crust
  mod, // 11" crust
  mega, // 11" thick crust

  // Options
  gf, // frozen, mod size only
  cauli, // frozen, mod size only
}
enum Greens {
  arugula = "arugula",
  romaine = "romaine",
  mixed_greens = "mixed greens",
  spinach = "spinach",
}
enum Sauce {
  bbq = "bbq sauce",
  garlic_rub = "garlic rub",
  olive_oil = "olive oil",
  pesto = "pesto",
  red = "red sauce",
  spicy_red = "spicy red sauce",
  white = "white sauce",
}
enum Cheese {
  asiago = "asiago",
  dairy_free = "dairy free cheese",
  feta = "feta",
  gorgonzola = "gorgonzola",
  mozzarella = "mozzarella",
  parmesan = "parmesan",
}
enum Meat {
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
enum Topping {
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
  sea_salt = "sea salt",
  sea_salt_and_pepper = "sea salt and pepper",
}
enum Finish {
  balsamic_fig_glaze = "balsamic fig glaze",
  bbq_swirl = "bbq swirl",
  hot_buffalo_sauce = "hot buffalo sauce",
  mikes_hot_honey = "Mike's Hot Honey",
  pesto_drizzle = "Pesto Drizzle", // 7-Finish
  ranch_finish = "ranch finish",
  red_sauce_dollops = "red sauce dollops",
  sri_rancha_sauce = "Sri-Rancha Sauce",
}
enum Dressing {
  balsamic = "balsamic dressing",
  caesar = "caesar dressing",
  oil_and_vinegar = "oil and vinegar",
  olive_oil = "olive oil",
  ranch = "ranch dressing",
  sherry_dijon_vinaigrette = "sherry dijon vinaigrette",
  zesty_roma = "zesty roma dressing",
}

const pizzaMenuItems = {
  // #1 - maddy
  maddy: [Sauce.red, Cheese.mozzarella],
  // #2 - maddy + pepperoni, mild sausage, ground beef
  mad_dog: [
    Sauce.red,
    Cheese.mozzarella,
    Meat.pepperoni,
    Meat.mild_sausage,
    Meat.ground_beef,
  ],
  // #3 - MA cheese + mushrooms, roasted red peppers, pesto
  tristan: [
    Sauce.olive_oil, // Not sauce so olive oil
    Cheese.mozzarella,
    Cheese.asiago,
    Topping.mushrooms,
    Topping.roasted_red_peppers,
    Finish.pesto_drizzle,
  ],
  // #4 - white sauce, basil, A cheese, mild sausage, red onion, sliced tomatoes
  dominic: [
    Sauce.white,
    Topping.basil,
    Cheese.asiago,
    Meat.mild_sausage,
    Topping.red_onion,
    Topping.sliced_tomatoes,
  ],
  // #5 - garlic rub, MP cheese, artichokes, red sauce dollops
  lucy_sunshine: [
    // Is it garlic rub or garlic on top?
    Sauce.garlic_rub,
    Cheese.mozzarella,
    Cheese.parmesan,
    Topping.artichokes,
    Finish.red_sauce_dollops,
  ],
  // #6 - maddy + mushrooms, spicy chicken sausage
  jasper: [
    Sauce.red,
    Cheese.mozzarella,
    Meat.spicy_chicken_sausage,
    Topping.mushrooms,
  ],
  // #7 - red sauce, garlic, basil, MA cheese, sliced tomatoes
  dillon_james: [
    Sauce.red,
    Topping.garlic_chopped, // I think?
    Topping.basil,
    Cheese.mozzarella,
    Cheese.asiago,
    Topping.sliced_tomatoes,
  ],
  // #8 - the spicy pizza
  calexico: [
    Sauce.red,
    Cheese.mozzarella,
    Cheese.gorgonzola,
    Meat.grilled_chicken,
    Topping.jalapenos,
    Finish.hot_buffalo_sauce, // 7-Finish
  ],
  // #9 - the bbq pizza
  caspian: [
    Sauce.bbq,
    Cheese.mozzarella,
    Cheese.gorgonzola,
    Meat.grilled_chicken,
    Topping.red_onion,
    Finish.bbq_swirl, // Swirl finish
  ],
};

const saladMenuItems = {
  caesar: [
    Greens.romaine,
    Dressing.caesar,
    Cheese.parmesan,
    Cheese.asiago,
    Topping.diced_tomatoes,
    Topping.croutons,
  ],
  garden: [
    Greens.mixed_greens,
    Greens.romaine,
    Dressing.sherry_dijon_vinaigrette,
    Topping.cucumbers,
    Topping.diced_tomatoes,
  ],
  greek: [
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
  italian_chop: [
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

class Ticket {
  name: string;
  pizzaNumber: number;
  hereOrTogo: "here" | "togo";
  // pizzas: Pizza[];

  constructor(name, hereOrTogo) {
    this.name = name;
    this.pizzaNumber = ~~(Math.random() * 300) + 1;
    this.hereOrTogo = hereOrTogo;
  }
}

export { Ticket };
