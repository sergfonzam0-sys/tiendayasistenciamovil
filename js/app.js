const CATALOGO_DESVARE = [
  {
    id: 1,
    nombre: "Aceite Full Sintético 4T",
    categoria: "Lubricantes",
    precio: 48000,
    stock: 25,
    imagen: "img/products/aceite.jpg",
    descripcion: "Lubricante de alto rendimiento para motores 4 tiempos. Protección térmica extrema para el clima de Barranquilla.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "10W-40 Sintético (1 Litro) - FZ / MT / R15", precio: 48000 },
      { marca: "Honda", tamano: "10W-30 Semi-sintético (1 Litro) - CB / XR", precio: 42000 },
      { marca: "Bajaj", tamano: "20W-50 Sintético (1.2 Litros) - Pulsar / Boxer", precio: 54000 },
      { marca: "AKT", tamano: "20W-50 Mineral (1 Litro) - NKD / TT / Dynamic", precio: 34000 },
      { marca: "Suzuki", tamano: "10W-40 Sintético (1 Litro) - Gixxer / GN / GSX", precio: 46000 }
    ]
  },
  {
    id: 2,
    nombre: "Asistencia Desvare Express 24/7 (1 Servicio)",
    categoria: "Servicios",
    precio: 35000,
    stock: 99,
    imagen: "img/nacimiento/taller mivil.png",
    descripcion: "Desplazamiento inmediato de técnico certificado hasta tu ubicación en Barranquilla y área metropolitana.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Bajo / Medio Cilindraje (100cc - 250cc)", precio: 35000 },
      { marca: "Honda", tamano: "Bajo / Medio Cilindraje (100cc - 250cc)", precio: 35000 },
      { marca: "Bajaj", tamano: "Bajo / Medio Cilindraje (100cc - 250cc)", precio: 35000 },
      { marca: "AKT", tamano: "Bajo / Medio Cilindraje (100cc - 250cc)", precio: 35000 },
      { marca: "Suzuki", tamano: "Bajo / Medio Cilindraje (100cc - 250cc)", precio: 35000 },
      { marca: "Todas las marcas", tamano: "Alto Cilindraje (+300cc)", precio: 55000 }
    ]
  },
  {
    id: 3,
    nombre: "Kit de Arrastre Reforzado O-Ring",
    categoria: "Repuestos",
    precio: 135000,
    stock: 14,
    imagen: "img/products/kid de arrastre.jpg",
    descripcion: "Piñón delantero, catalina en acero templado y cadena reforzada de alta durabilidad.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Paso 428H - 41T/14T (FZ16 / FZ 2.0)", precio: 135000 },
      { marca: "Yamaha", tamano: "Paso 428H - 48T/14T (XTZ 125 / XTZ 150)", precio: 142000 },
      { marca: "Honda", tamano: "Paso 428H - 43T/15T (CB 160F / XR 150L)", precio: 130000 },
      { marca: "Bajaj", tamano: "Paso 520 - 39T/14T (Pulsar NS 200)", precio: 165000 },
      { marca: "Bajaj", tamano: "Paso 428 - 42T/14T (Boxer CT 100)", precio: 85000 },
      { marca: "AKT", tamano: "Paso 428 - 38T/15T (NKD 125 / SL 125)", precio: 78000 },
      { marca: "Suzuki", tamano: "Paso 428H - 45T/15T (Gixxer 150 / GN 125)", precio: 128000 }
    ]
  },
  {
    id: 4,
    nombre: "Batería Gel 12V Libre Mantenimiento",
    categoria: "Eléctrico",
    precio: 118000,
    stock: 18,
    imagen: "img/products/bateria 12v.jpg",
    descripcion: "Arranque en frío garantizado, sellada de fábrica y resistente a vibraciones.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "12V 5Ah (YTX5L-BS) - FZ / Libero / Crypton", precio: 112000 },
      { marca: "Honda", tamano: "12V 7Ah (YTX7L-BS) - CB 190 / XRE / XR", precio: 125000 },
      { marca: "Bajaj", tamano: "12V 9Ah (YTX9-BS) - Pulsar NS 200 / Dominar", precio: 148000 },
      { marca: "AKT", tamano: "12V 5Ah (12N5-3B) - NKD 125 / Flex", precio: 95000 },
      { marca: "Suzuki", tamano: "12V 7Ah (YTX7A-BS) - Gixxer / Best / Vivax", precio: 118000 }
    ]
  },
  {
    id: 5,
    nombre: "Juego de Pastillas de Freno Cerámicas",
    categoria: "Frenos y Llantas",
    precio: 38000,
    stock: 30,
    imagen: "img/products/juego de pasrtilla.jpg",
    descripcion: "Frenado silencioso y seguro en pavimento seco o mojado sin desgaste prematuro del disco.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Delantera Doble Pistón (FZ / XTZ / R15)", precio: 38000 },
      { marca: "Honda", tamano: "Delantera Nissin (CB 160 / CB 190 / XR)", precio: 40000 },
      { marca: "Bajaj", tamano: "Delantera / Trasera ByBre (Pulsar NS / RS)", precio: 42000 },
      { marca: "AKT", tamano: "Delantera Estándar (NKD 125 / TTR / CR4)", precio: 28000 },
      { marca: "Suzuki", tamano: "Delantera / Trasera (Gixxer 150 / GSX-R)", precio: 39000 }
    ]
  },
  {
    id: 6,
    nombre: "Kit de Despinche Sellomatic + Inflador CO2",
    categoria: "Emergencia",
    precio: 42000,
    stock: 22,
    imagen: "img/products/kit despiche.webp",
    descripcion: "Solución portátil para reparar pinchazos en la vía en menos de 5 minutos sin desmontar la llanta.",
    tieneVariantes: true,
    variantes: [
      { marca: "Universal (Todas las marcas)", tamano: "Kit Básico (5 Mechas + Punzón + Pegante)", precio: 25000 },
      { marca: "Universal (Todas las marcas)", tamano: "Kit Completo (+ 2 Pipetas CO2 + Adaptador)", precio: 42000 }
    ]
  },
  {
    id: 7,
    nombre: "Bujía Iridium IX Alto Desempeño",
    categoria: "Eléctrico",
    precio: 45000,
    stock: 40,
    imagen: "img/products/bujia.jpg",
    descripcion: "Encendido rápido, mejor combustión y ahorro de combustible para motos urbanas y sport.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "CR8EIX / CPR8EAIX-9 (FZ / R15 / MT-03)", precio: 48000 },
      { marca: "Honda", tamano: "CPR8EAIX-9 (CB 160 / CB 190 / XR 150)", precio: 46000 },
      { marca: "Bajaj", tamano: "CR9EIX Central + Lateral (Pulsar NS 200)", precio: 52000 },
      { marca: "AKT", tamano: "D8EAIX Rosca Gruesa (NKD 125 / SL 125)", precio: 42000 },
      { marca: "Suzuki", tamano: "CR8EIX (Gixxer 150 / GN 125)", precio: 45000 }
    ]
  },
  {
    id: 8,
    nombre: "Lubricante de Cadena Teflón Spray",
    categoria: "Lubricantes",
    precio: 29000,
    stock: 35,
    imagen: "img/products/lubricante cadena.jpg",
    descripcion: "Adherencia superior que repele polvo y humedad, alargando la vida útil del kit de arrastre.",
    tieneVariantes: true,
    variantes: [
      { marca: "Universal (Todas las marcas)", tamano: "Presentación 300 ml (Uso Urbano)", precio: 29000 },
      { marca: "Universal (Todas las marcas)", tamano: "Presentación 500 ml (Cadenas O-Ring / X-Ring)", precio: 44000 }
    ]
  },
  {
    id: 9,
    nombre: "Plan Afiliado Desvare Plus (Anual)",
    categoria: "Servicios",
    precio: 89000,
    stock: 50,
    imagen: "img/desvare/logo.jpeg",
    descripcion: "3 asistencias en vía sin costo de desplazamiento, tarifas preferenciales y prioridad 24/7.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Plan Individual (1 Moto registrada)", precio: 89000 },
      { marca: "Honda", tamano: "Plan Individual (1 Moto registrada)", precio: 89000 },
      { marca: "Bajaj", tamano: "Plan Individual (1 Moto registrada)", precio: 89000 },
      { marca: "AKT", tamano: "Plan Individual (1 Moto registrada)", precio: 89000 },
      { marca: "Suzuki", tamano: "Plan Individual (1 Moto registrada)", precio: 89000 },
      { marca: "Multimarca", tamano: "Plan Dúo Familiar (2 Motos)", precio: 149000 }
    ]
  },
  {
    id: 10,
    nombre: "Llanta Sellomatic Alto Agarre",
    categoria: "Frenos y Llantas",
    precio: 215000,
    stock: 9,
    imagen: "img/products/llanta.jpg",
    descripcion: "Labrado deportivo de máximo agarre y evacuación de agua para conducción segura.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "130/70-17 Trasera (FZ16 / FZ 2.0 / R15)", precio: 215000 },
      { marca: "Yamaha", tamano: "100/80-17 Delantera (FZ / R15)", precio: 165000 },
      { marca: "Honda", tamano: "140/70-17 Trasera (CB 190R)", precio: 235000 },
      { marca: "Bajaj", tamano: "130/70-17 Trasera (Pulsar NS 200)", precio: 215000 },
      { marca: "AKT", tamano: "90/90-18 Trasera (NKD 125 / SL 125)", precio: 138000 },
      { marca: "Suzuki", tamano: "140/60-17 Trasera (Gixxer 150 / 250)", precio: 228000 }
    ]
  },
  {
    id: 11,
    nombre: "Guaya de Clutch y Acelerador Reforzada",
    categoria: "Repuestos",
    precio: 24000,
    stock: 28,
    imagen: "img/products/guaya clutch.jpg",
    descripcion: "Cable trenzado en acero inoxidable con prisioneros de emergencia para desvare rápido.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Guaya Clutch Original/Reforzada (FZ / XTZ)", precio: 26000 },
      { marca: "Honda", tamano: "Guaya Clutch (CB 160 / XR 150)", precio: 25000 },
      { marca: "Bajaj", tamano: "Guaya Clutch (Pulsar NS / Boxer CT)", precio: 24000 },
      { marca: "AKT", tamano: "Guaya Clutch + Prisionero (NKD 125 / TTR)", precio: 20000 },
      { marca: "Suzuki", tamano: "Guaya Clutch (Gixxer / GN 125)", precio: 25000 }
    ]
  },
  {
    id: 12,
    nombre: "Mantenimiento Preventivo a Domicilio",
    categoria: "Servicios",
    precio: 75000,
    stock: 20,
    imagen: "img/products/preventivo.jpg",
    descripcion: "Cambio de aceite, tensión y lubricación de cadena, revisión de frenos, luces y batería en tu casa.",
    tieneVariantes: true,
    variantes: [
      { marca: "Yamaha", tamano: "Moto Urbana / Sport (100cc - 250cc)", precio: 75000 },
      { marca: "Honda", tamano: "Moto Urbana / Doble Propósito (100cc - 250cc)", precio: 75000 },
      { marca: "Bajaj", tamano: "Moto Urbana / Sport (100cc - 250cc)", precio: 75000 },
      { marca: "AKT", tamano: "Moto Urbana / Enduro (100cc - 250cc)", precio: 68000 },
      { marca: "Suzuki", tamano: "Moto Urbana / Sport (100cc - 250cc)", precio: 75000 }
    ]
  }
];

const STORAGE_KEY = "desvare_cart_v1";
let currentModalProduct = null;
let currentModalVariant = null;

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function formatCOP(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = totalItems;
  });
}

function showToast(mensaje) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = mensaje;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

/* ==================== MODAL DE SELECCION DE PRODUCTO ==================== */
function openProductModal(productId) {
  const producto = CATALOGO_DESVARE.find(p => p.id === productId);
  if (!producto) return;

  const modal = document.getElementById("product-modal");
  if (!modal) {
    // Fallback si se llama desde otra página sin modal (ej. servicios.html)
    addToCart(productId);
    return;
  }

  currentModalProduct = producto;
  document.getElementById("pmodal-img").src = producto.imagen;
  document.getElementById("pmodal-cat").textContent = producto.categoria;
  document.getElementById("pmodal-title").textContent = producto.nombre;
  document.getElementById("pmodal-desc").textContent = producto.descripcion;

  const qtyInput = document.getElementById("pmodal-cantidad");
  qtyInput.value = 1;
  qtyInput.max = producto.stock;

  const selectMarca = document.getElementById("pmodal-marca");
  selectMarca.innerHTML = "";

  if (producto.variantes && producto.variantes.length > 0) {
    document.getElementById("pmodal-variants-wrap").style.display = "block";
    const marcasUnicas = [...new Set(producto.variantes.map(v => v.marca))];
    marcasUnicas.forEach(marca => {
      const opt = document.createElement("option");
      opt.value = marca;
      opt.textContent = marca;
      selectMarca.appendChild(opt);
    });
    updateProductModalSizes();
  } else {
    document.getElementById("pmodal-variants-wrap").style.display = "none";
    currentModalVariant = null;
    updateProductModalPrice();
  }

  modal.classList.add("open");
}

function updateProductModalSizes() {
  if (!currentModalProduct || !currentModalProduct.variantes) return;
  const marcaSeleccionada = document.getElementById("pmodal-marca").value;
  const selectTamano = document.getElementById("pmodal-tamano");
  selectTamano.innerHTML = "";

  const opciones = currentModalProduct.variantes.filter(v => v.marca === marcaSeleccionada);
  opciones.forEach((v, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${v.tamano} — ${formatCOP(v.precio)}`;
    selectTamano.appendChild(opt);
  });

  updateProductModalPrice();
}

function updateProductModalPrice() {
  if (!currentModalProduct) return;
  const qtyInput = document.getElementById("pmodal-cantidad");
  let cantidad = parseInt(qtyInput.value, 10);
  if (isNaN(cantidad) || cantidad < 1) cantidad = 1;
  if (cantidad > currentModalProduct.stock) {
    cantidad = currentModalProduct.stock;
    qtyInput.value = cantidad;
  }

  let precioUnitario = currentModalProduct.precio;
  if (currentModalProduct.variantes && currentModalProduct.variantes.length > 0) {
    const marcaSeleccionada = document.getElementById("pmodal-marca").value;
    const idxTamano = parseInt(document.getElementById("pmodal-tamano").value, 10) || 0;
    const opciones = currentModalProduct.variantes.filter(v => v.marca === marcaSeleccionada);
    currentModalVariant = opciones[idxTamano] || opciones[0];
    if (currentModalVariant) {
      precioUnitario = currentModalVariant.precio;
    }
  }

  document.getElementById("pmodal-unit-price").textContent = formatCOP(precioUnitario);
  document.getElementById("pmodal-total-price").textContent = formatCOP(precioUnitario * cantidad);
}

function stepModalQty(delta) {
  const qtyInput = document.getElementById("pmodal-cantidad");
  let val = (parseInt(qtyInput.value, 10) || 1) + delta;
  if (val < 1) val = 1;
  if (currentModalProduct && val > currentModalProduct.stock) val = currentModalProduct.stock;
  qtyInput.value = val;
  updateProductModalPrice();
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("open");
}

function confirmAddToCartFromModal() {
  if (!currentModalProduct) return;
  const cantidad = Math.max(1, parseInt(document.getElementById("pmodal-cantidad").value, 10) || 1);

  const marca = currentModalVariant ? currentModalVariant.marca : "Estándar";
  const tamano = currentModalVariant ? currentModalVariant.tamano : "Única";
  const precio = currentModalVariant ? currentModalVariant.precio : currentModalProduct.precio;
  const cartKey = `${currentModalProduct.id}__${marca}__${tamano}`;

  const cart = getCart();
  const existing = cart.find(item => (item.cartKey || String(item.id)) === cartKey);

  if (existing) {
    if (existing.cantidad + cantidad <= currentModalProduct.stock) {
      existing.cantidad += cantidad;
    } else {
      showToast(`Solo hay ${currentModalProduct.stock} unidades disponibles en stock.`);
      return;
    }
  } else {
    cart.push({
      cartKey: cartKey,
      id: currentModalProduct.id,
      nombre: currentModalProduct.nombre,
      marca: marca,
      tamano: tamano,
      precio: precio,
      imagen: currentModalProduct.imagen,
      cantidad: cantidad
    });
  }

  saveCart(cart);
  closeProductModal();
  showToast(`✔ ${cantidad}x "${currentModalProduct.nombre}" (${marca}) agregado al carrito`);
}

function addToCart(productId) {
  const producto = CATALOGO_DESVARE.find(p => p.id === productId);
  if (!producto) return;
  const cart = getCart();
  const cartKey = `${producto.id}__Estándar__Única`;
  const existing = cart.find(item => (item.cartKey || String(item.id)) === cartKey || item.id === productId);
  if (existing) {
    if (existing.cantidad < producto.stock) {
      existing.cantidad += 1;
    } else {
      showToast("Stock máximo alcanzado para este producto.");
      return;
    }
  } else {
    cart.push({
      cartKey: cartKey,
      id: producto.id,
      nombre: producto.nombre,
      marca: "Estándar",
      tamano: "Única",
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }
  saveCart(cart);
  showToast(`✔ "${producto.nombre}" agregado al carrito`);
}

function renderCatalogo(lista) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = `<div class="info-card" style="grid-column:1/-1;text-align:center;">
      <h3>No encontramos productos con ese criterio</h3>
      <p>Intenta con otra palabra clave o selecciona "Todos" en las categorías.</p>
    </div>`;
    return;
  }

  grid.innerHTML = lista.map(p => {
    const minPrecio = (p.variantes && p.variantes.length > 0)
      ? Math.min(...p.variantes.map(v => v.precio))
      : p.precio;
    const labelPrecio = (p.variantes && p.variantes.length > 1)
      ? `Desde ${formatCOP(minPrecio)}`
      : formatCOP(p.precio);

    return `
    <article class="product-card" onclick="openProductModal(${p.id})" style="cursor:pointer;">
      <div class="product-img-wrap">
        <span class="product-category-tag">${p.categoria}</span>
        <span class="product-stock-tag">Disp: ${p.stock}</span>
        <img src="${p.imagen}" alt="${p.nombre}" class="${p.id === 2 ? 'img-cover' : ''}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.nombre}</h3>
        <p class="product-desc">${p.descripcion}</p>
        <div class="product-footer">
          <span class="product-price">${labelPrecio}</span>
          <button type="button" class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openProductModal(${p.id})">Seleccionar</button>
        </div>
      </div>
    </article>
  `;
  }).join("");
}

function initCatalogFilters() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let categoriaActiva = "Todos";
  let textoBusqueda = "";

  const filtrar = () => {
    const filtrados = CATALOGO_DESVARE.filter(p => {
      const matchCat = categoriaActiva === "Todos" || p.categoria === categoriaActiva;
      const matchText = p.nombre.toLowerCase().includes(textoBusqueda) ||
                        p.descripcion.toLowerCase().includes(textoBusqueda);
      return matchCat && matchText;
    });
    renderCatalogo(filtrados);
  };

  renderCatalogo(CATALOGO_DESVARE);

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      textoBusqueda = e.target.value.trim().toLowerCase();
      filtrar();
    });
  }

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      categoriaActiva = btn.dataset.category;
      filtrar();
    });
  });
}

/* ==================== LOGICA DEL CARRITO (carrito.html) ==================== */
function renderCartPage() {
  const listContainer = document.getElementById("cart-items-list");
  if (!listContainer) return;

  const cart = getCart();
  const subtotalEl = document.getElementById("summary-subtotal");
  const ivaEl = document.getElementById("summary-iva");
  const totalEl = document.getElementById("summary-total");
  const checkoutSection = document.getElementById("checkout-form-section");

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="info-card" style="text-align:center; padding:3rem 1.5rem;">
        <h3>Tu carrito de Desvare está vacío</h3>
        <p style="margin-bottom:1.5rem;">Explora nuestros repuestos, lubricantes y bonos de asistencia mecánica móvil en Barranquilla.</p>
        <a href="index.html#catalogo" class="btn btn-primary">Ir al Catálogo de Productos</a>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = "$0";
    if (ivaEl) ivaEl.textContent = "$0";
    if (totalEl) totalEl.textContent = "$0";
    if (checkoutSection) checkoutSection.style.display = "none";
    return;
  }

  if (checkoutSection) checkoutSection.style.display = "block";

  listContainer.innerHTML = cart.map((item, index) => {
    const detalleVariante = (item.marca && item.marca !== "Estándar")
      ? `<div style="font-size:0.84rem; color:var(--text-muted); margin:0.15rem 0;">🏍️ <strong>Marca:</strong> ${item.marca} | <strong>Ref/Tamaño:</strong> ${item.tamano}</div>`
      : "";

    return `
    <div class="cart-item">
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.nombre}</div>
        ${detalleVariante}
        <div class="cart-item-price">${formatCOP(item.precio)} c/u</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQtyByIndex(${index}, -1)">−</button>
        <strong>${item.cantidad}</strong>
        <button class="qty-btn" onclick="changeQtyByIndex(${index}, 1)">+</button>
      </div>
      <div style="font-weight:800; min-width:95px; text-align:right;">
        ${formatCOP(item.precio * item.cantidad)}
      </div>
      <button class="remove-btn" onclick="removeItemByIndex(${index})">Eliminar</button>
    </div>
  `;
  }).join("");

  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const iva = Math.round(subtotal * 0.19);
  const total = subtotal + iva;

  if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
  if (ivaEl) ivaEl.textContent = formatCOP(iva);
  if (totalEl) totalEl.textContent = formatCOP(total);
}

function changeQtyByIndex(idx, delta) {
  const cart = getCart();
  if (idx < 0 || idx >= cart.length) return;
  cart[idx].cantidad += delta;
  if (cart[idx].cantidad <= 0) {
    cart.splice(idx, 1);
  }
  saveCart(cart);
  renderCartPage();
}

function removeItemByIndex(idx) {
  const cart = getCart();
  if (idx < 0 || idx >= cart.length) return;
  cart.splice(idx, 1);
  saveCart(cart);
  renderCartPage();
  showToast("Producto eliminado del carrito.");
}

function clearCart() {
  saveCart([]);
  renderCartPage();
  showToast("Carrito vaciado.");
}

const CORREO_PEDIDOS = "Sergfonzam@hotmail.es";

async function enviarPedidoPorCorreo(datosPedido) {
  const endpoint = `https://formsubmit.co/ajax/${CORREO_PEDIDOS}`;
  const payload = {
    _subject: `Nuevo Pedido Desvare #${datosPedido.ordenId} - ${datosPedido.cliente}`,
    _template: "table",
    _captcha: "false",
    Orden: datosPedido.ordenId,
    Cliente: datosPedido.cliente,
    Telefono_WhatsApp: datosPedido.telefono,
    Correo_Cliente: datosPedido.emailCliente || "No proporcionado",
    Direccion_Ubicacion: datosPedido.direccion,
    Metodo_Pago: datosPedido.metodoPago,
    Productos_Solicitados: datosPedido.detalleTexto,
    Subtotal: datosPedido.subtotalFmt,
    IVA_19: datosPedido.ivaFmt,
    Total_A_Pagar: datosPedido.totalFmt
  };

  try {
    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    return resp.ok && (data.success === "true" || data.success === true);
  } catch (err) {
    console.warn("Error enviando vía FormSubmit:", err);
    return false;
  }
}

function construirEnlaceMailto(datosPedido) {
  const asunto = encodeURIComponent(`Nuevo Pedido Desvare #${datosPedido.ordenId} - ${datosPedido.cliente}`);
  const cuerpo = encodeURIComponent(
    `NUEVO PEDIDO DESVARE\n` +
    `==============================\n` +
    `Orden: #${datosPedido.ordenId}\n` +
    `Cliente: ${datosPedido.cliente}\n` +
    `Teléfono / WhatsApp: ${datosPedido.telefono}\n` +
    `Correo Cliente: ${datosPedido.emailCliente || "No proporcionado"}\n` +
    `Dirección / Ubicación: ${datosPedido.direccion}\n` +
    `Método de Pago: ${datosPedido.metodoPago}\n\n` +
    `DETALLE DEL PEDIDO:\n${datosPedido.detalleTexto}\n\n` +
    `Subtotal: ${datosPedido.subtotalFmt}\n` +
    `IVA (19%): ${datosPedido.ivaFmt}\n` +
    `TOTAL A PAGAR: ${datosPedido.totalFmt}`
  );
  return `mailto:${CORREO_PEDIDOS}?subject=${asunto}&body=${cuerpo}`;
}

function initCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return;

    const nombre = document.getElementById("chk-nombre");
    const telefono = document.getElementById("chk-telefono");
    const emailInput = document.getElementById("chk-email");
    const direccion = document.getElementById("chk-direccion");
    const pago = document.getElementById("chk-pago");

    let valid = true;
    [nombre, telefono, direccion].forEach(input => {
      const err = input.nextElementSibling;
      if (!input.value.trim()) {
        input.classList.add("error");
        if (err) err.classList.add("visible");
        valid = false;
      } else {
        input.classList.remove("error");
        if (err) err.classList.remove("visible");
      }
    });

    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : "Confirmar Pedido";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando pedido al correo...";
    }

    const subtotal = cart.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
    const iva = Math.round(subtotal * 0.19);
    const total = subtotal + iva;
    const ordenId = "DSV-" + Math.floor(100000 + Math.random() * 900000);

    const resumenProductos = cart.map(i =>
      `<li>${i.cantidad}x ${i.nombre}${i.marca && i.marca !== "Estándar" ? ` (${i.marca} - ${i.tamano})` : ""} — ${formatCOP(i.precio * i.cantidad)}</li>`
    ).join("");

    const detalleTexto = cart.map(i =>
      `- ${i.cantidad}x ${i.nombre}${i.marca && i.marca !== "Estándar" ? ` (${i.marca} - ${i.tamano})` : ""}: ${formatCOP(i.precio * i.cantidad)}`
    ).join("\n");

    const datosPedido = {
      ordenId,
      cliente: nombre.value.trim(),
      telefono: telefono.value.trim(),
      emailCliente: emailInput ? emailInput.value.trim() : "",
      direccion: direccion.value.trim(),
      metodoPago: pago.value,
      detalleTexto,
      subtotalFmt: formatCOP(subtotal),
      ivaFmt: formatCOP(iva),
      totalFmt: formatCOP(total)
    };

    const enviadoCorreo = await enviarPedidoPorCorreo(datosPedido);
    const mailtoHref = construirEnlaceMailto(datosPedido);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }

    const estadoCorreoHtml = enviadoCorreo
      ? `<p style="color:var(--success); font-weight:700; margin-bottom:0.85rem;">✉️ Notificación enviada automáticamente a <strong>${CORREO_PEDIDOS}</strong>.</p>`
      : `<p style="color:#b45309; font-weight:600; margin-bottom:0.85rem;">✉️ Pedido listo para <strong>${CORREO_PEDIDOS}</strong>. Si es el primer envío, confirma el correo de activación o usa el botón directo abajo.</p>`;

    const modal = document.getElementById("order-modal");
    const modalBody = document.getElementById("order-modal-body");
    if (modal && modalBody) {
      modalBody.innerHTML = `
        <h2 style="color:var(--success); margin-bottom:0.5rem;">✔ ¡Pedido Confirmado!</h2>
        <p style="margin-bottom:0.5rem;">Orden <strong>#${ordenId}</strong> registrada exitosamente en Desvare Barranquilla.</p>
        ${estadoCorreoHtml}
        <div style="background:#f8fafc; border:1px solid var(--border-color); padding:1rem; border-radius:8px; margin-bottom:1.15rem; font-size:0.92rem;">
          <p><strong>Cliente:</strong> ${datosPedido.cliente}</p>
          <p><strong>Teléfono / WhatsApp:</strong> ${datosPedido.telefono}</p>
          <p><strong>Dirección de entrega / desvare:</strong> ${datosPedido.direccion}</p>
          <p><strong>Método de pago:</strong> ${datosPedido.metodoPago}</p>
          <p style="margin-top:0.5rem;"><strong>Detalle del pedido:</strong></p>
          <ul style="padding-left:1.2rem; list-style:disc; margin-bottom:0.5rem;">${resumenProductos}</ul>
          <p style="margin-top:0.5rem; font-size:1.1rem; color:var(--primary);"><strong>Total Pagado: ${datosPedido.totalFmt}</strong></p>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          <a href="${mailtoHref}" class="btn btn-dark" style="width:100%;">📩 Abrir respaldo en Correo (${CORREO_PEDIDOS})</a>
          <button class="btn btn-primary" style="width:100%;" onclick="closeOrderModal()">Continuar navegando</button>
        </div>
      `;
      modal.classList.add("open");
    }

    saveCart([]);
    renderCartPage();
    form.reset();
  });
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  if (modal) modal.classList.remove("open");
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const nombre = document.getElementById("cnt-nombre").value.trim();
    const email = document.getElementById("cnt-email").value.trim();
    const mensaje = document.getElementById("cnt-mensaje").value.trim();
    if (!nombre || !email || !mensaje) {
      showToast("Por favor completa todos los campos obligatorios.");
      return;
    }
    try {
      await fetch(`https://formsubmit.co/ajax/${CORREO_PEDIDOS}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `Consulta Web Desvare - ${nombre}`,
          _captcha: "false",
          Nombre: nombre,
          Correo_Cliente: email,
          Mensaje: mensaje
        })
      });
    } catch (err) {}
    showToast(`✔ Gracias ${nombre}, tu mensaje fue enviado a ${CORREO_PEDIDOS}.`);
    form.reset();
  });
}

function initCarrusel() {
  const imagenes = document.querySelectorAll(".carrusel-img");
  const dots = document.querySelectorAll(".carrusel-dots .dot");
  if (imagenes.length === 0) return;

  let index = 0;
  let intervalId;

  const mostrarSlide = (nuevoIndex) => {
    imagenes[index].classList.remove("active");
    if (dots[index]) dots[index].classList.remove("active");
    index = (nuevoIndex + imagenes.length) % imagenes.length;
    imagenes[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  };

  const iniciarAuto = () => {
    intervalId = setInterval(() => {
      mostrarSlide(index + 1);
    }, 3500);
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      clearInterval(intervalId);
      mostrarSlide(idx);
      iniciarAuto();
    });
  });

  iniciarAuto();
}

document.addEventListener("DOMContentLoaded", () => {
  initCarrusel();
  updateCartBadge();
  initCatalogFilters();
  renderCartPage();
  initCheckoutForm();
  initContactForm();

  const productModal = document.getElementById("product-modal");
  if (productModal) {
    productModal.addEventListener("click", e => {
      if (e.target === productModal) closeProductModal();
    });
  }

  const hamburger = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => navMenu.classList.toggle("open"));
  }
});
