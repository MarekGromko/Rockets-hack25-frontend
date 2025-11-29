import "i18next";

import { defaultNs, defaultRessource } from "./i18n";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: defaultNs;
    // custom resources type
    resources: defaultRessource
    // other
  }
}
