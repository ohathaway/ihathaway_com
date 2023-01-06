<template>
  <section id="husband">
    <div class="row role-even role-info py-4 px-3 p-lg-8">
      <header class="role-even role-name col-lg-3 order-lg-1">
        <h1>
          <font-awesome-icon
            icon="fa-solid fa-people-roof"
            class="d-lg-none pe-3"
          />
          Husband &nbsp;&nbsp;&nbsp;
        </h1>
      </header>
      <div
        class="role-even role-icon col-1 text-start d-none d-lg-block order-lg-2"
      >
        <h1><font-awesome-icon icon="fa-solid fa-people-roof" /></h1>
      </div>
      <div class="w-100 d-lg-none"></div>
      <div class="role-even role-description col-7 order-lg-3 offset-1">
        <p class="fs-3">Lorem ipsum dolor et ...</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#husband {
  background: $light-slate-gray;
  color: $lite-slate-gray-text;
  .role-even-name h1 {
    color: $lite-slate-gray-text;
  }
}
</style>
