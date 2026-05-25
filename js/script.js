// Esperamos a que el HTML termine de cargar para evitar errores con los IDs
document.addEventListener("DOMContentLoaded", function() {
    
    // Capturamos el botón de ejecución usando getElementById
    let boton = document.getElementById("btnCalcular");

    // Asignamos el evento click al botón
    boton.addEventListener("click", function() {
        
        // 1. Obtención de datos mediante document.getElementById()
        let cantidad = parseInt(document.getElementById("cantidadInicial").value);
        let meses = parseInt(document.getElementById("mesesProyeccion").value);
        let contenedorResultado = document.getElementById("resultadoArea");

        // Validamos que el usuario haya ingresado números coherentes
        if (isNaN(cantidad) || isNaN(meses) || cantidad <= 0 || meses <= 0) {
            contenedorResultado.innerHTML = "<p style='color: red;'>⚠️ Por favor, ingresa valores válidos mayores a cero.</p>";
            return;
        }

        // 2. Algoritmo de Fibonacci optimizado con variables simples (Sin vectores)
        let a = 0;
        let b = cantidad; // Escalamos la base con los animales actuales del ganadero
        let c;
        
        // Empezamos a construir el diseño estructurado que se mostrará en la página
        let tablaHTML = `
            <p>Tomando como base <strong>${cantidad}</strong> animales, tu población estimada crecerá así:</p>
            <table class="tabla-resultados" style="width:100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="background-color: #f2f2f2;">
                        <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Mes</th>
                        <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Población Estimada</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Iteración mes a mes utilizando el patrón matemático
        for (let i = 1; i <= meses; i++) {
            tablaHTML += `
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">Mes ${i}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${b} animales</td>
                </tr>
            `;
            
            // Avanzamos en la serie de Fibonacci clásica: c = a + b
            c = a + b;
            a = b;
            b = c;
        }

        tablaHTML += `
                </tbody>
            </table>
            <div style="margin-top: 15px; padding: 10px; background-color: #e6f7ff; border-left: 5px solid #1890ff;">
                <strong>💡 Conclusión Matemática:</strong> Al cabo de ${meses} meses, habrás alcanzado un pico reproductivo idealizado gracias al comportamiento exponencial biológico de la especie. ¡Planifica tus jaulas y alimento con tiempo!
            </div>
        `;

        // 3. Mostrar los resultados directamente en la página web
        contenedorResultado.innerHTML = tablaHTML;
    });
});