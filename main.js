const file = document.querySelector("#file")
const frame = document.querySelector("#frame")
var a = 0
var fh = frame.clientHeight,
fw = frame.clientWidth
file.addEventListener("change", function() {
    const r = new FileReader()
    r.addEventListener("load", ()=> {
        const img = document.createElement("img")
        img.src = r.result
        var s = 'x'+a++
        img.id = s
        frame.appendChild(img)
        styling(s)
    })
    r.readAsDataURL(this.files[0])
    file.value = null
})

function styling(id) {
    const e = document.getElementById(id)
    var eh = e.clientHeight,
    ew = e.clientWidth
    e.style.marginLeft = (fw-ew)/2.0 + "px"
    e.style.marginRight = (fw-ew)/2.0 + "px"
    e.style.marginTop = (fh-eh)/2.0 + "px"
    e.style.marginBottom = (fh-eh)/2.0 + "px"

}
