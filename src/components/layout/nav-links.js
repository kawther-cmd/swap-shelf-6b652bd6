/**
 * Single list of page links shared by the Navbar and the footer.
 * Add a page here once its route file exists in src/routes.
 */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/login", label: "Login" },
];

/** Highlighted call-to-action link shown after NAV_LINKS. */
export const REGISTER_LINK = { to: "/register", label: "Register" };

/** Every page link, in navbar order. */
export const ALL_PAGE_LINKS = [...NAV_LINKS, REGISTER_LINK];
