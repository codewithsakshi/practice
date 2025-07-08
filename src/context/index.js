import { ThemeProvider } from "./themeContext";
import { CountProvider } from "./countContext";
import { ComposeProvider } from "./composeProvider";

const CombinedProviders = ComposeProvider(
    ThemeProvider,
    CountProvider
);

export const AppProvider = ({children}) => {
   return <CombinedProviders>{children}</CombinedProviders>
}