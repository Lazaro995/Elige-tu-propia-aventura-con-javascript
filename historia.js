let historia = [
  {
    ruta: 0,
    aventura:
      "Estas en tu casa aburrido, es viernes por la noche y no tenes nada para hacer, tenes pensado comer algo, fumarte un porro y quedarte toda la noche escuchando música y boludeando en Youtube, mientras te estas haciendo unas milanesas escuchas que suena tu teléfono, es Martín, te dice si queres salir a tomar algo a la noche, que se junta con unos amigos de la facultad",
    opcion1: 'Le contesto que estoy cansado y me quedo en casa',
    opcion2: 'Le contesto que salgo con el',
    op1: 14,
    op2: 8
  },
  {
    ruta: 1,
    aventura:
      "Dejas que te roben y se llevan la cartera de Alex, ella se queda muy preocupada por que en la cartera tenia cosas importantes, decide irse a su casa, intentas convencerla de ir a la tuya pero esta enojada por que dejaste que le robaran, te vas a tu casa, paja y al sobre",
    fin: true
  },
  {
    ruta: 2,
    aventura:
      "Le das la razón a Martín y les decís que la fiesta esta muy buena, que seria una lastima sacar a toda la gente de la fiesta que la esta pasando tan bien, y que la mayoría de los boliches van a estar cerrados a esa hora, el resto acepta tu postura y siguen tomando y fumando. Un rato mas tarde ves que lo llaman a Martín, es la policía, algunos vecinos se quejaron del ruido y ahora quieren que se vayan todos de la casa, lo seguís a Martín hasta la puerta y ves que hay 2 policías y atrás vez al patrullero, la fiesta termino y todos tienen que irse, ya es casi de día y te empezas a sentir descompuesto, decidís tomarte un colectivo y volverte a tu casa.",
    fin: true
  },
  {
    ruta: 3,
    aventura: `Le decís que si tomas, pero que por el momento no tenes movida, te dice que tiene una entera y te ofrece si queres la mitad de una, te la regala, le decís que si y te dice que lo acompañes al baño, una vez que entran en el baño la cortan con un cuchillo y se la colan, vuelven a la fiesta"
    los primeros minutos esta todo bien, te terminas de preparar tu fernet y lo vas tomando, la pepa tiene un gusto re amargo que cada tanto te hace temblar la panza, pero dentro de todo safa, mientras estas charlando con tu amigo empezas a ver como las sombras de la cara se le empiezan a marcar cada vez mas, de a poco el marco de la puerta que estaba detras de el empieza a vivoriar y una sonrisa se dibuja en tu cara, por algún motivo apretas las manos y las estiras continuamente, como verificando que todas tus articulaciones funcionen correctamente, la pepa sigue subiendo y llega un momento en que ya no le estas prestando atención a la charla con tu amigo, directamente todo es un flash adentro de otro, la cabeza te va a 1000 y no paras de pensar en que todo parece tan bizarro, perdes por completo la noción del tiempo y tenes las pupilas re dilatadas,
    la música esta al palo y a tu alrededor esta lleno de gente, crees que todos te miran, que todos están hablando de lo agitado que estas, en eso lo volves a encontrar a Javier, le decís que las pepas están buenísimas y la seguís flashando un rato, en un momento te dice que el y unas amigas van a ir a tomar algo a un bar, te pregunta si queres ir:`,
    opcion1: 'Si, voy al bar',
    opcion2: 'No, me quedo',
    op1: 15,
    op2: 16
  },
  {
    ruta: 4,
    aventura: "Salís con otro tema y decidís no invitarla a tomar algo, ella se termina aburriendo y la conversación termina al rato, el resto de la noche es aburrida y no haces nada mas que Youtube y música, una paja y al sobre.",
    fin: true
  },
  {
    ruta: 5,
    aventura: "Les decís que preferís ir al boliche, en ese momento, Juan que era quien había propuesto de ir al boliche, empieza a gritar para ir al boliche, esta muy borracho, y como vos le diste la razón el ya cree que todos quieren ir al boliche, en ese momento Francisco, otro de los amigos de Martín lo sigue a Juan y en un momento todos empiezan a seguirlo. Martín pide que lo esperen y que lo ayuden a sacar a toda la gente de la casa, después de media hora logran sacar a toda la gente de la casa, y se dividen en 2 autos para ir hasta el boliche, una vez que llegan al boliche estacionan enfrente, y al llegar a la puerta había dos hombres de seguridad, les dicen que el boliche cerro hace 10 minutos y que no pueden dejar pasar a nadie mas, lo charlan con el resto del grupo y deciden ir a probar suerte al bar:",
    ir: 18
  },
  {
    ruta: 6,
    aventura: "Le propones de tomar otro trago y ella acepta, piden 2 vodka con speed, al terminarlos están los dos medios borrachos y ella te dice de ir a tu casa, vos obviamente aceptas y te la llevas a tu casa en el camino se cruzan con un gil y te pregunta si no tenes plata para una birra, vos le decís que no y en ese momento te dice que le des el celular y a ella le pide la cartera:",
    opcion1: 'Me peleo con el rocho',
    opcion2: 'Dejo que nos robe',
    op1: 9,
    op2: 1
  },
  {
    ruta: 7,
    aventura: "En ese momento te lo cruzas a Martín y le preguntas en donde podes prepararte algo para tomar, te dice que vayas hasta la cocina, que en la heladera había un fernet de litro y en freezer había cocacola y hielo vas a prepararte el trago y en el camino te cruzas con un amigo que no veias hace mucho, te invita a fumar un faso y mientras te preparas el trago se quedan charlando, entre risas y anécdotas te pregunta si tomas pepa:",
    opcion1: 'Si tomo pepa',
    opcion2: 'No tomo pepa',
    op1: 3,
    op2: 10
  },
  {
    ruta: 8,
    aventura: "Terminas de comer, estas un ratito en Youtube hasta que decidís darte una ducha, al terminar te secas, te perfumas un poco, buscas un buen pantalón y una buena remera, agarras algo de plata y salís para la casa de tu amigo al llegar ya se escucha la musica desde afuera, al final los amigos de la facultad habían invitado a mas amigos y la casa se había llenado de gente, a Martín parece no molestarle ya que esta muy en pedo, en ese momento pensas que vas a hacer:",
    opcion1: 'Busco un poco de alcohol',
    opcion2: 'Voy al patio a ver quien hay',
    op1: 7,
    op2: 11
  },
  {
    ruta: 9,
    aventura: "En ese momento decidís pegarle un trompada en la cara, el rocho pierde el equilibrio y se choca una viga que estaba detrás de el decidís seguir pegandole y en un momento crees que se desmayo, en ese momento le decís a Alex de irse y van a tu casa, toman algo y terminas acostándote con ella, se quedan dormidos hasta el otro día",
    fin: true
  },
  {
    ruta: 10,
    aventura: "Le decís que no tomas pepa, que solo fumas faso y tomas alcohol, pero que esta todo bien, el te dice que esta bueno, y cambian el tema de conversación, charlan un rato mas y decidís ir al baño, una vez en el baño te miras al espejo, te peinas un poco y volves a salir, le preguntas a un amigo de Martín si lo vio y te dice que esta en el patio, decidís ir a ver que esta haciendo.",
    ir: 11
  },
  {
    ruta: 11,
    aventura: "Cuando salís al patio ves que están los amigos de la facultad de Martín, tenes buena relación con ellos, al verte te gritan para que vayas, están fumando un faso y tomando algo de alcohol, tienen un fernet en el piso y uno de ellos te dice si queres prepararte uno, le decís que si y agarras un vaso de la mesa que esta alado, cuando te terminas de preparar el fernet te llega el faso, fumas un par de secas y se lo pasas a Martín que esta a tu derecha se ponen a charlar de que van a hacer el resto de la noche, uno de ellos propone salir a un boliche a bailar, otro propone de ir a un bar, y Martín propone quedarnos en su casa, te preguntan a vos que opinas:",
    opcion1: 'Ir al boliche',
    opcion2: 'Ir al bar',
    opcion3: 'Quedarnos',
    op1: 5,
    op2: 13,
    op3: 2
  },
  {
    ruta: 12,
    aventura: "Fuiste muy apresurado, te mira mal y te dice que sos el amigo de la facultad, que no te confundas, que ella tiene novio y que si salio con vos era para hacerte el aguante de onda, en ese momento te dice que va al baño y no vuelve mas, vos volves a tu casa y como pelotudo que sos le dedicas una y te acostas a dormir.",
    fin: true
  },
  {
    ruta: 13,
    aventura: "Les decís que preferís algo tranqui, pero que queres salir a algún lado, les propones ir al bar y algunos se decepcionan rápidamente por que querían ir al boliche, pero igualmente te siguen, mientras ayudan a Martín a sacar a toda la gente de la casa se hacen las 4:30 de la mañana, se dividen en dos autos para ir al bar:",
    ir: 18
  },
  {
    ruta: 14,
    aventura: "Comes algo y vas un rato mas a la pc, entre tanto crap te terminas aburriendo y empezas a escuchar un disco, fumas otra seca y colgas un rato,en un momento ves que la pestaña de instagram esta titulando, te llego un mensaje de Alex, es esa compañera de la facultad que le re das, te pregunta que haces en instagram un viernes a la noche, le contestas que estas medio cansado como para salir, que querías ir a tomar algo pero nadie te acompañaba, en eso ella te dice que también le gustaría ir a tomar algo:",
    opcion1: 'La invitas a tomar algo',
    opcion2: 'La virgueas',
    op1: 17,
    op2: 4
  },
  {
    ruta: 15,
    aventura: "Lo seguís a tu amigo y se encuentran con dos pibas, notas que las minas están buenas, pero seguís flashando por la pepa, van hasta el auto de tu amigo y se dirigen hasta el bar,  una vez en el bar vos no podes para de flasharla y tu amigo intenta tranquilizarte, pero empieza a gritarte y se empiezan a pelear, las minas los miran mal y deciden irse del bar tu amigo te dice que sos un tarado, que la cagaste, y se va también del bar, vos te tomas un bondi hasta tu casa y al llegar te acostas a dormir.",
    fin: true
  },
  {
    ruta: 16,
    aventura: "Tu amigo intenta convencerte pero vos le volves a decir que estas bien en la fiesta, seguís alucinando mientras te vas cruzando gente, charlas un rato mas con algunos conocidos y en un momento decidís ir a tomar un respiro al patio:",
    ir: 11
  },
  {
    ruta: 17,
    aventura: "Se ríe, pero acepta, te pregunta a donde pueden ir y le respondes que conoces un lugar en el centro que esta muy bueno, en eso como sos un boludo que no conoce nada te pones a buscar en google algún lugar bueno para llevarla, ves varios bares y te decidís por uno, le decís que su casa queda de pasada al bar y la pasas a buscar en taxi, una vez que llegas a la casa le mandas un mensaje de texto diciéndole que estas abajo, ella llega y te saluda, cuando llegan al bar se sientan en una mesa alado de una ventana que da a la calle, se piden un birra y charlan un rato largo, en un momento pensas que esta es tu oportunidad, que pueden pasar alta noche:",
    opcion1: 'La invito a mi casa',
    opcion2: 'Tomamos otro trago',
    op1: 12,
    op2: 6
  },
  {
    ruta: 18,
    aventura: "Una vez en el bar estacionan en la puerta, la entrada es gratis y estan pasando musica chill, deciden sentarse en una mesa afuera y pedir algo para tomar, una moza viene y les toma el pedido, vos pedís un vodka con naranja y al terminártelo empezas a notar que el alcohol te esta pegando decidís ir al baño para hacer pis y en un momento no aguantas mas y vomitas en el inodoro, al salir te limpias un poco la cara, haces unos buches con agua y volves a tu asiento, en un momento te empezas a sentir muy mal y le pedís a Martín si te puede llevar a tu casa, el accede al verte bastante pálido y van hasta el auto, mientras te lleva le pedís que pare algunas veces para vomitar, al llegar a tu casa le agradeces y te acostas a dormir.",
    fin: true
  }
];
