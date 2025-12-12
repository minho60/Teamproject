const container = document.getElementById("card-ui");

card.forEach(data => {
    const el = document.createElement("div");

    // 값이 있을 때만 HTML 생성
    const spanHtml = data.span && data.span.trim() !== "" 
        ? `<span>${data.span}</span>`
        : "";

    const delHtml = data.del && data.del.trim() !== ""
        ? `<del>${data.del}</del>`
        : "";

    el.innerHTML = `
        <a href="#">
            <div class="card-img">
                <img src="${data.img}">
            </div>

            <div class="info-box">
                <div class="card-tit">
                    <p>${data.title}</p>
                </div>

                <div class="card-price">
                    ${spanHtml}
                    <strong>${data.price}</strong>
                    ${delHtml}
                </div>

                <div class="weight">${data.weight}</div>
            </div>
        </a>
    `;

    container.appendChild(el);
});

const container2 = document.getElementById("card-ui2");

card2.forEach(data2 => {
    const el = document.createElement("div");

    // 값이 있을 때만 HTML 생성
    const spanHtml = data2.span && data2.span.trim() !== "" 
        ? `<span>${data2.span}</span>`
        : "";

    const delHtml = data2.del && data2.del.trim() !== ""
        ? `<del>${data2.del}</del>`
        : "";

    el.innerHTML = `
        <a href="#">
            <div class="card-img">
                <img src="${data2.img}">
            </div>

            <div class="info-box">
                <div class="card-tit">
                    <p>${data2.title}</p>
                </div>

                <div class="card-price">
                    ${spanHtml}
                    <strong>${data2.price}</strong>
                    ${delHtml}
                </div>

                <div class="weight">${data2.weight}</div>
            </div>
        </a>
    `;

    container2.appendChild(el);
});