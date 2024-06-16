import { LatLng, latLng } from 'leaflet';
import { PointContent } from '../app/interfaces/pointContent.interface';

interface MarkerData {
  pointContent: PointContent;
  coordinates: [number, number];
}

interface Cities {
  name: string;
  coords: LatLng;
}

export const markerData1: MarkerData[] = [
  {
    pointContent: {
      title: {
        es: 'Centro Habana',
        en: 'Habana Centre',
      },
      imgUrl: 'assets/pictures/habana/old_havana.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/old_havana.webp', type: 'img' },
          { src: 'assets/pictures/habana/old_havana_2.webp', type: 'img' },
          { src: 'assets/pictures/habana/old_havana_3.webp', type: 'img' },
          { src: 'assets/pictures/habana/lada.webp', type: 'img' },
        ],
      },
      place: {
        en: 'La Habana',
        es: 'La Habana',
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
    pointContent: {
      title: {
        es: 'Playa Ancón',
        en: 'Ancon Beach',
      },
      imgUrl: 'assets/pictures/otros/ancoa.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/otros/ancoa.webp', type: 'img' },
          { src: 'assets/pictures/otros/ancoa_2.webp', type: 'img' },
          { src: 'assets/pictures/otros/g-ancoa.webm', type: 'video' },
        ],
      },
      place: {
        en: 'Ancon, Sancti Spíritus',
        es: 'Ancon, Sancti Spiritus',
      },
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
    pointContent: {
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
    pointContent: {
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
    pointContent: {
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
    pointContent: {
      title: {
        es: 'Centro Habana',
        en: 'Habana Centre',
      },
      imgUrl: 'assets/pictures/habana/old_havana.webp',
      alt: 'galiano',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/old_havana.webp', type: 'img' },
          { src: 'assets/pictures/habana/old_havana_2.webp', type: 'img' },
          { src: 'assets/pictures/habana/old_havana_3.webp', type: 'img' },
          { src: 'assets/pictures/habana/lada.webp', type: 'img' },
        ],
      },
      place: {
        en: 'La Habana',
        es: 'La Habana',
      },
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
    pointContent: {
      title: {
        es: 'Plaza Vieja',
        en: 'Plaza Vieja',
      },
      imgUrl: 'assets/pictures/habana/plaza-vieja.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/plaza-vieja.webp', type: 'img' },
          {
            src: 'assets/pictures/habana/plaza-vieja-mov.webm',
            type: 'video',
            controls: true,
          },
        ],
      },
      place: {
        en: 'La Habana',
        es: 'La Habana',
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
    pointContent: {
      title: {
        es: 'Playa Ancón',
        en: 'Ancon Beach',
      },
      imgUrl: 'assets/pictures/otros/ancoa.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/otros/ancoa.webp', type: 'img' },
          { src: 'assets/pictures/otros/ancoa_2.webp', type: 'img' },
          { src: 'assets/pictures/otros/g-ancoa.webm', type: 'video' },
        ],
      },
      place: {
        en: 'Ancón, Sancti Spíritus',
        es: 'Ancon, Sancti Spiritus',
      },
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
    pointContent: {
      title: {
        es: 'Cayo Santa María',
        en: 'Cayo Santa Maria',
      },
      imgUrl: 'assets/pictures/cayo/cayo.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/cayo/cayo.webp', type: 'img' },
          { src: 'assets/pictures/cayo/cayo_3.webp', type: 'img' },
          { src: 'assets/pictures/cayo/cayo_2.webm', type: 'video' },
          { src: 'assets/pictures/cayo/cayo.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Cayo Santa María, Villa Clara',
        en: 'Santa Maria Cayo, Villa Clara',
      },
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
    pointContent: {
      title: {
        es: 'Necrópolis de Cristobal Colón',
        en: 'Colon Cemetery',
      },
      imgUrl: 'assets/pictures/habana/cementerio.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/cementerio.webp', type: 'img' },
          { src: 'assets/pictures/habana/cementerio-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/cementerio-3.webp', type: 'img' },
          { src: 'assets/pictures/habana/cementerio-4.webp', type: 'img' },
          { src: 'assets/pictures/habana/cementerio-6.webp', type: 'img' },
        ],
      },
      place: {
        es: 'El Vedado, La Habana',
        en: 'El Vedado, La Habana',
      },
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
    pointContent: {
      title: {
        es: 'La Perla del Sur',
        en: 'The Pearl of the South',
      },
      imgUrl: 'assets/pictures/cienfuegos/cienfuegos.webp',
      alt: 'cienfuegos',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/cienfuegos.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/cienfuegos_1.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/cienfuegos_2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/cienfuegos_3.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Cienfuegos',
        en: 'Cienfuegos',
      },
      description: {
        es: `
        Cienfuegos es La Perla del Sur de Cuba. Hermosa ciudad fundada por franceses en el siglo XIX y
        declarada patrimonio de la humanidad por la UNESCO, gracias a su marcado estilo neoclasicista y
        trazado urbano dispuesto en cuadrículas. El estilo de vida nos sorprendió gratamente, a pesar de
        la situación social que atraviesa la isla en el momento de nuestra visita.
        <br><br>
        La ciudad, el malecón e incluso algunos establecimientos rebosan de gente, demostrando el vibrante espíritu de sus
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
    pointContent: {
      title: {
        es: 'Paseo del Prado',
        en: 'Prado Avenue',
      },
      imgUrl: 'assets/pictures/cienfuegos/boulevard.webp',
      alt: 'prado',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/boulevard.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/boulevard_2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/boulevard_3.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/boulevard_4.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/boulevard_5.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-boulevard-2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-boulevard.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Paseo del Prado, Cienfuegos',
        en: 'Prado Avenue, Cienfuegos',
      },
      description: {
        es: `
        El Paseo del Prado de Cienfuegos es una de las avenidas más emblemáticas de la ciudad, famosa por su belleza y su valor histórico. Se extiende a lo largo de aproximadamente 2 kilómetros desde la calle 37, cerca del Parque Martí en el centro de la ciudad, hasta el malecón que bordea la bahía de Cienfuegos.
        <br><br>
        El Paseo del Prado no solo es un centro de actividad social y cultural, sino también un reflejo del crecimiento y desarrollo urbano de Cienfuegos desde su fundación en 1819 por colonos franceses. La planificación de la ciudad, con sus amplias calles y avenidas, es un testimonio del enfoque visionario de sus fundadores.        `,
        en: `
        The Paseo del Prado in Cienfuegos is one of the most emblematic avenues in the city, famous for its beauty and historical value. It extends for approximately 2 kilometers from 37th Street, near Parque Martí in the city center, to the malecón that borders the Bay of Cienfuegos.
        <br><br>
        The Paseo del Prado is not only a center of social and cultural activity, but also a reflection of the growth and urban development of Cienfuegos since its founding in 1819 by French settlers. The city's layout, with its wide streets and avenues, is a testament to the visionary approach of its founders.
        `,
      },
    },
    coordinates: [22.142606, -80.448656],
  },
  {
    pointContent: {
      title: {
        es: 'Malecón',
        en: 'Malecon',
      },
      imgUrl: 'assets/pictures/cienfuegos/malecon_1.webp',
      alt: 'prado',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/malecon_1.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/malecon_2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-malecom.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Malecón, Cienfuegos',
        en: 'Malecon, Cienfuegos',
      },
      description: {
        es: `
        El Malecón de Cienfuegos es un famoso paseo marítimo que se extiende a lo largo de la bahía de Cienfuegos, ofreciendo impresionantes vistas del mar y la ciudad. Es un lugar popular tanto para los residentes como para los turistas, y es conocido por su belleza escénica y su atmósfera relajante.
        <br><br>
        El malecón está estratégicamente ubicado, conectando el centro de la ciudad con la bahía. Es fácilmente accesible y se encuentra cerca de otros puntos de interés importantes de Cienfuegos, lo que lo convierte en una parada obligada para quienes visitan la ciudad.                `,
        en: `
        The Malecón of Cienfuegos is a famous seaside promenade that stretches along the Bay of Cienfuegos, offering stunning views of the sea and the city. It is a popular spot for both locals and tourists, known for its scenic beauty and relaxing atmosphere.
        <br><br>
        The malecón is strategically located, connecting the city center with the bay. It is easily accessible and close to other major points of interest in Cienfuegos, making it a must-visit for those exploring the city.
        `,
      },
    },
    coordinates: [22.136209, -80.449489],
  },
  {
    pointContent: {
      title: {
        es: 'Punta Gorda',
        en: 'Punta Gorda',
      },
      imgUrl: 'assets/pictures/cienfuegos/punta_gorda.webp',
      alt: 'punta-gorda',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/punta_gorda.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-punta-gorda.webp', type: 'img' },
          {
            src: 'assets/pictures/cienfuegos/g-punta-gorda-2.webp',
            type: 'img',
          },
          {
            src: 'assets/pictures/cienfuegos/g-punta-gorda-3.webm',
            type: 'video',
          },
          {
            src: 'assets/pictures/cienfuegos/g-punta-gorda-4.webp',
            type: 'img',
          },
        ],
      },
      place: {
        es: 'Punta Gorda, Cienfuegos',
        en: 'Punta Gorda, Cienfuegos',
      },
      description: {
        es: `
        Punta Gorda es un encantador barrio residencial en Cienfuegos, Cuba, conocido por sus hermosas mansiones de estilo ecléctico y su ubicación privilegiada en una península que se adentra en la Bahía de Cienfuegos. Este área es famosa por su tranquilidad, sus vistas espectaculares del mar y sus pintorescas calles bordeadas de palmeras. Entre los puntos de interés destaca el Palacio de Valle, una joya arquitectónica con influencias góticas, románicas, barrocas y mudéjares, que ahora funciona como restaurante y bar.
        `,
        en: `
        Punta Gorda is a charming residential neighborhood in Cienfuegos, Cuba, known for its beautiful eclectic-style mansions and its prime location on a peninsula jutting into the Bay of Cienfuegos. This area is famous for its tranquility, spectacular sea views, and picturesque palm-lined streets. Highlights include the Palacio de Valle, an architectural gem with Gothic, Romanesque, Baroque, and Mudejar influences, now serving as a restaurant and bar.        `,
      },
    },
    coordinates: [22.123104, -80.45095],
  },
  {
    pointContent: {
      title: {
        es: 'Piña Colada',
        en: 'Pina Colada',
      },
      imgUrl: 'assets/pictures/cienfuegos/puerto.webp',
      alt: 'pina-colada',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/puerto.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/puerto_2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-puerto.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Muelle Real, Cienfuegos',
        en: 'Muelle Real, Cienfuegos',
      },
      description: {
        es: `
        La zona del Muelle Real en Cienfuegos es un área vibrante y pintoresca ubicada junto a la bahía. Este histórico muelle, originalmente construido en el siglo XIX, es un punto central de actividad en la ciudad, tanto para los locales como para los turistas. Con sus vistas panorámicas de la bahía y la ciudad, el Muelle Real ofrece un ambiente relajante y es un lugar perfecto para pasear, disfrutar de la brisa marina y observar los barcos.        `,
        en: `
        The Muelle Real area in Cienfuegos is a vibrant and picturesque spot located next to the bay. This historic pier, originally built in the 19th century, is a central hub of activity in the city for both locals and tourists. With its panoramic views of the bay and the city, Muelle Real offers a relaxing atmosphere, perfect for strolling, enjoying the sea breeze, and watching the boats.`,
      },
    },
    coordinates: [22.141316, -80.45257],
  },
  {
    pointContent: {
      title: {
        es: 'Cotorra cubana',
        en: 'Cuban parrot',
      },
      imgUrl: 'assets/pictures/playa-larga/coti.webp',
      alt: 'coti',
      galleryData: {
        media: [
          { src: 'assets/pictures/playa-larga/coti.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/coti_2.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/g-coti-2.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Playa Larga',
        en: 'Playa Larga',
      },
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
    pointContent: {
      title: {
        es: 'Cueva de los Peces',
        en: `Fish's Cave`,
      },
      imgUrl: 'assets/pictures/playa-larga/g-cueva-agua-2.webp',
      alt: 'coti',
      galleryData: {
        media: [
          {
            src: 'assets/pictures/playa-larga/g-cueva-agua-2.webp',
            type: 'img',
          },
          {
            src: 'assets/pictures/playa-larga/g-cueva-agua-3.webp',
            type: 'img',
          },
          {
            src: 'assets/pictures/playa-larga/g-video-converted.webm',
            type: 'video',
          },
          {
            src: 'assets/pictures/playa-larga/g-cueva-agua-3.webm',
            type: 'video',
          },
        ],
      },
      place: {
        es: 'Playa Larga, Matanzas',
        en: 'Playa Larga, Matanzas',
      },
      description: {
        es: `
        La Cueva de los Peces es una cueva inundada parcialmente, formada por la erosión kárstica típica de la región. Esta cueva se ha llenado de agua cristalina que proviene de una abertura natural en el techo, formando así una especie de piscina natural subterránea (ver video).
        <br><br>
        Frente a este cenote, existe una zona coralina donde practicamos snorkel, divisando una gran variedad de peces y corales, además la temperatura del agua era ideal. Posiblemente fue la actividad más interesante que hicimos en todo el viaje.
        `,
        en: `
        The Cueva de los Peces is a partially flooded cave, formed by the typical karst erosion of the region. This cave has filled with crystal-clear water that comes from a natural opening in the ceiling, forming a kind of underground natural pool (see video).
        <br><br>
        In front of this cenote, there is a coral area where we practiced snorkeling, spotting a wide variety of fish and corals; moreover, the water temperature was ideal. It was possibly the most interesting activity we did throughout the trip.
        `,
      },
    },
    coordinates: [22.166636, -81.137589],
  },
  {
    pointContent: {
      title: {
        es: 'Palacio de los Capitanes Generales',
        en: 'Palace of the Captains General',
      },
      imgUrl: 'assets/pictures/habana/generales.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/generales.webp', type: 'img' },
          { src: 'assets/pictures/habana/plaza-armas-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/plaza-armas-3.webp', type: 'img' },
          { src: 'assets/pictures/habana/plaza-armas-mov.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Vieja Habana, La Habana',
        en: 'Old Havana, Havana',
      },
      alt: 'generales',
      description: {
        es: `
        El Palacio de los Capitanes Generales, situado en la Plaza de Armas, sirvió como residencia oficial de los capitanes generales, quienes
        eran los máximos representantes de la autoridad española en la isla. Además de ser la sede del
        gobierno colonial, el edificio también albergó la Casa de Gobierno y la Real Audiencia de La Habana,
        desempeñando un papel central en la administración de la colonia. Este edificio es un buen ejemplo de la arquitectura barroca cubana.
        <br><br>
        Con la independencia de Cuba en 1898, el palacio pasó a ser la residencia de los gobernadores cubanos
        y más tarde, de los presidentes de la república. En 1902, después de la independencia, el edificio
        fue adaptado para ser utilizado como Palacio Presidencial hasta 1920, cuando se trasladó a otro
        lugar. A día de hoy este edificio alberga el Museo de la Ciudad de La Habana.

        `,
        en: `
        The Palace of the Captains General, located in the Plaza de Armas, served as the official residence of the captains general, who were the highest representatives of Spanish authority on the island. In addition to being the seat of the colonial government, the building also housed the Government House and the Royal Audience of Havana, playing a central role in the administration of the colony. This building is a fine example of Cuban Baroque architecture.
        <br><br>
        With Cuba's independence in 1898, the palace became the residence of Cuban governors and later, of the presidents of the republic. In 1902, after independence, the building was adapted to be used as the Presidential Palace until 1920, when it was moved to another location. Today, this building houses the Museum of the City of Havana.        `,
      },
    },
    coordinates: [23.140022, -82.349811],
  },
  {
    pointContent: {
      title: {
        es: 'Plaza de la Revolución',
        en: 'Revolution Square',
      },
      imgUrl: 'assets/pictures/habana/revolucion.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/revolucion.webp', type: 'img' },
          { src: 'assets/pictures/habana/revolucion-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-revolucion.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-revolucion-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-revolucion-1.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Plaza de La Revolución, La Habana',
        en: 'Revolution Square, Havana',
      },
      alt: 'revolucion',
      description: {
        es: `
        La Plaza de la Revolución es un símbolo del proceso revolucionario cubano y ha sido testigo de muchos momentos cruciales en la historia del país. Su construcción comenzó en la década de 1950 bajo el régimen de Fulgencio Batista y fue finalizada después del triunfo de la Revolución en 1959. Desde entonces, ha sido un lugar central para las manifestaciones políticas y eventos nacionales.        <br><br>
        Además de su importancia histórica y política, la Plaza de la Revolución es una atracción turística popular. Los visitantes pueden explorar los monumentos, aprender sobre la historia cubana en el museo de José Martí, y disfrutar de las vistas desde la torre.
        `,
        en: `
        The Plaza de la Revolución is a symbol of the Cuban revolutionary process and has witnessed many crucial moments in the country's history. Its construction began in the 1950s under the regime of Fulgencio Batista and was completed after the triumph of the Revolution in 1959. Since then, it has been a central location for political rallies and national events.
        <br><br>
        In addition to its historical and political significance, the Plaza de la Revolución is a popular tourist attraction. Visitors can explore the monuments, learn about Cuban history at the José Martí museum, and enjoy the views from the tower.
        `,
      },
    },
    coordinates: [23.124439, -82.385995],
  },
  {
    pointContent: {
      title: {
        es: 'Habana Vieja',
        en: 'Old Habana',
      },
      imgUrl: 'assets/pictures/habana/habana-vieja.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/habana-vieja.webp', type: 'img' },
          { src: 'assets/pictures/habana/bodeguita.webp', type: 'img' },
          { src: 'assets/pictures/habana/lada.webp', type: 'img' },
          { src: 'assets/pictures/habana/obispo-1.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-old-havana.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Habana Vieja, La Habana',
        en: 'Old Havana, Havana',
      },
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
    coordinates: [23.139824, -82.351713],
  },
  {
    pointContent: {
      title: {
        es: 'Capitolio',
        en: 'Capitol',
      },
      imgUrl: 'assets/pictures/habana/g-capitolio.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/g-capitolio.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-capitolio-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-capitolio.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Habana Centro, La Habana',
        en: 'Center Habana, Havana',
      },
      alt: 'capitol',
      description: {
        es: `
        El Capitolio de La Habana es uno de los edificios más icónicos y emblemáticos de la ciudad. Inspirado en el Capitolio de los Estados Unidos en Washington D.C., fue inaugurado en 1929 como sede del Congreso cubano hasta 1959.
        <br><br>
        Está fuertemente custodiado, tanto es así que solo hacer el intento de aproximarse a la escalinata suponía una advertencia por parte de los miembros de seguridad. Como dato curioso, el capitolio cubano mide un metro más, tanto de alto como de ancho, que el capitolio americano.
        `,
        en: `
        The Capitol of Havana is one of the most iconic and emblematic buildings in the city. Inspired by the United States Capitol in Washington D.C., it was inaugurated in 1929 as the seat of the Cuban Congress until 1959.
        <br><br>
        It is heavily guarded, to the extent that even attempting to approach the steps was a warning from security personnel. As a curious fact, the Cuban Capitol is one meter taller and wider than the American Capitol.        `,
      },
    },
    coordinates: [23.135332, -82.358948],
  },
  {
    pointContent: {
      title: {
        es: 'Callejón de Hamel',
        en: 'Hamel Alley',
      },
      imgUrl: 'assets/pictures/habana/callejon.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/callejon.webp', type: 'img' },
          { src: 'assets/pictures/habana/callejon-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-humbold.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Cayo Hueso, La Habana',
        en: 'Cayo Hueso, Havana',
      },
      alt: 'capitol',
      description: {
        es: `
        El Callejón de Hamel es un callejón estrecho y colorido ubicado en el barrio de Cayo Hueso en La Habana, Cuba. Es un lugar emblemático que celebra la cultura afrocubana y la santería a través del arte callejero y las expresiones artísticas.        <br><br>
        El Callejón de Hamel no solo es un espacio artístico, sino también un símbolo de la diversidad cultural y la resistencia afrocubana en Cuba. Es un lugar donde el arte y la espiritualidad se entrelazan para contar la historia de una comunidad que ha contribuido significativamente a la identidad cubana.        `,
        en: `
        The Callejón de Hamel is a narrow and colorful alley located in the Cayo Hueso neighborhood in Havana, Cuba. It is an emblematic place that celebrates Afro-Cuban culture and Santería through street art and artistic expressions.
        <br><br>
        The Callejón de Hamel is not only an artistic space but also a symbol of cultural diversity and Afro-Cuban resistance in Cuba. It is a place where art and spirituality intertwine to tell the story of a community that has significantly contributed to Cuban identity.
        `,
      },
    },
    coordinates: [23.138505, -82.376046],
  },
  {
    pointContent: {
      title: {
        es: 'Parque Central',
        en: 'Central Park',
      },
      imgUrl: 'assets/pictures/habana/parque_central.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/parque_central.webp', type: 'img' },
          { src: 'assets/pictures/habana/parque_centra_2.webp', type: 'img' },
          {
            src: 'assets/pictures/habana/g-parque-central-2.webp',
            type: 'img',
          },
          { src: 'assets/pictures/habana/g-parque-central.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Habana Centro, La Habana',
        en: 'Center Habana, Havana',
      },
      alt: 'capitol',
      description: {
        es: `
        El Parque Central es uno de los sitios más conocidos y céntricos de la ciudad de La Habana. Su construcción fue terminada en el año 1877 luego de que fueron derribadas las murallas que rodeaban la ciudad. Se encuentra ubicado entre las calles Prado, Neptuno, Zulueta y San José, y el bulevar de San Rafael termina frente a este.
        <br><br>
        Entre los edificios que rodean al parque se encuentran el Gran Teatro de La Habana Alicia Alonso, el Hotel Inglaterra, el Hotel Telégrafo, el Hotel Parque Central, la Manzana de Gómez, el Hotel Plaza y el Museo Nacional de Bellas Artes edificio de Arte Universal. Se encuentra en las cercanías del Capitolio de La Habana y del Parque de la Fraternidad, pertenecientes al municipio Centro Habana, y de la Calle Obispo, el Hotel Sevilla, el Paseo del Prado y del famoso Bar El Floridita pertenecientes al municipio Habana Vieja, encontrándose el propio parque en los límites de ambos municipios.

        <br><br>
        <a href="https://es.wikipedia.org/wiki/Parque_Central_de_La_Habana" target="_blank">Más sobre Parque Central</a>


        `,

        en: `
        The Parque Central is one of the most well-known and central sites in the city of Havana. Its construction was completed in 1877 after the city walls surrounding the city were demolished. It is located between the streets Prado, Neptuno, Zulueta, and San José, and the boulevard of San Rafael ends in front of it.        <br><br>
        Among the buildings surrounding the park are the Gran Teatro de La Habana Alicia Alonso, Hotel Inglaterra, Hotel Telégrafo, Hotel Parque Central, Manzana de Gómez, Hotel Plaza, and the Museo Nacional de Bellas Artes building of Arte Universal. It is in the vicinity of the Capitolio de La Habana and Parque de la Fraternidad, belonging to the Centro Habana municipality, and near Calle Obispo, Hotel Sevilla, Paseo del Prado, and the famous Bar El Floridita, belonging to the Habana Vieja municipality, with the park itself located on the boundaries of both municipalities.
        <br><br>
        <a href="https://en.wikipedia.org/wiki/Parque_Central,_Havana" target="_blank">More about Central Park</a>

        `,
      },
    },
    coordinates: [23.137616, -82.358502],
  },
  {
    pointContent: {
      title: {
        es: 'Castillo del Morro',
        en: 'Morro Castle',
      },
      imgUrl: 'assets/pictures/habana/g-morro.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/g-morro.webp', type: 'img' },
          { src: 'assets/pictures/habana/g-morro-3.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Habana del Este, La Habana',
        en: 'East Havana, Havana',
      },
      alt: 'morro',
      description: {
        es: `
        El castillo del Morro es uno de los símbolos de la ciudad junto con el Capitolio y la Giraldilla de La Habana, trazado por el ingeniero italiano Bautista Antonelli en 1585 durante el periodo imperial español, su posición estratégica en un cerro fue reconocida casi tan pronto como el puerto de La Habana empezó a adquirir la importancia estratégica que tuvo en la provincia de ultramar española.
        `,
        en: `

        The Morro Castle is one of the symbols of the city along with the Capitol and the Giraldilla of Havana, designed by the Italian engineer Bautista Antonelli in 1585 during the Spanish imperial period. Its strategic position on a hill was recognized almost as soon as the port of Havana began to acquire the strategic importance it had in the Spanish overseas province.
        `,
      },
    },
    coordinates: [23.150038, -82.356595],
  },
  {
    pointContent: {
      title: {
        es: 'Malecón',
        en: 'Malecon',
      },
      imgUrl: 'assets/pictures/habana/malecon-2.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/malecon.webp', type: 'img' },
          { src: 'assets/pictures/habana/malecon-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/malecon-3.webp', type: 'img' },
          {
            src: 'assets/pictures/habana/malecon.webm',
            type: 'video',
            controls: true,
          },
        ],
      },
      place: {
        es: 'Centro Habana, La Habana',
        en: 'Habana Centre, Havana',
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
    pointContent: {
      title: {
        es: 'José Martí',
        en: 'José Martí',
      },
      imgUrl: 'assets/pictures/cienfuegos/marti.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/marti.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-plaza-marti.webp', type: 'img' },
          {
            src: 'assets/pictures/cienfuegos/g-plaza-marti-2.webp',
            type: 'img',
          },
        ],
      },
      place: {
        es: 'Plaza José Martí, Cienfuegos',
        en: 'Plaza Jose Marti, Cienfuegos',
      },
      alt: 'marti',
      description: {
        es: `
        José Martí (1853-1895) fue un destacado poeta, ensayista, periodista y político cubano,
        considerado uno de los grandes héroes nacionales de Cuba. Conocido como "El Apóstol
        de la Independencia", Martí dedicó su vida a la lucha por la independencia de Cuba del dominio
        español. A lo largo y ancho del país, su figura es onmipresente. En Cienfuegos, la plaza más famosa lleva su nombre.
        <br><br>
        Es muy habitual encontrar bustos, carteles o estatuas de este héroe nacional. En Cienfuegos el parque donde
        se encuentran los principales edificios históricos de la ciudad lleva su nombre y en el centro de la misma podemos
        encontrar esta escultura.
        `,
        en: `José Martí (1853-1895) was a prominent Cuban poet, essayist, journalist, and politician, considered one of Cuba's greatest national heroes. Known as "The Apostle of Independence," Martí dedicated his life to the struggle for Cuba's independence from Spanish rule. Throughout the country, his figure is omnipresent. In Cienfuegos, the most famous square bears his name.<br><br> It is very common to find busts, posters, or statues of this national hero. In Cienfuegos, the park where the main historical buildings of the city are located bears his name, and in the center of it, we can find this sculpture.`,
      },
    },
    coordinates: [22.145973, -80.452979],
  },
  {
    pointContent: {
      title: {
        es: 'Casa Ferrer',
        en: 'Ferrer House',
      },
      imgUrl: 'assets/pictures/cienfuegos/museo.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/cienfuegos/museo.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/ferrer_2.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/ferrer_3.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-ferrer-3.webp', type: 'img' },
          { src: 'assets/pictures/cienfuegos/g-ferrer-3.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Plaza José Martí, Cienfuegos',
        en: 'Plaza Jose Marti, Cienfuegos',
      },
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
    coordinates: [22.145778, -80.453997],
  },
  {
    pointContent: {
      title: {
        es: 'Topes de Collantes',
        en: 'Topes de Collantes',
      },
      imgUrl: 'assets/pictures/topes/topes.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/topes/topes.webp', type: 'img' },
          { src: 'assets/pictures/topes/topes_1.webp', type: 'img' },
          { src: 'assets/pictures/topes/g-topes-2.webm', type: 'video' },
          { src: 'assets/pictures/topes/topes_2.webp', type: 'img' },
          { src: 'assets/pictures/topes/topes_3.webp', type: 'img' },
          { src: 'assets/pictures/topes/topes-2.webp', type: 'img' },
          { src: 'assets/pictures/topes/g-topes.webp', type: 'img' },
          { src: 'assets/pictures/topes/g-topes-6.webm', type: 'video' },
          { src: 'assets/pictures/topes/g-topes-3.webp', type: 'img' },
          { src: 'assets/pictures/topes/g-topes-4.webp', type: 'img' },
          { src: 'assets/pictures/topes/g-topes-5.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Sierra Escambray, Sancti Spíritus',
        en: 'Escambray Mountais, Sancti Spiritus',
      },
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
    coordinates: [21.96521, -80.05822],
  },
  {
    pointContent: {
      title: {
        es: 'Trinidad',
        en: 'Trinidad',
      },
      imgUrl: 'assets/pictures/trinidad/trinidad.webp',
      alt: 'trinidad',
      galleryData: {
        media: [
          { src: 'assets/pictures/trinidad/trinidad.webp', type: 'img' },
          { src: 'assets/pictures/trinidad/trinidad_1.webp', type: 'img' },
          { src: 'assets/pictures/trinidad/trinidad_2.webp', type: 'img' },
          { src: 'assets/pictures/trinidad/trinidad_3.webp', type: 'img' },
          { src: 'assets/pictures/trinidad/g-trinidad.webm', type: 'video' },
          { src: 'assets/pictures/trinidad/g-trinidad-2.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Sierra Escambray, Sancti Spíritus',
        en: 'Escambray Mountais, Sancti Spiritus',
      },
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
    pointContent: {
      title: {
        es: 'Universidad de La Habana',
        en: 'Habana University',
      },
      imgUrl: 'assets/pictures/habana/universidad.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/habana/universidad.webp', type: 'img' },
          { src: 'assets/pictures/habana/universidad-2.webp', type: 'img' },
          { src: 'assets/pictures/habana/universidad-3.webp', type: 'img' },
          { src: 'assets/pictures/habana/universidad-4.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Plaza de la Revolución, La Habana',
        en: 'Revolution Square, Havana',
      },
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
    pointContent: {
      title: {
        es: 'Valle de Viñales',
        en: 'Viñales Valley',
      },
      imgUrl: 'assets/pictures/vinales/g-jazmines-1.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/vinales/g-jazmines-1.webp', type: 'img' },
          { src: 'assets/pictures/vinales/viñales-1.webp', type: 'img' },
          { src: 'assets/pictures/vinales/jazmines_2.webp', type: 'img' },
          { src: 'assets/pictures/vinales/jazmines_3.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-jazmines.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-jazmines-2.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Viñales, Pinar del Río',
        en: 'Vinales, Pinar del Rio',
      },
      alt: 'vinales',
      description: {
        es: `

        El Valle de Viñales, ubicado en la provincia de Pinar del Río en el extremo oeste de Cuba,
        es un espectacular paisaje karstico reconocido como Patrimonio de la Humanidad por
        la UNESCO desde 1999.
        <br><br>
        Desde el hotel Los Jazmines se puede divisar paisajes impresionantes que incluyen exuberantes campos de cultivo, palmares,
        cuevas y mogotes que se elevan majestuosamente desde el suelo. La vista panorámica desde los
        miradores del hotel es simplemente impresionante, con la combinación de colores de la vegetación y los
        mogotes creando una postal inolvidable.
        `,
        en: `The Viñales Valley, located in the province of Pinar del Río in the westernmost part of Cuba,
        is a spectacular karst landscape recognized as a UNESCO World Heritage Site since 1999.
        <br><br>
        From Los Jazmines hotel you can see a breathtaking landscapes that include lush fields, palm groves,
        caves, and mogotes that rise majestically from the ground. The panoramic view from the hotel's
        lookout points is simply stunning, with the combination of colors from the vegetation and the
        mogotes creating an unforgettable postcard.
        `,
      },
    },
    coordinates: [22.596526, -83.724505],
  },
  {
    pointContent: {
      title: {
        es: 'Mural de la Prehistoria',
        en: 'Prehistory Mural',
      },
      imgUrl: 'assets/pictures/vinales/mural.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/vinales/mural.webp', type: 'img' },
          { src: 'assets/pictures/vinales/mural_2.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-mural.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Viñales, Pinar del Río',
        en: 'Vinales, Pinar del Rio',
      },
      alt: 'mural',
      description: {
        es: `
        El Mural de la Prehistoria es una obra monumental de arte al aire libre ubicada en el Valle de Viñales, en la provincia de Pinar del Río, Cuba. Esta impresionante pintura mural, realizada sobre las laderas rocosas de la Sierra de los Órganos, es una representación visual de la evolución de la vida en la tierra, desde los tiempos prehistóricos hasta la era moderna.

        <br><br>

        El Mural de la Prehistoria ha perdurado como un testimonio del arte público y la creatividad cubana. Además de su valor estético y cultural, representa un esfuerzo monumental para integrar el arte con el paisaje natural, creando una experiencia visual única que cautiva a quienes lo visitan.
        `,
        en: `
          The Mural of Prehistory is a monumental outdoor art piece located in the Viñales Valley, in the province of Pinar del Río, Cuba. This impressive mural painting, done on the rocky slopes of the Sierra de los Órganos, is a visual representation of the evolution of life on Earth, from prehistoric times to the modern era.

          <br><br>

          The Mural of Prehistory has endured as a testament to public art and Cuban creativity. In addition to its aesthetic and cultural value, it represents a monumental effort to integrate art with the natural landscape, creating a unique visual experience that captivates visitors.
        `,
      },
    },
    coordinates: [22.619167, -83.742237],
  },
  {
    pointContent: {
      title: {
        es: 'Cueva del Indio',
        en: 'Indian cave',
      },
      imgUrl: 'assets/pictures/vinales/g-cueva-1.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/vinales/g-cueva-1.webp', type: 'img' },
          { src: 'assets/pictures/vinales/cueva_indio.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cueva.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cueva-2.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cueva-3.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cueva-4.webp', type: 'img' },
        ],
      },
      place: {
        es: 'Viñales, Pinar del Río',
        en: 'Vinales, Pinar del Rio',
      },
      alt: 'mural',
      description: {
        es: `
        La Cueva del Indio es un antiguo habitáculo indígena ubicado a 5,5 km al norte de Viñales y cercano al pueblo de San Vicente, en uno de los sistemas cavernariosmás importantes de Cuba. La cueva fue hallada en 1920 por un campesino llamado Juan Díaz y desde entonces recibe numerosas visitas.
        <br><br>
        Por su interior discurre el río San Vicente, por el que se puede recorrer un tramo de la cueva en lancha a motor mientras observas la magia que posee este lugar.

        Es un reclamo muy interesante para los visitantes debido a las formaciones geológicas de estalactitas y estalagmitas que se se pueden apreciar dentro de la cueva y que constituyen un precioso espectáculo. La Cueva del Indio está iluminada, lo que permite admirar el interior de esta maravilla natural subterránea.
        `,
        en: `
        The Cueva del Indio is an ancient indigenous dwelling located 5.5 km north of Viñales and near the town of San Vicente, within one of the most important cave systems in Cuba. The cave was discovered in 1920 by a peasant named Juan Díaz and has since received numerous visitors.
        <br><br>
        Inside flows the San Vicente River, where you can navigate a stretch of the cave in a motorboat while observing the magic that this place holds.

        It is a very appealing attraction for visitors due to the geological formations of stalactites and stalagmites that can be appreciated inside the cave, constituting a beautiful spectacle. The Cueva del Indio is illuminated, allowing for the admiration of the interior of this underground natural wonder.

        `,
      },
    },
    coordinates: [22.669599, -83.707533],
  },
  {
    pointContent: {
      title: {
        es: 'Palenque de los Cimarrones',
        en: 'Palenque of the Maroons',
      },
      imgUrl: 'assets/pictures/vinales/g-cimarrones-3.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/vinales/g-cimarrones-1.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cimarrones.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cimarrones-2.webp', type: 'img' },
          { src: 'assets/pictures/vinales/g-cimarrones-3.webp', type: 'img' },
          {
            src: 'assets/pictures/vinales/palenque_cimarrones.webp',
            type: 'img',
          },
        ],
      },
      place: {
        es: 'Viñales, Pinar del Río',
        en: 'Vinales, Pinar del Rio',
      },
      alt: 'mural',
      description: {
        es: `
          Este lugar representa un importante testimonio de la resistencia y la cultura de los esclavos africanos que escaparon de las plantaciones coloniales y formaron comunidades libres conocidas como cimarrones.
          Un cimarrón era un esclavo africano que escapaba de las plantaciones coloniales en América Latina y el Caribe durante el período de la esclavitud. Estos individuos buscaban la libertad formando comunidades autónomas en áreas remotas y de difícil acceso, como montañas, bosques o áreas selváticas. Los cimarrones se resistían activamente al sistema esclavista establecido, luchando por su libertad y autonomía.
          Es un reclamo muy interesante para los visitantes debido a las formaciones geológicas de estalactitas y estalagmitas que se se pueden apreciar dentro de la cueva y que constituyen un precioso espectáculo. La Cueva del Indio está iluminada, lo que permite admirar el interior de esta maravilla natural subterránea.
          <br><br>
          En las montañas y regiones rurales establecían comunidades independientes conocidas como palenques o quilombos, donde practicaban sus propias tradiciones culturales, sociales y religiosas, preservando sus idiomas y costumbres ancestrales.
        `,
        en: `
        This place represents an important testimony of the resistance and culture of African slaves who escaped from colonial plantations and formed free communities known as cimarrones. A cimarrón was an African slave who escaped from colonial plantations in Latin America and the Caribbean during the period of slavery. These individuals sought freedom by forming autonomous communities in remote and hard-to-reach areas such as mountains, forests, or jungle areas. The cimarrones actively resisted the established slave system, fighting for their freedom and autonomy. It is a very appealing attraction for visitors due to the geological formations of stalactites and stalagmites that can be appreciated inside the cave, constituting a beautiful spectacle. The Cueva del Indio is illuminated, allowing for the admiration of the interior of this underground natural wonder. <br><br> In the mountains and rural regions, they established independent communities known as palenques or quilombos, where they practiced their own cultural, social, and religious traditions, preserving their ancestral languages and customs.

        `,
      },
    },
    coordinates: [22.653995, -83.715786],
  },
  {
    pointContent: {
      title: {
        es: 'Ciénaga de Zapata',
        en: 'Zapata Swamp',
      },
      imgUrl: 'assets/pictures/playa-larga/zapata.webp',
      galleryData: {
        media: [
          { src: 'assets/pictures/playa-larga/zapata.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/zapata_2.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/zapata_3.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/zapata_4.webp', type: 'img' },
          { src: 'assets/pictures/playa-larga/g-zapata.webm', type: 'video' },
        ],
      },
      place: {
        es: 'Ciénaga de Zapata, Matanzas',
        en: 'Ciénaga de Zapata, Matanzas',
      },
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
    coordinates: [22.16439, -81.262041],
  },
];

export const cities: Cities[] = [
  { name: 'La Habana', coords: latLng(23.1136, -82.3666) },
  { name: 'Viñales', coords: latLng(22.6173, -83.7075) },
  { name: 'Playa Larga', coords: latLng(22.2875, -81.202) },
  { name: 'Cienfuegos', coords: latLng(22.149, -80.4433) },
  { name: 'Trinidad', coords: latLng(21.8048, -79.9834) },
  { name: 'Cayo Santa María', coords: latLng(22.6204, -79.1474) },
  { name: 'La Habana', coords: latLng(23.1136, -82.3666) },
];
