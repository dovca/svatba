<template>
  <Intro />
  <div class="container max-w-2xl mt-32 pb-20 space-y-16 text-xl">
    <section class="space-y-6">
      <h2 class="text-3xl font-bold">Vítejte na našem svatebním webu!</h2>
      <p>Budeme se brát a&nbsp;jsme moc rádi, že u&nbsp;toho budete s&nbsp;námi.</p>
      <p>
        Svatba se bude konat na Lhotce u&nbsp;Lidmaně a&nbsp;protože je toto místo skutečně v&nbsp;srdci přírody,
        připravili jsme mapku, která vám ukáže, jak se k&nbsp;nám dostat:
      </p>
      <Map class="!my-16" />
      <ul class="space-y-4">
        <li>
          <strong>Autem</strong>: "Lhotka Lidmaň&nbsp;1", navigace už vám určitě napoví. Pokud máte v&nbsp;autě místo
          navíc a&nbsp;mohli byste svézt i&nbsp;dalši hosty,
          <a
            href="https://docs.google.com/spreadsheets/d/1_QMTDV33_e1T53Mj-F8KZdLWPURfpp7sOq2V-LSsuHA/edit?usp=sharing"
            class="underline underline-offset-2 decoration-1"
            >nabídněte místo tady</a
          >. Zároveň kdo místo hledá, může se k&nbsp;někomu přidat.
        </li>
        <li>
          <strong>Vlakem</strong>: Nejbližší nádraží jsou v&nbsp;Táboře a&nbsp;Pelhřimově. Dejte nám vědět předem, pokud
          pojedete vlakem nebo jiným spojem MHD, aby pro vás mohl někdo přijet. Čísla jsou uvedena
          <a href="#kontakty" class="underline underline-offset-2 decoration-1">níže na stránce</a>.
        </li>
      </ul>
    </section>
    <section class="space-y-6">
      <h2 class="text-3xl font-bold">Dotazník</h2>
      <p>
        Organizovat svatbu není snadný úkol, a&nbsp;proto vás chceme poprosit o&nbsp;vyplnění dotazníku, kterým nám
        plánování ulehčíte a&nbsp;zároveň potvrdíte účast. Prosíme o&nbsp;vyplnění <strong>do 31. července</strong>.
      </p>
      <Form :vip-mode="$route.query.vip !== undefined" />
    </section>
    <section class="space-y-6">
      <h2 class="text-3xl font-bold">Co si obléknout?</h2>
      <p>
        Dress code je volný; rádi bychom, aby se všichni cítili slavnostně a&nbsp;pohodlně. Na Lhotce je také rybník
        a&nbsp;hřiště na beach volejbal, takže i&nbsp;plavky se můžou hodit :)
      </p>
    </section>
    <section class="space-y-6">
      <h2 class="text-3xl font-bold">Svatební dary</h2>
      <p>
        Největší radost nám udělá to, že tento den strávíte s&nbsp;námi. Pokud nás chcete něčím obdarovat, preferujeme
        finanční příspěvek na oslavu.
      </p>
    </section>
    <section class="space-y-6">
      <h2 class="text-3xl font-bold">Kontakty</h2>
      <p>
        Na Lhotce má dobrý telefonní signál bohužel jenom T&zwj;-&zwj;Mobile, v&nbsp;případě potřeby můžete kdykoliv
        volat:
      </p>
      <ul id="kontakty" class="space-y-4">
        <li><strong>Ženichovi</strong>: <a href="tel:+420721410712">721&nbsp;410&nbsp;712</a></li>
        <li><strong>Svědkyni Terce</strong>: <a href="tel:+420607472130">607&nbsp;472&nbsp;130</a></li>
      </ul>
    </section>
    <p class="text-center text-4xl">Moc se na vás těšíme</p>
    <img src="/eva_a_david.jpg" alt="" class="w-full sm:w-3/4 mx-auto rounded-xl" />
  </div>
</template>
