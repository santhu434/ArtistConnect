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
            route("/home", "routes/fans/Home.tsx"),
            route("/shop_merch", "routes/fans/ShopMerch.tsx"),
        ]),
        route("/artist", "./routes/artist.tsx"),
        route("/artist/feeds", "./routes/artist/Feeds.tsx"),
        route("/artist/contents", "./routes/artist/Content.tsx"),
        route("/artist/events", "./routes/artist/Events.tsx"),
        route("/admin", "./routes/admin.tsx"),
        route("/admin/content-management", "./components/admin/Content_Management.tsx"),
        route("/admin/artist-accounts", "./components/admin/Artist_Accounts.tsx"),
        route("/admin/follower-accounts", "./components/admin/Fans_Accounts.tsx"),
        route("/admin/event-management", "./components/admin/Event_Management.tsx"),
        route("/admin/support-tickets", "./components/admin/Support_Tickets.tsx"),
        route("/admin/activity-log", "./components/admin/ActivityLog.tsx"),
        route("/admin/revenue-management", "./components/admin/RevenueManagement.tsx"),
    ]),
    // route("/artist", "routes/artist.tsx"),
    // route("/admin", "routes/admin.tsx"),
] satisfies RouteConfig;