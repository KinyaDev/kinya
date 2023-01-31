import { c as create_ssr_component, d as each, f as add_attribute, e as escape, i as is_promise, n as noop, v as validate_component } from "../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".about.svelte-u17qef .box.svelte-u17qef{border:1px solid black;padding:1%}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"about svelte-u17qef"}"><h2>À Propos</h2>
	<br>
	<div class="${"box svelte-u17qef"}"><p>Je m&#39;appelle Noé, mais préfère être appelé
			<a href="${"https://twitter.com/@kinyakemono"}" target="${"_blank"}" rel="${"noreferrer"}">Kinya</a>, qui est
			également le nom de mon avatar. Depuis 2020, je fais partie de la communauté Furry. La fantasy
			et la musique sont devenues des passions importantes pour moi, en plus de mon admiration pour
			la culture japonaise et ses œuvres, notamment les animés. J&#39;ai développé des compétences en
			matière de création de monde et de langue grâce à mon intérêt pour les animés, et j&#39;ai de
			nombreux projets en cours, mais ils nécessitent des moyens financiers et beaucoup de
			motivation pour être réalisés.
		</p>
		<p>Je suis également un grand fan de jeux vidéo de type RPG et fantasy, mais je ne peux en jouer
			qu&#39;à quelques-uns car je n&#39;ai pas un PC très puissant (un Dell d&#39;occasion). Mon type
			d&#39;ennéagramme est le quatre et je suis médiateur. Je suis une personne très gentille, je me
			présente comme Kinya, ravi de vous rencontrer !
		</p></div>
</div>`;
});
const ArtsColumn_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".column.svelte-1ddb9og.svelte-1ddb9og{flex:25%;max-width:25%;padding:0 4px}.column.svelte-1ddb9og img.svelte-1ddb9og{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width: 800px){.column.svelte-1ddb9og.svelte-1ddb9og{flex:50%;max-width:50%}}@media screen and (max-width: 600px){.column.svelte-1ddb9og.svelte-1ddb9og{flex:100%;max-width:100%}}",
  map: null
};
const ArtsColumn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fi } = $$props;
  if ($$props.fi === void 0 && $$bindings.fi && fi !== void 0)
    $$bindings.fi(fi);
  $$result.css.add(css$3);
  return `<div class="${"column svelte-1ddb9og"}">${each(Object.values(fi), (f) => {
    return `<div><img${add_attribute("src", f.path + "png", 0)}${add_attribute("alt", f.name, 0)} class="${"svelte-1ddb9og"}">
			<p>${escape(f.name)}</p>
		</div>`;
  })}
</div>`;
});
const Arts_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".row.svelte-gwzsji{display:flex;flex-wrap:wrap;padding:0 4px}",
  map: null
};
function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
}
const Arts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const get = async () => {
    const allimgsf = /* @__PURE__ */ Object.assign({ "/static/images/LN-Stat-Interface.png": () => import("../../chunks/LN-Stat-Interface.js"), "/static/images/Silika Demon Charadesign.png": () => import("../../chunks/Silika Demon Charadesign.js"), "/static/images/Which kind of thing are kinya projects.png": () => import("../../chunks/Which kind of thing are kinya projects.js") });
    const iterableImages = Object.entries(allimgsf);
    const allimgs = await Promise.all(iterableImages.map(async ([path, resolver]) => {
      const imgPath = path.slice(1, -3);
      addTrigger();
      return {
        path: imgPath.slice(7),
        name: imgPath.split("/").reverse()[0].replace(".", "")
      };
    }));
    return allimgs;
  };
  let { addTrigger } = $$props;
  if ($$props.get === void 0 && $$bindings.get && get !== void 0)
    $$bindings.get(get);
  if ($$props.addTrigger === void 0 && $$bindings.addTrigger && addTrigger !== void 0)
    $$bindings.addTrigger(addTrigger);
  $$result.css.add(css$2);
  return `<div class="${"row svelte-gwzsji"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(get2) {
      return `
		${each(chunkArray(get2, 7), (c) => {
        return `${validate_component(ArtsColumn, "ArtsColumn").$$render($$result, { fi: c }, {}, {})}`;
      })}
	`;
    }(__value);
  }(get())}
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@font-face{font-family:'bourton';src:url(../fonts/BourtonBase.ttf)}@font-face{font-family:'brandon';src:url(../fonts/brandon-grotesque-black.otf)}@font-face{font-family:'starbrush';src:url(../fonts/StarBrush-DemoVersion-Regular.ttf)}.title.svelte-s1e5wf{font-family:'bourton';font-size:330%;text-align:center}.subtitle.svelte-s1e5wf{font-family:brandon;font-style:italic;font-size:90%;text-align:center}@media only screen and (min-width: 768px){.title.svelte-s1e5wf{font-family:'bourton';font-size:900%;text-align:center}.subtitle.svelte-s1e5wf{font-family:brandon;font-style:italic;font-size:130%;text-align:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div><h1 class="${"title svelte-s1e5wf"}">Kinya Projects</h1>
	<h3 class="${"subtitle svelte-s1e5wf"}">Site personnel - Hebergeur d&#39;illustration de projets &amp; fanarts</h3>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-3tz62y{text-align:center;align-items:center;width:100%}.svelte-3tz62y{font-family:sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let artcount;
  let addTrigger = () => artcount++;
  $$result.css.add(css);
  artcount = 0;
  return `${$$result.head += `<!-- HEAD_svelte-1a9pl5r_START -->${$$result.title = `<title>Kinya Website</title>`, ""}<!-- HEAD_svelte-1a9pl5r_END -->`, ""}

<div class="${"svelte-3tz62y"}"><div class="${"container svelte-3tz62y"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		${validate_component(About, "About").$$render($$result, {}, {}, {})}
		<br class="${"svelte-3tz62y"}">
		<p class="${"svelte-3tz62y"}">Il y a ${escape(artcount)} publications</p>
		<br class="${"svelte-3tz62y"}">
		${validate_component(Arts, "Arts").$$render($$result, { addTrigger }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
