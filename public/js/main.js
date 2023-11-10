class App {
  statusHamb = false;
  observers = {};
  alreadyStarted = false;
  currentPage = '0';
  HTML = `
  <header
  id="nav"
  class="nav w-screen h-navBar z-50 flex flex-row justify-center items-center lg:p-4"
>
  <div
    class="logo flex flex-row justify-start items-center gap-2 md:gap-0 md:justify-center md:w-screen lg:w-[55%] xl:w-[40%] xl:pt-2"
  >
    <img
      src="./assets/logo.png"
      alt=""
      class="hidden md:block md:pl-8 md:w-[20%] lg:w-[26%] lg:pl-2 xl:w-[20%]"
    />
    <div
      class="flex flex-col justify-center items-center gap-2 md:w-[60%] md:gap-4 lg:gap-2 lg:ml-4"
    >
      <div
        class="flex flex-row justify-start items-center gap-12 md:gap-0 md:justify-around md:w-full"
      >
        <img
          src="./assets/logo.png"
          alt=""
          class="w-[22%] ml-4 drop-shadow-sm md:hidden"
        />
        <div class="flex flex-col justify-center items-center">
          <h1
            class="font-bodoni font-bold text-2xl text-ten drop-shadow-md md:text-3xl xl:text-3xl"
          >
            O COLISEU
          </h1>
          <h2 class="social__title font-bodoni lg:text-sm">
            D. E. Salviano Mármores ME.
          </h2>
        </div>
      </div>

      <ul
        class="switcher flex flex-row justify-end items-center gap-6 w-full md:justify-center md:gap-16 lg:gap-6"
      >
        <li
          class="pageState font-garamond font-bold drop-shadow-md text-contrast pageActive"
          data-page="0"
        >
          Marmoraria
        </li>
        <label class="switch">
          <input class="roundSwitch" type="checkbox" />
          <span class="slider round"></span>
        </label>
        <li
          class="pageState font-garamond font-bold drop-shadow-md text-contrast"
          data-page="1"
        >
          Serralheria
        </li>
      </ul>
    </div>
    <img
      src="./assets/menu-hamb.png"
      alt=""
      class="hamb scale-[0.8] mr-2 md:mr-0 md:scale-[0.3] md:w-[20%] md:block lg:hidden"
      data-hamb="0"
    />
  </div>
  <nav
    class="largeList hamb_container list-none font-bodoni lg:flex lg:flex-row lg:w-[45%] lg:flex-wrap lg:justify-evenly lg:items-center lg:gap-2 lg:text-lg lg:pr-2 lg:text-contrast lg:h-full xl:gap-4 xl:w-[60%] xl:text-lg"
  >
    <li class="hamb_list lg:w-[30%] lg:text-center xl:w-[15%]">
      <a href="#section-2" class="nav__link lg:w-full">Apresentação</a>
    </li>
    <li class="hamb_list lg:w-[30%] lg:text-center xl:w-[15%]">
      <a href="#section-3" class="nav__link lg:w-full">História</a>
    </li>
    <li class="hamb_list lg:w-[30%] lg:text-center xl:w-[15%]">
      <a
        href="projetos.html"
        class="nav__link anchor underline font-garamond font-bold text-base lg:w-full"
        >PROJETOS</a
      >
    </li>
    <li class="hamb_list lg:w-[30%] lg:text-center xl:w-[15%]">
      <a href="#section-4" class="nav__link lg:w-full">Mármores</a>
    </li>
    <li class="hamb_list lg:w-[30%] lg:text-center xl:w-[15%]">
      <a href="#section-5" class="nav__link lg:w-full">Serviços</a>
    </li>
    <li class="hamb_list-last lg:w-[30%] lg:text-center xl:w-[15%]">
      <a href="#section-6" class="nav__link lg:w-full">Contato</a>
    </li>
  </nav>
</header>
<div class="dummyMain hidden h-navBar"></div>
<main
  class="main flex flex-col justify-center mt-4 items-center border-solid border-t border-t-contrast w-9/12"
>
  <!------Header------>
  <section
    id="section-1"
    class="section section--hidden flex flex-col justify-center items-center font-garamond text-xl gap-8 md:flex-row md:w-screen md:px-7 lg:gap-20 lg:px-20 xl:gap-0"
    data-section="first"
    style="height: 100dvh"
  >
    <div
      class="flex flex-col justify-center items-center gap-8 mb-6 text-contrast md:w-2/5 md:order-2 md:gap-6 lg:text-2xl xl:w-3/12 xl:text-2xl xl:gap-10"
    >
      <h2 class="drop-shadow-md">TRADIÇÃO,</h2>
      <h2 class="drop-shadow-md">QUALIDADE,</h2>
      <h2
        class="block text-3xl text-ten bg-white p-4 shadow-md drop-shadow-md md:text-2xl lg:text-3xl xl:text-3xl"
      >
        Perfeição Atemporal.
      </h2>
      <button
        class="btn__knowMore hidden p-4 border border-solid border-contrast font-montserrat text-ten shadow-md md:block lg:text-3xl xl:text-3xl"
        data-href="#section-2"
      >
        SAIBA MAIS
      </button>
    </div>
    <picture
      class="w-screen shadow-md mb-3 md:mb-0 md:w-3/5 md:ml-8 xl:w-[45%] xl:ml-0 xl:scale-[0.8]"
    >
      <source media="(max-width: 450px)" srcset="./assets/inicial2-p.jpg" />
      <source media="(max-width: 900px)" srcset="./assets/inicial2-p.jpg" />
      <source
        media="(max-width: 1050px)"
        srcset="./assets/inicial2-p.jpg"
      />
      <img src="./assets/inicial2.jpg" alt="" />
    </picture>
    <button
      id="btn__knowMore"
      class="p-4 border border-solid border-contrast font-montserrat text-ten shadow-md md:hidden"
      data-href="#section-2"
    >
      SAIBA MAIS
    </button>
  </section>

  <!-----Features----->
  <section
    id="section-2"
    class="bg-white section section--hidden w-screen min-h-screen py-14 flex flex-col justify-start items-center gap-6 md:min-h-fit md:gap-0 md:flex-row lg:flex-row lg:min-h-screen lg:gap-8 lg:pl-10 lg:justify-center lg:items-center xl:gap-16 xl:px-20"
  >
    <article
      class="flex flex-col justify-center items-center gap-6 w-screen text-contrast md:w-[50%] lg:w-1/2 xl:w-[50%]"
    >
      <div
        class="font-bodoni px-6 flex flex-col gap-3 justify-center items-center xl:w-[70%] xl:self-end"
      >
        <h3 class="text-2xl md:text-xl lg:text-xl xl:text-2xl">
          Lapidamos sonhos,
        </h3>
        <h3
          class="bg-sixty w-fit py-2 text-3xl shadow-md drop-shadow-md md:text-2xl lg:text-4xl xl:text-3xl"
        >
          Damos vida a projetos
        </h3>
      </div>
      <p
        class="px-8 font-montserrat indent-6 text-justify text-md md:pl-16 md:pr-6 lg:pl-8 xl:text-sm xl:w-[70%] xl:self-end xl:pr-20"
      >
        Na Marmoraria O Coliseu, entendemos a importância de cada projeto e
        nos dedicamos a criar resultados que sejam duradouros e
        impressionantes. Valorizamos a satisfação do cliente e buscamos
        superar suas expectativas em todos os aspectos do nosso trabalho.
      </p>
      <p
        class="px-8 font-montserrat indent-6 text-justify text-md md:pl-16 md:pr-6 lg:pl-8 xl:text-sm xl:w-[70%] xl:self-end xl:pr-20"
      >
        Seja para projetos residenciais ou comerciais, conte com a
        Marmoraria O Coliseu para oferecer soluções personalizadas e de alta
        qualidade em pedras naturais. Estamos aqui para transformar suas
        ideias em realidade, de acordo com a tradição, requintes de
        modernidade, qualidade e perfeição atemporal.
      </p>
    </article>
    <!-- Slider main container -->
    <div
      class="swiper sliderML shadow-lg w-[90%] rounded-md md:w-[40%] md:mb-8 lg:w-[40%] lg:mb-0 xl:w-[40%]"
      data-margin="false"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img src="./assets/features-1.jpg" alt="" class="xl:w-full" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/features-2.jpg" alt="" class="xl:w-full" />
        </div>
        <div class="swiper-slide">
          <img src="./assets/features-3.jpg" alt="" class="xl:w-full" />
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>

  <!--Nossa História-->
  <section
    id="section-3"
    class="bg-sixty section section--hidden w-screen min-h-screen py-14 flex flex-col justify-start items-center gap-6 md:min-h-fit xl:min-h-screen"
  >
    <div
      class="flex flex-col justify-center items-center px-8 gap-8 md:px-16"
    >
      <h3
        class="text-3xl bg-white p-3 font-garamond text-ten drop-shadow-md md:text-4xl md:mb-6 lg:text-4xl xl:text-3xl"
      >
        Nossa História
      </h3>
      <article
        class="flex flex-col justify-center items-center gap-8 md:flex-row md:mb-6 lg:gap-20 lg:px-16 xl:gap-0 xl:w-full"
      >
        <p
          class="text-md text-justify indent-6 font-montserrat md:w-6/12 xl:w-[50%] xl:text-sm xl:pr-10 xl:pl-40"
        >
          A Marmoraria O Coliseu (D.E. Salviano Mármores ME.) foi idealizada
          por Meire e Daniel Salviano (Du), um profissional com mais de 35
          anos de experiência no ramo. Desde a sua inauguração em 2004, em
          São Sebastião, nosso objetivo tem sido alcançar um padrão de
          qualidade excepcional, capaz de superar as expectativas dos nossos
          clientes.
          <span class="hidden lg:block lg:text-indent-6 lg:mt-2">
            Seguimos a filosofia de que "Criatividade e cuidado em todo o
            processo de trabalho garantem a perfeição desejada". Deixe o
            requinte e a beleza do mármore e granito completar a sua obra.
          </span>
        </p>
        <div
          class="flex flex-col justify-center items-center gap-3 md:w-1/2 xl:w-[45%]"
        >
          <img
            src="./assets/coliseu.jpg"
            alt=""
            class="drop-shadow-md md:rounded xl:self-center xl:pl-0 xl:w-[70%]"
          />
          <p
            class="font-bodoni italic md:text-lg xl:text-xl xl:self-center"
          >
            O Coliseu
          </p>
        </div>
      </article>
    </div>
    <div
      class="px-8 operations flex flex-col justify-center items-center md:w-4/5 xl:px-56"
    >
      <div
        class="mb-3 font-garamond text-xl operations__tab-container flex flex-row justify-around w-4/5 gap-3"
      >
        <button
          class="border-solid border border-contrast p-3 rounded-md btn operations__tab operations__tab--1 shadow-md operations__tab--active md:text-2xl xl:text-sm"
          data-tab="1"
        >
          EXPERIÊNCIA
        </button>
        <button
          class="border-solid border border-contrast p-3 rounded-md btn operations__tab operations__tab--2 shadow-md md:text-xl xl:text-base"
          data-tab="2"
        >
          SATISFAÇÃO
        </button>
      </div>
      <article
        class="hidden operations__content operations__content--1 operations__content--active px-4 rounded shadow-md xl:p-8"
      >
        <p class="text-md text-justify indent-6 font-montserrat xl:text-sm">
          Nosso diferencial está na mão-de-obra altamente qualificada e
          dedicada, composta por uma equipe experiente de profissionais do
          ramo. Cada membro da nossa equipe possui um profundo conhecimento
          das melhores práticas e técnicas de trabalho em mármore, granito e
          outras pedras naturais, garantindo acabamentos perfeitos e
          durabilidade excepcional em cada projeto.
        </p>
      </article>
      <div
        class="hidden operations__content operations__content--2 px-4 rounded shadow-md xl:p-8"
      >
        <p class="text-md text-justify indent-6 font-montserrat xl:text-sm">
          Valorizamos a satisfação dos nossos clientes acima de tudo. Por
          isso, buscamos entender suas necessidades e desejos individuais,
          oferecendo um atendimento personalizado desde o primeiro contato
          até a conclusão do projeto. Trabalhamos de forma colaborativa,
          ouvindo atentamente suas ideias e proporcionando orientação
          especializada para transformá-las em realidade.
        </p>
      </div>
    </div>
  </section>

  <!--Mármores-->
  <section
    id="section-4"
    class="section bg-white section--hidden overflow-x-hidden w-screen flex flex-col justify-start items-center py-14 gap-8 md:flex-row md:justify-center md:items-center md:gap-4 lg:min-h-screen lg:px-12 xl:pl-24"
  >
    <div
      class="px-8 flex flex-col justify-center items-center gap-8 md:items-start md:w-[40%] md:gap-8 lg:items-center lg:w-1/2 xl:items-center xl:w-[30%] xl:gap-6 xl:pr-16"
    >
      <div
        class="flex flex-col gap-3 md:self-start lg:self-center xl:w-[90%]"
      >
        <h3
          class="font-garamond text-contrast text-2xl lg:text-xl xl:text-xl"
        >
          O mármore e a sua
        </h3>

        <h3
          class="text-3xl bg-sixty p-3 font-garamond text-contrast drop-shadow-md w-fit lg:text-4xl xl:text-3xl"
        >
          Beleza Inspiradora
        </h3>
      </div>
      <p
        class="text-md text-justify indent-6 font-montserrat xl:text-sm xl:w-full"
      >
        O mármore é formado a partir do calcário, uma rocha composta por
        minerais de calcita. Ao longo de milhões de anos, o calcário é
        submetido a altas temperaturas e pressões, o que provoca
        transformações em sua estrutura. Essas mudanças levam à
        recristalização dos minerais de calcita, resultando no mármore, uma
        rocha metamórfica com textura cristalina e brilho característico.
      </p>
      <p
        class="text-xl text-center text-contrast hidden font-garamond lg:block xl:text-lg"
      >
        Consulte nosso catálogo de lâminas:
      </p>
      <a
        class="w-1/2 p-4 rounded-md shadow-2xl hidden bg-white lg:flex flex-col justify-center items-center border border-solid border-ten md:w-[65%] lg:w-[35%] xl:w-[50%]"
        href="./assets/catalogo-coliseu.pdf"
        target="_blank"
      >
        <img
          src="./assets/logo.png"
          alt=""
          class="w-[85%] drop-shadow-lg"
        />
        <h1 class="font-bodoni font-bold text-ten drop-shadow-lg">
          O COLISEU
        </h1>
      </a>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-6 rockSlider md:w-[50%] md:gap-6 xl:w-[70%]"
    >
      <div
        class="gallery__container h-[65vh] bg-sixty overflow-scroll w-[100%] flex flex-col justify-start items-center gap-5 py-4 shadow-lg md:h-[40vh] lg:h-[80vh] xl:h-[70vh]"
      >
        <div
          class="flex flex-col justify-center items-center w-[85%] xl:w-full gap-3"
        >
          <p
            class="text-md text-center text-contrast font-garamond xl:text-base"
          >
            TRANSFORME SEUS PROJETOS EM VERDADEIRAS
          </p>
          <h3
            class="text-2xl bg-white p-3 font-garamond text-ten drop-shadow-md w-fit lg:text-2xl xl:text-xl"
          >
            OBRAS DE ARTE
          </h3>
        </div>
        <div
          class="flex flex-row flex-wrap justify-center items-center gap-3 xl:mt-6"
        >
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Agata Blue
            </p>
            <a
              href="./assets/agata-blue.jpg"
              data-lightbox="Pedras"
              data-title="Agata Blue"
              class=""
            >
              <img src="./assets/agata-blue.jpg" alt="" class="rockSlide" />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Granito Marrom Tabaco
            </p>
            <a
              href="./assets/granito-marrom-tabaco.jpg"
              data-lightbox="Pedras"
              data-title="Granito Marrom Tabaco"
              class=""
            >
              <img
                src="./assets/granito-marrom-tabaco.jpg"
                alt=""
                class="rockSlide"
              />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Granito Kilimanjaro
            </p>
            <a
              href="./assets/preto-vegas-kilimanjaro.jpg"
              data-lightbox="Pedras"
              data-title="Granito Kilimanjaro"
              class=""
            >
              <img
                src="./assets/preto-vegas-kilimanjaro.jpg"
                alt=""
                class="rockSlide"
              />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Mármore Bege Bahia
            </p>
            <a
              href="./assets/bege-bahia.jpg"
              data-lightbox="Pedras"
              data-title="Mármore Bege Bahia"
              class=""
            >
              <img src="./assets/bege-bahia.jpg" alt="" class="rockSlide" />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Quartzito Bronzzo
            </p>
            <a
              href="./assets/quartzito-bronzzo.jpg"
              data-lightbox="Pedras"
              data-title="Quartzito Bronzzo"
              class=""
            >
              <img
                src="./assets/quartzito-bronzzo.jpg"
                alt=""
                class="rockSlide"
              />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Quartzito Dakar
            </p>
            <a
              href="./assets/quartzito-dakar.jpg"
              data-lightbox="Pedras"
              data-title="Quartzito Dakar"
              class=""
            >
              <img
                src="./assets/quartzito-dakar.jpg"
                alt=""
                class="rockSlide"
              />
            </a>
          </div>
          <!--Sem nomes-->
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Verde Guatemala
            </p>
            <a
              href="./assets/sem-nome-1.jpg"
              data-lightbox="Pedras"
              data-title="Verde Guatemala"
              class=""
            >
              <img src="./assets/sem-nome-1.jpg" alt="" class="rockSlide" />
            </a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Azul Macaúbas
            </p>
            <a
              href="./assets/sem-nome-2.jpg"
              data-lightbox="Pedras"
              data-title="Azul Macaúbas"
              class=""
            >
              <img src="./assets/sem-nome-2.jpg" alt="" class="rockSlide" />
            </a>
          </div>
          <!--Sem nomes-->
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Avatar
            </p>
            <a
              href="./assets/avatar.jpg"
              data-lightbox="Pedras"
              data-title="Avatar"
              class="rockSlide"
              ><img src="./assets/avatar.jpg" alt="" class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Branco Itaúnas
            </p>
            <a
              href="./assets/branco-itaunas.jpg"
              data-lightbox="Pedras"
              data-title="Branco Itaúnas"
              class="rockSlide"
              ><img
                src="./assets/branco-itaunas.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Copacabana Polido
            </p>
            <a
              href="./assets/copacabana-polido.jpg"
              data-lightbox="Pedras"
              data-title="Copacabana Polido"
              class="rockSlide"
              ><img
                src="./assets/copacabana-polido.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Dolomitico Rafaello
            </p>
            <a
              href="./assets/dolomitico-rafaello.jpg"
              data-lightbox="Pedras"
              data-title="Dolomitico Rafaello"
              class="rockSlide"
              ><img
                src="./assets/dolomitico-rafaello.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Mármore Branco
            </p>
            <a
              href="./assets/marmore-branco.jpg"
              data-lightbox="Pedras"
              data-title="Mármore Branco"
              class="rockSlide"
              ><img
                src="./assets/marmore-branco.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Quartzito Avohai (Taj)
            </p>
            <a
              href="./assets/quartzito-avohai.jpg"
              data-lightbox="Pedras"
              data-title="Quartzito Avohai (Taj)"
              class="rockSlide"
              ><img
                src="./assets/quartzito-avohai.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Vermelho Acrópolis
            </p>
            <a
              href="./assets/vermelho-acropolis.jpg"
              data-lightbox="Pedras"
              data-title="Vermelho Acrópolis"
              class="rockSlide"
              ><img
                src="./assets/vermelho-acropolis.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Travertino
            </p>
            <a
              href="./assets/travertino.jpg"
              data-lightbox="Pedras"
              data-title="Travertino"
              class="rockSlide"
              ><img src="./assets/travertino.jpg" alt="" class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Preto São Gabriel
            </p>
            <a
              href="./assets/sao-gabriel.jpg"
              data-lightbox="Pedras"
              data-title="Preto São Gabriel"
              class="rockSlide"
              ><img src="./assets/sao-gabriel.jpg" alt="" class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Quartzo Branco
            </p>
            <a
              href="./assets/quartzo-branco.jpg"
              data-lightbox="Pedras"
              data-title="Quartzo Branco"
              class="rockSlide"
              ><img
                src="./assets/quartzo-branco.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Quartzo Bege
            </p>
            <a
              href="./assets/quartzo-bege.jpg"
              data-lightbox="Pedras"
              data-title="Quartzo Bege"
              class="rockSlide"
              ><img
                src="./assets/quartzo-bege.jpg"
                alt=""
                class="rockSlide"
            /></a>
          </div>
          <div class="pedras__style">
            <p
              class="textRock bg-white font-bodoni absolute text-left top-2 left-1 px-2 py-2 scale-x-0 duration-500 origin-left lg:text-xl xl:text-sm"
            >
              Azul Imperial
            </p>
            <a
              href="./assets/quartzito-azul-imperial.jpg"
              data-lightbox="Pedras"
              data-title="Azul Imperial"
              class=""
            >
              <img
                src="./assets/quartzito-azul-imperial.jpg"
                alt=""
                class="rockSlide"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        class="px-8 flex flex-col justify-center items-center w-full gap-4 md:px-0 md:gap-3 md:w-6/12 lg:w-[90%] xl:w-7/12"
      >
        <p
          class="text-md text-justify indent-6 text-contrast font-montserrat md:hidden xl:text-base xl:w-[90%]"
        >
          Os mármores oferecem uma combinação perfeita entre elegância,
          estética e durabilidade. A ampla variedade de cores, veios e
          padrões permite que os mármores se adequem a todo tipo de espaço,
          valorizando as características únicas de cada projeto. Além de
          versáteis, os mármores são altamente duráveis e de fácil
          manutenção.
        </p>
        <p
          class="text-xl text-center text-contrast font-garamond lg:hidden xl:text-lg"
        >
          Consulte nosso catálogo de lâminas:
        </p>
        <a
          class="w-1/2 p-4 rounded-md shadow-2xl bg-white flex flex-col justify-center items-center border border-solid border-ten md:w-[65%] lg:hidden xl:w-[45%]"
          href="./assets/catalogo-coliseu.pdf"
          target="_blank"
        >
          <img
            src="./assets/logo.png"
            alt=""
            class="w-[85%] drop-shadow-lg"
          />
          <h1 class="font-bodoni font-bold text-ten drop-shadow-lg">
            O COLISEU
          </h1>
        </a>
      </div>
    </div>
  </section>

  <!-----Serviços----->
  <section class="bg-sixty section section--hidden w-screen min-h-screen py-14 flex flex-col justify-start items-center overflow-hidden gap-10 md:flex-row md:min-h-fit md:px-16 lg:pl-10 lg:min-h-screen xl:px-32 xl:justify-center xl:gap-0" id="section-5">
    <div class="flex flex-col justify-center items-center w-full gap-8 md:w-1/2 lg:w-[60%] xl:w-1/2 xl:pl-24">
        <div class="flex flex-col justify-center items-center gap-8 px-8 md:gap-6 md:px-0 md:order-2 lg:w-[90%] xl:w-[70%]">
            <div class="flex flex-col justify-center gap-3 items-start md:items-center md:mb-8 lg:mb-2 xl:gap-0">
                <h3 class="font-garamond text-2xl text-contrast lg:mb-3 lg:text-xl xl:text-xl">Nossos trabalhos:</h3>
                <h3 class="font-garamond text-3xl bg-white text-ten px-4 py-2 drop-shadow-md shadow-md lg:text-4xl xl:text-3xl">Beleza Lapidada.</h3>
            </div>
            <div class="flex flex-col xl:w-full">
                <p class="font-montserrat text-md text-contrast text-justify indent-6 xl:text-sm xl:pr-[4%]">Na Marmoraria O Coliseu, oferecemos uma ampla variedade de opções em pedras naturais, desde mármores elegantes e sofisticados até granitos exóticos e quartzitos de beleza singular. Cada peça é cuidadosamente selecionada para garantir a mais alta qualidade e estética impressionante em cada projeto.</p>
            </div>
        </div>
        <div class="swiperServices sliderML shadow-md w-[70%] md:order-last lg:mr-0 lg:w-[50%] xl:w-[55%]" data-margin="true">
            <div class="swiper-wrapper">
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery.jpg" data-lightbox="Serviços"><img src="./assets/gallery.jpg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery-02.jpeg" data-lightbox="Serviços"><img src="./assets/gallery-02.jpeg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery1.jpg" data-lightbox="Serviços"><img src="./assets/gallery1.jpg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery-04.jpeg" data-lightbox="Serviços"><img src="./assets/gallery-04.jpeg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery23.jpg" data-lightbox="Serviços"><img src="./assets/gallery23.jpg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery-01.jpeg" data-lightbox="Serviços"><img src="./assets/gallery-01.jpeg" alt="" /></a></div>
                <div class="swiper-slide rounded-md shadow-lg"><a href="./assets/gallery16.jpg" data-lightbox="Serviços"><img src="./assets/gallery16.jpg" alt="" /></a></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"> </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full gap-6 md:justify-evenly md:w-1/2 md:gap-24 lg:items-center lg:gap-16 xl:w-1/2 xl:items-center xl:pr-16">
        <div class="flex flex-col justify-center items-center gap-6">
            <p class="hidden font-montserrat text-lg text-contrast text-center md:block">Cada obra é uma demonstração da nossa paixão por transformar ideias em realidade. Descubra o que fizemos de novo e inspire-se para o seu novo projeto. </p><a class="flex flex-col justify-center items-center bg-white py-4 px-3 rounded-lg border-2 border-solid border-ten drop-shadow-sm shadow-lg w-1/2" href="/projetos" target="_self"><img class="w-[50%]" src="./assets/logo.png" alt="" />
                <h1 class="font-bodoni text-ten font-bold text-2xl drop-shadow-md">O Coliseu </h1>
                <h3 class="font-garamond font-bold text-contrast drop-shadow-lg">PROJETOS</h3>
            </a>
        </div>
        <div class="flex flex-col justify-center items-center bg-white gap-8 p-4 w-[90%] md:gap-6 md:shadow-md md:order-2 lg:w-[85%] xl:w-7/12">
            <p class="font-montserrat text-md text-contrast text-center md:drop-shadow-md md:text-xl xl:text-base">Exploramos as veias e os padrões únicos da pedra, trazendo à tona formas <strong class="font-garamond text-ten">DELICADAS </strong><span>ou</span><strong class="font-garamond text-ten"> IMPONENTES</strong></p>
        </div>
    </div>
</section>
</main>
  
  `;

  constructor(state) {
    this.renderIfStarted(state);

    this.configLightBox();
    this.handleScreenWidth();
    this.configSwipers();
    this.addEventListeners();
    this.setObserverStickyNav();
    this.setObserverRevealSections();
  }

  renderIfStarted(state) {
    if (!state) return;

    this.alreadyStarted = true;

    const body = document.querySelector('body');
    body.firstElementChild.remove();
    body.insertAdjacentHTML('afterbegin', this.HTML);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  configLightBox() {
    lightbox.option({
      alwaysShowNavOnTouchDevices: true,
    });
  }

  handleScreenWidth() {
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    console.log(this.alreadyStarted);

    if (this.alreadyStarted) {
      this._initHandleScreenWidth(screenWidth);
    }
    if (!this.alreadyStarted) {
      window.addEventListener('load', () => {
        this._initHandleScreenWidth(screenWidth);
      });
    }
  }

  _initHandleScreenWidth(screenWidth) {
    this._setHeroHeight(screenWidth);

    this._changeRazaoSocialSize(screenWidth);

    //this._toggleTrackScrollbar(screenWidth);

    this._addFadeOnNav(screenWidth);

    this._adjustForTablet(screenWidth);

    this._removeHambMenu(screenWidth);

    this._retireLeftMarginSwiper(screenWidth);
  }

  configSwipers() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const swiperServices = new Swiper('.swiperServices', {
      effect: 'cards',
      rotate: true,

      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  addEventListeners() {
    //Tabbed Component
    const componentContainer = document.querySelector('.operations');
    const rocks = document.querySelectorAll('.rockSlider');
    const hambContainer = document.querySelector('.largeList');
    const btnHero1 = document.querySelector('.btn__knowMore');
    const btnHero2 = document.querySelector('#btn__knowMore');
    const hambsBtn = document.querySelectorAll('.hamb');

    const pageState = document.querySelectorAll('.pageState');
    const switcher = document.querySelector('.roundSwitch');

    componentContainer.addEventListener('click', this._handleTabbedComponent);

    rocks.forEach((e) => {
      e.addEventListener('mouseover', this._handleHoverOnRocks);
      e.addEventListener('mouseout', this._handleHoverOnRocks);
    });

    hambContainer.addEventListener(
      'click',
      this._smoothScrollHandler.bind(this)
    );
    [btnHero1, btnHero2].forEach((btn) =>
      btn.addEventListener('click', this._smoothScrollHandler.bind(this))
    );

    hambsBtn.forEach((hamb) =>
      hamb.addEventListener('click', this._hambHandler.bind(this))
    );

    pageState.forEach((page) =>
      page.addEventListener('click', this._changePagesHandler.bind(this))
    );

    switcher.addEventListener('change', this._changePagesHandler.bind(this));
  }

  setObserverStickyNav() {
    const nonStickyArea = document.querySelector('#section-1');
    const navBar = document.querySelector('#nav');
    const observer = new IntersectionObserver(this._stickyHandler, {
      root: null,
      threshold: 0,
      rootMargin: '-' + (navBar.getBoundingClientRect().height + 10) + 'px',
    });

    this.observers.sticky = [nonStickyArea, observer];
    observer.observe(nonStickyArea);
  }

  setObserverRevealSections() {
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver(
      this._revealSectionHandler,
      {
        root: null,
        threshold: 0.15,
      }
    );
    this.observers.sections = [sections, sectionObserver];
    sections.forEach((section) => sectionObserver.observe(section));
  }

  _removeIntersections() {
    const nonStickyArea = this.observers.sticky[0];
    const stickyObserver = this.observers.sticky[1];
    stickyObserver.unobserve(nonStickyArea);

    const sections = this.observers.sections[0];
    const sectionsObserver = this.observers.sections[1];
    sections.forEach((section) => sectionsObserver.unobserve(section));
  }

  _changePagesHandler(event) {
    const switcher = document.querySelector('.roundSwitch');
    if (event.target.classList.contains('pageState')) {
      const pageToGo = event.target.dataset.page;
      if (pageToGo === this.currentPage) return;
    }
    switcher.checked = true;
    this._removeIntersections();

    setTimeout(() => {
      new Serralheria();
    }, 300);
  }

  _adjustForTablet(screenWidth) {
    if (screenWidth > 768 && screenWidth < 1024) {
      const sections = document.querySelectorAll('.section');
      sections.forEach((e) => e.classList.remove('section--hidden'));
    }
  }

  _removeHambMenu(screenWidth) {
    if (screenWidth > 1023) {
      const hambContainer = document.querySelectorAll('.largeList');
      hambContainer.forEach((e) => e.classList.remove('hamb_container'));
    }
  }

  _retireLeftMarginSwiper(screenWidth) {
    const swiperAdjustMargin = document.querySelectorAll('.sliderML');

    swiperAdjustMargin.forEach((swiper) => {
      if (screenWidth >= 1024) {
        if (swiper.dataset.margin === 'true') swiper.style.marginRight = '4%';
        else swiper.style.marginLeft = 0;
      }

      if (!(screenWidth >= 1024)) swiper.style = '';
    });
  }

  _setHeroHeight(screenWidth) {
    const heroContainer = document.querySelector('#section-1');

    if (screenWidth >= 768 && screenWidth < 1024) {
      heroContainer.style.height = '50vh';
    } else {
      const navBar = document.querySelector('#nav');

      const heroContainerHeight = heroContainer.getBoundingClientRect().height;
      const navBarHeight = navBar.getBoundingClientRect().height;

      heroContainer.style.height = `${heroContainerHeight - navBarHeight}px`;
    }
  }

  _changeRazaoSocialSize(screenWidth) {
    const razaoSocial = document.querySelectorAll('.social__title');

    if (screenWidth < 768)
      razaoSocial.forEach((title) => (title.style.fontSize = '10px'));

    if (screenWidth >= 768 && screenWidth < 1024)
      razaoSocial.forEach((title) => (title.style.fontSize = '12px'));
  }

  /*
  _toggleTrackScrollbar(screenWidth) {
    if (screenWidth > 1023) {
      const Scrollbar = window.Scrollbar;
      Scrollbar.init(document.querySelector('.gallery__container'), {
        alwaysShowTracks: true,
      });
    }
  }
  */

  _handleTabbedComponent(e) {
    const tabs = [...document.querySelectorAll('.operations__tab')];
    const content = [...document.querySelectorAll('.operations__content')];

    if (!e.target.classList.contains('operations__tab')) return;

    const dataset = e.target.dataset.tab;

    tabs.forEach((tab) => {
      tab.classList.remove('operations__tab--active');
      e.target.classList.add('operations__tab--active');
    });

    content.forEach((content) => {
      content.classList.remove('operations__content--active');
      const currentContent = document.querySelector(
        `.operations__content--${dataset}`
      );

      currentContent.classList.add('operations__content--active');
    });
  }

  _handleHoverOnRocks(e) {
    if (!e.target.classList.contains('rockSlide')) return;

    e.target.parentElement.previousElementSibling.classList.toggle('scale-x-0');
  }

  _addFadeOnNav(screenWidth) {
    if (!(screenWidth >= 1024)) return;

    const navContainer = document.querySelector('#nav');

    navContainer.addEventListener('mouseover', (event) =>
      this._handleFadeOnNav(event, false)
    );

    navContainer.addEventListener('mouseout', (event) =>
      this._handleFadeOnNav(event, true)
    );
  }

  _handleFadeOnNav(event, state) {
    if (!event.target.classList.contains('nav__link')) return;

    const hovered = event.target;
    const siblings = [...document.querySelectorAll('.nav__link')];
    const logo = hovered.closest('.nav').querySelector('.logo');

    siblings.forEach((sibling) => {
      if (sibling !== hovered) {
        logo.classList[state ? 'remove' : 'add']('opacity20');
        sibling.classList[state ? 'remove' : 'add']('opacity20');
      }
    });
  }

  _smoothScrollHandler(event) {
    if (event.target.classList.contains('anchor')) return;

    event.preventDefault();

    if (event.target.classList.contains('nav__link')) this._hambHandler(event);

    const sectionToGo =
      document.querySelector(event.target.dataset.href) ??
      document.querySelector(event.target.getAttribute('href'));

    if (!sectionToGo) return;

    let isShowed = sectionToGo.classList?.contains('section--hidden');
    const translateY = 128;

    const navBarHeight = document
      .querySelector('#nav')
      .getBoundingClientRect().height;

    const headerHeight = isShowed ? navBarHeight + translateY : navBarHeight;
    const position = sectionToGo.getBoundingClientRect().top;
    const offsetPosition = position + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  _stickyHandler(entries) {
    const [entry] = entries;
    const navBar = document.querySelector('#nav');
    const dummy = document.querySelector('.dummyMain');

    if (!entry.isIntersecting) {
      navBar.classList.add('sticky');
      dummy.classList.remove('hidden');
    } else {
      navBar.classList.remove('sticky');
      dummy.classList.add('hidden');
    }
  }

  _revealSectionHandler = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  };

  _hambHandler(event) {
    if (!(window.screen.width < 1024)) return;

    const hamb = document.querySelector('.hamb');
    const hambContainer = document.querySelector('.hamb_container');

    if (!event.target.classList.contains('pageState')) {
      this.statusHamb = !this.statusHamb;

      if (this.statusHamb) {
        hamb.src = './assets/menu-hamb-open.png';
        hambContainer.classList.add('hamb_container-style');
      } else {
        hamb.src = './assets/menu-hamb.png';
        hambContainer.classList.remove('hamb_container-style');
      }
    }
  }
}

const app = new App(false);

class Serralheria {
  observers = {};
  currentPage = '1';
  HTML = `<aside
  class="secondPage aside"
>
  <nav
    id="nav"
    class="nav"
  >
    <div
      class="logo logo__container"
    >
      <img
        src="./assets/logo.png"
        alt=""
        class="logo__container-img"
      />
      <div
        class="logo__container-div1"
      >
        <div
          class="logo__container-div2"
        >
          <img
            src="./assets/logo.png"
            alt=""
            class="logo__container-img2"
          />
          <div class="logo__container-div3">
            <h1
              class="logo__h1"
            >
              O COLISEU
            </h1>
            <h2 class="social__title logo__h2">
              D. E. Salviano Mármores ME.
            </h2>
          </div>
        </div>

        <ul
          class="switcher nav__switch"
        >
          <li
            class="pageState nav__switch-li "
            data-page="0"
          >
            Marmoraria
          </li>
          <label class="switch">
            <input class="roundSwitch" type="checkbox" />
            <span class="slider round"></span>
          </label>
          <li
            class="pageState nav__switch-li pageActive"
            data-page="1"
          >
            Serralheria
          </li>
        </ul>
      </div>
      <img
        src="./assets/menu-hamb.png"
        alt=""
        class="hamb nav__hamb-img"
        data-hamb="1"
      />
    </div>
    <ul
      class="largeList hamb_container"
    >
      <li class="hamb_list largeList__li">
        <a href="#section-2" class="nav__link largeList__a">Apresentação</a>
      </li>

      <li class="hamb_list largeList__li">
        <a href="#section-3" class="nav__link largeList__a">Serviços</a>
      </li>

      <li class="hamb_list-last largeList__li">
        <a href="#section-6" class="nav__link largeList__a">Contato</a>
      </li>
    </ul>
  </nav>

  <div class="dummyMain dummyInvisible"></div>
  <section
    id="section-1"
    class="section section--hidden aside__section1"  
    data-section="first"
    style="height:100vh"

  >
    
    <div
      class="section1__div1"
    >
      <div
        class="section1__div2"
      >
        <h2
          class="section1__header1 "
        >
          VERSÁTIL
        </h2>
        <h2
          class="section1__header2"
        >
          CONTEMPORÂNEO
        </h2>
        <h3
          class="section1__header3"
        >
          ESQUADRIAS & VIDROS
        </h3>
        <button
          class="section1__button1 knowMore"
          data-href="#section-2"
        >
          SAIBA MAIS
        </button>
      </div>
      <div
        class="section1__div3"
      >
        <picture class="section1__picture">
          <source
            class="section1__source"
            media="(max-width: 450px)"
            srcset="./assets/esq-init.jpg"
          />
          <source
            class="section1__source"
            media="(max-width: 900px)"
            srcset="./assets/esq-init-g.jpg"
          />
          <source
            class="section1__source"
            media="(max-width: 1050px)"
            srcset="./assets/esq-init-g.jpg"
          />
          <img class="section1__source" src="./assets/esq-init-g.jpg" alt="" />
        </picture>

        <button
          id="knowMore"
          class="knowMore section1__button2"
          data-href="#section-2"
        >
          SAIBA MAIS
        </button>
      </div>
    </div>
  </section>
  <section
    id="section-2"
    class="section section--hidden aside__section2"
  >
    <div
      class="section2__div1"
    >
      <div class="section2__div2">
        <h3
          class="section2__header1"
        >
          A segurança de uma
        </h3>
        <h3
          class="section2__header2"
        >
          MARCA RENOMADA
        </h3>
      </div>
      <div class="section2__div3">
        <p class="section2__p1">
          O Coliseu, combinando a tradição e excelência que nos define, está
          pronto para fornecer soluções personalizadas e de alta qualidade
          para as suas necessidades em esquadrias. Nossa equipe
          especializada, com expertise tanto em serralheria quanto em
          vidraçaria, oferece uma ampla gama de opções para portas, janelas,
          fachadas e estruturas metálicas, cuidadosamente projetadas para
          atender aos mais altos padrões estéticos e funcionais.
        </p>
      </div>
    </div>
    <div
      class="section2__div4"
    >
      <a href="./assets/esq-features.jpg" data-lightbox="Features">
        <img
          class="section2__img1"
          src="./assets/esq-features.jpg"
          alt=""
        />
      </a>
      <h4
        class="section2__header3"
      >
        Transformamos ideias em realidade
      </h4>
    </div>
  </section>
  <section
    id="section-3"
    class="section section--hidden aside__section3"
  >
    <div
      class="section3__div1"
    >
      <div
        class="section3__div2"
      >
        <h3
          class="section3__header1"
        >
          Esquadrias:
        </h3>
        <h4
          class="section3__header2"
        >
          ELEGÂNCIA & QUALIDADE
        </h4>
      </div>
      <p
        class="section3__p1"
      >
        Trabalhamos com o uso de alumínio - linha
        <strong class="section3__strong"
          >GOLD</strong
        >
        e
        <strong class="section3__strong"
          >SUPREMA</strong
        >
        , um material versátil, durável e de baixa manutenção, combinado com
        vidros de qualidade, que proporcionam transparência, iluminação
        natural e isolamento térmico eficiente.
      </p>
      <p
        class="section3__p5"
      >
        Acreditamos que uma abordagem personalizada e um compromisso com a
        satisfação do cliente, estamos prontos para realizar seus projetos,
        agregando valor estético e funcional à sua construção. Conte com a
        Serralheria O Coliseu para soluções em esquadrias que unem tradição,
        qualidade e a expertise de uma marca renomada.
      </p>
      <div class="section3__div8">
            <h4 class="section3__header5">
              Confira os nossos últimos projetos:
            </h4>
            <a
              href="projetos.html"
              target="_self"
              class="section3__a1"
            >
              <img src="./assets/logo.png" alt="" class="section3__img1" />
              <h1
                class="section3__header6"
              >
                O Coliseu
              </h1>
              <h3 class="section3__header7">
                PROJETOS
              </h3>
            </a>
          </div>
    </div>
      
    </div>
    <div
      class="section3__div3"
    >
      <div
        class="swiperServices sliderML section3__div4"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-1.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-1.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-2.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-2.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-3.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-3.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-4.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-4.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-5.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-5.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-6.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-6.jpg" class="" alt="" />
            </a>
          </div>
          <div class="swiper-slide section3__div-swiper">
            <a
              href="./assets/esq-7.jpg"
              data-lightbox="Serviços Esquadrias"
            >
              <img src="./assets/esq-7.jpg" class="" alt="" />
            </a>
          </div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

      <p
        class="section3__p2"
      >
        Acreditamos que uma abordagem personalizada e um compromisso com a
        satisfação do cliente, estamos prontos para realizar seus projetos,
        agregando valor estético e funcional à sua construção. Conte com a
        Serralheria O Coliseu para soluções em esquadrias que unem tradição,
        qualidade e a expertise de uma marca renomada.
      </p>

      <div class="section3__div5">
      <h2
        class="section3__header3"
      >
        Serralheria
      </h2>
      
      <h1
        class="section3__header4"
      >
        O COLISEU
      </h1>
    </div>

      <div class="section3__div6">
            <h4 class="section3__header5">
              Confira os nossos últimos projetos:
            </h4>
            <a
              href="projetos.html"
              target="_self"
              class="section3__a1"
            >
              <img src="./assets/logo.png" alt="" class="section3__img1" />
              <h1
                class="section3__header6"
              >
                O Coliseu
              </h1>
              <h3 class="section3__header7">
                PROJETOS
              </h3>
            </a>
          </div>
    </div>
  </section>
</aside>`;

  bodyContainer = document.querySelector('body');

  constructor() {
    this.screenWidth = window.screen.width;
    this.renderHTML();
    this.init();
    this.addEventListeners();
  }

  renderHTML() {
    this.bodyContainer.firstElementChild.remove();
    this.bodyContainer.querySelector('.main').remove();
    this._clearDummies();
    this.bodyContainer.insertAdjacentHTML('afterbegin', this.HTML);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  init() {
    this._setHeroHeight(this.screenWidth);
    this._toggleSwitchState();
    this._changeRazaoSocialSize(this.screenWidth);
    this._removeHambMenu(this.screenWidth);
    this._configSwiper();
    this._setObserverRevealSections();
    this._setObserverStickyNav();
    this._addFadeOnNav(this.screenWidth);
  }

  _removeHambMenu(screenWidth) {
    if (screenWidth > 1023) {
      const hambContainer = document.querySelectorAll('.largeList');
      hambContainer.forEach((e) => e.classList.remove('hamb_container'));
    }
  }

  _clearDummies() {
    const dummies = document.querySelectorAll('.dummyMain');

    dummies.forEach((dummy) => dummy.remove());
  }

  addEventListeners() {
    const hambsBtn = document.querySelectorAll('.hamb');
    const switcher = document.querySelector('.roundSwitch');
    const btnHero1 = document.querySelector('.knowMore');
    const btnHero2 = document.querySelector('#knowMore');
    const hambContainer = document.querySelector('.largeList');
    const pageState = document.querySelectorAll('.pageState');

    hambContainer.addEventListener(
      'click',
      this._smoothScrollHandler.bind(this)
    );
    [btnHero1, btnHero2].forEach((btn) =>
      btn.addEventListener('click', this._smoothScrollHandler.bind(this))
    );

    hambsBtn.forEach((hamb) =>
      hamb.addEventListener('click', this._hambHandler.bind(this))
    );

    switcher.addEventListener('change', this._changePagesHandler.bind(this));

    pageState.forEach((page) =>
      page.addEventListener('click', this._changePagesHandler.bind(this))
    );
  }

  _changePagesHandler(event) {
    const switcher = document.querySelector('.roundSwitch');
    if (event.target.classList.contains('pageState')) {
      const pageToGo = event.target.dataset.page;

      if (pageToGo === this.currentPage) return;
    }

    this._removeIntersections();
    switcher.checked = false;
    setTimeout(() => {
      new App(true);
    }, 300);
  }

  _configSwiper() {
    const swiperServices = new Swiper('.swiperServices', {
      effect: 'cards',
      rotate: true,

      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  _removeIntersections() {
    const nonStickyArea = this.observers.sticky[0];
    const stickyObserver = this.observers.sticky[1];
    stickyObserver.unobserve(nonStickyArea);

    const sections = this.observers.sections[0];
    const sectionsObserver = this.observers.sections[1];
    sections.forEach((section) => sectionsObserver.unobserve(section));
  }

  _toggleSwitchState() {
    const switcher = document.querySelector('.roundSwitch');
    switcher.checked = !switcher.checked;
  }

  _setHeroHeight(screenWidth) {
    const heroContainer = document.querySelector('#section-1');

    if (screenWidth >= 768 && screenWidth < 1024) {
      heroContainer.style.height = '50vh';
    } else {
      const navBar = document.querySelector('#nav');

      const heroContainerHeight = heroContainer.getBoundingClientRect().height;
      const navBarHeight = navBar.getBoundingClientRect().height;

      heroContainer.style.height = `${heroContainerHeight - navBarHeight}px`;
    }
  }

  _hambHandler(event) {
    if (!(window.screen.width < 1024)) return;

    const hamb = document.querySelector('.hamb');
    const hambContainer = document.querySelector('.hamb_container');

    if (!event.target.classList.contains('pageState')) {
      this.statusHamb = !this.statusHamb;

      if (this.statusHamb) {
        hamb.src = './assets/menu-hamb-open.png';
        hambContainer.classList.add('hamb_container-style');
      } else {
        hamb.src = './assets/menu-hamb.png';
        hambContainer.classList.remove('hamb_container-style');
      }
    }
  }

  _setObserverStickyNav() {
    const nonStickyArea = document.querySelector('#section-1');
    const navBar = document.querySelector('#nav');
    const observer = new IntersectionObserver(this._stickyHandler, {
      root: null,
      threshold: 0,
      rootMargin: '-' + (navBar.getBoundingClientRect().height + 10) + 'px',
    });

    this.observers.sticky = [nonStickyArea, observer];
    observer.observe(nonStickyArea);
  }

  _setObserverRevealSections() {
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver(
      this._revealSectionHandler,
      {
        root: null,
        threshold: 0.15,
      }
    );
    this.observers.sections = [sections, sectionObserver];
    sections.forEach((section) => sectionObserver.observe(section));
  }

  _stickyHandler(entries) {
    const [entry] = entries;
    const navBar = document.querySelector('#nav');
    const dummy = document.querySelector('.dummyMain');

    if (!entry.isIntersecting) {
      navBar.classList.add('dummyYummy');
      dummy.classList.remove('dummyInvisible');
    } else {
      navBar.classList.remove('dummyYummy');
      dummy.classList.add('dummyInvisible');
    }
  }

  _revealSectionHandler = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  };

  _changeRazaoSocialSize(screenWidth) {
    const razaoSocial = document.querySelectorAll('.social__title');

    if (screenWidth < 768)
      razaoSocial.forEach((title) => (title.style.fontSize = '10px'));

    if (screenWidth >= 768 && screenWidth < 1024)
      razaoSocial.forEach((title) => (title.style.fontSize = '12px'));
  }

  _addFadeOnNav(screenWidth) {
    if (!(screenWidth >= 1024)) return;

    const navContainer = document.querySelector('#nav');

    navContainer.addEventListener('mouseover', (event) =>
      this._handleFadeOnNav(event, false)
    );

    navContainer.addEventListener('mouseout', (event) =>
      this._handleFadeOnNav(event, true)
    );
  }

  _handleFadeOnNav(event, state) {
    if (!event.target.classList.contains('nav__link')) return;

    const hovered = event.target;
    const siblings = [...document.querySelectorAll('.nav__link')];
    const logo = hovered.closest('.nav').querySelector('.logo');

    siblings.forEach((sibling) => {
      if (sibling !== hovered) {
        logo.classList[state ? 'remove' : 'add']('opacity20');
        sibling.classList[state ? 'remove' : 'add']('opacity20');
      }
    });
  }

  _smoothScrollHandler(event) {
    if (event.target.classList.contains('anchor')) return;

    event.preventDefault();

    if (event.target.classList.contains('nav__link')) this._hambHandler(event);

    const sectionToGo =
      document.querySelector(event.target.dataset.href) ??
      document.querySelector(event.target.getAttribute('href'));

    if (!sectionToGo) return;

    let isShowed = sectionToGo.classList?.contains('section--hidden');
    const translateY = 128;

    const navBarHeight = document
      .querySelector('#nav')
      .getBoundingClientRect().height;

    const headerHeight = isShowed ? navBarHeight + translateY : navBarHeight;
    const position = sectionToGo.getBoundingClientRect().top;
    const offsetPosition = position + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
