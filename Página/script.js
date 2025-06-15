/// Datos de alimentos
const foodData = {
    cereales: {
        title: "Cereales y Legumbres",
        recommendations: [
            "Arroz integral",
            "Avena",
            "Quinoa",
            "Lentejas",
            "Garbanzos",
            "Porotos",
            "Pan integral",
            "Pasta integral"
        ],
        science: "Los cereales y legumbres son fuentes principales de carbohidratos complejos, fibra dietética, proteínas vegetales, vitaminas del complejo B y minerales como hierro, zinc y magnesio. Proporcionan energía sostenida y contribuyen a la salud digestiva.",
        benefits: [
            "Aportan energía de liberación lenta",
            "Rico en fibra que mejora la digestión",
            "Fuente de proteínas vegetales",
            "Contienen vitaminas del complejo B",
            "Ayudan a controlar el colesterol",
            "Proporcionan sensación de saciedad"
        ],
        portion: "6-11 porciones diarias. 1 porción = 1 rebanada de pan, 1/2 taza de cereales cocidos, 1/3 taza de legumbres cocidas."
    },
    verduras: {
        title: "Verduras y Frutas",
        recommendations: [
            "Espinaca y acelga",
            "Brócoli y coliflor",
            "Zanahoria y calabaza",
            "Tomate y pimiento",
            "Manzana y pera",
            "Naranja y mandarina",
            "Banana y uva",
            "Frutillas y arándanos"
        ],
        science: "Las frutas y verduras son fuentes excepcionales de vitaminas A, C, E, K, folato, potasio, antioxidantes y fitoquímicos. Estos nutrientes son esenciales para el sistema inmunológico, la salud cardiovascular y la prevención de enfermedades crónicas.",
        benefits: [
            "Alto contenido en vitaminas y minerales",
            "Ricos en antioxidantes naturales",
            "Fibra que mejora la digestión",
            "Bajo en calorías y grasas",
            "Ayudan a prevenir enfermedades",
            "Hidratan el organismo"
        ],
        portion: "5-9 porciones diarias. 1 porción = 1 fruta mediana, 1 taza de verduras crudas, 1/2 taza de verduras cocidas."
    },
    lacteos: {
        title: "Lácteos",
        recommendations: [
            "Leche descremada o semi",
            "Yogur natural",
            "Queso fresco",
            "Ricota",
            "Queso untable bajo en grasa",
            "Leche en polvo fortificada",
            "Yogur con probióticos",
            "Quesos duros con moderación"
        ],
        science: "Los lácteos son la principal fuente dietética de calcio, también aportan proteínas de alto valor biológico, fósforo, vitamina D, riboflavina y vitamina B12. Son fundamentales para la salud ósea y dental, especialmente durante el crecimiento y la vejez.",
        benefits: [
            "Excelente fuente de calcio",
            "Proteínas de alta calidad",
            "Fortalecen huesos y dientes",
            "Contienen probióticos beneficiosos",
            "Aportan vitamina D",
            "Ayudan al desarrollo muscular"
        ],
        portion: "2-3 porciones diarias. 1 porción = 1 taza de leche, 1 yogur, 30g de queso duro, 1/2 taza de ricota."
    },
    carnes: {
        title: "Carnes y Huevos",
        recommendations: [
            "Carne vacuna magra",
            "Pollo sin piel",
            "Pescado fresco",
            "Huevos",
            "Cerdo magro",
            "Mariscos",
            "Hígado (ocasional)",
            "Embutidos magros (con moderación)"
        ],
        science: "Las carnes y huevos proporcionan proteínas completas con todos los aminoácidos esenciales, hierro hemo de fácil absorción, zinc, vitaminas B12, B6, niacina y selenio. Son fundamentales para el crecimiento, reparación de tejidos y función inmunológica.",
        benefits: [
            "Proteínas completas de alta calidad",
            "Hierro de fácil absorción",
            "Zinc para el sistema inmune",
            "Vitamina B12 esencial",
            "Ayudan al desarrollo muscular",
            "Aportan aminoácidos esenciales"
        ],
        portion: "2-3 porciones diarias. 1 porción = 100g de carne cocida, 1 huevo, 150g de pescado."
    },
    aceites: {
        title: "Aceites y Grasas",
        recommendations: [
            "Aceite de oliva extra virgen",
            "Aceite de girasol",
            "Aceite de canola",
            "Frutos secos",
            "Semillas de girasol",
            "Palta",
            "Aceitunas",
            "Aceite de maíz"
        ],
        science: "Los aceites y grasas saludables proporcionan ácidos grasos esenciales omega-3 y omega-6, vitamina E y facilitan la absorción de vitaminas liposolubles (A, D, E, K). Son necesarios para la salud cardiovascular y la función cerebral.",
        benefits: [
            "Ácidos grasos esenciales",
            "Vitamina E antioxidante",
            "Mejoran absorción de vitaminas",
            "Protegen el corazón",
            "Necesarios para el cerebro",
            "Aportan energía concentrada"
        ],
        portion: "3-5 porciones diarias. 1 porción = 1 cucharada de aceite, 1/4 de palta, 1 puñado de frutos secos."
    }
};

// Navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
    // Navegación principal
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los links y secciones
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Agregar clase active al link clickeado
            this.classList.add('active');
            
            // Mostrar la sección correspondiente
            const targetSection = this.getAttribute('data-section');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Funcionalidad del círculo de alimentos
    const foodSlices = document.querySelectorAll('.slice');
    const foodInfo = document.getElementById('food-info');
    const foodTitle = document.getElementById('food-title');
    const foodRecommendations = document.getElementById('food-recommendations');
    const foodScience = document.getElementById('food-science');
    const foodBenefits = document.getElementById('food-benefits');
    const foodPortion = document.getElementById('food-portion');
    const closeBtn = document.querySelector('.close-btn');

    foodSlices.forEach(slice => {
        slice.addEventListener('click', function() {
            const group = this.getAttribute('data-group');
            const data = foodData[group];
            
            if (data) {
                // Llenar la información
                foodTitle.textContent = data.title;
                
                foodRecommendations.innerHTML = '';
                data.recommendations.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    foodRecommendations.appendChild(li);
                });
                
                foodScience.textContent = data.science;
                
                foodBenefits.innerHTML = '';
                data.benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    foodBenefits.appendChild(li);
                });
                
                foodPortion.textContent = data.portion;
                
                // Mostrar la información
                foodInfo.classList.remove('hidden');
                foodInfo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Cerrar información de alimentos
    closeBtn.addEventListener('click', function() {
        foodInfo.classList.add('hidden');
    });

    // Herramientas
    const toolBtns = document.querySelectorAll('.tool-btn');
    const toolContent = document.getElementById('tool-content');

    toolBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            showTool(tool);
        });
    });

    // FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todas las preguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abrir la pregunta clickeada si no estaba activa
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Función para mostrar herramientas
function showTool(toolType) {
    const toolContent = document.getElementById('tool-content');
    let content = '';

    switch(toolType) {
        case 'calc':
            content = `
                <h3>Calculadora Nutricional</h3>
                <div class="calc-form">
                    <input type="number" id="weight" placeholder="Peso (kg)" min="30" max="200">
                    <input type="number" id="height" placeholder="Altura (cm)" min="100" max="250">
                    <input type="number" id="age" placeholder="Edad (años)" min="1" max="120">
                    <select id="gender">
                        <option value="">Seleccionar sexo</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                    </select>
                    <select id="activity">
                        <option value="">Nivel de actividad</option>
                        <option value="1.2">Sedentario</option>
                        <option value="1.375">Ligeramente activo</option>
                        <option value="1.55">Moderadamente activo</option>
                        <option value="1.725">Muy activo</option>
                        <option value="1.9">Extremadamente activo</option>
                    </select>
                    <button type="button" onclick="calculateNutrition()">Calcular</button>
                </div>
                <div id="calc-results" class="calc-result" style="display: none;"></div>
            `;
            break;
            
        case 'exercise':
            content = `
                <h3>Ejercicios Recomendados</h3>
                <div class="exercise-grid">
                    <div class="exercise-card">
                        <h4>🚶‍♀️ Caminata</h4>
                        <p><strong>Duración:</strong> 30-45 minutos</p>
                        <p><strong>Frecuencia:</strong> Diaria</p>
                        <p><strong>Beneficios:</strong> Mejora cardiovascular, bajo impacto</p>
                    </div>
                    <div class="exercise-card">
                        <h4>🏃‍♂️ Trote suave</h4>
                        <p><strong>Duración:</strong> 20-30 minutos</p>
                        <p><strong>Frecuencia:</strong> 3-4 veces por semana</p>
                        <p><strong>Beneficios:</strong> Quema calorías, fortalece corazón</p>
                    </div>
                    <div class="exercise-card">
                        <h4>🏋️‍♀️ Ejercicios de fuerza</h4>
                        <p><strong>Duración:</strong> 45-60 minutos</p>
                        <p><strong>Frecuencia:</strong> 2-3 veces por semana</p>
                        <p><strong>Beneficios:</strong> Fortalece músculos, aumenta metabolismo</p>
                    </div>
                    <div class="exercise-card">
                        <h4>🧘‍♀️ Yoga/Estiramiento</h4>
                        <p><strong>Duración:</strong> 20-30 minutos</p>
                        <p><strong>Frecuencia:</strong> Diaria</p>
                        <p><strong>Beneficios:</strong> Flexibilidad, relajación, equilibrio</p>
                    </div>
                    <div class="exercise-card">
                        <h4>🚴‍♂️ Ciclismo</h4>
                        <p><strong>Duración:</strong> 30-60 minutos</p>
                        <p><strong>Frecuencia:</strong> 3-4 veces por semana</p>
                        <p><strong>Beneficios:</strong> Bajo impacto, fortalece piernas</p>
                    </div>
                    <div class="exercise-card">
                        <h4>🏊‍♀️ Natación</h4>
                        <p><strong>Duración:</strong> 30-45 minutos</p>
                        <p><strong>Frecuencia:</strong> 2-3 veces por semana</p>
                        <p><strong>Beneficios:</strong> Ejercicio completo, ideal para articulaciones</p>
                    </div>
                </div>
                <div style="margin-top: 2rem; padding: 1.5rem; background: #e8f5e8; border-radius: 10px;">
                    <h4>💡 Recomendaciones Generales:</h4>
                    <ul>
                        <li>Comenzar gradualmente si eres sedentario</li>
                        <li>Combinar ejercicio cardiovascular con fortalecimiento</li>
                        <li>Mantenerse hidratado durante el ejercicio</li>
                        <li>Consultar con un profesional antes de comenzar</li>
                        <li>Escuchar a tu cuerpo y descansar cuando sea necesario</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'query':
            content = `
                <h3>¿Para qué es bueno...?</h3>
                <p>Envía tu consulta sobre los beneficios de alimentos específicos y te responderemos basándonos en las guías alimentarias.</p>
                <form class="query-form" onsubmit="submitQuery(event)">
                    <input type="text" id="user-name" placeholder="Tu nombre" required>
                    <input type="email" id="user-email" placeholder="Tu email" required>
                    <input type="text" id="food-query" placeholder="¿Sobre qué alimento quieres consultar?" required>
                    <textarea id="query-detail" placeholder="Describe tu consulta en detalle (ej: ¿Para qué es buena la quinoa? ¿Qué beneficios tiene el brócoli?)" required></textarea>
                    <button type="submit">Enviar Consulta</button>
                </form>
                <div id="query-response" style="display: none; margin-top: 2rem; padding: 1.5rem; background: #e8f5e8; border-radius: 10px;">
                    <h4>Respuesta:</h4>
                    <p id="response-text"></p>
                </div>
            `;
            break;
            
        case 'map':
            content = `
                <h3>Mapa Nutricional</h3>
                <p>Encuentra profesionales de la salud, hospitales y tiendas de alimentos saludables cerca tuyo.</p>
                <div class="map-filters">
                    <button class="filter-btn active" data-filter="all">Todos</button>
                    <button class="filter-btn" data-filter="hospitals">Hospitales</button>
                    <button class="filter-btn" data-filter="professionals">Profesionales</button>
                    <button class="filter-btn" data-filter="stores">Tiendas Saludables</button>
                </div>
                <div class="map-container">
                    <div style="text-align: center;">
                        <p>🗺️ Mapa Interactivo</p>
                        <p>Funcionalidad de mapa en desarrollo</p>
                        <p>Próximamente podrás:</p>
                        <ul style="text-align: left; display: inline-block;">
                            <li>📍 Ver ubicaciones cercanas</li>
                            <li>🏥 Encontrar centros de salud</li>
                            <li>👨‍⚕️ Localizar nutricionistas</li>
                            <li>🛒 Descubrir tiendas saludables</li>
                        </ul>
                    </div>
                </div>
                <div style="margin-top: 2rem;">
                    <h4>Contactos Útiles:</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                        <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #4a7c59;">
                            <h5>🏥 Hospital Garrahan</h5>
                            <p>📞 (011) 4122-6000</p>
                            <p>📍 Combate de los Pozos 1881, CABA</p>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #4a7c59;">
                            <h5>🏥 Hospital Italiano</h5>
                            <p>📞 (011) 4959-0200</p>
                            <p>📍 Juan D. Perón 4190, CABA</p>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #4a7c59;">
                            <h5>👨‍⚕️ Colegio de Nutricionistas</h5>
                            <p>📞 (011) 4326-4382</p>
                            <p>📍 Av. Belgrano 950, CABA</p>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    toolContent.innerHTML = content;
    toolContent.classList.remove('hidden');
    toolContent.scrollIntoView({ behavior: 'smooth' });
    
    // Agregar event listeners para filtros del mapa si es necesario
    if (toolType === 'map') {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// Función para calcular nutrición
function calculateNutrition() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
    
    if (!weight || !height || !age || !gender || !activity) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    // Calcular IMC
    const bmi = weight / ((height / 100) ** 2);
    
    // Calcular TMB (Tasa Metabólica Basal)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    // Calcular calorías diarias necesarias
    const dailyCalories = Math.round(bmr * activity);
    
    // Determinar clasificación IMC
    let bmiCategory;
    let bmiColor;
    if (bmi < 18.5) {
        bmiCategory = 'Bajo peso';
        bmiColor = '#3498db';
    } else if (bmi < 25) {
        bmiCategory = 'Peso normal';
        bmiColor = '#27ae60';
    } else if (bmi < 30) {
        bmiCategory = 'Sobrepeso';
        bmiColor = '#f39c12';
    } else {
        bmiCategory = 'Obesidad';
        bmiColor = '#e74c3c';
    }
    
    const resultsDiv = document.getElementById('calc-results');
    resultsDiv.innerHTML = `
        <h4>Tus Resultados</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div style="background: white; padding: 1rem; border-radius: 8px; text-align: center;">
                <h5>IMC</h5>
                <p style="font-size: 2rem; font-weight: bold; color: ${bmiColor};">${bmi.toFixed(1)}</p>
                <p style="color: ${bmiColor};">${bmiCategory}</p>
            </div>
            <div style="background: white; padding: 1rem; border-radius: 8px; text-align: center;">
                <h5>Calorías Diarias</h5>
                <p style="font-size: 2rem; font-weight: bold; color: #4a7c59;">${dailyCalories}</p>
                <p>kcal/día</p>
            </div>
            <div style="background: white; padding: 1rem; border-radius: 8px; text-align: center;">
                <h5>TMB</h5>
                <p style="font-size: 2rem; font-weight: bold; color: #6c5ce7;">${Math.round(bmr)}</p>
                <p>kcal/día</p>
            </div>
        </div>
        <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 8px;">
            <h5>Recomendaciones:</h5>
            <ul style="margin-top: 0.5rem;">
                ${bmi < 18.5 ? '<li>Considera aumentar tu ingesta calórica de forma saludable</li>' : ''}
                ${bmi >= 25 ? '<li>Considera reducir tu ingesta calórica y aumentar la actividad física</li>' : ''}
                ${bmi >= 18.5 && bmi < 25 ? '<li>Mantén tu peso actual con una alimentación equilibrada</li>' : ''}
                <li>Consulta con un profesional de la salud para un plan personalizado</li>
                <li>Combina una alimentación balanceada con ejercicio regular</li>
            </ul>
        </div>
    `;
    resultsDiv.style.display = 'block';
}

// Función para enviar consulta
function submitQuery(event) {
    event.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const foodQuery = document.getElementById('food-query').value;
    const queryDetail = document.getElementById('query-detail').value;
    
    // Simulación de respuesta basada en palabras clave
    const responses = {
        'quinoa': 'La quinoa es un pseudocereal rico en proteínas completas, fibra, hierro y magnesio. Es ideal para vegetarianos, ayuda a controlar el peso y proporciona energía sostenida.',
        'brócoli': 'El brócoli es rico en vitamina C, K, folato y antioxidantes. Ayuda a fortalecer el sistema inmune, protege contra el cáncer y mejora la salud ósea.',
        'palta': 'La palta aporta grasas saludables omega-3, vitamina E, K y folato. Es buena para el corazón, ayuda a absorber vitaminas y mantiene la piel saludable.',
        'espinaca': 'La espinaca es rica en hierro, ácido fólico, vitamina K y antioxidantes. Fortalece los huesos, mejora la salud ocular y previene la anemia.',
        'salmón': 'El salmón aporta omega-3, proteínas de alta calidad y vitamina D. Es excelente para el corazón, cerebro y desarrollo del sistema nervioso.',
        'default': 'Gracias por tu consulta. Nuestro equipo de nutricionistas revisará tu pregunta y te responderá en las próximas 24-48 horas al email proporcionado.'
    };
    
    let response = responses.default;
    const queryLower = foodQuery.toLowerCase();
    
    for (let key in responses) {
        if (queryLower.includes(key)) {
            response = responses[key];
            break;
        }
    }
    
    const responseDiv = document.getElementById('query-response');
    const responseText = document.getElementById('response-text');
    
    responseText.innerHTML = `
        <strong>Hola ${name},</strong><br><br>
        ${response}<br><br>
        <em>Esta respuesta está basada en las Guías Alimentarias para la Población Argentina. Para consultas específicas sobre tu situación de salud, te recomendamos consultar con un profesional.</em>
    `;
    
    responseDiv.style.display = 'block';
    
    // Limpiar formulario
    document.querySelector('.query-form').reset();
}