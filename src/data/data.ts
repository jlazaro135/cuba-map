import { LatLng, latLng } from "leaflet";
import { PopupContent } from "../app/interfaces/popContent.interface";

interface MarkerData {
  popupContent: PopupContent;
  coordinates: [number, number];
}

interface Cities {
  name: string,
  coords: LatLng
}

export const markerData1: MarkerData[] = [
  {
    popupContent: {
      title: {
        es: 'Centro Habana',
        en: 'Habana Centre',
      },
      imgUrl: 'assets/pictures/old_havana.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/old_havana.webp', type: 'img'},
          { src: 'assets/pictures/habana/lada.webp', type: 'img'},
        ]
      },
      alt: 'galiano',
      description: {
        es: `Centro Habana se encuentra entre los municipios de Habana Vieja al este, Plaza de la Revolución al oeste, y el malecón al norte,
        bordeando el océano Atlántico. Esta posición estratégica
        lo sitúa en el corazón de La Habana, con fácil acceso a muchas
        de las principales atracciones de la ciudad.
        <br><br>Este municipio enfrenta desafíos significativos
        relacionados con el deterioro de la infraestructura
        y la necesidad de renovación urbana.
        Muchos edificios requieren reparaciones urgentes debido a años de falta de mantenimiento. Sin embargo, el distrito también ofrece oportunidades de desarrollo, especialmente en el ámbito del turismo y la cultura. La revitalización de áreas clave podría impulsar el atractivo del municipio tanto para residentes como para visitantes.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/Centro_Habana" target="_blank">Saber más sobre Centro Habana</a>
        `,
        en: `Centro Habana is located between the municipalities of Habana Vieja to the east, Plaza de la Revolución to the west, and the Malecón to the north,
        bordering the Atlantic Ocean. This strategic position
        places it in the heart of Havana, with easy access to many
        of the city's main attractions.
        <br><br>This municipality faces significant challenges
        related to infrastructure deterioration
        and the need for urban renewal.
        Many buildings require urgent repairs due to years of neglect. However, the district also offers development opportunities, especially in tourism and culture. The revitalization of key areas could enhance the municipality's appeal to both residents and visitors.
        <br><br>
        <a href="https://en.wikipedia.org/wiki/Centro_Habana" target="_blank">Learn more about Centro Habana</a>
        `,
      },
    },
    coordinates: [23.139154, -82.363582],
  },
  {
    popupContent: {
      title: {
        es: 'Playa Ancón',
        en: 'Ancon Beach',
      },
      imgUrl: 'assets/pictures/ancoa.webp',
      alt: 'ancon-beach',
      description: {
        es: `
        Se podría decir que Playa Ancón es la playa de la ciudad de Trinidad porque solo distan unos pocos kilometros
        de ella. El día que la visitamos el agua marcaba 32º, demasiado caliente incluso para la gente local, que aseguraban que pocas veces el mar había estado tan caliente.
        <br><br>
        La zona está poco explotada turísticamente, a diferencia de las playas y cayos del norte de la isla, como Varadero o Cayo Santamaría. La zona es ideal para actividades como el snorkeling y el buceo, permitiendo a los bañistas observar una amplia variedad de peces y corales.
        `,
        en: `Playa Ancón could be considered the beach of the city of Trinidad as it is only a few kilometers away.
        The day we visited, the water temperature was 32º, too hot even for the locals, who said the sea had rarely been so warm.
        <br><br>
        The area is less touristically developed compared to the beaches and cays of the island's north, such as Varadero or Cayo Santa María. The area is ideal for activities such as snorkeling and diving, allowing bathers to observe a wide variety of fish and corals.
        `,
      },
    },
    coordinates: [21.733421, -79.997907],
  },
  {
    popupContent: {
      title: {
        es: 'Cayo Santa María',
        en: 'Cayo Santa Maria',
      },
      imgUrl: 'assets/pictures/cayo.webp',
      alt: 'cayo-beach',
      description: {
        es: `
        Los cayos de Cuba son un conjunto de islas
        e islotes que se encuentran a lo largo de la costa de la isla principal de Cuba.
        Son conocidos por sus impresionantes playas de arena blanca, aguas cristalinas y una biodiversidad marina única
        <br><br>
        Nosotros elegimos el Cayo de Santa María, situado al norte de la provincia de Villa Clara. Para llegar hay que pasar una carretera que denominan como
        "pedraplén" que literalmente está construida sobre el mar Caribe, conectando la isla con los cayos pertenecientes a al archipiélago Jardines del Rey.
        La playa y el mar se fusionan para crear una escena bucólica, superando cualquier expectativa que teníamos sobre el Caribe.
        `,
        en: `The cays of Cuba are a group of islands and islets located along the coast of the main island of Cuba.
        They are known for their stunning white sand beaches, crystal clear waters, and unique marine biodiversity.
        <br><br>
        We chose Cayo Santa María, located north of the province of Villa Clara. To get there, you have to cross a road called the
        "pedraplén," which is literally built over the Caribbean Sea, connecting the island with the cays belonging to the Jardines del Rey archipelago.
        The beach and the sea merge to create a bucolic scene, surpassing any expectations we had of the Caribbean.
        `,
      },
    },
    coordinates: [22.660819, -79.044007],
  },
  {
    popupContent: {
      title: {
        es: 'Necrópolis de Cristobal Colón',
        en: 'Colon Cemetery',
      },
      imgUrl: 'assets/pictures/cementerio.webp',
      alt: 'cemetery',
      description: {
        es: `
        Es el principal cementerio de La Habana, Cuba, y uno de los más destacados de América Latina.
        Inaugurado en 1876, este cementerio es famoso por su impresionante arquitectura, esculturas y
        mausoleos, que reflejan una rica historia cultural y artística.
        <br><br>
        No solo es un lugar de descanso para los difuntos, sino también un museo al aire libre
        que ofrece una profunda visión de la historia, la cultura y el arte de Cuba.
        Es el lugar de descanso final de muchas personalidades importantes de la historia cubana, incluyendo artistas,
        escritores, políticos y científicos. Entre ellos se encuentran el músico Ibrahim Ferrer y
        el escritor Alejo Carpentier.
        `,
        en: `It is the main cemetery of Havana, Cuba, and one of the most notable in Latin America.
        Inaugurated in 1876, this cemetery is famous for its impressive architecture, sculptures, and mausoleums, reflecting a rich cultural and artistic history.
        <br><br>
        It is not only a resting place for the deceased but also an open-air museum that offers a profound insight into the history, culture, and art of Cuba.
        It is the final resting place of many important personalities in Cuban history, including artists, writers, politicians, and scientists. Among them are musician Ibrahim Ferrer and writer Alejo Carpentier.
        `,
      },
    },
    coordinates: [23.124576, -82.400125],
  },
  {
    popupContent: {
      title: {
        es: 'La Perla del Sur',
        en: 'The Pearl of the South',
      },
      imgUrl: 'assets/pictures/cienfuegos.webp',
      alt: 'cienfuegos',
      description: {
        es: `
        Una ciudad que lleva el nombre del mariscal de campo José Cienfuegos Jovellanos.
        El trazado original de la ciudad sigue la forma rectangular tradicional,
        con calles que se entrecruzan en ángulos rectos.
        <br><br>
        Los turistas suelen pasear por el
        boulevar San Fernando, el paseo del Prado, que separa a la ciudad de la famosa
        bahía, uno de los paisajes naturales más espectaculares de Cuba.
        Entre los principales puntos de interés están el teatro Tomás Terry, el Palacio de Valle, la Catedral de la Purísima Concepción y
        el parque José Martí, así como el Arco de Triunfo y el cementerio de Reina.
        `,
        en: `A city named after Field Marshal José Cienfuegos Jovellanos.
        The original layout of the city follows the traditional rectangular shape,
        with streets intersecting at right angles.
        <br><br>
        Tourists often stroll along San Fernando Boulevard, the Paseo del Prado, which separates the city from the famous bay, one of the most spectacular natural landscapes in Cuba.
        Major points of interest include the Tomás Terry Theater, the Palacio de Valle, the Cathedral of the Immaculate Conception, and José Martí Park, as well as the Arch of Triumph and the Reina Cemetery.
        `,
      },
    },
    coordinates: [22.146071, -80.435137],
  },
];


export const markerData: MarkerData[] = [
  {
    popupContent: {
      title: {
        es: 'Centro Habana',
        en: 'Habana Centre',
      },
      imgUrl: 'assets/pictures/old_havana.webp',
      alt: 'galiano',
      description: {
        es: `Centro Habana se encuentra entre los municipios de Habana Vieja al este, Plaza de la Revolución al oeste, y el malecón al norte,
        bordeando el océano Atlántico. Esta posición estratégica
        lo sitúa en el corazón de La Habana, con fácil acceso a muchas
        de las principales atracciones de la ciudad.
        <br><br>Este municipio enfrenta desafíos significativos
        relacionados con el deterioro de la infraestructura
        y la necesidad de renovación urbana.
        Muchos edificios requieren reparaciones urgentes debido a años de falta de mantenimiento. Sin embargo, el distrito también ofrece oportunidades de desarrollo, especialmente en el ámbito del turismo y la cultura. La revitalización de áreas clave podría impulsar el atractivo del municipio tanto para residentes como para visitantes.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/Centro_Habana" target="_blank">Saber más sobre Centro Habana</a>
        `,
        en: `Centro Habana is located between the municipalities of Habana Vieja to the east, Plaza de la Revolución to the west, and the Malecón to the north,
        bordering the Atlantic Ocean. This strategic position
        places it in the heart of Havana, with easy access to many
        of the city's main attractions.
        <br><br>This municipality faces significant challenges
        related to infrastructure deterioration
        and the need for urban renewal.
        Many buildings require urgent repairs due to years of neglect. However, the district also offers development opportunities, especially in tourism and culture. The revitalization of key areas could enhance the municipality's appeal to both residents and visitors.
        <br><br>
        <a href="https://en.wikipedia.org/wiki/Centro_Habana" target="_blank">Learn more about Centro Habana</a>
        `,
      },
    },
    coordinates: [23.139154, -82.363582],
  },
  {
    popupContent: {
      title: {
        es: 'Plaza Vieja',
        en: 'Plaza Vieja',
      },
      imgUrl: 'assets/pictures/habana/plaza-vieja.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/plaza-vieja.webp', type: 'img'},
          { src: 'assets/pictures/habana/plaza-vieja-mov.webm', type: 'video', controls: true},
        ]
      },
      alt: 'plaza-vieja',
      description: {
        es: `
        La Plaza Vieja fue creada en 1559 y originalmente se conocía como Plaza Nueva. Fue un espacio abierto utilizado para ejercicios militares y, más tarde, como un mercado. A lo largo de los siglos, la plaza ha pasado por diversas transformaciones y ha sido testigo de múltiples acontecimientos históricos, incluyendo ejecuciones públicas y celebraciones populares.
        <br><br>
        Es un lugar de gran importancia en La Habana, no solo por su belleza arquitectónica y su historia, sino también por su papel como epicentro cultural y social. Es un lugar que invita a ser explorado y disfrutado, ofreciendo a los visitantes una inmersión en la esencia de la vida cubana.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/Plaza_Vieja_de_La_Habana" target="_blank">Saber más sobre la Plaza Vieja</a>
        `,
        en: `Plaza Vieja was created in 1559 and originally known as Plaza Nueva. It was an open space used for military exercises and later as a market. Over the centuries, the plaza has undergone various transformations and witnessed numerous historical events, including public executions and popular celebrations.
        <br><br>
        It is a place of great importance in Havana, not only for its architectural beauty and history but also for its role as a cultural and social epicenter. It is a place that invites exploration and enjoyment, offering visitors an immersion in the essence of Cuban life.
        <br><br>
        <a href="https://en.wikipedia.org/wiki/Plaza_Vieja_(Havana)" target="_blank">Learn more about Plaza Vieja</a>
        `,
      },
    },
    coordinates: [23.135886, -82.349988],
  },
  {
    popupContent: {
      title: {
        es: 'Playa Ancón',
        en: 'Ancon Beach',
      },
      imgUrl: 'assets/pictures/ancoa.webp',
      alt: 'ancon-beach',
      description: {
        es: `
        Se podría decir que Playa Ancón es la playa de la ciudad de Trinidad porque solo distan unos pocos kilometros
        de ella. El día que la visitamos el agua marcaba 32º, demasiado caliente incluso para la gente local, que aseguraban que pocas veces el mar había estado tan caliente.
        <br><br>
        La zona está poco explotada turísticamente, a diferencia de las playas y cayos del norte de la isla, como Varadero o Cayo Santamaría. La zona es ideal para actividades como el snorkeling y el buceo, permitiendo a los bañistas observar una amplia variedad de peces y corales.
        `,
        en: `Playa Ancón could be considered the beach of the city of Trinidad as it is only a few kilometers away.
        The day we visited, the water temperature was 32º, too hot even for the locals, who said the sea had rarely been so warm.
        <br><br>
        The area is less touristically developed compared to the beaches and cays of the island's north, such as Varadero or Cayo Santa María. The area is ideal for activities such as snorkeling and diving, allowing bathers to observe a wide variety of fish and corals.
        `,
      },
    },
    coordinates: [21.733421, -79.997907],
  },
  {
    popupContent: {
      title: {
        es: 'Cayo Santa María',
        en: 'Cayo Santa Maria',
      },
      imgUrl: 'assets/pictures/cayo.webp',
      alt: 'cayo-beach',
      description: {
        es: `
        Los cayos de Cuba son un conjunto de islas
        e islotes que se encuentran a lo largo de la costa de la isla principal de Cuba.
        Son conocidos por sus impresionantes playas de arena blanca, aguas cristalinas y una biodiversidad marina única
        <br><br>
        Nosotros elegimos el Cayo de Santa María, situado al norte de la provincia de Villa Clara. Para llegar hay que pasar una carretera que denominan como
        "pedraplén" que literalmente está construida sobre el mar Caribe, conectando la isla con los cayos pertenecientes a al archipiélago Jardines del Rey.
        La playa y el mar se fusionan para crear una escena bucólica, superando cualquier expectativa que teníamos sobre el Caribe.
        `,
        en: `The cays of Cuba are a group of islands and islets located along the coast of the main island of Cuba.
        They are known for their stunning white sand beaches, crystal clear waters, and unique marine biodiversity.
        <br><br>
        We chose Cayo Santa María, located north of the province of Villa Clara. To get there, you have to cross a road called the
        "pedraplén," which is literally built over the Caribbean Sea, connecting the island with the cays belonging to the Jardines del Rey archipelago.
        The beach and the sea merge to create a bucolic scene, surpassing any expectations we had of the Caribbean.
        `,
      },
    },
    coordinates: [22.660819, -79.044007],
  },
  {
    popupContent: {
      title: {
        es: 'Necrópolis de Cristobal Colón',
        en: 'Colon Cemetery',
      },
      imgUrl: 'assets/pictures/cementerio.webp',
      alt: 'cemetery',
      description: {
        es: `
        Es el principal cementerio de La Habana, Cuba, y uno de los más destacados de América Latina.
        Inaugurado en 1876, este cementerio es famoso por su impresionante arquitectura, esculturas y
        mausoleos, que reflejan una rica historia cultural y artística.
        <br><br>
        No solo es un lugar de descanso para los difuntos, sino también un museo al aire libre
        que ofrece una profunda visión de la historia, la cultura y el arte de Cuba.
        Es el lugar de descanso final de muchas personalidades importantes de la historia cubana, incluyendo artistas,
        escritores, políticos y científicos. Entre ellos se encuentran el músico Ibrahim Ferrer y
        el escritor Alejo Carpentier.
        `,
        en: `It is the main cemetery of Havana, Cuba, and one of the most notable in Latin America.
        Inaugurated in 1876, this cemetery is famous for its impressive architecture, sculptures, and mausoleums, reflecting a rich cultural and artistic history.
        <br><br>
        It is not only a resting place for the deceased but also an open-air museum that offers a profound insight into the history, culture, and art of Cuba.
        It is the final resting place of many important personalities in Cuban history, including artists, writers, politicians, and scientists. Among them are musician Ibrahim Ferrer and writer Alejo Carpentier.
        `,
      },
    },
    coordinates: [23.124576, -82.400125],
  },
  {
    popupContent: {
      title: {
        es: 'La Perla del Sur',
        en: 'The Pearl of the South',
      },
      imgUrl: 'assets/pictures/cienfuegos.webp',
      alt: 'cienfuegos',
      description: {
        es: `
        Cienfuegos es La Perla del Sur de Cuba. Hermosa ciudad fundada por franceses en el siglo XIX y
        declarada patrimonio de la humanidad por la UNESCO, gracias a su marcado estilo neoclasicista y
        trazado urbano dispuesto en cuadrículas. El estilo de vida nos sorprendió gratamente, a pesar de
        la situación social que atraviesa la isla en el momento de nuestra visita.
        <br><br>
        La ciudad, el malecón
        e incluso algunos establecimientos rebosan de gente, demostrando el vibrante espíritu de sus
        habitantes. La mezcla de arquitectura histórica y la calidez de su gente hacen de Cienfuegos
        un lugar inolvidable.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/Cienfuegos" target="_blank">Saber más sobre Cienfuegos</a>
        `,
        en: `Cienfuegos, known as The Pearl of the South, is a city on the southern coast of Cuba.
        Founded in 1819 by French settlers, the city is distinguished by its neoclassical architecture and its peaceful and welcoming atmosphere.
        <br><br>
        Among the main attractions of Cienfuegos are José Martí Park, Tomás Terry Theater, and Palacio de Valle.
        The city also has a natural port, which has been vital for its economic and social development.
        It is an ideal destination for those looking to explore the history and culture of Cuba in a relaxed setting.
        `,
      },
    },
    coordinates: [22.144573, -80.444073],
  },
  {
    popupContent: {
      title: {
        es: 'Cotorra cubana',
        en: 'Cuban parrot',
      },
      imgUrl: 'assets/pictures/coti.webp',
      alt: 'coti',
      description: {
        es: `
        En nuestra estancia en Playa Larga (Bahía de Cochinos), nos hospedamos en casa de Ilaria y Amauri, su trato fue maravilloso.
        La casa tenía una terraza donde Ilaria y Amauri servían los desayunos y las cenas. Durante estas comidas recibíamos las visitas
        de la cotorra cubana de la imagen.
        <br><br>
        "Coti" era la mascota de la vecina y aunque no podía volar por un problema en una de sus alas, no le impedía
        escalar entre los cables de los postes de luz hasta la terraza de nuestros hospedadores. Nos cautivó desde el primer momento. Demandaba su correspondiente porción de Guayaba que
        degustaba como un huesped más. Al terminar su ración, recorría el camino de vuelta a su casa a través de el enjambre de cables, hasta la siguiente comida.
        `,
        en: `During our stay in Playa Larga (Bay of Pigs), we stayed at Ilaria and Amauri's house, and their hospitality was wonderful.
        The house had a terrace where Ilaria and Amauri served breakfasts and dinners. During these meals, we would receive visits
        from the Cuban parrot in the picture.
        <br><br>
        "Coti" was the neighbor's pet and although it couldn't fly due to a problem with one of its wings, it didn't stop it
        from climbing among the wires of the light poles to the terrace of our hosts. We were captivated from the first moment. It demanded its corresponding portion of guava, which it savored like a guest. Once it finished its portion, it would make its way back home through the tangle of wires, until the next meal.
        `,
      },
    },
    coordinates: [22.280276, -81.214231],
  },
  {
    popupContent: {
      title: {
        es: 'Palacio de los Capitanes Generales',
        en: 'Palace of the Captains General',
      },
      imgUrl: 'assets/pictures/habana/generales.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/generales.webp', type: 'img'},
          { src: 'assets/pictures/habana/plaza-armas-2.webp', type: 'img'},
        ]
      },
      alt: 'generales',
      description: {
        es: `
        El Palacio de los Capitanes Generales sirvió como residencia oficial de los capitanes generales, quienes
        eran los máximos representantes de la autoridad española en la isla. Además de ser la sede del
        gobierno colonial, el edificio también albergó la Casa de Gobierno y la Real Audiencia de La Habana,
        desempeñando un papel central en la administración de la colonia. Este edificio es un buen ejemplo de la arquitectura barroca cubana.
        <br><br>
        Con la independencia de Cuba en 1898, el palacio pasó a ser la residencia de los gobernadores cubanos
        y más tarde, de los presidentes de la república. En 1902, después de la independencia, el edificio
        fue adaptado para ser utilizado como Palacio Presidencial hasta 1920, cuando se trasladó a otro
        lugar. A día de hoy este edificio alberga el Museo de la Ciudad de La Habana.

        `,
        en: `El Palacio de los Capitanes Generales sirvió como residencia oficial de los capitanes generales, quienes
        eran los máximos representantes de la autoridad española en la isla. Además de ser la sede del
        gobierno colonial, el edificio también albergó la Casa de Gobierno y la Real Audiencia de La Habana,
        desempeñando un papel central en la administración de la colonia. Este edificio es un buen ejemplo de la arquitectura barroca cubana.
        <br><br>
        Con la independencia de Cuba en 1898, el palacio pasó a ser la residencia de los gobernadores cubanos
        y más tarde, de los presidentes de la república. En 1902, después de la independencia, el edificio
        fue adaptado para ser utilizado como Palacio Presidencial hasta 1920, cuando se trasladó a otro
        lugar. A día de hoy este edificio alberga el Museo de la Ciudad de La Habana.
        `,
      },
    },
    coordinates: [23.140022, -82.349811],
  },
  {
    popupContent: {
      title: {
        es: 'Habana Vieja',
        en: 'Old Habana',
      },
      imgUrl: 'assets/pictures/habana-vieja.webp',
      alt: 'habana',
      description: {
        es: `
        La Habana Vieja, el casco histórico de la capital cubana, es una zona llena de historia y que fue
        declarada Patrimonio de la Humanidad por la UNESCO en 1982. Este distrito es conocido por su
        arquitectura colonial bien conservada, calles adoquinadas, y una atmósfera que evoca la rica herencia
        cultural de Cuba.
        <br><br>
        El estado de conservación de los edificios en La Habana Vieja varía considerablemente.
        Muchos de ellos han sido restaurados y mantenidos en buen estado, especialmente aquellos ubicados
        en áreas de alto interés turístico y cultural. Este esfuerzo de restauración ha sido en gran parte
        posible gracias a la Oficina del Historiador de la Ciudad de La Habana, dirigida durante muchos años
        por el historiador Eusebio Leal, quien jugó un papel crucial en la revitalización
        del centro histórico.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/La_Habana_Vieja" target="_blank">Saber más sobre Habana Vieja</a>
        `,
        en: `La Habana Vieja, el casco histórico de la capital cubana, es una zona llena de historia y que fue
        declarada Patrimonio de la Humanidad por la UNESCO en 1982. Este distrito es conocido por su
        arquitectura colonial bien conservada, calles adoquinadas, y una atmósfera que evoca la rica herencia
        cultural de Cuba.
        <br><br>
        El estado de conservación de los edificios en La Habana Vieja varía considerablemente.
        Muchos de ellos han sido restaurados y mantenidos en buen estado, especialmente aquellos ubicados
        en áreas de alto interés turístico y cultural. Este esfuerzo de restauración ha sido en gran parte
        posible gracias a la Oficina del Historiador de la Ciudad de La Habana, dirigida durante muchos años
        por el historiador Eusebio Leal, quien jugó un papel crucial en la revitalización
        del centro histórico.
        <br><br>
        <a href="https://es.wikipedia.org/wiki/La_Habana_Vieja" target="_blank">Saber más sobre Habana Vieja</a>
        `,
      },
    },
    coordinates: [23.142325, -82.354424],
  },
  {
    popupContent: {
      title: {
        es: 'Lada',
        en: 'Lada',
      },
      imgUrl: 'assets/pictures/lada.webp',
      alt: 'habana',
      description: {
        es: `
        El parqué automovilistico de Cuba es muy variado, pudiendo encontrar los clásicos coches americanos con su reconocible estética
        hasta coches modernos (principalmente de origen chino), pasando por carromatos y motocicletas eléctricas. Incluso es bastante habitual
        el uso de animales como medio transporte.
        <br><br>
        La influencia soviética que se vivió en Cuba durante décadas se dejó notar
        en este sentido, ya que aún sigue siendo notable la presencia de modelos de "Ladas" o "Moskvitchs" por
        diferentes ciudades del país.
        `,
        en: ` The car park in Cuba is very varied, ranging from classic American cars with their recognizable aesthetics to modern cars (mainly of Chinese origin), including carts and electric motorcycles. It is even quite common to use animals as a means of transport. <br><br> The Soviet influence that was experienced in Cuba for decades was noticeable in this sense, as the presence of "Ladas" or "Moskvitchs" models is still notable in different cities of the country.`,
      },
    },
    coordinates: [23.143935, -82.355093],
  },
  {
    popupContent: {
      title: {
        es: 'Malecón',
        en: 'Malecon',
      },
      imgUrl: 'assets/pictures/habana/malecon-2.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/malecon.webp', type: 'img'},
          { src: 'assets/pictures/habana/malecon-2.webp', type: 'img'},
          { src: 'assets/pictures/habana/malecon-3.webp', type: 'img'},
          { src: 'assets/pictures/habana/malecon.webm', type: 'video', controls: true},
        ]
      },
      alt: 'malecon',
      description: {
        es: `
        El Malecón de La Habana es un emblemático paseo marítimo que se extiende por aproximadamente
        8 kilómetros a lo largo de la costa norte de la ciudad, desde el Castillo de San Salvador de la
        Punta en La Habana Vieja hasta el barrio de Miramar en el oeste. Construido en varias etapas entre
        1901 y 1952, el Malecón es uno de los lugares más icónicos y frecuentados de la capital cubana.
        <br><br>
        Es común ver a niños y jóvenes saltando al mar desde el muro de concreto que bordea el paseo.
        Estos saltos al mar no solo son una forma de diversión y esparcimiento para los niños, sino también
        una tradición que ha pasado de generación en generación. Los niños suelen lanzarse al agua con gran
        habilidad y entusiasmo, desafiando las olas y disfrutando de la libertad que les ofrece el mar.

        `,
        en: `The Malecón in Havana is an iconic seafront promenade that stretches for approximately 8 kilometers along the northern coast of the city, from the Castillo de San Salvador de la Punta in Old Havana to the Miramar neighborhood in the west. Built in several stages between 1901 and 1952, the Malecón is one of the most iconic and frequented places in the Cuban capital. <br><br> It is common to see children and young people jumping into the sea from the concrete wall that borders the promenade. These jumps into the sea are not only a form of fun and recreation for the children, but also a tradition that has been passed down from generation to generation. The children usually dive into the water with great skill and enthusiasm, challenging the waves and enjoying the freedom that the sea offers them.`,
      },
    },
    coordinates: [23.141835, -82.372465],
  },
  {
    popupContent: {
      title: {
        es: 'José Martí',
        en: 'José Martí',
      },
      imgUrl: 'assets/pictures/marti.webp',
      alt: 'marti',
      description: {
        es: `
        José Martí (1853-1895) fue un destacado poeta, ensayista, periodista y político cubano,
        considerado uno de los grandes héroes nacionales de Cuba. Conocido como "El Apóstol
        de la Independencia", Martí dedicó su vida a la lucha por la independencia de Cuba del dominio
        español.
        <br><br>
        Es muy habitual encontrar bustos, carteles o estatuas de este héroe nacional. En Cienfuegos el parque donde
        se encuentran los principales edificios históricos de la ciudad lleva su nombre y en el centro de la misma podemos
        encontrar esta escultura.
        `,
        en: `José Martí (1853-1895) was a prominent Cuban poet, essayist, journalist, and politician, considered one of Cuba's greatest national heroes. Known as "The Apostle of Independence," Martí dedicated his life to the struggle for Cuba's independence from Spanish rule. <br><br> It is very common to find busts, posters, or statues of this national hero. In Cienfuegos, the park where the main historical buildings of the city are located bears his name, and in the center of it, we can find this sculpture.`,
      },
    },
    coordinates: [22.145973, -80.452979],
  },
  {
    popupContent: {
      title: {
        es: 'Casa Ferrer',
        en: 'Ferrer House',
      },
      imgUrl: 'assets/pictures/museo.webp',
      alt: 'marti',
      description: {
        es: `
        La Casa Ferrer fue una residencia privada, pero con el tiempo ha sido utilizada para diversos
        propósitos. Actualmente, después de una serie de restauraciones, el edificio alberga la sede de la
        Oficina de Conservación y Restauración de Cienfuegos, además de ser un centro cultural y artístico.
        <br><br>

        El movimiento cultural de Cienfuegos es vibrante y
        diverso, reflejando tanto sus raíces históricas como su dinamismo contemporáneo. Cienfuegos
        ha sido un crisol de influencias culturales desde su fundación en 1819
        por colonos franceses, lo que ha dejado una marca indeleble en su desarrollo cultural y artístico.
        `,
        en: `Casa Ferrer was a private residence, but over time it has been used for various
        purposes. Currently, after a series of restorations, the building houses the headquarters of the
        Office of Conservation and Restoration of Cienfuegos, as well as being a cultural and artistic center.
        <br><br>

        The cultural movement of Cienfuegos is vibrant and
        diverse, reflecting both its historical roots and its contemporary dynamism. Cienfuegos
        has been a melting pot of cultural influences since its founding in 1819
        by French settlers, leaving an indelible mark on its cultural and artistic development.`,
      },
    },
    coordinates: [22.146169, -80.452045],
  },
  {
    popupContent: {
      title: {
        es: 'Calle Obispo',
        en: 'Obispo Street',
      },
      imgUrl: 'assets/pictures/obispo.webp',
      alt: 'obispo',
      description: {
        es: `
        La calle Obispo es una de las arterias más famosas y transitadas de La Habana Vieja, Cuba.
        Esta vía peatonal, que se extiende desde la Plaza de Armas hasta la Avenida del Puerto, es un bullicioso corredor que refleja la rica historia
        y la vibrante vida cultural de la ciudad.
        <br><br>

        La calle está flanqueada por edificios de estilo colonial y neoclásico, muchos de los cuales han
        sido restaurados para preservar su valor histórico. Las fachadas coloridas, los balcones de hierro
        forjado y las puertas de madera tallada crean un ambiente pintoresco y encantador. El pavimento
        adoquinado y la estrechez de la calle contribuyen a su atmósfera acogedora y peatonal.        `,
        en: `Obispo Street is one of the most famous and busiest thoroughfares in Old Havana, Cuba.
        This pedestrian thoroughfare, which extends from Plaza de Armas to Avenida del Puerto, is a bustling corridor that reflects the rich history
        and vibrant cultural life of the city.
        <br><br>

        The street is lined with colonial and neoclassical buildings, many of which have
        been restored to preserve their historical value. The colorful facades, wrought iron balconies,
        and carved wooden doors create a picturesque and charming atmosphere. The cobblestone pavement
        and the narrowness of the street contribute to its cozy and pedestrian-friendly atmosphere.`,
      },
    },
    coordinates: [23.137564, -82.356947],
  },
  {
    popupContent: {
      title: {
        es: 'Plataneras',
        en: 'Sycamores',
      },
      imgUrl: 'assets/pictures/topes-2.webp',
      alt: 'obispo',
      description: {
        es: `
        Las plantaciones de plátano en Cuba son una parte vital de la agricultura y la economía de la isla.
        El plátano es uno de los cultivos más importantes del país, tanto para el consumo local como para
        la exportación.
        <br><br>
        En Cuba se cultivan varias variedades de plátano, tanto de plátano macho (utilizado generalmente
        para cocinar) como de plátano fruta (consumido crudo). Algunas de las variedades más comunes
        incluyen el plátano burro, el plátano macho y el plátano enano. Cada variedad tiene características específicas en cuanto a tamaño, sabor y usos culinarios.        `,
        en: `Banana plantations in Cuba are a vital part of the island's agriculture and economy. Bananas are one of the country's most important crops, both for local consumption and for export. <br><br> Several varieties of bananas are cultivated in Cuba, both plantains (usually used for cooking) and dessert bananas (consumed raw). Some of the most common varieties include burro bananas, plantains, and dwarf bananas. Each variety has specific characteristics in terms of size, flavor, and culinary uses.`,
      },
    },
    coordinates: [21.962393, -80.061878],
  },
  {
    popupContent: {
      title: {
        es: 'Topes de Collantes',
        en: 'Topes de Collantes',
      },
      imgUrl: 'assets/pictures/topes.webp',
      alt: 'collantes',
      description: {
        es: `
        Topes de Collantes es una reserva natural ubicada en las montañas del Escambray, en la provincia de
        Sancti Spíritus, Cuba. Esta área protegida es famosa por su exuberante vegetación, cascadas, ríos y
        cuevas, así como por su diversidad de flora y fauna. Es un destino popular para el ecoturismo y el
        senderismo, ofreciendo a los visitantes la oportunidad de explorar la belleza natural de Cuba.
        <br><br>
        El Salto del Venado es una de las cascadas más impresionantes de Topes de Collantes.
        Se encuentra enclavado en un hermoso entorno natural y es accesible a través de un sendero
        moderado desde el centro de visitantes. La cascada cae en una piscina natural, ofreciendo a los
        visitantes la oportunidad de nadar y refrescarse en sus aguas cristalinas.
        `,
        en: `Topes de Collantes is a natural reserve located in the Escambray Mountains, in the province of Sancti Spíritus, Cuba. This protected area is famous for its lush vegetation, waterfalls, rivers, and caves, as well as its diversity of flora and fauna. It is a popular destination for ecotourism and hiking, offering visitors the opportunity to explore Cuba's natural beauty. <br><br> El Salto del Venado is one of the most impressive waterfalls in Topes de Collantes. It is nestled in a beautiful natural setting and is accessible via a moderate trail from the visitor center. The waterfall cascades into a natural pool, offering visitors the opportunity to swim and cool off in its crystal-clear waters.`,
      },
    },
    coordinates: [21.965210, -80.058220],
  },
  {
    popupContent: {
      title: {
        es: 'Trinidad',
        en: 'Trinidad',
      },
      imgUrl: 'assets/pictures/trinidad.webp',
      alt: 'trinidad',
      description: {
        es: `
        Trinidad fue fundada en 1514 por el conquistador español Diego Velázquez de Cuéllar.
        Durante los siglos XVI y XVII, la ciudad prosperó gracias a la industria azucarera y
        el comercio de esclavos. Este período de riqueza se refleja en su impresionante arquitectura
        colonial, con calles empedradas, plazas adoquinadas y coloridas casas coloniales con techos de
        tejas rojas.
        <br><br>
        La Plaza Mayor, el corazón de Trinidad, está rodeada por elegantes edificios coloniales
        y es un lugar emblemático para los visitantes.
        Es un tesoro histórico y cultural que ha sido declarado Patrimonio de la Humanidad por la UNESCO.
        `,
        en: `Trinidad was founded in 1514 by the Spanish conquistador Diego Velázquez de Cuéllar. During the 16th and 17th centuries, the city thrived due to the sugar industry and the slave trade. This period of wealth is reflected in its impressive colonial architecture, with cobblestone streets, paved squares, and colorful colonial houses with red tile roofs. <br><br> The Plaza Mayor, the heart of Trinidad, is surrounded by elegant colonial buildings and is a landmark for visitors. It is a historical and cultural treasure that has been declared a UNESCO World Heritage Site.`,
      },
    },
    coordinates: [21.804981, -79.984109],
  },
  {
    popupContent: {
      title: {
        es: 'Universidad de La Habana',
        en: 'Habana University',
      },
      imgUrl: 'assets/pictures/universidad.webp',
      alt: 'universidad',
      description: {
        es: `
        La Universidad de La Habana, fundada en 1728, es una institución académica destacada en Cuba y
        una de las más antiguas de América Latina. Reconocida por su excelencia académica, investigación
        innovadora y compromiso social, la universidad es un centro de educación superior que promueve la
        equidad y la internacionalización, mientras enriquece la vida cultural de la región. Con una rica
        historia y un legado de liderazgo, la Universidad de La Habana es un símbolo de orgullo nacional y
        un faro de aprendizaje e innovación en Cuba.
        `,
        en: `La Universidad de La Habana, founded in 1728, is a prominent academic institution in Cuba and one of the oldest in Latin America. Recognized for its academic excellence, innovative research, and social commitment, the university is a center of higher education that promotes equity and internationalization while enriching the cultural life of the region. With a rich history and a legacy of leadership, the University of Havana is a symbol of national pride and a beacon of learning and innovation in Cuba.
        `,
      },
    },
    coordinates: [23.136071, -82.381981],
  },
  {
    popupContent: {
      title: {
        es: 'Valle de Viñales',
        en: 'Viñales Valley',
      },
      imgUrl: 'assets/pictures/viñales-1.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/test-vid.mp4', type: 'video',  controls: true, mute: true },
          { src: 'assets/pictures/test-pic.jpg', type: 'img' },
          { src: 'assets/pictures/cementerio.webp', type: 'img' },
        ]
      },
      alt: 'vinales',
      description: {
        es: `

        El Valle de Viñales, ubicado en la provincia de Pinar del Río en el extremo oeste de Cuba,
        es un espectacular paisaje karstico reconocido como Patrimonio de la Humanidad por
        la UNESCO desde 1999.
        <br><br>
        El valle ofrece paisajes impresionantes que incluyen exuberantes campos de cultivo, palmares,
        cuevas y mogotes que se elevan majestuosamente desde el suelo. La vista panorámica desde los
        miradores es simplemente impresionante, con la combinación de colores de la vegetación y los
        mogotes creando una postal inolvidable.
        `,
        en: `The Viñales Valley, located in the province of Pinar del Río in the westernmost part of Cuba,
        is a spectacular karst landscape recognized as a UNESCO World Heritage Site since 1999.
        <br><br>
        The valley offers breathtaking landscapes that include lush fields, palm groves,
        caves, and mogotes that rise majestically from the ground. The panoramic view from the
        lookout points is simply stunning, with the combination of colors from the vegetation and the
        mogotes creating an unforgettable postcard.
        `,
      },
    },
    coordinates: [22.596526, -83.724505],
  },
  {
    popupContent: {
      title: {
        es: 'Ciénaga de Zapata',
        en: 'Zapata Swamp',
      },
      imgUrl: 'assets/pictures/zapata.webp',
      alt: 'vinales',
      description: {
        es: `
        La Ciénaga de Zapata es conocida por su extraordinaria biodiversidad, siendo uno de los ecosistemas
        más diversos de Cuba y del Caribe. Alberga una gran variedad de hábitats, incluyendo bosques de
        mangle, marismas, lagunas costeras, manglares y áreas de sabana, que proporcionan refugio y
        alimentación para una amplia gama de especies de flora y fauna.
        <br><br>
        Disfrutamos de una visita guiada en coche de época por este parque nacional, donde pudimos divisar
        diferentes especies de aves como flamenco, garzas o gavilán colilargo.
        `,
        en: `
        The Zapata Swamp is known for its extraordinary biodiversity, being one of the most diverse ecosystems
        in Cuba and the Caribbean. It hosts a wide variety of habitats, including mangrove forests,
        marshes, coastal lagoons, mangroves, and savannah areas, which provide shelter and
        food for a wide range of flora and fauna species.
        <br><br>
        We enjoyed a guided tour by vintage car through this national park, where we were able to spot
        different bird species such as flamingos, herons, or long-legged hawks.


        `,
      },
    },
    coordinates: [22.275483, -81.220244],
  },
];

export const cities: Cities[] = [
  { name: 'La Habana', coords: latLng(23.1136, -82.3666) },
  { name: 'Viñales', coords: latLng(22.6173, -83.7075) },
  { name: 'Playa Larga', coords: latLng(22.2875, -81.2020) },
  { name: 'Cienfuegos', coords: latLng(22.149, -80.4433) },
  { name: 'Trinidad', coords: latLng(21.8048, -79.9834) },
  { name: 'Cayo Santa María', coords: latLng(22.6204, -79.1474) },
  { name: 'La Habana', coords: latLng(23.1136, -82.3666) }
];
