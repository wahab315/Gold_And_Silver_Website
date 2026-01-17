import ROUTES from "../constants/routes";
export const headerData = {
  navigation: [
    {
      label: "SERVICES",
      to: ROUTES.SERVICES,
    },
    // {
    //   label: "COLLECTION",
    //   to: ROUTES.COLLECTIONS,
    // },
    // {
    //   label: "SELL/PAWN",
    //   to: ROUTES.SELL_PAWN,
    // },
    {
      label: "ABOUT",
      to: ROUTES.ABOUT_US,
    },
    {
      label: "CONTACT",
      to: ROUTES.CONTACT_US,
    },
    {
      label: "TERMS OF SERVICE",
      to: ROUTES.TERMS_OF_SERVICE,
    },
    {
      label: "PRIVACY POLICY",
      to: ROUTES.PRIVACY_POLICY,
    },
  ],
  authentication: [
    {
      label: "SIGN IN",
      to: ROUTES.HOME,
    },
    {
      label: "SIGN UP",
      to: ROUTES.HOME,
    },
  ],
};
