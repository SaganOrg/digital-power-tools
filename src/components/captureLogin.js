// Function to get URL parameters
export function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to extract all user data from URL
export function getUserDataFromUrl() {
    return {
        email: getUrlParameter('email'),
        username: getUrlParameter('username'),
        member_number: getUrlParameter('member_number'),
        created_by_email: getUrlParameter('created_by_email'),
        magic_link: getUrlParameter('magic_link'),
        groups: getUrlParameter('groups')
    };
}
