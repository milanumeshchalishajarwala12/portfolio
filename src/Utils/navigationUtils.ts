import { NavigationMenu } from "../Enums";

export const navigationMenuOptions = [
  NavigationMenu.HOME,
  NavigationMenu.ABOUT,
  NavigationMenu.BLOG,
];

export const translateNavigationOptionToUrlExtension = (option) => {
  switch (option) {
    case NavigationMenu.HOME:
      return "/";
    case NavigationMenu.ABOUT:
      return "/about";
    case NavigationMenu.BLOG:
      return "/blog";
    default:
      return "/";
  }
};
