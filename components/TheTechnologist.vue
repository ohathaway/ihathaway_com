<template>
  <section id="technologist">
    <div class="row role-even role-info py-4 px-3 p-lg-8">
      <header class="role-even role-name col-lg-3 order-lg-1">
        <h1>
          <div class="fa-layers fa-fw d-lg-none pe-3">
            <font-awesome-icon icon="fa-solid fa-circle"
                               inverse
                               transform="grow-12"
            />
            <font-awesome-icon icon="fa-solid fa-play"
                                rotation="270"
                                transform="grow-10 up-2"
            />
            <font-awesome-icon icon="fa-solid fa-database"
                               inverse
                               transform="shrink-11 up-4"
            />
            <font-awesome-icon icon="fa-solid fa-microchip"
                               inverse
                               transform="shrink-11 down-2.7 left-4.2"
            />
            <font-awesome-icon icon="fa-solid fa-network-wired"
                               inverse
                               transform="shrink-11 down-2.7 right-4"
            />
          </div>
          Technologist &nbsp;&nbsp;&nbsp;
        </h1>
      </header>
      <div class="role-even role-icon text-start d-none d-lg-block col-1 order-lg-2">
        <h1>
          <span class="fa-layers fa-fw">
            <font-awesome-icon icon="fa-solid fa-circle"
                               inverse
                               transform="grow-12"
            />
            <font-awesome-icon icon="fa-solid fa-play"
                               rotation="270"
                               transform="grow-10 up-2"
            />
            <font-awesome-icon icon="fa-solid fa-database"
                               inverse
                               transform="shrink-11 up-4"
            />
            <font-awesome-icon icon="fa-solid fa-microchip"
                               inverse
                               transform="shrink-11 down-2.7 left-4.2"
            />
            <font-awesome-icon icon="fa-solid fa-network-wired"
                               inverse
                               transform="shrink-11 down-2.7 right-4"
            />
          </span>
        </h1>
      </div>
      <div class="role-even role-description col-7 order-lg-3 offset-1">
        <p>
          Defined by <a href="https://en.wiktionary.org/wiki/technologist">
          Wiktionary</a> as "A person who uses science or technology to solve
          practical problems."
        </p>
        <p>
          Early humans used stone tools, such as arrow heads, spear tips,
          knives, scrapers, and such. These crude implements probably represent
          the earliest use of technology by our species. By learning to
          control fire and using language to share knowledge, use of technology
          may be the core element of what separated humans from the rest of the
          animal kingdom.
        </p>
        <p>
          Rather than adopting the
          <a href="https://en.wikipedia.org/wiki/Luddite"
             alt="Early Eighteenth Century Secret Society - the Luddites"
          >Luddites'</a> approach to technology, I approach problem solving
          using the best tool I have for the job. I am a walking stereotype when
          it comes to guys and gadgets, but that fascination affords me the
          ability to bring a diverse array of tools to many different types of
          problems. Tools are cool. Humans are cooler. Put the two together, and
          we accomplish incredible things.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#technologist {
  background: $dark-cornflower-blue;
  color: $light;
  .role-even.role-name h1 { color: $light; }
}
</style>
