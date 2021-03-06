const movie = [{
        "id": 1,
        "name": "Aladin",
        "image": "images/aladin.jpg",
        "precio": "48000",
        "categoria": "Aventura",
        "descripcion": "Cuando un enemigo inesperado amenaza la seguridad del planeta y de sus habitantes, Nick Fury (Samuel L. Jackson), director de SHIELD, monta un dispositivo con todos los hombres capaces de preservar a la humanidad del caos. El enemigo es tan poderoso, que necesita que todos los superhéroes luchen juntos y formen un equipo compacto. Ellos serán: el Capitán América (Chris Evans), Thor (Chris Hemsworth), Iron Man (Robert Downey Jr.), Hulk (Mark Ruffalo), Ojo de Halcón (Jeremy Renner) y la Viuda Negra (Scarlett Johansson)."
    },
    {
        "id": 2,
        "name": "Ant-Man",
        "image": "images/ant-man.jpg",
        "precio": "52000",
        "categoria": "Superheroes",
        "descripcion": "Armado con la sorprendente habilidad de encogerse a escala pero incrementando la fuerza, el maestro ladrón Scott Lang debe abrazar a su héroe interior y ayudar a su mentor, el Doctor Henry Pym, a proteger el secreto que hay detrás del espectacular traje de Ant-Man de una nueva generación de amenazas crecientes. Contra lo que parecen obstáculos insalvables, Pym y Lang deben planear y ejecutar un atraco que salvará el mundo."
    },
    {
        "id": 3,
        "name": "Batman Returns",
        "image": "images/Batman-return.jpg",
        "precio": "55000",
        "categoria": "Superheroes",
        "descripcion": "La ciudad de Gotham celebra unas tranquilas navidades sin el Jocker. Sin embargo, esa tranquilidad no es definitiva. Desde las entrañas de la ciudad emergen dos peculiares y peligrosos criminales. Por un lado, Max Shreck (Christopher Walken, 'A late quartet'), es un corrupto y adinerado empresario que está fabricando una máquina con la que pretende absorber la energía de la ciudad. Por otro, Pingüino es un hombre desfigurado que ha sido criado en las cloacas y que pretende convertirse en el Alcalde para hacerse con el control de la Gotham."
    },
    {
        "id": 4,
        "name": "Geminis",
        "image": "images/geminis.jpg",
        "precio": "60000",
        "categoria": "Aventura",
        "descripcion": "Henry Brogan (Will Smith) ha sido toda su vida un asesino a sueldo del gobierno estadounidense. Tras largos años en el servicio, ha descubierto los secretos más oscuros del sistema. Con la idea de abandonar este empleo que le ha arrebatado todo lo que podría hacerle feliz, Brogan se encuentra perseguido por un joven y misterioso agente, que parece ser capaz de predecir todos y cada uno de sus movimientos. Decidido a detener a este joven que pretende cazarle sin descanso, Brogan descubrirá que es un clon de él mismo 30 años más joven. Comenzará así una lucha contra sí mismo."
    },
    {
        "id": 5,
        "name": "Gerra Mundial Z",
        "image": "images/guerra-mundial-z.jpg",
        "precio": "30000",
        "categoria": "Terror",
        "descripcion": "En un día normal y corriente, Gerry Lane y su familia ven interrumpido su tranquilo trayecto en coche por un atasco de tráfico. Como antiguo investigador de Naciones Unidas, Lane se da cuenta de que no es un atasco de tráfico normal. Mientras los helicópteros de la policía rondan por los aires y policías en moto derrapan salvajemente por los suelos, las ciudad se va sumiendo en el caos. Algo está haciendo que multitud de personas se ataquen salvajemente entre sí: un virus letal que se transmite mediante un simple mordisco, convirtiendo a seres humanos sanos en algo irreconocible."
    },
    {
        "id": 6,
        "name": "Iron-Man 3",
        "image": "images/iron-man3.jpg",
        "precio": "80000",
        "categoria": "Superheroes",
        "descripcion": "El descarado pero brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere. Durante su lucha, Stark conocerá la respuesta a la pregunta que le atormenta en secreto: ¿El hábito hace al monje o es al contrario?."
    },
    {
        "id": 7,
        "name": "Pecados capitales",
        "image": "images/los7pecadoscapitales.jpg",
        "precio": "65000",
        "categoria": "Animada",
        "descripcion": "Los 7 Pecados Capitales viajan a una tierra remota en busca del ingrediente fantasma “Pez de Cielo”. Meliodas y Hawk terminan en palacio celestial que está sobre las nubes, donde los habitantes tienen alas. Meliodas es confundido con un chico que cometió un crimen y es llevado a la cárcel. Mientras, los guerreros están preparando la defensa contra una criatura feroz, Indura, que despierta cada 3.000 años. Pero los 6 Caballeros de Negro, un ejército del clan de los demonios, llegan y le quitan el sello a la bestia antes de que los guerreros del palacio celestial puedan prepararse."
    },
    {
        "id": 8,
        "name": "Pesadillas",
        "image": "images/pesadillas.gif",
        "precio": "70000",
        "categoria": "Terror",
        "descripcion": "Molesto por su mudanza a un pueblo pequeño desde la gran ciudad, el adolescente Zach Cooper (Dylan Minnette) encuentra el lado positivo a este cambio al conocer a Hannah (Odeya Rush), la guapa chica que vive en la casa de al lado, y hace amistad rápidamente con Champ (Ryan Lee). Pero todo lado positivo tiene sus sombras, y las de Zach aparecen al enterarse de que el misterioso padre de Hannah es R.L. Stine (Jack Black), el autor de la exitosa serie de libros Pesadillas. Al tiempo que Zach va conociendo más y más a sus extraños vecinos."
    },
    {
        "id": 9,
        "name": "Harry Potter",
        "image": "images/Harry_Potter.png",
        "precio": "50000",
        "categoria": "Aventura",
        "descripcion": "Igual que en las dos primeras partes de la serie, Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia. Tras haber cumplido los trece años, solo y lejos de sus amigos, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a borrar a Harry del mapa."
    },
    {
        "id": 10,
        "name": "The Avengers",
        "image": "images/The_Avengers_Poster.png",
        "precio": "38000",
        "categoria": "Superheroes",
        "descripcion": "El equipo de superhéroes más espectacular de todos los tiempos con iconos como Anthony Stark / Iron Man, El Increíble Hulk, Thor, Steven Rogers / Capitán América, Clinton Barton / Hawkeye y Natalia Romanoff / Black Widow. Cuando un enemigo inesperado amenaza con poner en peligro la seguridad mundial, Nicholas Fury, Director de la agencia internacional para el mantenimiento de la paz, conocida con el nombre de S.H.I.E.L.D., necesita encontrar urgentemente un equipo que salve al mundo del mayor de los desastres. Así empieza una búsqueda por todo el mundo para reclutar personal."
    },
    {
        "id": 11,
        "name": "Thor Ragnarok",
        "image": "images/thor-ragnarok.png",
        "precio": "55000",
        "categoria": "Superheroes",
        "descripcion": "En 'Thor: Ragnarok' de Marvel Studios, Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!"
    },
    {
        "id": 12,
        "name": "Civil War",
        "image": "images/civi-war.jpg",
        "precio": "68400",
        "categoria": "Superheroes",
        "descripcion": "Civil War de Marvel empieza donde lo dejó Vengadores: La Era de Ultrón ya que Steve Rogers lidera el nuevo equipo de los Vengadores en su incesante tarea de proteger a la humanidad. Después de que otro incidente internacional en el que se ven envueltos los Vengadores produzca daños colaterales, la presión política obliga a poner en marcha un sistema para depurar responsabilidades y un organismo rector que determine cuándo hay que recurrir a los servicios del equipo. El nuevo statu quo divide a los Vengadores mientras intentan proteger al mundo de un nuevo malvado."
    },
    {
        "id": 13,
        "name": "Homecoming",
        "image": "images/spider-man-homecoming.jpg",
        "precio": "90200",
        "categoria": "Superheroe",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 14,
        "name": "Spider-Man",
        "image": "images/spider-man.jpg",
        "precio": "36800",
        "categoria": "Superheroe",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 15,
        "name": "Malefica",
        "image": "images/malefica.jpg",
        "precio": "44800",
        "categoria": "Fantasia",
        "descripcion": "Maléfica es una bella joven de corazón puro que vive una vida idílica en su reino del bosque. Cuando un ejército invasor pone en peligro el reino, Maléfica se erige como la temible protectora del bosque. Sin embargo, una despiadada traición endurece su corazón y la convierte en una criatura en busca de venganza. Maléfica empieza una batalla contra el sucesor del rey y lanza una maldición contra su hija Aurora. Sin embargo, se da cuenta de que la joven es la única que puede traer la paz al reino."
    },
    {
        "id": 16,
        "name": "Prodigy",
        "image": "images/prodigio.jpg",
        "precio": "49600",
        "categoria": "Terror",
        "descripcion": "Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg."
    },
    {
        "id": 17,
        "name": "Eerie",
        "image": "images/eerie.jpg",
        "precio": "30600",
        "categoria": "Terror",
        "descripcion": "Patricia, una consejera religiosa clarividente que busca averiguar qué provocó que la joven Erika se quitara la vida en el interior de una escuela católica llamada Sta. Lucia Academy. De esta forma, guiada por el fantasma de una jovencita, la protagonista ingresa en un oscuro pasado de abusos ocurridos en el convento, mientras Erika se le manifiesta de diversas formas"
    },
    {
        "id": 18,
        "name": "El heredero",
        "image": "images/el-heredero-del-diablo.jpg",
        "precio": "28200",
        "categoria": "Terror",
        "descripcion": "Todo comienza con la luna de miel celebrada por una pareja de recién casados. Durante estos días de ardiente felicidad la mujer se queda embarazada. El marido al poder vivir esta oportunidad decide grabar todo el embarazo para el recuerdo. Les comunican que serán padres antes de tiempo debido a la rápida gestación del feto. Poco a poco la mujer va entrando en un estado de nervios y desesperación nunca vistos durante la gestación."
    },
    {
        "id": 19,
        "name": "Insidious",
        "image": "images/insidius.jpg",
        "precio": "64600",
        "categoria": "Terror",
        "descripcion": "Josh, su esposa Reani y sus tres hijos se mudan a una nueva casa cuando uno de los hijos cae en un estado de coma sin explicación. Poco tiempo después, una sucesión de fenómenos paranormales comienza a producirse. Un medium les dice que el alma de su hijo se encuentra en algún lugar entre la vida y la muerte en la dimensión astral, y que los fénomenos son obra de las fuerzas del mal que tratan de apoderarse de su cuerpo. Para salvarlo, Josh tendrá que abandonar también su cuerpo y adentrarse en el más allá"
    },
    {
        "id": 20,
        "name": "IT",
        "image": "images/la-cosa.jpg",
        "precio": "89700",
        "categoria": "Terror",
        "descripcion": "La película cuenta la historia de siete niños marginados del municipio de Derry, Maine (EE. UU.), que se llaman a sí mismos 'El Club de los Perdedores'. Todos se han visto marginados por uno u otro motivo; todos cargan con alguna de las 'cualidades' favoritas de los abusones de la ciudad... y todos han visto sus peores pesadillas hacerse realidad en forma de un antiguo depredador que cambia de forma y al que solo logran llamar 'eso'."
    },
    {
        "id": 21,
        "name": "Maligno",
        "image": "images/maligno.jpg",
        "precio": "102000",
        "categoria": "Terror",
        "descripcion": "Madison es una mujer que tiene unas macabras pesadillas que la dejan completamente paralizada. Aterrada por lo que ve en ellas, Madison no consigue dormir por las noches ni vivir por el día. Pero el terror cada vez se irá apoderando de ella cuando descubra que esas pesadillas no son sueños, sino que son hechos de la vida real. "
    },
    {
        "id": 22,
        "name": "Nosferatu",
        "image": "images/nosferatu.jpeg",
        "precio": "79200",
        "categoria": "Terror",
        "descripcion": "Año 1838. En la ciudad de Wisborg viven felices el joven Hutter y su mujer Ellen, hasta que el oscuro agente inmobiliario Knock decide enviar a Hutter a Transilvania para cerrar un negocio con el conde Orlok. Se trata de la venta de una finca de Wisborg, que linda con la casa de Hutter. Durante el largo viaje, Hutter pernocta en una posada, donde ojea un viejo tratado sobre vampiros que encuentra en su habitación. Una vez en el castillo, es recibido por el siniestro conde."
    },
    {
        "id": 23,
        "name": "Ouija",
        "image": "images/ouija.jpg",
        "precio": "69100",
        "categoria": "Terror",
        "descripcion": "Nueva película sobre el mítico y terrorífico juego de Hasbro, la Ouija, dirigida por Stiles White (guionista de The Possession, el origen del mal), que seguirá de cerca a unos adolescentes que deberán enfrentarse a una terrorífica situación, poniéndolos a prueba. Después de que uno de sus amigos sea brutalmente asesinado por un malvado ente oscuro, un grupo de amigos juega a la ouija para intentar hablar con él desde el más allá. Sin embargo, lo que consiguen es despertar a un antiguo espíritu y a los demonios más salvajes."
    },
    {
        "id": 24,
        "name": "Poltergeist",
        "image": "images/poltergeist.jpg",
        "precio": "66000",
        "categoria": "Terror",
        "descripcion": "La familia Freelings vive en un suburbio de California (Estados Unidos) en una casa, aparentemente, normal. Todo cambia cuando Carol Anne (Heather O'Rourke), la pequeña de la familia, sea la primera en contactar a los espíritus que hay en la casa a través de la televisión. Convencidos de que necesitan ayuda, los Freelings llamarán a un grupo de parapsicólogos e, incluso, a una médium espiritual para poder acabar con los poltergeist."
    },
    {
        "id": 25,
        "name": "Sinister",
        "image": "images/sinister.jpg",
        "precio": "96200",
        "categoria": "Terror",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 26,
        "name": "Dolittle",
        "image": "images/dolittle.jpg",
        "precio": "52000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 27,
        "name": "Gladiator",
        "image": "images/gladiator.jpg",
        "precio": "52000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 28,
        "name": "Jungle Cruise",
        "image": "images/jungle-cruise.jpg",
        "precio": "82000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 29,
        "name": "Man in Black",
        "image": "images/man-in-black.jpg",
        "precio": "82000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 30,
        "name": "Monster Hunter",
        "image": "images/moster-hunter.jpg",
        "precio": "92000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 31,
        "name": "Nieve Negra",
        "image": "images/nieve-negra.jpg",
        "precio": "112000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 32,
        "name": "Peter Pan",
        "image": "images/peter-pan.jpg",
        "precio": "112000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 33,
        "name": "Race",
        "image": "images/race.jpg",
        "precio": "115000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 34,
        "name": "REDBAD",
        "image": "images/redbad.jpg",
        "precio": "115000",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 35,
        "name": "Sahara",
        "image": "images/sahara.jpg",
        "precio": "106800",
        "categoria": "Aventura",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 36,
        "name": "Bolt",
        "image": "images/bolt.jpg",
        "precio": "106900",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 37,
        "name": "El Grinch",
        "image": "images/el-grinch.jpg",
        "precio": "46900",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 38,
        "name": "Frozen II",
        "image": "images/frozen-2.jpg",
        "precio": "26900",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 39,
        "name": "Rapido y Peludo",
        "image": "images/rapido-y-peludo.jpg",
        "precio": "18200",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 40,
        "name": "Rio",
        "image": "images/rio.jpg",
        "precio": "95000",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 41,
        "name": "Saul",
        "image": "images/saul.jpg",
        "precio": "39600",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 42,
        "name": "Tierra de osos",
        "image": "images/tierra-de-osos.jpg",
        "precio": "86400",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 43,
        "name": "Gran dinosaurio",
        "image": "images/un-gran-dinosaurio.jpg",
        "precio": "95400",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 44,
        "name": "UP",
        "image": "images/up.jpg",
        "precio": "19600",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 45,
        "name": "Walle",
        "image": "images/walle.jpg",
        "precio": "24300",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 46,
        "name": "Los Increibles",
        "image": "images/the-increibles.jpg",
        "precio": "96500",
        "categoria": "Animada",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 47,
        "name": "Bridge",
        "image": "images/bridge.jpg",
        "precio": "46900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 48,
        "name": "Corazon de Tinta",
        "image": "images/corazon-de-tinta.jpg",
        "precio": "87900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 49,
        "name": "El mago",
        "image": "images/el-mago.jpg",
        "precio": "32900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 50,
        "name": "Erase una vez",
        "image": "images/erase-una-vez.jpg",
        "precio": "111900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 51,
        "name": "Into the Woods",
        "image": "images/into-the-woods.jpg",
        "precio": "129900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 52,
        "name": "La bella y la Bestia",
        "image": "images/la-bella-y-la-bestia.jpg",
        "precio": "92900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 53,
        "name": "Miss Peregrine",
        "image": "images/miss-peregrine.jpg",
        "precio": "23200",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 54,
        "name": "Mundo de Fantasia",
        "image": "images/mundo-de-fantasia.jpg",
        "precio": "92800",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 55,
        "name": "Noche en el museo",
        "image": "images/noche-museo.jpg",
        "precio": "92700",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 56,
        "name": "SpiderWick",
        "image": "images/spiderwick.jpg",
        "precio": "61900",
        "categoria": "Fantasia",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 57,
        "name": "Venom",
        "image": "images/venom.jpg",
        "precio": "74200",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 58,
        "name": "JusticeLeague",
        "image": "images/justiceleague.jpg",
        "precio": "92000",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 59,
        "name": "EndGame",
        "image": "images/endgame.jpg",
        "precio": "92300",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 60,
        "name": "BlackWidow",
        "image": "images/blackwidow.jpg",
        "precio": "82300",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 61,
        "name": "Aquaman",
        "image": "images/aquaman.jpg",
        "precio": "67800",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 62,
        "name": "Wonder Woman",
        "image": "images/wonder-woman.jpg",
        "precio": "78900",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 63,
        "name": "Shazam",
        "image": "images/shazam.jpg",
        "precio": "97500",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    },
    {
        "id": 64,
        "name": "Amazing SpiderMan",
        "image": "images/the-amazing-spider-man.png",
        "precio": "132600",
        "categoria": "Superheroes",
        "descripcion": "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Sin embargo, cuando unas imágenes antiguas y otras pistas apuntan a una presencia sobrenatural, Ellison descubre que vivir en esa casa podría poner a su propia familia en peligro."
    }
];
export default movie;