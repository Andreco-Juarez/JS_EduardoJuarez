class Pokemon {
    constructor(nombre, naturaleza, tipo, vida, ataque, defensa, velocidad, nivel) {
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    subidaNivel() {
        if (this.nivel >= 100) {
            console.log("Nivel maximo alcanzado");
        } else {
            this.nivel++;
            if (this.naturaleza == 'Audaz') {
                this.ataque += 4;
                console.log(
                    "Subio de nivel a nivel: "+this.nivel+" y aumento ataque en: 4"
                );
            }
            if (this.naturaleza == 'Osada') {
                this.defensa += 4;
                console.log(
                    "Subio de nivel a nivel: "+this.nivel+" y aumento defensa en: 4"
                );
            }
            if (this.naturaleza == 'Cauta') {
                this.vida += 4;
                console.log(
                    "Subio de nivel a nivel: "+this.nivel+" y aumento vida en: 4"
                );
            }
            if (this.naturaleza == 'Alegre') {
                this.velocidad += 4;
                console.log(
                    "Subio de nivel a nivel: "+this.nivel+" y aumento velocidad en: 4"
                );
            }
        }
    }

    presentarse() {
        let frase = "Hola me llamo " + this.nombre + " soy de tipo " + this.tipo + " y estoy a nivel " + this.nivel;
        console.log(frase);
    }

    sumestats()
    {
        let sum = this.vida+this.ataque+this.defensa+this.velocidad;
        console.log(
            "la suma de todas las estadisticas es: " + sum
        );
    }

    avgstats()
    {
        let sum = this.vida+this.ataque+this.defensa+this.velocidad;
        let avg = sum/4;
        console.log(
            "el promedio de todas las estadisticas es: " + avg
        );
    }


}

const PK1 = new Pokemon('OMANYTE', 'Audaz', 'Roca Agua', 165, 255, 200, 200, 100);
const PK2 = new Pokemon('Pidgeot', 'Osada', 'Volador', 315, 312, 311, 254, 78);
const PK3 = new Pokemon('Zapdos', 'Cauta', 'Electrico Volador', 417, 288, 257, 337, 95);
const PK4 = new Pokemon('Nidoking', 'Alegre', 'Tierra Veneno', 287, 398, 256, 278, 86);
const PK5 = new Pokemon('Lapras', 'Osada', 'Agua Hielo', 378, 485, 378, 204, 85);
