
/*document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');*/
    document.querySelector('#bands').innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');