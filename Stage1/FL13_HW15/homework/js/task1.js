function assign(target, ...source){
    source.forEach(el => {
        for (let key in el){
            if(el.hasOwnProperty(key) ){
                target[key] = el[key];
            }
        }
        let symbolIndexes = Object.getOwnPropertySymbols(el);
        if (symbolIndexes.length>0){
            for(let i=0; i<symbolIndexes.length; i++){
                target[symbolIndexes[i]] = el[symbolIndexes[i]];
            }
        }
    });
    return target;
}


