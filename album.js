const images = [
    'imagens/20240926_115543.jpg',
    'https://via.placeholder.com/200/33FF57/FFFFFF?text=Foto+2',
    'https://via.placeholder.com/200/3357FF/FFFFFF?text=Foto+3',
    'https://via.placeholder.com/200/FFFF33/FFFFFF?text=Foto+4',
    'https://via.placeholder.com/200/FF33A6/FFFFFF?text=Foto+5'
];

const gallery = document.getElementById('gallery');

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagem';
    gallery.appendChild(img);
});
