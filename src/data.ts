export type MenuCategory = "Coffee" | "All-day" | "Savoury" | "Sweet";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Goat's Jaggery Cappuccino",
    description: "Double espresso, silky milk and deep jaggery caramel.",
    price: 240,
    category: "Coffee",
    badge: "House favourite",
    image:
      "https://images.unsplash.com/photo-1516213335993-159eca2981af?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Piccolo Latte",
    description: "A short, full-bodied milk coffee with our signature roast.",
    price: 190,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1579341560277-4dfaddaf6e98?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Avocado Sourdough",
    description: "Smashed avocado, cherry tomatoes and herbs on toasted sourdough.",
    price: 360,
    category: "All-day",
    badge: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1583527825770-8bd0bfb1f1c1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Korean Cream Cheese Bun",
    description: "A soft baked bun, garlic butter and a creamy cheese centre.",
    price: 260,
    category: "Savoury",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1621523132966-19f711d565d1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pesto Cottage Cheese Melt",
    description: "Herby pesto, cottage cheese and greens on country bread.",
    price: 340,
    category: "Savoury",
    image:
      "https://images.unsplash.com/photo-1642694325435-b80cfd186cc5?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Slow Morning French Toast",
    description: "Brioche, seasonal fruit, whipped cream and warm maple.",
    price: 390,
    category: "All-day",
    image:
      "https://images.unsplash.com/photo-1513435268174-838c8948bdfc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Goat's Chocolate Cake",
    description: "A dark, fudgy slice finished with cocoa and sea salt.",
    price: 280,
    category: "Sweet",
    badge: "Cafe classic",
    image:
      "https://images.unsplash.com/photo-1619108977254-314da85774bd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Coffee & Croissant",
    description: "A flaky butter croissant paired with a coffee of your choice.",
    price: 320,
    category: "Sweet",
    image:
      "https://images.unsplash.com/photo-1670710028442-06a2df4bdf85?auto=format&fit=crop&w=900&q=85",
  },
];

export const reviews = [
  {
    quote:
      "The coffee has real character, the food is comforting, and somehow it still feels calm even on a busy evening.",
    name: "Meghana",
    detail: "Local guide · 18 reviews",
  },
  {
    quote:
      "A cosy neighbourhood spot with the kindest team. The jaggery cappuccino and Korean bun are a must.",
    name: "Sangamesh",
    detail: "Regular guest",
  },
  {
    quote:
      "Came for a quick coffee, stayed for brunch. Thoughtful flavours, generous portions and a beautiful space.",
    name: "Aparna",
    detail: "Bengaluru",
  },
];
