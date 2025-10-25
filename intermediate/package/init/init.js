

const OrinoEnvironment = {
    isLocalhost: () => window.location.host.includes('localhost'),
};

function InitOrinoJS() {
    // URL FIX
    if (window.location.pathname.startsWith('/public/'))
        window.history.pushState({}, '', '../');
}

export { OrinoEnvironment, InitOrinoJS };