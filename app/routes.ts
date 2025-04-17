// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/onboard/:id", "routes/onboard.tsx"),
    route("/fans/explore", "routes/fansExplore.tsx"),
    route("/fans/profile", "routes/fansProfile.tsx"),
    route("/fans/artistprofile", "routes/fansArtistProfile.tsx"),
    route("/artist", "routes/artist.tsx"),
    route("/admin", "routes/admin.tsx"),
] satisfies RouteConfig;