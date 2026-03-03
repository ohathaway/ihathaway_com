<template>
  <div id="resume-cols" class="flex flex-wrap">
    <div class="md:w-3/12 m-0 pl-6 pr-0 bg-gray min-h-screen">
      <CvLeftCol />
    </div>
    <div class="md:w-9/12 m-0 pl-12">
      <h1 class="m-12 text-center">
        Curriculum Vitae
      </h1>
      <CvRightCol />
    </div>
  </div>
</template>

<style>
#resume-cols h2 {
  font-size: 200%;
}
#resume-cols h3 {
  font-size: 120%;
}
#resume-cols h4 {
  font-size: 100%;
}
</style>
