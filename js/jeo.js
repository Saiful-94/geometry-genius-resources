document.getElementById("btn-first").addEventListener("click", function(){
    const firstElement = document.getElementById("firstName").innerText;
    const firstCardArea = document.getElementById("firstCardArea").innerText;
    console.log(firstElement,firstCardArea);

   const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${1} </td>
     <td>${firstElement} </td>
     <td>${firstCardArea} </td>
    `;
    container.appendChild(tr);
})
