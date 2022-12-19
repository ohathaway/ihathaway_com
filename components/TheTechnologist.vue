<template>
  <section id="technologist">
    <div class="row role-even role-info">
      <header class="col-sm-3 role-even role-name">
        <h1>Technologist</h1>
      </header>
      <div class="col-sm-7 role-even role-description">
        <p class="fs-3">
          Lorem ipsum dolor et ...
        </p>
      </div>
      <div class="col-sm-1 role-even role-icon">
        <h1>
          <span class="fa-layers fa-fw">
            <font-awesome-icon icon="fa-solid fa-circle" inverse transform="grow-12"/>
            <font-awesome-icon icon="fa-solid fa-play" rotation="270" transform="grow-10 up-2"/>
            <font-awesome-icon icon="fa-solid fa-database" inverse transform="shrink-11 up-4" />
            <font-awesome-icon icon="fa-solid fa-microchip" inverse transform="shrink-11 down-2.7 left-4.2" />
            <font-awesome-icon icon="fa-solid fa-network-wired" inverse transform="shrink-11 down-2.7 right-4" />
          </span>
        </h1>
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
