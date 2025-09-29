export function baseOptions() {
    return {
        nav: {
            title: <></>,
            mode: "top",
            transparentMode: "top",
        },
        links: [
            {
                text: "Thème",
                url: "/theme",
                secondary: true,
            },
            {
                text: "ForumActif",
                url: "/forumactif",
            },
            {
                text: "Plugins",
                url: "/plugins",
            },
            {
                text: "Tutoriaux",
                url: "/tutoriaux",
            },
            {
                text: "Ressources",
                url: "/ressources",
            },
        ],
    };
}
