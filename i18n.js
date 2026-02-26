/* =============================================
   CUBYBOO — i18n Translations
   Languages: EN, FR, ES, IT, ZH
   ============================================= */

const CUBYBOO_I18N = {

  en: {
    // NAV
    nav_oath:       "The Oath",
    nav_whitelist:  "Whitelist",
    nav_about:      "About",
    nav_collection: "Collection",
    nav_wl_btn:     "🎟 Whitelist",

    // HOME — video section
    home_trailer_eyebrow: "Official Trailer",
    home_trailer_title:   "🎬 The Secret <span class='grad-text2'>Origin</span> of Cubyboo",
    home_trailer_sub:     "Watch the story unfold — how Cubyboo came to be, and why Guardians are needed now more than ever.",

    // HOME — oath section
    oath_eyebrow:   "Sacred Ritual",
    oath_title:     "<span class='grad-text'>The Guardian's</span><br>Oath",
    oath_sub:       "Accept the oath to unlock your Whitelist access.",
    oath_guardian:  "Guardian",
    oath_body: `I, [GUARDIAN],
acknowledge that what I cherish exists.

I vow to protect the essence entrusted to my Cubyboo,
To see it.
To honor it.
To never let it fade into oblivion.

As long as I wear its image,
As long as I speak of it,
As long as I give it my attention,
What it guards shall never disappear.

I do not fight with force,
but with presence.

[SIG]`,
    oath_sig:       "WHAT WE CHERISH EXISTS",
    oath_check:     "I solemnly accept this oath and commit to my role as Guardian",
    oath_decline:   "Decline",
    oath_accept:    "⚔️ I Accept This Oath",
    oath_signed_msg: "Oath accepted — Whitelist unlocked!",
    oath_signed_btn: "🎟 Go to Whitelist",
    oath_decline_alert: "⚠️ You must accept the Guardian's Oath to access the whitelist.",

    // WHITELIST
    wl_eyebrow:     "Phase 2 — In Progress",
    wl_title:       "Join the <span class='grad-text'>Guardians</span>",
    wl_subtitle:    "2,222 NFTs · 22 Batches · 4 Phases",
    wl_progress_label: "Spots claimed this session",
    wl_missions:    "Complete All Missions",
    step1_title:    "Follow @Cubyboo_NFT on 𝕏",
    step1_desc:     "Join our community on Twitter to stay updated",
    step1_link:     "→ Follow now",
    step2_title:    "Like & Repost the pinned tweet",
    step2_desc:     "Help us spread the Guardians' mission",
    step2_link:     "→ View tweet",
    step3_title:    "Tag 3 friends for Bonus WL priority 🎁",
    step3_desc:     "Mention 3 friends in the pinned tweet, then paste your tweet link below",
    step3_link:     "→ View pinned tweet",
    step4_title:    "Sign the Guardian's Oath",
    step4_desc:     "Your oath has been accepted ✓",
    wl_register:    "Register",
    wl_notice:      "<strong>All actions will be manually verified.</strong> Incomplete or fraudulent submissions will be disqualified.",
    wl_twitter_label: "Twitter Handle",
    wl_tweet_label:   "Link to your tweet",
    wl_tweet_opt:     "(optional — bonus priority)",
    wl_tweet_hint:    "Paste the link to your tweet where you tagged 3 friends",
    wl_wallet_label:  "Abstract Wallet",
    wl_submit:        "🐻 Join the Guardians",
    wl_submitting:    "⏳ Submitting…",
    wl_success_title: "Welcome, Guardian!",
    wl_success_text:  "Your Whitelist request has been successfully registered.<br><br><strong style='color:var(--green)'>The Prismatic Sanctuary awaits you 🌈</strong>",
    wl_err_wallet:    "❌ Invalid wallet format. Must start with 0x and contain 40 hex characters.",
    wl_err_twitter:   "❌ Twitter handle must start with @",
    wl_err_generic:   "❌ An error occurred. Please try again.",

    // ABOUT
    about_eyebrow:    "The Lore",
    about_title:      "The World of<br><span class='grad-text'>Cubyboo</span>",
    about_sub:        "A universe where forgotten essences drift like lost stars — and tiny guardians keep them alive, forever.",
    origin_eyebrow:   "The Origin",
    origin_title:     "The <span class='grad-text'>Genesis</span>",
    lore_p1: "Long ago, our world blazed with infinite color. Every hue vibrated with its own energy. The green of forests, the blue of oceans, the red of passion, the yellow of joy. Elements danced in perfect harmony — water nourished, fire transformed, earth supported, air carried life. The world was a perfect prism where every essence played its part in the great symphony of existence.",
    lore_p2: "Then, without warning, things began to fade. The sages uncovered a terrifying truth: every essence of the world — color, element, emotion — can only exist if it is cherished and protected. Without a guardian to defend it, it slowly erases itself from reality, like a memory dissolving into forgetting.",
    lore_q1: '"Each essence of the world can only exist if it is cherished. Without a guardian to defend it, it slowly erases itself from reality."',
    lore_p3: "In one last act of hope, the Universe answered. From the heart of the Primal Prism emerged the First Bear — the perfect archetype of the protector. Gentle yet brave. Cute yet powerful. From the First Bear were born the Cubyboo, each one carrying the same sacred form but marked by a different essence — a color, an element, an emotion it alone is sworn to guard.",
    lore_p4: "The Cubyboo do not move. They have sworn to remain eternally still — an absolute discipline, a permanent cosmic meditation that keeps their essence anchored in reality. But stillness alone is not enough. That is where you come in. You, the Co-Guardian, are mobile. Every time you use your Cubyboo as your avatar, you show its essence to the world. Your Cubyboo keeps the essence alive by existing. You make it live through your actions. Together, you are complete.",
    lore_q2: '"As long as a Cubyboo is cherished by its human Guardian, what it protects can never disappear."',
    values_eyebrow:   "Core Values",
    values_title:     "What We <span class='grad-text'>Stand For</span>",
    values_sub:       "Three pillars that define every Guardian's commitment to the Cubyboo universe.",
    val1_title: "Presence",
    val1_desc:  "Your attention is the most powerful force in the Cubyboo universe. The Cubyboo are eternal and immobile — but without a Guardian to witness them, even the most powerful essence fades. To see is to protect.",
    val2_title: "Color",
    val2_desc:  "Every Cubyboo is marked by the essence it guards. The Guardian of Green carries the color of forests; the Guardian of Joy shimmers with luminous yellow. This color is not paint — it is the essence itself. No color is greater than another.",
    val3_title: "Community",
    val3_desc:  "The Cubyboo cannot survive alone — and neither can their Guardians. The Prismatic Sanctuary unites 2,222 holders bound by a shared cosmic oath. Every act of presence strengthens the whole.",
    oath_teaser_eyebrow: "Sacred Ritual",
    oath_teaser_title:   "The Guardian's <span class='grad-text'>Oath</span>",
    cta_oath:   "⚔️ Accept the Oath",
    cta_wl:     "🎟 Go to Whitelist",

    // COLLECTION
    coll_eyebrow: "The Collection",
    coll_title:   "Meet the <span class='grad-text'>Cubyboo</span>",
    coll_sub:     "Each Cubyboo is a unique combination of traits across six categories, making every Guardian bond truly one-of-a-kind.",
    rm_eyebrow:   "Roadmap",
    rm_title:     "The Guardian's <span class='grad-text'>Journey</span>",
    rm_sub:       "Four phases to build a thriving ecosystem where Cubyboo and their Guardians shape the future together.",
    rm1_tag: "Completed ✓", rm1_title: "Phase 1 — Genesis",
    rm1_desc: "The Guardians of Color awaken first. Without color, the world is dead. Green, Blue, Red, Yellow, Purple, Rainbow — the six pillars of visual existence are secured.",
    rm2_tag: "In Progress",  rm2_title: "Phase 2 — Whitelist",
    rm2_desc: "Whitelist campaign, Discord launch, community missions, Guardian Oath ritual. 200 early spots secured.",
    rm3_tag: "Coming Soon",  rm3_title: "Phase 3 — Mint",
    rm3_desc: "Public mint on Abstract blockchain. 2,222 unique Cubyboo released across 22 batches. $10 mint price. Whitelist priority access.",
    rm4_tag: "Future",       rm4_title: "Phase 4 — Sanctuary",
    rm4_desc: "Holder dashboard, Guardian ranking system, exclusive drops, community treasury, and the Prismatic Sanctuary DAO.",
    faq_eyebrow: "FAQ",
    faq_title:   "Everything you <span class='grad-text2'>need to know</span>",
    faq_q1: "What is Cubyboo?",
    faq_a1: "Cubyboo is a collection of 2,222 unique NFTs on the Abstract blockchain. Each Cubyboo is a guardian of a specific essence — a color, an element, or a human emotion. Without a Guardian to cherish it, that essence slowly fades from reality. You are the Co-Guardian. Together, you keep it alive.",
    faq_q2: "Can my Cubyboo change or evolve?",
    faq_a2: "No. Your NFT remains exactly as it was minted, forever. The Cubyboo have sworn eternal stillness. Your Cubyboo will never change. You are the one who evolves as a Guardian.",
    faq_q3: "What essence does my Cubyboo protect?",
    faq_a3: "Each Cubyboo is assigned to one of 22 guardianships — Colors (Green, Blue, Red, Yellow, Purple, Rainbow), Elements (Water, Fire, Earth, Air, Crystal), Emotions (Joy, Courage, Love, Hope, Peace, Dreams), and Transcendences (Seasons, Music, Heroes, Stars, Myths). You will discover your Cubyboo's essence at mint.",
    faq_q4: "Why does minting cost $10?",
    faq_a4: "We believe in accessible NFTs — but also sustainable ones. A free mint attracts flippers who devastate a collection's value. At $10, the barrier is low enough for any true believer, but high enough to protect the community. Every dollar goes toward rewarding our Guardians and building the Prismatic Sanctuary.",
    faq_q5: "How do I get Whitelisted?",
    faq_a5: "Accept the Guardian's Oath, follow @Cubyboo_NFT on X, like and repost the pinned tweet, tag 3 friends for bonus priority, then submit your wallet address. All actions are manually verified.",
    faq_q6: "What is the Prismatic Sanctuary?",
    faq_a6: "The dimension where all Cubyboo reside — a place of pure refracted light. NFT holders access this Sanctuary via our exclusive Discord, where they can vote, participate in assemblies, and shape the future of the project.",
    faq_q7: "What blockchain is Cubyboo on?",
    faq_a7: "Abstract — a Layer 2 built for creators and artists. Ultra-low fees (~$0.01), optimized for NFTs, Ethereum-level security. We chose Abstract because it values quality over quantity, art over speculation.",
    faq_q8: "Can I resell my Cubyboo?",
    faq_a8: "Yes. The new holder automatically becomes its Co-Guardian. But know this: a Cubyboo that is never used, never shared, never honored — begins to weaken. The bond is only as strong as the Guardian who holds it.",
    final_eyebrow: "Limited Spots — Act Now",
    final_title:   "Ready to become<br>a <span class='grad-text'>Guardian?</span>",
    final_sub:     "200 Whitelist spots available this session. Complete your missions, accept the oath, and secure your place in the Cubyboo universe.",
    final_btn1:    "⚔️ Accept the Oath",
    final_btn2:    "🎟 Join Whitelist",

    // FOOTER
    footer_copy: "© 2026 Cubyboo · What we cherish exists.",
  },

  fr: {
    nav_oath: "Le Serment", nav_whitelist: "Whitelist", nav_about: "À Propos", nav_collection: "Collection", nav_wl_btn: "🎟 Whitelist",
    home_trailer_eyebrow: "Trailer Officiel",
    home_trailer_title: "🎬 L'Origine Secrète <span class='grad-text2'>de Cubyboo</span>",
    home_trailer_sub: "Découvrez l'histoire — comment les Cubyboo sont nés, et pourquoi des Gardiens sont nécessaires maintenant plus que jamais.",
    oath_eyebrow: "Rituel Sacré", oath_title: "<span class='grad-text'>Le Serment du</span><br>Gardien",
    oath_sub: "Acceptez le serment pour débloquer l'accès à la Whitelist.",
    oath_guardian: "Gardien",
    oath_body: `Moi, [GUARDIAN],
je reconnais que ce que je chéris existe.

Je fais le vœu de protéger l'essence confiée à mon Cubyboo,
De la voir.
De l'honorer.
De ne jamais la laisser sombrer dans l'oubli.

Tant que je porte son image,
Tant que j'en parle,
Tant que je lui accorde mon attention,
Ce qu'il protège ne disparaîtra jamais.

Je ne combats pas par la force,
mais par ma présence.

[SIG]`,
    oath_sig: "CE QUE NOUS CHÉRISSONS EXISTE",
    oath_check: "J'accepte solennellement ce serment et m'engage dans mon rôle de Gardien",
    oath_decline: "Refuser", oath_accept: "⚔️ J'accepte ce Serment",
    oath_signed_msg: "Serment accepté — Whitelist débloquée !", oath_signed_btn: "🎟 Rejoindre la Whitelist",
    oath_decline_alert: "⚠️ Vous devez accepter le Serment du Gardien pour accéder à la whitelist.",
    wl_eyebrow: "Phase 2 — En cours", wl_title: "Rejoignez les <span class='grad-text'>Gardiens</span>",
    wl_subtitle: "2 222 NFTs · 22 Batches · 4 Phases",
    wl_progress_label: "Places réclamées cette session",
    wl_missions: "Accomplir Toutes les Missions",
    step1_title: "Suivre @Cubyboo_NFT sur 𝕏", step1_desc: "Rejoignez notre communauté sur Twitter", step1_link: "→ Suivre maintenant",
    step2_title: "Liker & Retweeter le tweet épinglé", step2_desc: "Aidez-nous à répandre la mission des Gardiens", step2_link: "→ Voir le tweet",
    step3_title: "Taguer 3 amis pour une priorité WL Bonus 🎁", step3_desc: "Mentionnez 3 amis dans le tweet épinglé, puis collez le lien ci-dessous", step3_link: "→ Voir le tweet épinglé",
    step4_title: "Signer le Serment du Gardien", step4_desc: "Votre serment a été accepté ✓",
    wl_register: "S'inscrire",
    wl_notice: "<strong>Toutes les actions seront vérifiées manuellement.</strong> Les soumissions incomplètes ou frauduleuses seront disqualifiées.",
    wl_twitter_label: "Pseudo Twitter", wl_tweet_label: "Lien vers votre tweet", wl_tweet_opt: "(optionnel — priorité bonus)",
    wl_tweet_hint: "Collez le lien du tweet où vous avez tagué 3 amis",
    wl_wallet_label: "Portefeuille Abstract", wl_submit: "🐻 Rejoindre les Gardiens", wl_submitting: "⏳ Envoi en cours…",
    wl_success_title: "Bienvenue, Gardien !", wl_success_text: "Votre demande de Whitelist a été enregistrée avec succès.<br><br><strong style='color:var(--green)'>Le Sanctuaire Prismatique vous attend 🌈</strong>",
    wl_err_wallet: "❌ Format de portefeuille invalide. Doit commencer par 0x et contenir 40 caractères hexadécimaux.",
    wl_err_twitter: "❌ Le pseudo Twitter doit commencer par @", wl_err_generic: "❌ Une erreur est survenue. Veuillez réessayer.",
    about_eyebrow: "Le Lore", about_title: "L'Univers de<br><span class='grad-text'>Cubyboo</span>",
    about_sub: "Un univers où les essences oubliées dérivent comme des étoiles perdues — et de minuscules gardiens les maintiennent en vie, pour toujours.",
    origin_eyebrow: "L'Origine", origin_title: "La <span class='grad-text'>Genèse</span>",
    lore_p1: "Il y a très longtemps, notre monde brillait de mille couleurs. Chaque teinte vibrait d'une énergie propre. Le vert des forêts, le bleu des océans, le rouge de la passion, le jaune de la joie. Les éléments dansaient en harmonie parfaite — l'eau nourrissait, le feu transformait, la terre soutenait, l'air portait la vie.",
    lore_p2: "Puis, sans prévenir, quelque chose commença à s'effacer. Les sages découvrirent une vérité terrifiante : chaque essence du monde — couleur, élément, émotion — ne peut exister que si elle est protégée et chérie. Sans gardien pour la défendre, elle s'efface progressivement de la réalité, comme un souvenir qui se perd dans l'oubli.",
    lore_q1: "« Chaque essence du monde ne peut exister que si elle est chérie. Sans gardien pour la défendre, elle s'efface progressivement de la réalité. »",
    lore_p3: "Dans un dernier espoir, l'Univers répondit. Du cœur du Prisme Originel émergea le Premier Ours — l'archétype parfait du protecteur. Doux mais courageux. Mignon mais puissant. Du Premier Ours naquirent les Cubyboo, chacun portant la même forme sacrée mais marqué par une essence différente — une couleur, un élément, une émotion qu'il est seul à protéger.",
    lore_p4: "Les Cubyboo ne bougent pas. Ils ont fait le serment de rester éternellement immobiles. Mais l'immobilité seule ne suffit pas. C'est là que vous intervenez. Vous, le Co-Gardien, êtes mobile. Chaque fois que vous utilisez votre Cubyboo comme avatar, vous montrez son essence au monde. Ensemble, vous êtes complets.",
    lore_q2: "« Tant qu'un Cubyboo est chéri par son gardien humain, ce qu'il protège ne pourra jamais disparaître. »",
    values_eyebrow: "Valeurs Fondamentales", values_title: "Ce En Quoi <span class='grad-text'>Nous Croyons</span>",
    values_sub: "Trois piliers qui définissent l'engagement de chaque Gardien envers l'univers Cubyboo.",
    val1_title: "Présence", val1_desc: "Votre attention est la force la plus puissante de l'univers Cubyboo. Les Cubyboo sont éternels et immobiles — mais sans un Gardien pour les voir, même la plus puissante des essences s'efface. Voir, c'est protéger.",
    val2_title: "Couleur", val2_desc: "Chaque Cubyboo est marqué par l'essence qu'il protège. Le Gardien du Vert porte la couleur des forêts ; le Gardien de la Joie scintille de jaune lumineux. Cette couleur n'est pas une peinture — c'est l'essence elle-même. Aucune couleur n'est supérieure à une autre.",
    val3_title: "Communauté", val3_desc: "Les Cubyboo ne peuvent survivre seuls — et leurs Gardiens non plus. Le Sanctuaire Prismatique unit 2 222 détenteurs liés par un serment cosmique commun. Chaque acte de présence renforce l'ensemble.",
    oath_teaser_eyebrow: "Rituel Sacré", oath_teaser_title: "Le Serment du <span class='grad-text'>Gardien</span>",
    cta_oath: "⚔️ Accepter le Serment", cta_wl: "🎟 Rejoindre la Whitelist",
    coll_eyebrow: "La Collection", coll_title: "Découvrez les <span class='grad-text'>Cubyboo</span>",
    coll_sub: "Chaque Cubyboo est une combinaison unique de traits en six catégories, rendant chaque lien avec son Gardien véritablement unique.",
    rm_eyebrow: "Roadmap", rm_title: "Le Voyage du <span class='grad-text'>Gardien</span>",
    rm_sub: "Quatre phases pour construire un écosystème florissant où Cubyboo et leurs Gardiens façonnent l'avenir ensemble.",
    rm1_tag: "Terminé ✓", rm1_title: "Phase 1 — Genèse", rm1_desc: "Les Gardiens des Couleurs s'éveillent en premier. Sans couleur, le monde est mort. Vert, Bleu, Rouge, Jaune, Violet, Arc-en-ciel — les six piliers de l'existence visuelle sont sécurisés.",
    rm2_tag: "En cours", rm2_title: "Phase 2 — Whitelist", rm2_desc: "Campagne whitelist, lancement Discord, missions communautaires, rituel du Serment. 200 places précoces sécurisées.",
    rm3_tag: "Bientôt", rm3_title: "Phase 3 — Mint", rm3_desc: "Mint public sur la blockchain Abstract. 2 222 Cubyboo uniques distribués en 22 batches. Prix : 10$. Accès prioritaire pour la whitelist.",
    rm4_tag: "Futur", rm4_title: "Phase 4 — Sanctuaire", rm4_desc: "Dashboard des détenteurs, système de rang Gardien, drops exclusifs, trésor communautaire et le DAO du Sanctuaire Prismatique.",
    faq_eyebrow: "FAQ", faq_title: "Tout ce que vous <span class='grad-text2'>devez savoir</span>",
    faq_q1: "Qu'est-ce que Cubyboo ?", faq_a1: "Cubyboo est une collection de 2 222 NFTs uniques sur la blockchain Abstract. Chaque Cubyboo est le gardien d'une essence spécifique — une couleur, un élément ou une émotion humaine. Sans un Gardien pour le chérir, cette essence s'efface lentement de la réalité. Vous êtes le Co-Gardien. Ensemble, vous la maintenez en vie.",
    faq_q2: "Mon Cubyboo peut-il changer ou évoluer ?", faq_a2: "Non. Votre NFT reste exactement tel qu'il a été minté, pour toujours. Les Cubyboo ont juré l'immobilité éternelle. C'est VOUS qui évoluez en tant que Gardien.",
    faq_q3: "Quelle essence mon Cubyboo protège-t-il ?", faq_a3: "Chaque Cubyboo est assigné à l'une des 22 missions de gardien — Couleurs, Éléments, Émotions et Transcendances. Vous découvrirez l'essence de votre Cubyboo au moment du mint.",
    faq_q4: "Pourquoi le mint coûte-t-il 10 $ ?", faq_a4: "Nous croyons en des NFTs accessibles — mais aussi durables. Un free mint attire les flippers qui dévastent la valeur d'une collection. À 10$, la barrière est suffisamment basse pour tout vrai croyant, mais assez haute pour protéger la communauté.",
    faq_q5: "Comment rejoindre la Whitelist ?", faq_a5: "Acceptez le Serment du Gardien, suivez @Cubyboo_NFT sur X, likez et retweetez le tweet épinglé, taguez 3 amis pour une priorité bonus, puis soumettez votre adresse de portefeuille.",
    faq_q6: "Qu'est-ce que le Sanctuaire Prismatique ?", faq_a6: "La dimension où résident tous les Cubyboo — un lieu de lumière pure réfractée. Les détenteurs de NFTs accèdent à ce Sanctuaire via notre Discord exclusif pour voter et façonner l'avenir du projet.",
    faq_q7: "Sur quelle blockchain Cubyboo est-il déployé ?", faq_a7: "Abstract — une Layer 2 conçue pour les créateurs et artistes. Frais ultra-bas (~0,01$), optimisée pour les NFTs, sécurité niveau Ethereum.",
    faq_q8: "Puis-je revendre mon Cubyboo ?", faq_a8: "Oui. Le nouveau détenteur devient automatiquement son Co-Gardien. Mais sachez ceci : un Cubyboo jamais utilisé, jamais partagé, jamais honoré — commence à s'affaiblir.",
    final_eyebrow: "Places Limitées — Agissez Maintenant",
    final_title: "Prêt à devenir<br>un <span class='grad-text'>Gardien ?</span>",
    final_sub: "200 places Whitelist disponibles cette session. Accomplissez vos missions, acceptez le serment et sécurisez votre place dans l'univers Cubyboo.",
    final_btn1: "⚔️ Accepter le Serment", final_btn2: "🎟 Rejoindre la Whitelist",
    footer_copy: "© 2026 Cubyboo · Ce que nous chérissons existe.",
  },

  es: {
    nav_oath: "El Juramento", nav_whitelist: "Whitelist", nav_about: "Acerca de", nav_collection: "Colección", nav_wl_btn: "🎟 Whitelist",
    home_trailer_eyebrow: "Tráiler Oficial",
    home_trailer_title: "🎬 El Origen Secreto <span class='grad-text2'>de Cubyboo</span>",
    home_trailer_sub: "Descubre la historia — cómo nacieron los Cubyboo y por qué los Guardianes son necesarios ahora más que nunca.",
    oath_eyebrow: "Ritual Sagrado", oath_title: "<span class='grad-text'>El Juramento del</span><br>Guardián",
    oath_sub: "Acepta el juramento para desbloquear el acceso a la Whitelist.",
    oath_guardian: "Guardián",
    oath_body: `Yo, [GUARDIAN],
reconozco que lo que aprecio existe.

Juro proteger la esencia confiada a mi Cubyboo,
Verla.
Honrarla.
Nunca dejarla desvanecerse en el olvido.

Mientras lleve su imagen,
Mientras hable de ella,
Mientras le preste mi atención,
Lo que protege nunca desaparecerá.

No lucho con la fuerza,
sino con mi presencia.

[SIG]`,
    oath_sig: "LO QUE APRECIAMOS EXISTE",
    oath_check: "Acepto solemnemente este juramento y me comprometo con mi papel de Guardián",
    oath_decline: "Rechazar", oath_accept: "⚔️ Acepto Este Juramento",
    oath_signed_msg: "¡Juramento aceptado — Whitelist desbloqueada!", oath_signed_btn: "🎟 Ir a la Whitelist",
    oath_decline_alert: "⚠️ Debes aceptar el Juramento del Guardián para acceder a la whitelist.",
    wl_eyebrow: "Fase 2 — En Progreso", wl_title: "Únete a los <span class='grad-text'>Guardianes</span>",
    wl_subtitle: "2.222 NFTs · 22 Lotes · 4 Fases",
    wl_progress_label: "Lugares reclamados esta sesión",
    wl_missions: "Completar Todas las Misiones",
    step1_title: "Seguir @Cubyboo_NFT en 𝕏", step1_desc: "Únete a nuestra comunidad en Twitter", step1_link: "→ Seguir ahora",
    step2_title: "Like y Repost al tweet fijado", step2_desc: "Ayúdanos a difundir la misión de los Guardianes", step2_link: "→ Ver tweet",
    step3_title: "Etiqueta a 3 amigos para prioridad WL Bonus 🎁", step3_desc: "Menciona 3 amigos en el tweet fijado y pega el enlace abajo", step3_link: "→ Ver tweet fijado",
    step4_title: "Firmar el Juramento del Guardián", step4_desc: "Tu juramento ha sido aceptado ✓",
    wl_register: "Registrarse",
    wl_notice: "<strong>Todas las acciones serán verificadas manualmente.</strong> Las solicitudes incompletas o fraudulentas serán descalificadas.",
    wl_twitter_label: "Usuario de Twitter", wl_tweet_label: "Enlace a tu tweet", wl_tweet_opt: "(opcional — prioridad bonus)",
    wl_tweet_hint: "Pega el enlace del tweet donde etiquetaste a 3 amigos",
    wl_wallet_label: "Cartera Abstract", wl_submit: "🐻 Unirse a los Guardianes", wl_submitting: "⏳ Enviando…",
    wl_success_title: "¡Bienvenido, Guardián!", wl_success_text: "Tu solicitud de Whitelist ha sido registrada con éxito.<br><br><strong style='color:var(--green)'>El Santuario Prismático te espera 🌈</strong>",
    wl_err_wallet: "❌ Formato de cartera inválido. Debe comenzar con 0x y contener 40 caracteres hexadecimales.",
    wl_err_twitter: "❌ El usuario de Twitter debe comenzar con @", wl_err_generic: "❌ Ocurrió un error. Por favor, inténtalo de nuevo.",
    about_eyebrow: "El Lore", about_title: "El Mundo de<br><span class='grad-text'>Cubyboo</span>",
    about_sub: "Un universo donde las esencias olvidadas derivan como estrellas perdidas — y pequeños guardianes las mantienen vivas, para siempre.",
    origin_eyebrow: "El Origen", origin_title: "La <span class='grad-text'>Génesis</span>",
    lore_p1: "Hace mucho tiempo, nuestro mundo ardía con colores infinitos. Cada tono vibraba con su propia energía. El verde de los bosques, el azul de los océanos, el rojo de la pasión, el amarillo de la alegría. Los elementos danzaban en perfecta armonía — el agua nutrió, el fuego transformó, la tierra sostuvo, el aire llevó la vida.",
    lore_p2: "Luego, sin previo aviso, las cosas comenzaron a desvanecerse. Los sabios descubrieron una verdad aterradora: cada esencia del mundo solo puede existir si es apreciada y protegida. Sin un guardián que la defienda, se borra lentamente de la realidad, como un recuerdo que se pierde en el olvido.",
    lore_q1: '"Cada esencia del mundo solo puede existir si es apreciada. Sin un guardián que la defienda, se borra lentamente de la realidad."',
    lore_p3: "En un último acto de esperanza, el Universo respondió. Del corazón del Prisma Original surgió el Primer Oso — el arquetipo perfecto del protector. Tierno pero valiente. Adorable pero poderoso. Del Primer Oso nacieron los Cubyboo, cada uno llevando la misma forma sagrada pero marcado por una esencia diferente.",
    lore_p4: "Los Cubyboo no se mueven. Han jurado permanecer eternamente quietos. Pero la quietud sola no es suficiente. Ahí es donde entras tú. Tú, el Co-Guardián, eres móvil. Cada vez que usas tu Cubyboo como avatar, muestras su esencia al mundo. Juntos, estáis completos.",
    lore_q2: '"Mientras un Cubyboo sea apreciado por su guardián humano, lo que protege nunca podrá desaparecer."',
    values_eyebrow: "Valores Fundamentales", values_title: "En Qué <span class='grad-text'>Creemos</span>",
    values_sub: "Tres pilares que definen el compromiso de cada Guardián con el universo Cubyboo.",
    val1_title: "Presencia", val1_desc: "Tu atención es la fuerza más poderosa del universo Cubyboo. Los Cubyboo son eternos e inmóviles — pero sin un Guardián que los observe, incluso la esencia más poderosa se desvanece. Ver es proteger.",
    val2_title: "Color", val2_desc: "Cada Cubyboo está marcado por la esencia que protege. El Guardián del Verde lleva el color de los bosques; el Guardián de la Alegría brilla con amarillo luminoso. Este color no es pintura — es la esencia misma.",
    val3_title: "Comunidad", val3_desc: "Los Cubyboo no pueden sobrevivir solos — y sus Guardianes tampoco. El Santuario Prismático une a 2.222 poseedores ligados por un juramento cósmico compartido. Cada acto de presencia fortalece al conjunto.",
    oath_teaser_eyebrow: "Ritual Sagrado", oath_teaser_title: "El Juramento del <span class='grad-text'>Guardián</span>",
    cta_oath: "⚔️ Aceptar el Juramento", cta_wl: "🎟 Ir a la Whitelist",
    coll_eyebrow: "La Colección", coll_title: "Conoce a los <span class='grad-text'>Cubyboo</span>",
    coll_sub: "Cada Cubyboo es una combinación única de rasgos en seis categorías, haciendo que cada vínculo con su Guardián sea verdaderamente único.",
    rm_eyebrow: "Hoja de Ruta", rm_title: "El Viaje del <span class='grad-text'>Guardián</span>",
    rm_sub: "Cuatro fases para construir un ecosistema próspero donde Cubyboo y sus Guardianes forjan el futuro juntos.",
    rm1_tag: "Completado ✓", rm1_title: "Fase 1 — Génesis", rm1_desc: "Los Guardianes del Color despiertan primero. Sin color, el mundo está muerto. Verde, Azul, Rojo, Amarillo, Púrpura, Arcoíris — los seis pilares de la existencia visual están asegurados.",
    rm2_tag: "En Progreso", rm2_title: "Fase 2 — Whitelist", rm2_desc: "Campaña whitelist, lanzamiento de Discord, misiones comunitarias, ritual del Juramento. 200 lugares anticipados asegurados.",
    rm3_tag: "Próximamente", rm3_title: "Fase 3 — Mint", rm3_desc: "Mint público en la blockchain Abstract. 2.222 Cubyboo únicos en 22 lotes. Precio: $10. Acceso prioritario para whitelist.",
    rm4_tag: "Futuro", rm4_title: "Fase 4 — Santuario", rm4_desc: "Panel de poseedores, sistema de rango Guardián, drops exclusivos, tesorería comunitaria y el DAO del Santuario Prismático.",
    faq_eyebrow: "Preguntas Frecuentes", faq_title: "Todo lo que <span class='grad-text2'>necesitas saber</span>",
    faq_q1: "¿Qué es Cubyboo?", faq_a1: "Cubyboo es una colección de 2.222 NFTs únicos en la blockchain Abstract. Cada Cubyboo es guardián de una esencia específica — un color, un elemento o una emoción humana. Sin un Guardián que lo aprecie, esa esencia se desvanece lentamente de la realidad.",
    faq_q2: "¿Puede mi Cubyboo cambiar o evolucionar?", faq_a2: "No. Tu NFT permanece exactamente como fue acuñado, para siempre. Los Cubyboo han jurado quietud eterna. Eres TÚ quien evoluciona como Guardián.",
    faq_q3: "¿Qué esencia protege mi Cubyboo?", faq_a3: "Cada Cubyboo está asignado a una de las 22 misiones de guardián — Colores, Elementos, Emociones y Trascendencias. Descubrirás la esencia de tu Cubyboo en el momento del mint.",
    faq_q4: "¿Por qué el mint cuesta $10?", faq_a4: "Creemos en NFTs accesibles, pero también sostenibles. Un free mint atrae a flippers que devastan el valor de una colección. A $10, la barrera es lo suficientemente baja para cualquier verdadero creyente, pero alta para proteger a la comunidad.",
    faq_q5: "¿Cómo me uno a la Whitelist?", faq_a5: "Acepta el Juramento, sigue @Cubyboo_NFT en X, da like y repostea el tweet fijado, etiqueta 3 amigos y envía tu dirección de cartera.",
    faq_q6: "¿Qué es el Santuario Prismático?", faq_a6: "La dimensión donde residen todos los Cubyboo — un lugar de luz pura refractada. Los poseedores de NFTs acceden a este Santuario a través de nuestro Discord exclusivo.",
    faq_q7: "¿En qué blockchain está Cubyboo?", faq_a7: "Abstract — una Layer 2 creada para creadores y artistas. Tarifas ultra-bajas (~$0.01), optimizada para NFTs, seguridad de nivel Ethereum.",
    faq_q8: "¿Puedo revender mi Cubyboo?", faq_a8: "Sí. El nuevo poseedor se convierte automáticamente en su Co-Guardián. Pero recuerda: un Cubyboo nunca usado, nunca compartido, nunca honrado — comienza a debilitarse.",
    final_eyebrow: "Lugares Limitados — Actúa Ahora",
    final_title: "¿Listo para convertirte<br>en <span class='grad-text'>Guardián?</span>",
    final_sub: "200 lugares Whitelist disponibles esta sesión. Completa tus misiones, acepta el juramento y asegura tu lugar en el universo Cubyboo.",
    final_btn1: "⚔️ Aceptar el Juramento", final_btn2: "🎟 Unirse a la Whitelist",
    footer_copy: "© 2026 Cubyboo · Lo que apreciamos existe.",
  },

  it: {
    nav_oath: "Il Giuramento", nav_whitelist: "Whitelist", nav_about: "Chi Siamo", nav_collection: "Collezione", nav_wl_btn: "🎟 Whitelist",
    home_trailer_eyebrow: "Trailer Ufficiale",
    home_trailer_title: "🎬 L'Origine Segreta <span class='grad-text2'>di Cubyboo</span>",
    home_trailer_sub: "Scopri la storia — come sono nati i Cubyboo e perché i Guardiani sono necessari ora più che mai.",
    oath_eyebrow: "Rituale Sacro", oath_title: "<span class='grad-text'>Il Giuramento del</span><br>Guardiano",
    oath_sub: "Accetta il giuramento per sbloccare l'accesso alla Whitelist.",
    oath_guardian: "Guardiano",
    oath_body: `Io, [GUARDIAN],
riconosco che ciò che custodisco esiste.

Giuro di proteggere l'essenza affidata al mio Cubyboo,
Di vederla.
Di onorarla.
Di non lasciarla mai svanire nell'oblio.

Finché porto la sua immagine,
Finché ne parlo,
Finché le dedico la mia attenzione,
Ciò che protegge non sparirà mai.

Non combatto con la forza,
ma con la presenza.

[SIG]`,
    oath_sig: "CIÒ CHE CUSTODIAMO ESISTE",
    oath_check: "Accetto solennemente questo giuramento e mi impegno nel mio ruolo di Guardiano",
    oath_decline: "Rifiuta", oath_accept: "⚔️ Accetto Questo Giuramento",
    oath_signed_msg: "Giuramento accettato — Whitelist sbloccata!", oath_signed_btn: "🎟 Vai alla Whitelist",
    oath_decline_alert: "⚠️ Devi accettare il Giuramento del Guardiano per accedere alla whitelist.",
    wl_eyebrow: "Fase 2 — In Corso", wl_title: "Unisciti ai <span class='grad-text'>Guardiani</span>",
    wl_subtitle: "2.222 NFT · 22 Lotti · 4 Fasi",
    wl_progress_label: "Posti riservati in questa sessione",
    wl_missions: "Completa Tutte le Missioni",
    step1_title: "Segui @Cubyboo_NFT su 𝕏", step1_desc: "Unisciti alla nostra community su Twitter", step1_link: "→ Segui ora",
    step2_title: "Metti Like & Riposta il tweet in evidenza", step2_desc: "Aiutaci a diffondere la missione dei Guardiani", step2_link: "→ Vedi tweet",
    step3_title: "Tagga 3 amici per priorità WL Bonus 🎁", step3_desc: "Menziona 3 amici nel tweet in evidenza e incolla il link qui sotto", step3_link: "→ Vedi tweet in evidenza",
    step4_title: "Firma il Giuramento del Guardiano", step4_desc: "Il tuo giuramento è stato accettato ✓",
    wl_register: "Registrati",
    wl_notice: "<strong>Tutte le azioni saranno verificate manualmente.</strong> Le candidature incomplete o fraudolente verranno squalificate.",
    wl_twitter_label: "Username Twitter", wl_tweet_label: "Link al tuo tweet", wl_tweet_opt: "(facoltativo — priorità bonus)",
    wl_tweet_hint: "Incolla il link del tweet in cui hai taggato 3 amici",
    wl_wallet_label: "Portafoglio Abstract", wl_submit: "🐻 Unisciti ai Guardiani", wl_submitting: "⏳ Invio in corso…",
    wl_success_title: "Benvenuto, Guardiano!", wl_success_text: "La tua richiesta di Whitelist è stata registrata con successo.<br><br><strong style='color:var(--green)'>Il Santuario Prismatico ti aspetta 🌈</strong>",
    wl_err_wallet: "❌ Formato portafoglio non valido. Deve iniziare con 0x e contenere 40 caratteri esadecimali.",
    wl_err_twitter: "❌ L'username Twitter deve iniziare con @", wl_err_generic: "❌ Si è verificato un errore. Riprova.",
    about_eyebrow: "Il Lore", about_title: "Il Mondo di<br><span class='grad-text'>Cubyboo</span>",
    about_sub: "Un universo dove le essenze dimenticate derivano come stelle perdute — e piccoli guardiani le mantengono in vita, per sempre.",
    origin_eyebrow: "L'Origine", origin_title: "La <span class='grad-text'>Genesi</span>",
    lore_p1: "Tanto tempo fa, il nostro mondo ardeva di colori infiniti. Ogni tonalità vibrava con la propria energia. Il verde delle foreste, il blu degli oceani, il rosso della passione, il giallo della gioia. Gli elementi danzavano in perfetta armonia — l'acqua nutriva, il fuoco trasformava, la terra sosteneva, l'aria portava la vita.",
    lore_p2: "Poi, senza preavviso, le cose iniziarono a svanire. I saggi scoprirono una verità terrificante: ogni essenza del mondo può esistere solo se è amata e protetta. Senza un guardiano che la difenda, si cancella lentamente dalla realtà, come un ricordo che si perde nell'oblio.",
    lore_q1: '"Ogni essenza del mondo può esistere solo se è amata. Senza un guardiano che la difenda, si cancella lentamente dalla realtà."',
    lore_p3: "In un ultimo atto di speranza, l'Universo rispose. Dal cuore del Prisma Originale emerse il Primo Orso — l'archetipo perfetto del protettore. Dolce ma coraggioso. Carino ma potente. Dal Primo Orso nacquero i Cubyboo, ognuno con la stessa forma sacra ma segnato da un'essenza diversa.",
    lore_p4: "I Cubyboo non si muovono. Hanno giurato di restare eternamente immobili. Ma l'immobilità da sola non basta. È qui che entri in gioco tu. Tu, il Co-Guardiano, sei mobile. Ogni volta che usi il tuo Cubyboo come avatar, mostri la sua essenza al mondo. Insieme, siete completi.",
    lore_q2: '"Finché un Cubyboo è amato dal suo guardiano umano, ciò che protegge non potrà mai sparire."',
    values_eyebrow: "Valori Fondamentali", values_title: "Ciò In Cui <span class='grad-text'>Crediamo</span>",
    values_sub: "Tre pilastri che definiscono l'impegno di ogni Guardiano verso l'universo Cubyboo.",
    val1_title: "Presenza", val1_desc: "La tua attenzione è la forza più potente nell'universo Cubyboo. I Cubyboo sono eterni e immobili — ma senza un Guardiano che li osservi, anche l'essenza più potente svanisce. Vedere è proteggere.",
    val2_title: "Colore", val2_desc: "Ogni Cubyboo è segnato dall'essenza che protegge. Il Guardiano del Verde porta il colore delle foreste; il Guardiano della Gioia brilla di giallo luminoso. Questo colore non è vernice — è l'essenza stessa.",
    val3_title: "Comunità", val3_desc: "I Cubyboo non possono sopravvivere da soli — e i loro Guardiani nemmeno. Il Santuario Prismatico unisce 2.222 possessori legati da un giuramento cosmico condiviso. Ogni atto di presenza rafforza l'insieme.",
    oath_teaser_eyebrow: "Rituale Sacro", oath_teaser_title: "Il Giuramento del <span class='grad-text'>Guardiano</span>",
    cta_oath: "⚔️ Accetta il Giuramento", cta_wl: "🎟 Vai alla Whitelist",
    coll_eyebrow: "La Collezione", coll_title: "Incontra i <span class='grad-text'>Cubyboo</span>",
    coll_sub: "Ogni Cubyboo è una combinazione unica di tratti in sei categorie, rendendo ogni legame con il suo Guardiano davvero unico.",
    rm_eyebrow: "Roadmap", rm_title: "Il Viaggio del <span class='grad-text'>Guardiano</span>",
    rm_sub: "Quattro fasi per costruire un ecosistema fiorente dove Cubyboo e i loro Guardiani plasmano il futuro insieme.",
    rm1_tag: "Completato ✓", rm1_title: "Fase 1 — Genesi", rm1_desc: "I Guardiani del Colore si svegliano per primi. Senza colore, il mondo è morto. Verde, Blu, Rosso, Giallo, Viola, Arcobaleno — i sei pilastri dell'esistenza visiva sono assicurati.",
    rm2_tag: "In Corso", rm2_title: "Fase 2 — Whitelist", rm2_desc: "Campagna whitelist, lancio Discord, missioni comunitarie, rituale del Giuramento. 200 posti anticipati assicurati.",
    rm3_tag: "Prossimamente", rm3_title: "Fase 3 — Mint", rm3_desc: "Mint pubblico sulla blockchain Abstract. 2.222 Cubyboo unici in 22 lotti. Prezzo: $10. Accesso prioritario whitelist.",
    rm4_tag: "Futuro", rm4_title: "Fase 4 — Santuario", rm4_desc: "Dashboard possessori, sistema di grado Guardiano, drop esclusivi, tesoreria comunitaria e il DAO del Santuario Prismatico.",
    faq_eyebrow: "Domande Frequenti", faq_title: "Tutto quello che <span class='grad-text2'>devi sapere</span>",
    faq_q1: "Cos'è Cubyboo?", faq_a1: "Cubyboo è una collezione di 2.222 NFT unici sulla blockchain Abstract. Ogni Cubyboo è guardiano di un'essenza specifica — un colore, un elemento o un'emozione umana. Senza un Guardiano che lo ami, quell'essenza svanisce lentamente dalla realtà.",
    faq_q2: "Il mio Cubyboo può cambiare o evolversi?", faq_a2: "No. Il tuo NFT rimane esattamente come è stato coniato, per sempre. I Cubyboo hanno giurato l'immobilità eterna. Sei TU che evolvi come Guardiano.",
    faq_q3: "Quale essenza protegge il mio Cubyboo?", faq_a3: "Ogni Cubyboo è assegnato a una delle 22 missioni — Colori, Elementi, Emozioni e Trascendenze. Scoprirai l'essenza del tuo Cubyboo al momento del mint.",
    faq_q4: "Perché il mint costa $10?", faq_a4: "Crediamo negli NFT accessibili ma anche sostenibili. Un free mint attira i flipper che devastano il valore di una collezione. A $10, la barriera è abbastanza bassa per ogni vero credente, ma abbastanza alta da proteggere la community.",
    faq_q5: "Come entro nella Whitelist?", faq_a5: "Accetta il Giuramento, segui @Cubyboo_NFT su X, metti like e riposta il tweet in evidenza, tagga 3 amici e invia il tuo indirizzo portafoglio.",
    faq_q6: "Cos'è il Santuario Prismatico?", faq_a6: "La dimensione dove risiedono tutti i Cubyboo — un luogo di pura luce rifratta. I possessori di NFT accedono a questo Santuario tramite il nostro Discord esclusivo.",
    faq_q7: "Su quale blockchain è Cubyboo?", faq_a7: "Abstract — una Layer 2 creata per creatori e artisti. Commissioni ultra-basse (~$0.01), ottimizzata per NFT, sicurezza Ethereum.",
    faq_q8: "Posso rivendere il mio Cubyboo?", faq_a8: "Sì. Il nuovo possessore diventa automaticamente il suo Co-Guardiano. Ma sappi: un Cubyboo mai usato, mai condiviso, mai onorato — inizia a indebolirsi.",
    final_eyebrow: "Posti Limitati — Agisci Ora",
    final_title: "Pronto a diventare<br>un <span class='grad-text'>Guardiano?</span>",
    final_sub: "200 posti Whitelist disponibili in questa sessione. Completa le tue missioni, accetta il giuramento e assicurati il tuo posto nell'universo Cubyboo.",
    final_btn1: "⚔️ Accetta il Giuramento", final_btn2: "🎟 Unisciti alla Whitelist",
    footer_copy: "© 2026 Cubyboo · Ciò che custodiamo esiste.",
  },

  zh: {
    nav_oath: "誓言", nav_whitelist: "白名单", nav_about: "关于", nav_collection: "系列", nav_wl_btn: "🎟 白名单",
    home_trailer_eyebrow: "官方预告片",
    home_trailer_title: "🎬 Cubyboo<span class='grad-text2'>的秘密起源</span>",
    home_trailer_sub: "观看故事展开——Cubyboo如何诞生，以及为何现在比以往任何时候都更需要守护者。",
    oath_eyebrow: "神圣仪式", oath_title: "<span class='grad-text'>守护者</span><br>誓言",
    oath_sub: "接受誓言以解锁白名单访问权限。",
    oath_guardian: "守护者",
    oath_body: `我，[GUARDIAN]，
承认我所珍视的一切真实存在。

我发誓保护托付给我的Cubyboo的本质，
去看见它。
去尊重它。
永不让它在遗忘中消逝。

只要我佩戴它的形象，
只要我谈论它，
只要我给予它我的关注，
它所守护的一切永不消失。

我不以力量战斗，
而以我的存在。

[SIG]`,
    oath_sig: "我们所珍视的永远存在",
    oath_check: "我郑重接受这一誓言，承诺履行我作为守护者的职责",
    oath_decline: "拒绝", oath_accept: "⚔️ 我接受此誓言",
    oath_signed_msg: "誓言已接受——白名单已解锁！", oath_signed_btn: "🎟 前往白名单",
    oath_decline_alert: "⚠️ 您必须接受守护者誓言才能访问白名单。",
    wl_eyebrow: "第2阶段——进行中", wl_title: "加入<span class='grad-text'>守护者</span>",
    wl_subtitle: "2,222个NFT · 22批次 · 4阶段",
    wl_progress_label: "本次会话已认领名额",
    wl_missions: "完成所有任务",
    step1_title: "在𝕏上关注@Cubyboo_NFT", step1_desc: "加入我们的Twitter社区以获取最新动态", step1_link: "→ 立即关注",
    step2_title: "点赞并转发置顶推文", step2_desc: "帮助我们传播守护者的使命", step2_link: "→ 查看推文",
    step3_title: "标记3位朋友获得白名单优先权 🎁", step3_desc: "在置顶推文中提及3位朋友，然后粘贴推文链接", step3_link: "→ 查看置顶推文",
    step4_title: "签署守护者誓言", step4_desc: "您的誓言已被接受 ✓",
    wl_register: "注册",
    wl_notice: "<strong>所有行动将被手动验证。</strong>不完整或欺诈性的提交将被取消资格。",
    wl_twitter_label: "Twitter用户名", wl_tweet_label: "推文链接", wl_tweet_opt: "(可选——获得优先权)",
    wl_tweet_hint: "粘贴您标记了3位朋友的推文链接",
    wl_wallet_label: "Abstract钱包", wl_submit: "🐻 加入守护者", wl_submitting: "⏳ 提交中…",
    wl_success_title: "欢迎，守护者！", wl_success_text: "您的白名单申请已成功注册。<br><br><strong style='color:var(--green)'>棱镜圣殿在等待您 🌈</strong>",
    wl_err_wallet: "❌ 钱包格式无效。必须以0x开头并包含40个十六进制字符。",
    wl_err_twitter: "❌ Twitter用户名必须以@开头", wl_err_generic: "❌ 发生错误，请重试。",
    about_eyebrow: "传说", about_title: "<span class='grad-text'>Cubyboo</span><br>的世界",
    about_sub: "一个被遗忘的本质像迷失的星星一样漂流的宇宙——而微小的守护者永远守护着它们。",
    origin_eyebrow: "起源", origin_title: "<span class='grad-text'>创世纪</span>",
    lore_p1: "很久以前，我们的世界闪耀着无穷无尽的色彩。每种色调都以自己的能量振动。森林的绿色，海洋的蓝色，激情的红色，喜悦的黄色。元素在完美的和谐中舞蹈——水滋养，火转化，土支撑，气带来生命。",
    lore_p2: "然后，毫无预警，事物开始消退。贤者们发现了一个可怕的真相：世界的每一种本质——颜色、元素、情感——只有在被珍视和保护时才能存在。没有守护者来捍卫它，它就会慢慢从现实中抹去，就像记忆在遗忘中消逝。",
    lore_q1: "「世界的每一种本质只有在被珍视时才能存在。没有守护者来捍卫它，它就会慢慢从现实中消失。」",
    lore_p3: "在最后一次希望中，宇宙回应了。从原始棱镜的心脏中浮现出第一只熊——完美的守护者原型。温柔却勇敢。可爱却强大。从第一只熊诞生了Cubyboo，每一个都携带着相同的神圣形态，但被不同的本质所标记。",
    lore_p4: "Cubyboo不会移动。他们发誓永远静止不动——这是一种绝对的纪律，一种永久的宇宙冥想，使他们的本质锚定在现实中。但仅靠静止是不够的。这就是你介入的地方。你，共同守护者，是移动的。每次你将Cubyboo用作头像，你就向世界展示它的本质。在一起，你们是完整的。",
    lore_q2: "「只要Cubyboo被其人类守护者珍视，它所保护的一切就永远不会消失。」",
    values_eyebrow: "核心价值观", values_title: "我们<span class='grad-text'>所坚守的</span>",
    values_sub: "三大支柱定义了每位守护者对Cubyboo宇宙的承诺。",
    val1_title: "存在", val1_desc: "您的关注是Cubyboo宇宙中最强大的力量。Cubyboo是永恒且不动的——但没有守护者来见证他们，即使是最强大的本质也会消退。看见即是保护。",
    val2_title: "色彩", val2_desc: "每个Cubyboo都被其守护的本质所标记。绿色守护者携带森林的颜色；喜悦守护者闪耀着明亮的黄色。这种颜色不是油漆——它就是本质本身。",
    val3_title: "社区", val3_desc: "Cubyboo无法独自生存——他们的守护者也不能。棱镜圣殿将2,222名持有者聚集在一起，他们都受到共同宇宙誓言的约束。每一个存在的行为都会加强整体。",
    oath_teaser_eyebrow: "神圣仪式", oath_teaser_title: "守护者<span class='grad-text'>誓言</span>",
    cta_oath: "⚔️ 接受誓言", cta_wl: "🎟 前往白名单",
    coll_eyebrow: "系列作品", coll_title: "认识<span class='grad-text'>Cubyboo</span>",
    coll_sub: "每个Cubyboo都是六个类别中特征的独特组合，使每个守护者的纽带真正独一无二。",
    rm_eyebrow: "路线图", rm_title: "守护者的<span class='grad-text'>旅程</span>",
    rm_sub: "四个阶段建立一个繁荣的生态系统，Cubyboo和他们的守护者共同塑造未来。",
    rm1_tag: "已完成 ✓", rm1_title: "第1阶段——创世纪", rm1_desc: "颜色守护者首先觉醒。没有颜色，世界就死了。绿色、蓝色、红色、黄色、紫色、彩虹——视觉存在的六大支柱得到保障。",
    rm2_tag: "进行中", rm2_title: "第2阶段——白名单", rm2_desc: "白名单活动、Discord启动、社区任务、守护者誓言仪式。200个早期名额已保障。",
    rm3_tag: "即将推出", rm3_title: "第3阶段——铸造", rm3_desc: "在Abstract区块链上公开铸造。22批次共2,222个独特Cubyboo。铸造价格：10美元。白名单优先访问。",
    rm4_tag: "未来", rm4_title: "第4阶段——圣殿", rm4_desc: "持有者仪表板、守护者排名系统、独家投放、社区金库和棱镜圣殿DAO。",
    faq_eyebrow: "常见问题", faq_title: "您需要<span class='grad-text2'>了解的一切</span>",
    faq_q1: "什么是Cubyboo？", faq_a1: "Cubyboo是Abstract区块链上2,222个独特NFT的集合。每个Cubyboo都是特定本质的守护者——颜色、元素或人类情感。没有守护者来珍视它，那种本质就会慢慢从现实中消退。",
    faq_q2: "我的Cubyboo可以改变或进化吗？", faq_a2: "不可以。您的NFT永远保持铸造时的状态。Cubyboo已发誓永恒静止。是您在作为守护者不断进化。",
    faq_q3: "我的Cubyboo保护什么本质？", faq_a3: "每个Cubyboo被分配到22个守护任务之一——颜色、元素、情感和超越。您将在铸造时发现您的Cubyboo的本质。",
    faq_q4: "为什么铸造费用是10美元？", faq_a4: "我们相信NFT应该可及，但也要可持续。免费铸造会吸引投机者破坏收藏品的价值。10美元的门槛足够低，适合任何真正的信徒，但足够高以保护社区。",
    faq_q5: "如何加入白名单？", faq_a5: "接受守护者誓言，在X上关注@Cubyboo_NFT，点赞并转发置顶推文，标记3位朋友获得优先权，然后提交您的钱包地址。",
    faq_q6: "什么是棱镜圣殿？", faq_a6: "所有Cubyboo居住的维度——一个纯折射光的地方。NFT持有者通过我们的独家Discord访问这个圣殿，在那里他们可以投票并塑造项目的未来。",
    faq_q7: "Cubyboo在哪个区块链上？", faq_a7: "Abstract——为创作者和艺术家打造的Layer 2。超低手续费（约0.01美元），针对NFT优化，以太坊级安全性。",
    faq_q8: "我可以转售我的Cubyboo吗？", faq_a8: "可以。新持有者自动成为其共同守护者。但请记住：一个从未被使用、分享、尊重的Cubyboo——开始变弱。",
    final_eyebrow: "名额有限——立即行动",
    final_title: "准备好成为<br><span class='grad-text'>守护者</span>了吗？",
    final_sub: "本次会话200个白名单名额。完成任务，接受誓言，在Cubyboo宇宙中确保您的位置。",
    final_btn1: "⚔️ 接受誓言", final_btn2: "🎟 加入白名单",
    footer_copy: "© 2026 Cubyboo · 我们所珍视的永远存在。",
  }
};

/* ── Language Manager ── */
const LangManager = {
  current: 'en',

  init() {
    this.current = localStorage.getItem('cubyboo_lang') || 'en';
    this.apply(this.current);
    this.buildSelector();
  },

  set(lang) {
    if (!CUBYBOO_I18N[lang]) return;
    this.current = lang;
    localStorage.setItem('cubyboo_lang', lang);
    this.apply(lang);
    // Update selector button label
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = this.getFlag(lang);
  },

  get(key) {
    const t = CUBYBOO_I18N[this.current];
    return (t && t[key] !== undefined) ? t[key] : (CUBYBOO_I18N.en[key] || '');
  },

  apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key);
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.get(key);
    });
    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  },

  getFlag(lang) {
    const flags = { en:'🇬🇧', fr:'🇫🇷', es:'🇪🇸', it:'🇮🇹', zh:'🇨🇳' };
    return flags[lang] || '🌐';
  },

  buildSelector() {
    const container = document.getElementById('lang-selector');
    if (!container) return;
    const langs = [
      { code:'en', label:'English' },
      { code:'fr', label:'Français' },
      { code:'es', label:'Español' },
      { code:'it', label:'Italiano' },
      { code:'zh', label:'中文' },
    ];
    container.innerHTML = `
      <div class="lang-wrap">
        <button class="lang-btn" id="lang-btn" onclick="LangManager.toggleDropdown()">${this.getFlag(this.current)}</button>
        <div class="lang-dropdown" id="lang-dropdown">
          ${langs.map(l => `<button class="lang-opt ${l.code === this.current ? 'active':''}" onclick="LangManager.set('${l.code}');LangManager.closeDropdown();">${this.getFlag(l.code)} ${l.label}</button>`).join('')}
        </div>
      </div>`;
    // Close on outside click
    document.addEventListener('click', e => {
      if (!container.contains(e.target)) this.closeDropdown();
    });
  },

  toggleDropdown() {
    document.getElementById('lang-dropdown').classList.toggle('open');
  },
  closeDropdown() {
    const d = document.getElementById('lang-dropdown');
    if (d) d.classList.remove('open');
  }
};
