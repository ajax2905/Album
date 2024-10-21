const album = document.getElementById('album');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Função para adicionar fotos ao álbum
function addFoto(url, title, description) {
    const fotoDiv = document.createElement('div');
    fotoDiv.classList.add('foto');
    fotoDiv.innerHTML = `
        <img src="${url}" alt="${title}">
        <div class="foto-info">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    fotoDiv.addEventListener('click', () => {
        modalImg.src = url;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.classList.remove('hidden');
    });
    album.appendChild(fotoDiv);
}

// Função para fechar o modal
function closeModal() {
    modal.classList.add('hidden');
}

// Exemplos de fotos - Substitua por suas próprias imagens
addFoto('img.jpg', 'Refeitório', 'Hora-Recreio');
addFoto('imagem2.png', 'Título da Foto 2', 'Descrição da Foto 2');
addFoto('imagem3.jpeg', 'Título da Foto 3', 'Descrição da Foto 3');