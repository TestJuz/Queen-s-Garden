function slugify(text) {
  return text.toLowerCase()
    .normalize('NFD')                 // Elimina acentos
    .replace(/[\u0300-\u036f]/g, '')  // Elimina marcas diacríticas
    .replace(/[^a-z0-9 ]/g, '')       // Elimina caracteres no alfanuméricos
    .replace(/\s+/g, '-')             // Reemplaza espacios por guiones
    .trim();
}

document.addEventListener('DOMContentLoaded', () => {
  const posts = [
    {
      title: "Mis sueños y metas",
      image: "../img/Gato.png",
      tag: "Flores"
    },
    {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
        {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
        {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
        {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
    {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
        {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
        {
      title: "Cómo crear un arreglo floral natural",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tag: "Flores"
    },
    // podés agregar más...
  ];

  const container = document.getElementById('blog-posts');

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card-med';

    // Generar ruta amigable
    const path = `paginas/${slugify(post.title)}.html`;

    // Hace que todo el card sea clickeable
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = path;
    });

    card.innerHTML = `
      <div class="card-content">
        <div class="card-image">
          <img src="${post.image}" alt="${post.title}" />
        </div>
        <div class="card-text">
          <h3>${post.title}</h3>
          <p><span>📌</span> ${post.tag}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
