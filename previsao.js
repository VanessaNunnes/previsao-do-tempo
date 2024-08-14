
function consultaPrevisao(idCidade) {
    let xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {

        if (xhr2.readyState === XMLHttpRequest.DONE
            && xhr2.status == 200) {
            let text = (xhr2.responseText);
            console.log(text);

            parser2 = new DOMParser();
            xmlDoc2 = parser2.parseFromString(text, "text/xml");

            var d = new Date();
            var datetime = 
                 d.getDate() + "/"
                + (d.getMonth()+1)  + "/" 
                + d.getFullYear() + " às "  
                + d.getHours() + ":"  
                + d.getMinutes();
            document.getElementById("Atualizacao").innerHTML = "Última atualização em " + datetime;


            document.getElementById("data1").innerHTML = xmlDoc2.getElementsByTagName("dia")[0].childNodes[0].nodeValue
            document.getElementById("maxima1").innerHTML = xmlDoc2.getElementsByTagName("maxima")[0].childNodes[0].nodeValue + "°"
            document.getElementById("minima1").innerHTML = xmlDoc2.getElementsByTagName("minima")[0].childNodes[0].nodeValue + "°"
            document.getElementById("imagem1").src = "img/" +
                xmlDoc2.getElementsByTagName("tempo")[0].childNodes[0].nodeValue + ".png";

            document.getElementById("data2").innerHTML = xmlDoc2.getElementsByTagName("dia")[1].childNodes[0].nodeValue
            document.getElementById("maxima2").innerHTML = xmlDoc2.getElementsByTagName("maxima")[1].childNodes[0].nodeValue + "°"
            document.getElementById("minima2").innerHTML = xmlDoc2.getElementsByTagName("minima")[1].childNodes[0].nodeValue + "°"
            document.getElementById("imagem2").src = "img/" +
                xmlDoc2.getElementsByTagName("tempo")[1].childNodes[0].nodeValue + ".png";

            document.getElementById("data3").innerHTML = xmlDoc2.getElementsByTagName("dia")[2].childNodes[0].nodeValue
            document.getElementById("maxima3").innerHTML = xmlDoc2.getElementsByTagName("maxima")[2].childNodes[0].nodeValue + "°"
            document.getElementById("minima3").innerHTML = xmlDoc2.getElementsByTagName("minima")[2].childNodes[0].nodeValue + "°"
            document.getElementById("imagem3").src = "img/" +
                xmlDoc2.getElementsByTagName("tempo")[2].childNodes[0].nodeValue + ".png";

            document.getElementById("data4").innerHTML = xmlDoc2.getElementsByTagName("dia")[3].childNodes[0].nodeValue
            document.getElementById("maxima4").innerHTML = xmlDoc2.getElementsByTagName("maxima")[3].childNodes[0].nodeValue + "°"
            document.getElementById("minima4").innerHTML = xmlDoc2.getElementsByTagName("minima")[3].childNodes[0].nodeValue + "°"
            document.getElementById("imagem4").src = "img/" +
                xmlDoc2.getElementsByTagName("tempo")[3].childNodes[0].nodeValue + ".png";

        }

    }
    let url2 = `http://servicos.cptec.inpe.br/XML/cidade/${idCidade}/previsao.xml`;
    xhr2.open('GET', url2, true);
    xhr2.send();
    console.log(url2);
}

document.getElementById("buttonPesquisarPrevisao").onclick = function () {
    console.log("Pesquisar cidade: ")
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE
            && xhr.status == 200) {
            let text = (xhr.responseText);
            console.log(text);

            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml");
            document.getElementById("Localidade").innerHTML = "Previsão do tempo para " +
                xmlDoc.getElementsByTagName("nome")[0].childNodes[0].nodeValue + ", " +
                xmlDoc.getElementsByTagName("uf")[0].childNodes[0].nodeValue;

            var idCidade = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;

            consultaPrevisao(idCidade);
        }

    }

    localidade = document.getElementById("inputLocalidade").value
    let url = `http://servicos.cptec.inpe.br/XML/listaCidades?city=${localidade}`
    xhr.open('GET', url);
    xhr.send();
    console.log(url);
}