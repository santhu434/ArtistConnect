// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // route("/onboard", "routes/onboard.tsx"),
    route("/onboard/:id", "routes/onboard.tsx"),
] satisfies RouteConfig;