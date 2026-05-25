# 🌾 Cunicultura Inteligente: Proyección Ganadera con Fibonacci

¡Bienvenido a **Cunicultura Inteligente**! Esta es una aplicación web interactiva diseñada para el sector de la ganadería cunícula (crianza de conejos), que utiliza modelado matemático para proyectar el crecimiento de la población animal mes a mes.

---

## 🚀 Enlaces del Proyecto
* **Sitio Web Publicado:** [👉 CLIC AQUÍ PARA VER EN VIVO](https://tu-usuario.github.io/tu-repositorio)
* **Repositorio de Código:** [📂 Ver en GitHub](https://github.com/tu-usuario/tu-repositorio)

---

## 📝 Descripción del Problema Real
En las granjas de conejos, una gestión eficiente del espacio, las jaulas y el alimento depende directamente de anticipar el tamaño de la población. Debido a la alta tasa de reproducción de esta especie, los productores suelen tener problemas para predecir cuántos animales tendrán a mediano plazo.

Este proyecto resuelve esa necesidad permitiendo al ganadero ingresar su población base actual y simular el crecimiento biológico idealizado de sus camadas a lo largo del tiempo.

---

## 🧮 El Algoritmo (Sucesión de Fibonacci)
El crecimiento de los conejos sirvió históricamente de inspiración a Leonardo de Pisa para crear la famosa Sucesión de Fibonacci. El modelo asume que:
1. Una pareja de conejos tarda un mes en madurar fértilmente.
2. A partir del segundo mes, cada pareja engendra una nueva pareja cada mes.

Para calcular la población de forma óptima sin saturar la memoria del navegador, implementamos un algoritmo iterativo que calcula el crecimiento mes a mes usando la fórmula matemática $F_n = F_{n-1} + F_{n-2}$ mediante tres variables mutables simples:
* `a`: Población de hace dos meses.
* `b`: Población del mes anterior.
* `c`: Suma de las dos anteriores (Población actual).

---

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura semántica de la página de inicio y el formulario de captura.
* **CSS3:** Diseño responsivo adaptado a dispositivos móviles con una estética moderna de *Liquid Glass* (Glassmorphism).
* **JavaScript (ES6):** Manipulación dinámica del DOM usando `document.getElementById()` y procesamiento del bucle lógico para las proyecciones.

---

## 👤 Autor
* **Pablo Kevin Inti Quilla Apaza** - Desarrollo Completo, Lógica y Estilos, haciendo uso de herramientas de inteligencia artificial.