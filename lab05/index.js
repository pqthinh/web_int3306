var data = []

var getData = ()=> {
    fetch('./data.json')
        .then(function(res){
            return res.json();
        })
        .then(dataP=> {
            data =  dataP.data
            // console.log(data);
            return data
        })
        .catch(err => {
            console.log(err);
        });
}

getData()

function dislayDataToTable() {
    tbody =  document.getElementById("dataUser")
    // tbody.removeChild(tbody.childNodes);
    tbody.innerHTML = ""
    data.forEach(rowD=> {
        var row  = document.createElement('tr')
        var innerRow = `
            <td><input type="checkbox" onclick="avoid(this.parentNode.parentNode)"/></td>
            <td>${rowD.name}</td>
            <td>${rowD.date}</td>
            <td>${rowD.gender}</td>
        `
        row.innerHTML = innerRow

        // row.addEventListener("click",avoid(row)); 
        row.setAttribute('onclick', 'avoid(this)')

        tbody.appendChild(row)
    })
    
}

// dislayDataToTable()
