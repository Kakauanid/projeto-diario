document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formEntrada");
    const emocaoSelect = document.getElementById("emocao");
    const textoInput = document.getElementById("texto");
    const ctx = document.getElementById("graficoEmocoes").getContext("2d");

    const dados = {
        labels: [],
        datasets: [{
            label: 'Humor ao longo dos dias',
            data: [],
            borderColor: 'rgba(83, 104, 255, 1)',
            backgroundColor: 'rgba(83, 104, 255, 0.2)',
            tension: 0.3,
        }]
    };

    const grafico = new Chart(ctx, {
        type: 'line',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: "Nível emocional (simulado)" }
                }
            }
        }
    });

    const mapaEmocao = {
        "Feliz": 4,
        "Calmo": 3,
        "Ansioso": 2,
        "Triste": 1
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emocao = emocaoSelect.value;
        const texto = textoInput.value;

        if (!emocao || !texto) return;

        const dataHoje = new Date().toLocaleDateString('pt-BR');
        dados.labels.push(dataHoje);
        dados.datasets[0].data.push(mapaEmocao[emocao]);

        grafico.update();

        // Limpa o formulário
        emocaoSelect.value = '';
        textoInput.value = '';
    });
});
