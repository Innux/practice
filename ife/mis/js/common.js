const render = (html,container) => {
    if (!container) return false;
    container.innerHTML = html;
}

export {
    render
}