import { defineConfig } from "@/types/config";

export default defineConfig({
  manifest: {
    id: "/",
    name: "T-RUN",
    short_name: "T-RUN",
    description:
      "Discover urban trails, trail running techniques, route guides and reflections from T-RUN.",
    dir: "auto",
    lang: "en",
    background_color: "#1E3B2F",
    theme_color: "#1E3B2F",
    display: "standalone",
    orientation: "natural",
    scope: "/",
    start_url: "/",
    prefer_related_applications: false,
  },

  pwa: {
    logs: true,
  },

  oneSignal: {
    enabled: false,
    appId: "",
    allowLocalhostAsSecureOrigin: true,
  },

  origin: "https://www.truntrails.com",
});
