import { NavigationMenu, NavigationSettings } from "../Enums";

export const navigationMenuOptions = [
  NavigationMenu.HOME,
  NavigationMenu.ABOUT,
  NavigationMenu.COLLECTIONS,
];

export const navigationSettingsOptions = [NavigationSettings.LOGOUT];

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
