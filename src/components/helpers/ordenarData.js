const ordenarData = (data, category) => {
    const ordenar = (ordena, segundo ) => {
        if(segundo==="mas"){
            data.productRequests.sort(function(a, b) {
                if (b[ordena] < a[ordena]){
                    return -1
                }if(b[ordena] > a[ordena]) {
                    return 1
                }else {
                    return 0;
                }
            });
            return data
        }
        if(segundo==="menos"){
            data.productRequests.sort(function(a, b) {
                if (b[ordena] > a[ordena]){
                    return -1
                }if(b[ordena] < a[ordena]) {
                    return 1
                }else {
                    return 0;
                }
            });
            console.log(data)
            return data
        }
    }

    //Mas votos
    if(category === "Most Upvotes"){
        ordenar("upvotes", "mas");
    }

    //menos votos
    if(category === "Least Upvotes"){
        ordenar("upvotes", "menos");
    }

    //Mas comentarios
    if(category === "Most Comments"){
        ordenar("comments", "mas");
    }

    //menos comentarios
    if(category === "Least Comments"){
        ordenar("comments", "menos");
    }
  
}

export default ordenarData