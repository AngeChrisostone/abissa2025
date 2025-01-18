import Image from 'next/image';
import histoire from '@/public/img/histoire.webp';
import trone from '@/public/img/trone.webp';
import critique1 from '@/public/img/critique1.webp';
import critique2 from '@/public/img/critique2.webp';
import critique3 from '@/public/img/critique3.webp';
import poetry1 from '@/public/img/poetry1.webp';
import poetry2 from '@/public/img/poetry2.webp';
import poetry3 from '@/public/img/poetry3.webp';
import danse1 from '@/public/img/danse1.webp';
import danse2 from '@/public/img/danse2.webp';
import danse3 from '@/public/img/danse3.webp';
import quartier1 from '@/public/img/quartier1.webp';
import quartier2 from '@/public/img/quartier2.webp';
import quartier3 from '@/public/img/quartier3.webp';

export default function Histoire() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen px-4 sm:px-6 lg:px-8 py-8">

            <main className="max-w-7xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#035B87]">Histoire d'ABISSA</h1>
                    <Image src={histoire} alt="Roi" className="w-full mb-4" />
                </header>
                <section className="mb-8" introduction='true'>
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#035B87] mb-4">
                        La critique sociale au service de la bonne gouvernance chez les N’zima de Côte d’Ivoire et du Ghana
                    </h2>
                    <Image src={trone} alt="Le trone" className="w-full mb-4" />
                    <p className="text-base sm:text-lg leading-relaxed">
                        L’Abissa est la danse annuelle de critique sociale et politique qui marque la fin d’une année d’activités politiques, sociales et économiques et le début d’un nouvel an des mêmes activités chez le peuple n’zima. Cette année particulière prend fin à la fin du dixième mois (octobre) de l’année civile et débute, le 1er novembre de la même année civile. Après cette année d’activités, le peuple n’zima fête comme tout autre peuple, la nouvelle année, entendue comme le temps d’une révolution de la terre autour du soleil, et appelée année civile, commençant le 1er janvier et prenant fin le 31 décembre. L’Abissa est une fête de renaissance, de régénération et de bilan des n’zima, elle demeure une danse de pardon, de réconciliation, de l’unité retrouvée et de l’union des sept clans qui forment l’ossature du peuple n’zima. La renaissance et la régénération qu’occasionne son bilan, se situent dans la mouvance de la floraison, de la fruitaison et du bourgeonnement des arbres et lianes à cette période de l’année. Les N’zima dansent plantes, fruits à la main, sur la tête, au bras, au cou et à la cheville. Ils font un avec la nature et elle avec eux. Face aux problèmes de l’environnement, leur relation homme-nature et vice-versa qui date de la nuit des temps, s’est intensifiée.
                        Autant ces valeurs qu’elle véhicule continuent d’enthousiasmer tous ceux qui y participent, autant la critique sociale qu’elle met en relief apparaît comme l’un des points les plus importants de la célébration de cette fête traditionnelle multiséculaire.
                    </p>
                </section>

                <section className="mb-8" critique='true'>
                    <h3 className="text-lg sm:text-xl font-medium text-[#035B87] mb-3">
                        Une tribune idéale pour l’expression de la démocratie
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Image src={critique1} alt="La critique" className="w-full" />
                        <Image src={critique2} alt="La critique" className="w-full" />
                        <Image src={critique3} alt="La critique" className="w-full" />
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed">
                        La critique sociale réalisée du mardi, jour politique et sacré de l’Abissa au samedi, dernier jour de la danse effective de l’Abyssa, constitue une tribune adéquate qui matérialise la dimension démocratique (maamaamulé diè) de cet évènement.
                        Cette critique politique et sociale est rendue possible parce que le peuple n’zima reprend aux autorités, la souveraineté qui lui appartient, mais qu’il leur a  conférée, pour la donner à ceux et celles qui font la critique, dans les principes du respect strict de la dignité et de la vie privée des personnes critiquées. Cette reprise de la souveraineté par le peuple et pour le peuple et les conditionnalités principielles qui l’accompagnent, font que tout le monde se soumet à la critique politique et sociale. Personne : ni la Reine mère, détentrice du pouvoir exécutif ; ni le Roi, aide de gouvernance de la reine mère en matière de pouvoir exécutif, et détenteur du pouvoir militaire ; ni le conseiller du roi, premier ministre, ne peuvent interrompre une action des poètes chanteurs qui ont l’immunité critique (nohalè nu ezalè benga).
                        La critique politique et sociale, investie de cette immunité est exécutée par des poètes chansonniers (nohalè nu manli benga), porte-parole du peuple sous la conduite des maîtres de la parole appelés « Ezomenli ». Qu’ils viennent du soleil levant (Ananze) ou du soleil couchant (Ablamon), ces chansonniers ayant l’immunité critique (nohalè nu ezalè benga) exécutent des chants critiques pouvant viser sans distinction, tous les membres du peuple n’zima, qu’ils soient chefs, gouvernants, dirigeants, ou simples anonymes de la société. Cet exercice est favorisé par le contexte de l’Abissa où, durant les sept jours que dure l’évènement, toutes les barrières sociales régissant la société n’zima disparaissent momentanément par endroits, se relâchent et/ou se renforcent par d’autres.
                        Ces chants poétiques qui sont composés par les « Ezomenli » suivant une structuration qui permet de situer l’origine des chansonniers qui l’exécutent, de rappeler le contexte dans lequel le chant est exécuté, de révéler l’origine, les ascendants et l’identité de la personne visée par le chant sans fouille-merde ni voyeurisme, de relater les faits qui lui sont reprochés, et de citer les noms des éventuels témoins de ces faits…, s’attaquent avec force et sérénité, non seulement à ceux qui gouvernent le peuple, mais aussi à tout individu qui se serait distingué positivement ou négativement au cours de l’année écoulée.
                        La critique sociale vise donc un dévoilement public des faits et méfaits de la société et de ses dirigeants pour une gouvernance convenable, c’est-à-dire dans le sens de l’équité et de la justice. Les chansonniers charment, séduisent par leur art oratoire, et la critique sociale qu’ils exécutent, ne consiste pas uniquement à blâmer l’individu ; elle peut également s’orienter vers l’éloge, l’apologie de celui-ci si ses actes sont louables.
                        Ainsi, pour celui qui est blâmé, la critique fonctionne non pas comme une humiliation publique, encore moins une dévalorisation de l’être, mais plutôt comme une invitation à se libérer de la négativité pour atteindre la positivité, et aller à une exaltation, pour épouser la bonne voie et ressentir la fierté qui se dégage des actions louables que l’on a posées.
                    </p>
                </section>

                <section className="mb-8" poetry='true'>
                    <h3 className="text-lg sm:text-xl font-medium text-[#035B87] mb-3">Librement exercée mais dans le bon ton ...</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Image src={poetry1} alt="Le poète" className="w-full" />
                        <Image src={poetry2} alt="Le poète" className="w-full" />
                        <Image src={poetry3} alt="Le poète" className="w-full" />
                    </div>
                    Les « Ezomenli » jouissent d’une très grande liberté dans l’élaboration de leurs textes poétiques qui doivent néanmoins être conçus dans le bon ton. Les textes qui ne souffrent d’aucune censure, doivent traduire la réalité des faits qui sont révélés. Dans les méfaits, le N’zima garde toujours le privilège de sa dignité et de sa vie privée. De ce fait, la critique politique et sociale consiste à dire les faits, les méfaits rien que ces faits et méfaits et à permettre à la personne critiquée de prendre de la distanciation par rapport à ses propres actes et de se rire d’elle-même et de récompenser ceux qui lui ont permis de se voir ainsi.
                    Lorsque les faits sont dévoyés, la personne visée par la critique peut mettre en exergue la contradiction en recourant à un autre groupe de chansonniers pour faire rétablir la vérité.
                    Dans l’exercice de leur art durant la semaine de l’Abissa, les chansonniers bénéficient d’une immunité critique. Ils ne peuvent donc pas faire l’objet de poursuites pour les faits dévoilés.
                    L’illustration de la liberté de parole et de l’immunité critique dont jouissent les chansonniers dans l’exercice de leur art, se résument dans cet extrait issu d’une critique adressée au sanguinaire et très craint Roi Kacou Aka, souverain de Bégnini au Ghana, entre les années 1831 et 1840.
                    Extrait de la poésie critique adressée au Roi Kacou Aka :
                    <blockquote className="italic border-l-4 border-[#035B87] pl-4 text-gray-700 text-base sm:text-lg">
                        <p>
                            « Eloko nyèman ehakye amongbole.
                            <br />
                            Nwane a kaze Konèma mêdan.
                            <br />
                            Naa ba bu ye Alaba a ? »
                        </p>
                    </blockquote>

                    <p className="mt-2 text-sm sm:text-base">
                        Traduction:
                    </p>
                    <blockquote className="italic border-l-4 border-[#035B87] pl-4 text-gray-700 text-base sm:text-lg">
                        <p>
                            « Le fil de fibre de raphia est devenu un grand fétiche.
                            <br />
                            Qui va le dire aux enfants partis sans jamais revenir,
                            <br />
                            Pour subir le même sort qu’Alaba ? »
                        </p>
                    </blockquote>
                    <p className="mt-2 text-sm sm:text-base">
                        Réaction du Roi Kacou Aka :
                    </p>
                    <blockquote className="italic border-l-4 border-[#035B87] pl-4 text-gray-700 text-base sm:text-lg">
                        <p>
                            « Il a fallu dans l’Abissa Nzima pour que je puisse entendre un tel propos sans trancher la tête de ses auteurs d’un trait.
                            »
                        </p>
                    </blockquote>

                    <p className="text-sm sm:text-lg leading-relaxed mt-4">
                        Le maître poète chanteur qui encadrait les chansonniers qui ont exécuté cette critique à l’adresse du Roi Kacou Aka, s’appelait KONSEWAN dont la traduction est : « que vaut une personne seule ?». Un nom très à propos qui illustre la solidarité qui constitue le ciment qui unit les chansonniers autour du bambou qu’ils tiennent lors de l’exécution des chants poétiques.
                    </p>
                </section>

                <section className="mb-8" reconciliation='true'>
                    <h3 className="text-lg sm:text-xl font-medium text-[#035B87] mb-3">Mêlée à la danse</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Image src={danse1} alt="La danse" className="w-full" />
                        <Image src={danse2} alt="La danse" className="w-full" />
                        <Image src={danse3} alt="La danse" className="w-full" />
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed">
                        La critique sociale dans l’Abissa s’intègre harmonieusement à la danse. En effet, tout au long de la prestation des chansonniers, les tambours ne cessent pas de résonner. Bien au contraire, la danse atteint son paroxysme. Les danseurs exécutent les différents pas selon les rythmes de régénération, de renaissance produits par les instrumentistes et avec la même ferveur. Ainsi le Gouadoudoulɛ, l’Abɛlɛboulɛ et l’Edombolé (les trois rythmes de l’Abissa) continuent d’enthousiasmer le peuple, de l’épanouir. Cette continuité de la danse au cours de la critique sociale peut se lire comme un soutien du peuple à l’activité des chansonniers. Le peuple qui poursuit la danse encourage de ce fait, la performance de ses porte-paroles. Il se retrouve en eux puisque cette critique est l’émanation de sa propre volonté.
                    </p>
                </section>
                <h3 className="text-lg sm:text-xl font-medium text-[#035B87] mb-3">Les Lieuxs de célébration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Image src={quartier1} alt="Le quartier" className="w-full" />
                    <Image src={quartier2} alt="Le quartier" className="w-full" />
                    <Image src={quartier3} alt="Le quartier" className="w-full" />
                </div>
            </main>

        </div>
    );
}