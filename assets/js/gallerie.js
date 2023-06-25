const imgList = [
    "allumage d'une montgolfieres",
    "gros plan d'une montgolfieres au sol",
    "interieur d'un ballon",
    "interieur d'un ballon 2",
    "MidiLibre1",
    "MidiLibre2",
    "MidiLibre3",
    "montgolfiere au dessus d'un pont",
    "montgolfiere au sol",
    "montgolfiere au sol 2",
    "montgolfiere en vol",
    "montgolfiere qui s'envol",
    "multiple montgolfieres au sol",
    "photo_decollage",
    "plusieurs montgolfieres en vol",
    "vue sur la region avec des ballons"
]

const gallery = document.querySelector("#gallery")
const fragment = document.createDocumentFragment()
for (const image of imgList) {
    const container = document.createElement("div")
    const underscored_title = image.replaceAll(" ", "_")
    const link = "../assets/images/media/" + underscored_title + ".webp"
    container.classList.add("column", "is-one-quarter-desktop", 'is-half-tablet')
    container.dataset.title = link
    container.dataset.alt = image
    container.innerHTML = `<div class="card">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img src="${link}" alt="${image}">
                                    </figure>
                                </div>
                            </div>`
    container.addEventListener("click", (e) => {
        document.getElementById("modal1").classList.add("is-active");
        const imgContainer = document.getElementById("modal-img")
        imgContainer.src = link
        imgContainer.alt = image
    })
    fragment.appendChild(container)
}
gallery.appendChild(fragment)

// JavaScript code to open and close the modal

// Function to open the modal
function openModal(e) {
    // Add is-active class on the modal

}

// Add event listeners to close the modal
// whenever user click outside modal
document.querySelectorAll(
    '.modal-background, .modal-close,.modal-card-head .delete, .modal-card-foot .button'
).forEach(($el) => {
    const $modal = $el.closest('.modal');

    $el.addEventListener('click', () => {
        // Remove the is-active class from the modal
        $modal.classList.remove("is-active");
    });
});