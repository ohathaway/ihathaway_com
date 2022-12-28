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
        <p class="fs-3">
          Defined by <a href="https://en.wiktionary.org/wiki/technologist">
          Wiktionary</a> as "A person who uses science or technology to solve
          practical problems."
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
