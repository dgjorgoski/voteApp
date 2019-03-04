function pratiGlas(brPoliticar) {
    axios.post("/vote", {
        politicarId: brPoliticar,
        dodaj: true,
    });
}