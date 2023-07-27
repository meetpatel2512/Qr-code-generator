const image = document.querySelector("img");
const text = document.querySelector("#text");
const generate = document.querySelector("#generate");
const download = document.querySelector("#download");
const option = document.querySelector("select");

text.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generate.click();
    }
});
generate.addEventListener('click', code = () => {
    if (option.value == "instgram") {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"instagram.com/" + text.value}`
        image.src = url;
        document.querySelector('.qrcode').style.backgroundColor = "white"
        document.querySelector('.qrcode h1').style.color = "black"
    }
    else if (option.value === "github") {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"github.com/" + text.value}`
        image.src = url;
        document.querySelector('.qrcode').style.backgroundColor = "white"
        document.querySelector('.qrcode h1').style.color = "black"

    }
    else if (option.value === "linkedin") {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"linkedin.com/" + text.value}`
        image.src = url;
        document.querySelector('.qrcode').style.backgroundColor = "white"
        document.querySelector('.qrcode h1').style.color = "black"

    }
    else if (option.value === "twitter") {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"twitter.com/@" + text.value}`
        image.src = url;
        document.querySelector('.qrcode').style.backgroundColor = "white"
        document.querySelector('.qrcode h1').style.color = "black"

    }
    else if (option.value === "threads") {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"threads.com/@" + text.value}`
        image.src = url;
        document.querySelector('.qrcode').style.backgroundColor = "white"
        document.querySelector('.qrcode h1').style.color = "black"

    }
    else {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`
        image.src = url;

    }

})
download.addEventListener('click', async () => {
    code()
    const reponse = await fetch(image.src);
    const file = await reponse.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    if (option.value === "instgram") { link.download = `instgram ${text.value}.jpg`; }
    else if (option.value === "github") { link.download = `github ${text.value}.jpg`; }
    else if (option.value === "linkedin") { link.download = `linkedin ${text.value}.jpg`; }
    else if (option.value === "twitter") { link.download = `twitter ${text.value}.jpg`; }
    else if (option.value === "thread") { link.download = `threads ${text.value}.jpg`; }
    link.click();

});