const reduceTheData = (data) => {

    const agesByGender = {
        male: {
            "age9": 0,
            "age8": 0,
            "age7": 0,
            "age6": 0,
            "age5": 0,
            "age4": 0,
            "age3": 0,
            "age2": 0,
            "age1": 0,
            "age0": 0,
        }, female: {
            "age9": 0,
            "age8": 0,
            "age7": 0,
            "age6": 0,
            "age5": 0,
            "age4": 0,
            "age3": 0,
            "age2": 0,
            "age1": 0,
            "age0": 0,
        }
    };
    console.log(agesByGender);

    const result = data.reduce((result, { age, gender }) => {
        const ageInFunc = Math.floor(age / 10);
        result[gender]["age"+ageInFunc]++;
        return result;
    }, agesByGender)

    console.log(result);
    
    return result;
}










// TODO: future referance 
    // const male = {};
    // const female = {};
    // const result = { male , female };

    // TODO: future referance 
    // data.map(({ age, gender }) => {
    //     const ageInFunc = Math.floor(age / 10);
    //     if (result[gender][ageInFunc] == undefined) {
    //         result[gender][ageInFunc] = 1;
    //     }
    //     else {
    //         result[gender][ageInFunc]++;
    //     }
    // });