import Dashboard from "./views/Dashboard.js";

const router = async () => {
    const routes = [
        //whenever the user goes to the specific path "/" the specific view function is run
        { path: '/', view: () => console.log('Viewing Dashboard')}
        { path: '/posts', view: () => console.log('Viewing Posts')}
        { path: '/settings', view: () => console.log('Viewing Settings')}
    ];


    //test each route for potential match, creating the isMatch prop

    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find( potentialMatch => potentialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    console.log(match.route.view);

};

window.addEventListener("popstate", router);

//creating a delegated event listener, any link with [data-link]

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})