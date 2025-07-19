import { createBaseThemeOptions, createUnifiedTheme, palettes } from "@backstage/theme";

export const rockstageTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette : {
            ...palettes.dark,
        }
    }),
})