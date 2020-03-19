// Here where the logic behind sorting will be coded

const sortedBands = [];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

log.push({
    soringState: "Sorting step has been done !"
});
