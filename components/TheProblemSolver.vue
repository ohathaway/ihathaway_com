<template>
  <section id="problem-solver" class="row">
    <div class="row role-odd role-info py-4 px-3 p-lg-8">
      <header class="role-even role-name col-lg-2 order-lg-3">
        <h1>
          <div class="fa-layers fa-fw d-lg-none pe-4">
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" inverse transform="shrink-2 up-1" />
            <font-awesome-icon icon="fa-solid fa-ban" transform="grow-10" style="opacity: 0.7;" />
          </div>
          Problem Solver &nbsp;&nbsp;&nbsp;
        </h1>
      </header>
      <div class="col-sm-1 role-odd role-icon col-1 order-lg-1 d-none d-lg-block">
        <h1>
          <span class="fa-layers fa-fw">
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" inverse transform="shrink-2 up-1" />
            <font-awesome-icon icon="fa-solid fa-ban" transform="grow-10" style="opacity: 0.7;" />
          </span>
        </h1>
      </div>
      <div id="info" class="col-6 offset-1 order-lg-2">
        <p>
          The problem with problems is that they're just so problematic. Sure, I
          know that seems more pedantic than necessary. But consider that the
          vast majority of the problems people and organizations face in life
          are: 1) created by themselves; 2) simple to solve after eliminating
          the relevant cognitive biases; or 3) not really a problem at all.
        </p>
        <ul>
          <li>Taleb</li>
          <li>Kahneman</li>
          <li>Weber</li>
          <li>Cowen</li>
          <li>Pinker</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#problem-solver {
  background: $glaucous;
}
</style>
