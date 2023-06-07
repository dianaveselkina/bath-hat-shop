import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './styles.module.css';
import './page.css';
export const InterestingFactsPage = () => {
  return (
    <div className="interestingfactspage__contener">
      <Accordion>
        <AccordionItem
          header={
            <div>
              <p className={styles.title}>Зачем нужна шапочка для бани?</p>
            </div>
          }
        >
          <div>
            <p className={styles.description}>
              Она обеспечивает эффективную защиту волосяной части головы от
              воздействия высоких температур (от 70 до 120 градусов), а
              волосяные луковицы от разрушения. Обеспечивая «эффект термоса»,
              головной убор способствует поддержанию оптимальной температуры на
              волосяной части головы, которая не зависит от температуры нагрева
              окружающего воздуха.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          header={
            <div>
              <p className={styles.title}>
                Из какого материала должна быть шапка для бани?
              </p>
            </div>
          }
        >
          <div>
            <p className={styles.description}>
              Лучше всего служат в банных условиях войлочные шапки. Это
              объясняется просто. Войлок – материал пористый, и воздух,
              содержащийся внутри, становится естественным изолятором между
              телом человека и окружающей средой. Войлочная шапка становится
              своеобразным термосом для человеческой головы. Она сохраняет
              естественную температуру тела, предохраняя не только от холода, но
              и от жары. Простой опыт поможет убедиться в этом. Если завернуть в
              войлок кусок льда, он растает гораздо позже, чем точно такой же,
              но оставленный на открытом воздухе.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          header={
            <div>
              <p className={styles.title}>
                Какой должна быть форма шапки для бани?
              </p>
            </div>
          }
        >
          <div>
            <p className={styles.description}>
              Она может быть произвольной. Главное, чтобы соблюдались следующие
              требования: шапка должна закрывать лоб и затылок, чтобы защищать
              от потока горячего пара или брызг кипятка. Затылочная часть
              считается самой чувствительной к повышенным температурам. Работает
              она почти, как язык у собаки, и испаряет до 50% влаги из
              человеческого тела. Закрывать в парилке её надо обязательно. Иначе
              в лучшем случае вам обеспечена жуткая головная боль после банных
              процедур.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          header={
            <div>
              <p className={styles.title}>Как ухаживать за шапками для бани?</p>
            </div>
          }
        >
          <div>
            <p className={styles.description}>
              Что касается стирки. Стирать шапку нужно руками в теплой (не
              горячей) воде с любым моющим средством (мыло, порошок). Тереть без
              фанатизма (не потому что порвется, войлок плотный, выдержит..., а
              потому что горячая мыльная вода в совокупности с усердным трением
              могут стать факторами усадки, а нам это не нужно) При полоскании
              использование кондиционера приветствуется, войлок станет более
              нежным и мягким. Выжимать, не выкручивая, можно отжать в
              полотенце. Затем самое главное - шапке нужно придать изначальную
              форму
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          header={
            <div>
              <p className={styles.title}>
                В чем польза изделий из валяной шерсти?
              </p>
            </div>
          }
        >
          <div>
            <p className={styles.description}>
              Шерсть оказывает благоприятное влияние на организм стимулирует
              кровообращение. Она гигроскопична, дает приятное сухое тепло,
              впитывая влагу, при этом оставаясь абсолютно сухой. Шерсть
              обладает природным свойством теплорегуляции, поэтому изделия
              всегда обеспечат Вам оптимальный режим при любой температуре.
              Шерсть дышит. Прочесанная натуральная шерсть в изделиях за счет
              высокой извитости волокон обеспечивает активную циркуляцию
              воздуха.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};