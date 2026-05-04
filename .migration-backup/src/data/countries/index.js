import { sweden } from './sweden';
import { norway } from './norway';
import { denmark } from './denmark';
import { iceland } from './iceland';
import { finland } from './finland';
import { japan } from './japan';
import { portugal } from './portugal';
import { germany } from './germany';
import { poland } from './poland';
import { switzerland } from './switzerland';
import { greece } from './greece';
import { spain } from './spain';
import { netherlands } from './netherlands';
import { austria } from './austria';
import { czechRepublic } from './czech-republic';
import { italy } from './italy';
import { belgium } from './belgium';
import { croatia } from './croatia';
import { slovenia } from './slovenia';
import { liechtenstein } from './liechtenstein';
import { unitedStates } from './united-states';
import { canada } from './canada';
import { mexico } from './mexico';
import { brazil } from './brazil';
import { chile } from './chile';
import { argentina } from './argentina';
import { serbia } from './serbia';
import { unitedKingdom } from './united-kingdom';
import { southKorea } from './south-korea';
import { singapore } from './singapore';
import { thailand } from './thailand';
import { vietnam } from './vietnam';
import { malaysia } from './malaysia';
import { southAfrica } from './south-africa';
import { morocco } from './morocco';
import { hongKong } from './hong-kong';
import { taiwan } from './taiwan';
import { indonesia } from './indonesia';
import { philippines } from './philippines';
import { india } from './india';
import { sriLanka } from './sri-lanka';
import { nepal } from './nepal';
import { unitedArabEmirates } from './united-arab-emirates';
import { panama } from './panama';
import { costaRica } from './costa-rica';
import { colombia } from './colombia';
import { uruguay } from './uruguay';
import { peru } from './peru';
import { ecuador } from './ecuador';
import { paraguay } from './paraguay';
import { egypt } from './egypt';
import { tunisia } from './tunisia';
import { kenya } from './kenya';
import { hungary } from './hungary';
import { romania } from './romania';
import { bulgaria } from './bulgaria';
import { slovakia } from './slovakia';
import { ireland } from './ireland';
import { france } from './france';
import { cyprus } from './cyprus';
import { estonia } from './estonia';
import { latvia } from './latvia';
import { lithuania } from './lithuania';
import { luxembourg } from './luxembourg';
import { malta } from './malta';
import { qatar } from './qatar';
import { nicaragua } from './nicaragua';
import { guatemala } from './guatemala';
import { australia } from './australia';
import { newZealand } from './new-zealand';
import { dominicanRepublic } from './dominican-republic';
import { jamaica } from './jamaica';
import { trinidadAndTobago } from './trinidad-and-tobago';
import { barbados } from './barbados';
import { turkey } from './turkey';
import { georgia } from './georgia';
import { cambodia } from './cambodia';
import { montenegro } from './montenegro';
import { china } from './china';
import { saudiArabia } from './saudi-arabia';
import { albania } from './albania';
import { israel } from './israel';
import { mauritius } from './mauritius';
import { bahrain } from './bahrain';
import { pakistan } from './pakistan';
import { bangladesh } from './bangladesh';
import { kazakhstan } from './kazakhstan';
import { uzbekistan } from './uzbekistan';
import { armenia } from './armenia';
import { ukraine } from './ukraine';
import { bosniaAndHerzegovina } from './bosnia-and-herzegovina';
import { northMacedonia } from './north-macedonia';
import { moldova } from './moldova';
import { monaco } from './monaco';
import { nigeria } from './nigeria';
import { ghana } from './ghana';
import { rwanda } from './rwanda';
import { tanzania } from './tanzania';
import { namibia } from './namibia';
import { oman } from './oman';
import { jordan } from './jordan';
import { kuwait } from './kuwait';
import { maldives } from './maldives';
import { fiji } from './fiji';
import { azerbaijan } from './azerbaijan';
import { kyrgyzstan } from './kyrgyzstan';
import { mongolia } from './mongolia';
import { bhutan } from './bhutan';
import { lebanon } from './lebanon';
import { ethiopia } from './ethiopia';
import { uganda } from './uganda';
import { botswana } from './botswana';
import { madagascar } from './madagascar';
import { seychelles } from './seychelles';
import { coteDivoire } from './cote-divoire';
import { senegal } from './senegal';
import { capeVerde } from './cape-verde';
import { andorra } from './andorra';
import { kosovo } from './kosovo';
import { elSalvador } from './el-salvador';
import { honduras } from './honduras';
import { belize } from './belize';
import { bahamas } from './bahamas';
import { puertoRico } from './puerto-rico';
import { cuba } from './cuba';
import { laos } from './laos';
import { bolivia } from './bolivia';
import { zambia } from './zambia';
import { sanMarino } from './san-marino';
import { getRelocationRealities } from './relocation_realities';
import { getExtendedData } from './extended_data';

const rawCountries = [
  sweden,
  norway,
  denmark,
  iceland,
  finland,
  japan,
  portugal,
  germany,
  poland,
  switzerland,
  greece,
  spain,
  netherlands,
  austria,
  czechRepublic,
  italy,
  belgium,
  croatia,
  slovenia,
  liechtenstein,
  unitedStates,
  canada,
  mexico,
  brazil,
  chile,
  argentina,
  serbia,
  unitedKingdom,
  southKorea,
  singapore,
  thailand,
  vietnam,
  malaysia,
  southAfrica,
  morocco,
  hongKong,
  taiwan,
  indonesia,
  philippines,
  india,
  sriLanka,
  nepal,
  unitedArabEmirates,
  panama,
  costaRica,
  colombia,
  uruguay,
  peru,
  ecuador,
  paraguay,
  egypt,
  tunisia,
  kenya,
  hungary,
  romania,
  bulgaria,
  slovakia,
  ireland,
  france,
  cyprus,
  estonia,
  latvia,
  lithuania,
  luxembourg,
  malta,
  qatar,
  nicaragua,
  guatemala,
  australia,
  newZealand,
  dominicanRepublic,
  jamaica,
  trinidadAndTobago,
  barbados,
  turkey,
  georgia,
  cambodia,
  montenegro,
  china,
  saudiArabia,
  albania,
  israel,
  mauritius,
  bahrain,
  pakistan,
  bangladesh,
  kazakhstan,
  uzbekistan,
  armenia,
  ukraine,
  bosniaAndHerzegovina,
  northMacedonia,
  moldova,
  monaco,
  nigeria,
  ghana,
  rwanda,
  tanzania,
  namibia,
  oman,
  jordan,
  kuwait,
  maldives,
  fiji,
  azerbaijan,
  kyrgyzstan,
  mongolia,
  bhutan,
  lebanon,
  ethiopia,
  uganda,
  botswana,
  madagascar,
  seychelles,
  coteDivoire,
  senegal,
  capeVerde,
  andorra,
  kosovo,
  elSalvador,
  honduras,
  belize,
  bahamas,
  puertoRico,
  cuba,
  laos,
  bolivia,
  zambia,
  sanMarino
];

// CRITICAL DATA RESOLUTION LOGIC
// 1. extended_data (Defaults/Regionals) serves as the BASE.
// 2. relocation_realities are merged in.
// 3. country-specific file data (sweden.js, etc.) is merged LAST.
//    This ensures that any specific data defined in the country file takes precedence 
//    over generic defaults from extended_data.js.
export const countries = rawCountries.map(country => ({
  ...getExtendedData(country.id),      // Base: Region defaults & extended data
  ...getRelocationRealities(country),  // Mixin: Realities
  ...country                           // Override: Specific country file data (HIGHEST PRIORITY)
}));