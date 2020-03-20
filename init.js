window.onload = () => {
    debugger;
    // render initial state

    let ulEl = document.getElementById('bands')
    ulEl.innerHTML = bands.map(band => `<li>${band}</li>`).join('');

    // log initial state
    log.push({
        initialState: "Init has been called and UI updated to initial state"

    });
}
