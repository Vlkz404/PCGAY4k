// Dados dos produtos
const products = {
    main: [
        {
            name: "AMD Ryzen 9 9950X3D",
            price: "± R$ 5.000",
            description: "Processador topo de linha com tecnologia 3D V-Cache",
            link: "https://www.kabum.com.br/produto/708039/processador-amd-ryzen-9-9950x3d-4-4-ghz-max-boos-clock-ate-5-5-ghz-cache-144mb-16-nucleos-threads-32-am5-100-100000719wof?gad_campaignid=22429436063",
            icon: "fas fa-microchip"
        },
        {
            name: "RTX 5090 ASUS ROG Astral",
            price: "± R$ 20.000",
            description: "Placa de vídeo flagship da nova geração",
            link: "https://www.terabyteshop.com.br/produto/35092/placa-de-video-palit-nvidia-geforce-rtx-5090-gamerock-32gb-gddr7-dlss-ray-tracing-ne75090019r5-gb2020g?gad_campaignid=22863459972",
            icon: "fas fa-gamepad"
        },
        {
            name: "ASUS ROG Strix X870E-E Gaming WiFi",
            price: "R$ 4.000 - R$ 5.000",
            description: "Placa mãe premium com chipset X870E",
            link: "https://www.kabum.com.br/produto/626283/placa-mae-asus-rog-strix-x870e-e-gaming-wifi-7-amd-am5-ddr5-wifi-90mb1ib0-m0eay0?gad_campaignid=22429436060",
            icon: "fas fa-microchip"
        },
        {
            name: "ASUS ROG Thor 1600T 1600W",
            price: "R$ 5.000 - R$ 7.000",
            description: "Fonte 80 Plus Titanium modular",
            link: "https://www.kabum.com.br/produto/546610/fonte-asus-rog-thor-1600t-1600w-80-plus-titanium-modular-pfc-ativo-sem-cabo-preto-90ye00k0-b0ba00?gad_campaignid=21423803016",
            icon: "fas fa-bolt"
        }
    ],
    storage: [
        {
            name: "Kingston Fury Renegade G5 4TB (Gen5)",
            price: "SSD Gen5 - Preço sob consulta",
            description: "2 unidades - Armazenamento de alta velocidade",
            link: "https://www.terabyteshop.com.br/produto/36535/ssd-kingston-fury-renegade-4tb-g5-pcie-m2-nvme-2280-leitura-14800mbs-e-gravacao-14000mbs-sfyr2s4t0?gad_campaignid=16136149390",
            icon: "fas fa-hdd"
        },
        {
            name: "Kingston KC3000 4TB (Gen4)",
            price: "SSD Gen4 - Preço sob consulta",
            description: "2 unidades - Armazenamento secundário",
            link: "https://www.kabum.com.br/produto/272354/ssd-kingston-kc3000-4tb-m-2-2280-pcie-4-0-x4-nvme-leitura-7000-mb-s-gravacao-7000-mb-s-preto-skc3000d-4096g?gad_campaignid=22429436066",
            icon: "fas fa-hdd"
        },
        {
            name: "G.Skill Trident Z5 Royal Neo RGB 64GB",
            price: "R$ 5.000 - R$ 6.000",
            description: "DDR5 6000MHz CL26 EXPO AMD (2x32GB)",
            link: "https://www.kabum.com.br/produto/885018/memoria-ddr5-expo-amd-64gb-6000mhz-cl26-g-skill-trident-z5-royal-neo-rgb-2x32gb-f5-6000j2636h32gx2-tr5ns",
            icon: "fas fa-memory"
        }
    ],
    aesthetics: [
        {
            name: "Lian Li O11 Vision Full Tower",
            price: "R$ 1.000 - R$ 1.200",
            description: "Gabinete full tower com 3 lados em vidro",
            link: "https://www.kabum.com.br/produto/518762/gabinete-gamer-lian-li-o11-vision-full-tower-atx-3-lados-em-vidro-temperado-sem-fans-preto-o11vx-black?gad_campaignid=22446425993",
            icon: "fas fa-desktop"
        },
        {
            name: "TRYX PANORAMA SE 360 ARGB",
            price: "± R$ 3.000",
            description: "Water Cooler 360mm com display",
            link: "https://pt.aliexpress.com/item/1005007997698181.html",
            icon: "fas fa-temperature-low"
        },
        {
            name: "Pasta Térmica TG-30 20g",
            price: "R$ 200 - R$ 300",
            description: "Pasta térmica profissional - Pote 20g",
            link: "https://pt.aliexpress.com/item/1005005973043435.html",
            icon: "fas fa-vial"
        }
    ],
    rgb: [
        {
            name: "Jungle Leopard Interstellar V4 3in1",
            price: "R$ 1.300 - R$ 1.500",
            description: "3 packs de 3 ventoinhas cada",
            link: "https://pt.aliexpress.com/item/1005009806949119.html",
            icon: "fas fa-fan"
        },
        {
            name: "Lian-Li Strimer Wireless GPU 2x8-PIN",
            price: "Kit completo ± R$ 1.000",
            description: "Extensores RGB wireless para GPU",
            link: "https://pt.aliexpress.com/item/1005007927907008.html",
            icon: "fas fa-plug"
        },
        {
            name: "Lian-Li Strimer Wireless 24-PIN",
            price: "Incluído no kit",
            description: "Extensor RGB para alimentação 24-PIN",
            link: "https://pt.aliexpress.com/item/1005007950681297.html",
            icon: "fas fa-plug"
        },
        {
            name: "Lian-Li UNI HUB SL-INFINITY",
            price: "± R$ 300",
            description: "Controladora RGB L-Connect 3",
            link: "https://pt.aliexpress.com/item/1005007927907008.html",
            icon: "fas fa-sliders-h"
        },
        {
            name: "Lian-Li 8.8\" Universal Screen",
            price: "± R$ 1.000",
            description: "Tela IPS LCD 1920x480 para monitoramento",
            link: "https://pt.aliexpress.com/item/1005009969863362.html",
            icon: "fas fa-tv"
        },
        {
            name: "Lian-Li Vertical GPU Kit",
            price: "± R$ 400",
            description: "Suporte vertical universal 4 slots",
            link: "https://pt.aliexpress.com/item/1005005480626325.html",
            icon: "fas fa-expand-arrows-alt"
        }
    ]
};

// Função para criar cards de produtos
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-header">
                <i class="${product.icon} product-icon"></i>
                <h3 class="product-name">${product.name}</h3>
            </div>
            <div class="product-price">${product.price}</div>
            <p class="product-description">${product.description}</p>
            <a href="${product.link}" target="_blank" class="product-link">
                <i class="fas fa-shopping-cart"></i>
                Ver Produto
            </a>
        </div>
    `;
}

// Função para renderizar produtos
function renderProducts() {
    // Configuração Principal
    const mainContainer = document.getElementById('main-config');
    products.main.forEach(product => {
        mainContainer.innerHTML += createProductCard(product);
    });

    // Armazenamento & Memória
    const storageContainer = document.getElementById('storage-config');
    products.storage.forEach(product => {
        storageContainer.innerHTML += createProductCard(product);
    });

    // Estética & Refrigeração
    const aestheticsContainer = document.getElementById('aesthetics-config');
    products.aesthetics.forEach(product => {
        aestheticsContainer.innerHTML += createProductCard(product);
    });

    // Acessórios RGB
    const rgbContainer = document.getElementById('rgb-config');
    products.rgb.forEach(product => {
        rgbContainer.innerHTML += createProductCard(product);
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Fechar modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar ao clicar fora da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Efeitos de scroll suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Efeito de digitação no título
function initTypewriter() {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar após um breve delay
    setTimeout(typeWriter, 1000);
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initModal();
    initSmoothScroll();
    initTypewriter();
    
    // Efeito de parallax suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.header');
        parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
    });
});

// Adicionar efeito de confetti no clique do preço total
document.querySelector('.total-price').addEventListener('click', function() {
    // Simular efeito de confetti mudando cores rapidamente
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd700'];
    let i = 0;
    const interval = setInterval(() => {
        this.style.borderColor = colors[i];
        this.style.background = `rgba(${parseInt(colors[i].slice(1,3),16)}, ${parseInt(colors[i].slice(3,5),16)}, ${parseInt(colors[i].slice(5,7),16)}, 0.2)`;
        i = (i + 1) % colors.length;
    }, 100);
    
    setTimeout(() => {
        clearInterval(interval);
        this.style.borderColor = '#4ecdc4';
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    }, 1000);
});