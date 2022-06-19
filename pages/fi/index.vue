<template>
  <Home body="Itseoppinut intohimoinen verkkokehittäjä, joka rakastaa luomista tyhjästä, ongelmien ratkaisemista ja verkkosivustojen kehittämistä nopeammiksi ja paremmiksi. Vietän suurimman osan päivästäni näytön edessä koodaten metallin ja rokin soidessa taustalla, mutta en kuitenkaan unohda päivittäistä kuntoilua ja metsälenkkejä koiran kanssa. Toimin myös aktiivisesti erilaisissa vapaaehtoistöissä. Mottoni on 'vain tyhmä on huolissaan siitä, mitä hän ei voi hallita'." :lang="lang" :text="[
    'Itseoppinut verkkovelho',
    'Yrittäjä ja sijoittaja',
    'Luonnon ja eläinten ystävä',
  ]" />
</template>

<script>
export default {
  name: "HomeFI",
  data() {
    return {
      title: "Timo Anttila | Kaikki alkaa unelmasta!",
      description:
        "Timo Anttila on itseoppinut intohimoinen verkkokehittäjä, joka rakastaa luomista, ongelmien ratkaisemista ja verkkosivustojen kehittämistä nopeammiksi ja paremmiksi.",
      url: "https://timoanttila.com/fi",
      lang: "fi",
    };
  },
  head() {
    return {
      htmlAttrs: { lang: this.lang },
      title: this.title,
      link: [
        {
          rel: "canonical",
          property: "og:url",
          href: this.url,
        },
        {
          rel: "me",
          type: "application/atom+xml",
          href: "https://github.com/timoanttila/timoanttila/commits/master.atom",
          title: "Uusimmat muutokset projektiin",
        },
        {
          rel: "me",
          type: "text/html",
          href: "https://tuspe.com/",
          title: "Minun yritykseni Tuspe Design Oy",
        },
      ],
      meta: [
        { property: "og:locale", content: "fi_FI" },
        {
          property: "og:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "homefi",
          name: "description",
          content: this.description,
        },
        {
          name: "twitter:description",
          property: "og:description",
          content: this.description,
        },
      ],
    };
  },
};
</script>
