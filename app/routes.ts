// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/onboard/:id", "routes/onboard.tsx"),
    layout("./layouts/dashboardLayout.tsx", [
        ...prefix("fans", [
            // index("routes/fansExplore.tsx"),
            route("/explore", "routes/fansExplore.tsx"),
            route("/profile", "routes/fansProfile.tsx"),
            route("/artistprofile", "routes/fansArtistProfile.tsx"),
        ]),
        route("/artist", "./routes/artist.tsx"),
        route("/admin", "./routes/admin.tsx"),
    ]),
    // route("/artist", "routes/artist.tsx"),
    // route("/admin", "routes/admin.tsx"),
] satisfies RouteConfig;