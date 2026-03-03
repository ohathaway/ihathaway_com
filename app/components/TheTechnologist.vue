<template>
  <section id="technologist">
    <div class="flex flex-wrap role-even role-info py-6 px-4 lg:p-28">
      <header class="role-even role-name lg:w-3/12 lg:order-1">
        <h1>
          <div class="fa-layers fa-fw lg:hidden pr-4">
            <font-awesome-icon
              icon="fa-solid fa-circle"
              inverse
              transform="grow-12"
            />
            <font-awesome-icon
              icon="fa-solid fa-play"
              rotation="270"
              transform="grow-10 up-2"
            />
            <font-awesome-icon
              icon="fa-solid fa-database"
              inverse
              transform="shrink-11 up-4"
            />
            <font-awesome-icon
              icon="fa-solid fa-microchip"
              inverse
              transform="shrink-11 down-2.7 left-4.2"
            />
            <font-awesome-icon
              icon="fa-solid fa-network-wired"
              inverse
              transform="shrink-11 down-2.7 right-4"
            />
          </div>
          Technologist &nbsp;&nbsp;&nbsp;
        </h1>
      </header>
      <div
        class="role-even role-icon text-left hidden lg:block w-1/12 lg:order-2"
      >
        <h1>
          <span class="fa-layers fa-fw lg:ml-12">
            <font-awesome-icon
              icon="fa-solid fa-circle"
              inverse
              transform="grow-12"
            />
            <font-awesome-icon
              icon="fa-solid fa-play"
              rotation="270"
              transform="grow-10 up-2"
            />
            <font-awesome-icon
              icon="fa-solid fa-database"
              inverse
              transform="shrink-11 up-4"
            />
            <font-awesome-icon
              icon="fa-solid fa-microchip"
              inverse
              transform="shrink-11 down-2.7 left-4.2"
            />
            <font-awesome-icon
              icon="fa-solid fa-network-wired"
              inverse
              transform="shrink-11 down-2.7 right-4"
            />
          </span>
        </h1>
      </div>
      <div
        class="role-even
               role-description
               w-full lg:w-7/12
               lg:order-3
               lg:ml-[8.333%]"
      >
        <p>
          Defined by
          <a href="https://en.wiktionary.org/wiki/technologist">Wiktionary</a>
          as
        </p>
        <blockquote cite="https://en.wiktionary.org/wiki/technologist"
          class="pl-2 italic"
        >
          A person who uses science or technology to solve practical problems.
        </blockquote>
        <p>
          Early humans used stone tools, such as arrow heads, spear tips,
          knives, scrapers, and such. These crude implements probably represent
          the earliest use of technology by our species. By learning to control
          fire and using language to share knowledge, use of technology may be
          the core element of what separated humans from the rest of the animal
          kingdom.
        </p>
        <p>
          In contrast to the
          <a
            href="https://en.wikipedia.org/wiki/Luddite"
            title="Early Eighteenth Century Secret Society - the Luddites"
          >Luddites'</a>
          approach to technology, I approach problem solving using the best tool
          I have for the job. I am a walking stereotype when it comes to guys
          and gadgets, but that fascination affords me the ability to bring a
          diverse array of tools to many different types of problems.
        </p>
        <p>
          Tools are cool. Humans are cooler. Put the two together, and we
          accomplish incredible things.
        </p>
        <p>
          When it comes to tools, my broadest toolset contains IT-related stuff.
          A few of the things I can use with some competency:
        </p>
        <ul class="list-disc pl-6">
          <li>Windows management frameworks</li>
          <li>Linux OS</li>
          <li>enterprise networking</li>
          <li>enterprise storage architectures</li>
          <li>cybersecurity</li>
          <li>identity and access management</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vue.JS</li>
          <li>Ruby/Rails</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>REST APIs</li>
          <li>shell scripting</li>
          <li>HL7</li>
          <li>interface engines</li>
          <li>DevOps</li>
          <li>serverless computing</li>
          <li>PCI-DSS</li>
          <li>NIST 800-53</li>
          <li>CISSP (lapsed)</li>
          <li>HITRUST CSF</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
#technologist {
  background: var(--color-dark-cornflower-blue);
  color: var(--color-light);
  .role-even.role-name h1 {
    color: var(--color-light);
  }
}
</style>
