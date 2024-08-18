import { PartyData } from "../types/PartyI";
import { StaticImageData } from "next/image";
import Image from 'next/image'

import NicolasMaduro from '../../public/image/candidatos/nicolas-maduro.png';
import PSUV from '../../public/image/partidos/psuv.png';
import TUPAMARO from '../../public/image/partidos/tupamaro.png';
import PPT from '../../public/image/partidos/ppt.png';
import SOMOVNZLA from '../../public/image/partidos/somo vnzla.png';
import ORA from '../../public/image/partidos/ora.png';
import PODEMOS from '../../public/image/partidos/podemos.png';
import PARTIDOVERDE from '../../public/image/partidos/partido verde.png';
import ENAMORATE from '../../public/image/partidos/enamorate.png';
import MEP from '../../public/image/partidos/mep.png';
import FUTURO from '../../public/image/partidos/futuro.png';
import PCV from '../../public/image/partidos/pcv.png';
import UPV from '../../public/image/partidos/upv.png';
import ALIANZACAMBIO from '../../public/image/partidos/alianza cambio.png';

import LuisMartinez from '../../public/image/candidatos/luis martinez.png';
import DDP from '../../public/image/partidos/ddp.png';
import UNE from '../../public/image/partidos/une.png';
import AD from '../../public/image/partidos/ad.png';
import MR from '../../public/image/partidos/mr.png';
import BANDERAROJA from '../../public/image/partidos/bandera roja.png';
import COPEI from '../../public/image/partidos/copei.png';

import EdmundoG from '../../public/image/candidatos/edmundo g.png';
import MUD from '../../public/image/partidos/mud.png';
import MPV from '../../public/image/partidos/mpv.png';
import UNT from '../../public/image/partidos/unt.png';

import DanielC from '../../public/image/candidatos/daniel ceballos.png';
import VOLUNTADPOPULAR from '../../public/image/partidos/voluntad popular.png';
import AREPA from '../../public/image/partidos/arepa.png';

import AntonioEcarri from '../../public/image/candidatos/antonio ecarri.png';
import ECOLOGICO from '../../public/image/partidos/ecologico.png';
import MIN from '../../public/image/partidos/min.png';
import LAPIZ from '../../public/image/partidos/lapiz.png';
import CAMBIEMOS from '../../public/image/partidos/cambiemos.png';
import AVANZADAPROGRESISTA from '../../public/image/partidos/avanzada progresista.png';
import FUERZAVECINAL from '../../public/image/partidos/fv.png';

import BenjaminR from '../../public/image/candidatos/benjamin r.png';
import CONDE from '../../public/image/partidos/conde.png';

import EnriqueMarquez from '../../public/image/candidatos/enrique marquez.png';
import CENTRADOS from '../../public/image/partidos/centrados.png';

import JoseBrito from '../../public/image/candidatos/jose brito.png';
import PRIMEROJUSTICIA from '../../public/image/partidos/primero justicia.png';
import PRIMEROVNZLA from '../../public/image/partidos/primero vnzla.png';
import VNZLAUNIDAD from '../../public/image/partidos/vnzla unidad.png';
import UNIDADVISIONVNZLA from '../../public/image/partidos/unidad vision vnzla.png';

import JavierB from '../../public/image/candidatos/javier b.png';
import ELCAMBIO from '../../public/image/partidos/el cambio.png';

import ClaudioF from '../../public/image/candidatos/claudio fermin.png';
import SOLUCIONES from '../../public/image/partidos/soluciones.png';

export const politicalParties: PartyData[] = [
  {
    id_partido: 1,
    id_candidato: 1,
    nombre_partido: "PSUV",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: PSUV as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:09.947Z",
    modified_date_time: "2024-06-24T13:41:09.947Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 2,
    id_candidato: 1,
    nombre_partido: "TUPAMARO",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: TUPAMARO as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:14.615Z",
    modified_date_time: "2024-06-24T13:41:14.615Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 3,
    id_candidato: 1,
    nombre_partido: "PPT",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: PPT as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:19.990Z",
    modified_date_time: "2024-06-24T13:41:19.991Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 4,
    id_candidato: 1,
    nombre_partido: "SOMOS VENEZUELA",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: SOMOVNZLA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:25.986Z",
    modified_date_time: "2024-06-24T13:41:25.986Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 5,
    id_candidato: 1,
    nombre_partido: "ORA",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: ORA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:33.460Z",
    modified_date_time: "2024-06-24T13:41:33.460Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 6,
    id_candidato: 1,
    nombre_partido: "PODEMOS",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: PODEMOS as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:39.602Z",
    modified_date_time: "2024-06-24T13:41:39.602Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 7,
    id_candidato: 1,
    nombre_partido: "PARTIDO VERDE DE VENEZUELA",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: PARTIDOVERDE as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:41:52.664Z",
    modified_date_time: "2024-06-24T13:41:52.664Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 8,
    id_candidato: 1,
    nombre_partido: "ENAMORATE",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: ENAMORATE as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:42:03.448Z",
    modified_date_time: "2024-06-24T13:42:03.448Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 9,
    id_candidato: 1,
    nombre_partido: "MEP",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: MEP as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:42:08.648Z",
    modified_date_time: "2024-06-24T13:42:08.648Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 10,
    id_candidato: 1,
    nombre_partido: "FUTURO",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: FUTURO as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:42:13.238Z",
    modified_date_time: "2024-06-24T13:42:13.238Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 11,
    id_candidato: 1,
    nombre_partido: "PCV",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: PCV as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:42:18.073Z",
    modified_date_time: "2024-06-24T13:42:18.073Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 12,
    id_candidato: 1,
    nombre_partido: "UPV",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: UPV as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:42:25.223Z",
    modified_date_time: "2024-06-24T13:42:25.223Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 13,
    id_candidato: 2,
    nombre_partido: "DDP",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: DDP as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T13:43:10.932Z",
    modified_date_time: "2024-06-24T13:43:10.932Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  },
  {
    id_partido: 14,
    id_candidato: 3,
    nombre_partido: "MUD",
    activo: 1,
    imageUrl: EdmundoG as StaticImageData,
    partyImageUrl: MUD as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Edmundo image',
    created_date_time: "2024-06-24T13:45:29.768Z",
    modified_date_time: "2024-06-24T13:45:29.768Z",
    'candidato.nombre_candidato': "EDMUNDO GONZALEZ"
  },
  {
    id_partido: 15,
    id_candidato: 4,
    nombre_partido: "VOLUNTAD POPULAR",
    activo: 1,
    imageUrl: DanielC as StaticImageData,
    partyImageUrl: VOLUNTADPOPULAR as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Daniel Ceballos image',
    created_date_time: "2024-06-24T13:45:48.659Z",
    modified_date_time: "2024-06-24T13:45:48.659Z",
    'candidato.nombre_candidato': "DANIEL CEBALLOS"
  },
  {
    id_partido: 16,
    id_candidato: 3,
    nombre_partido: "MPV",
    activo: 1,
    imageUrl: EdmundoG as StaticImageData,
    partyImageUrl: MPV as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Edmundo image',
    created_date_time: "2024-06-24T13:46:07.067Z",
    modified_date_time: "2024-06-24T13:46:07.067Z",
    'candidato.nombre_candidato': "EDMUNDO GONZALEZ"
  },
  {
    id_partido: 17,
    id_candidato: 5,
    nombre_partido: "ECOLOGICO",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: ECOLOGICO as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T13:46:33.465Z",
    modified_date_time: "2024-06-24T13:46:33.465Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 18,
    id_candidato: 5,
    nombre_partido: "MIN",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: MIN as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T13:46:49.957Z",
    modified_date_time: "2024-06-24T13:46:49.957Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 19,
    id_candidato: 5,
    nombre_partido: "LAPIZ",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: LAPIZ as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T13:46:56.093Z",
    modified_date_time: "2024-06-24T13:46:56.093Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 20,
    id_candidato: 1,
    nombre_partido: "ALIANZA CAMBIO",
    activo: 1,
    imageUrl: NicolasMaduro as StaticImageData,
    partyImageUrl: ALIANZACAMBIO as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Nicolas Maduro image',
    created_date_time: "2024-06-24T13:47:09.491Z",
    modified_date_time: "2024-06-24T13:47:09.491Z",
    'candidato.nombre_candidato': "NICOLAS MADURO"
  },
  {
    id_partido: 21,
    id_candidato: 2,
    nombre_partido: "UNE",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: UNE as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T13:47:20.593Z",
    modified_date_time: "2024-06-24T13:47:20.593Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  },
  {
    id_partido: 22,
    id_candidato: 6,
    nombre_partido: "CONDE",
    activo: 1,
    imageUrl: BenjaminR as StaticImageData,
    partyImageUrl: CONDE as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Benjamin Rausseo image',
    created_date_time: "2024-06-24T13:47:41.817Z",
    modified_date_time: "2024-06-24T13:47:41.817Z",
    'candidato.nombre_candidato': "BENJAMIN RAUSSEO"
  },
  {
    id_partido: 23,
    id_candidato: 7,
    nombre_partido: "CENTRADOS",
    activo: 1,
    imageUrl: EnriqueMarquez as StaticImageData,
    partyImageUrl: CENTRADOS as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Enrique Marquez image',
    created_date_time: "2024-06-24T13:56:26.397Z",
    modified_date_time: "2024-06-24T13:56:26.397Z",
    'candidato.nombre_candidato': "ENRIQUE MARQUEZ"
  },
  {
    id_partido: 24,
    id_candidato: 4,
    nombre_partido: "AREPA",
    activo: 1,
    imageUrl: DanielC as StaticImageData,
    partyImageUrl: AREPA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Daniel Ceballos image',
    created_date_time: "2024-06-24T13:56:37.365Z",
    modified_date_time: "2024-06-24T13:56:37.365Z",
    'candidato.nombre_candidato': "DANIEL CEBALLOS"
  },
  {
    id_partido: 25,
    id_candidato: 3,
    nombre_partido: "UN NUEVO TIEMPO",
    activo: 1,
    imageUrl: EdmundoG as StaticImageData,
    partyImageUrl: UNT as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Edmundo image',
    created_date_time: "2024-06-24T13:57:36.192Z",
    modified_date_time: "2024-06-24T13:57:36.192Z",
    'candidato.nombre_candidato': "EDMUNDO GONZALEZ"
  },
  {
    id_partido: 26,
    id_candidato: 8,
    nombre_partido: "PRIMERO JUSTICIA",
    activo: 1,
    imageUrl: JoseBrito as StaticImageData,
    partyImageUrl: PRIMEROJUSTICIA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Jose Brito image',
    created_date_time: "2024-06-24T13:58:04.589Z",
    modified_date_time: "2024-06-24T13:58:04.589Z",
    'candidato.nombre_candidato': "JOSE BRITO"
  },
  {
    id_partido: 27,
    id_candidato: 5,
    nombre_partido: "CAMBIEMOS",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: CAMBIEMOS as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T13:58:35.150Z",
    modified_date_time: "2024-06-24T13:58:35.150Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 28,
    id_candidato: 5,
    nombre_partido: "AVANZADA PROGRESISTA",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: AVANZADAPROGRESISTA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T13:58:54.340Z",
    modified_date_time: "2024-06-24T13:58:54.340Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 29,
    id_candidato: 2,
    nombre_partido: "AD",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: AD as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T13:59:07.254Z",
    modified_date_time: "2024-06-24T13:59:07.254Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  },
  {
    id_partido: 30,
    id_candidato: 2,
    nombre_partido: "MR",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: MR as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T13:59:16.767Z",
    modified_date_time: "2024-06-24T13:59:16.767Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  },
  {
    id_partido: 31,
    id_candidato: 2,
    nombre_partido: "BANDERA ROJA",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: BANDERAROJA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T13:59:27.109Z",
    modified_date_time: "2024-06-24T13:59:27.109Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  },
  {
    id_partido: 32,
    id_candidato: 9,
    nombre_partido: "EL CAMBIO",
    activo: 1,
    imageUrl: JavierB as StaticImageData,
    partyImageUrl: ELCAMBIO as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Javier Bertucci image',
    created_date_time: "2024-06-24T13:59:55.155Z",
    modified_date_time: "2024-06-24T13:59:55.155Z",
    'candidato.nombre_candidato': "JAVIER BERTUCCI"
  },
  {
    id_partido: 33,
    id_candidato: 8,
    nombre_partido: "PRIMERO VENEZUELA",
    activo: 1,
    imageUrl: JoseBrito as StaticImageData,
    partyImageUrl: PRIMEROVNZLA  as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Jose Brito image',
    created_date_time: "2024-06-24T14:00:15.371Z",
    modified_date_time: "2024-06-24T14:00:15.371Z",
    'candidato.nombre_candidato': "JOSE BRITO"
  },
  {
    id_partido: 34,
    id_candidato: 8,
    nombre_partido: "VENEZUELA UNIDAD",
    activo: 1,
    imageUrl: JoseBrito as StaticImageData,
    partyImageUrl: VNZLAUNIDAD as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Jose Brito image',
    created_date_time: "2024-06-24T14:00:25.660Z",
    modified_date_time: "2024-06-24T14:00:25.661Z",
    'candidato.nombre_candidato': "JOSE BRITO"
  },
  {
    id_partido: 35,
    id_candidato: 5,
    nombre_partido: "FUERZA VECINAL",
    activo: 1,
    imageUrl: AntonioEcarri as StaticImageData,
    partyImageUrl: FUERZAVECINAL  as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Antonio Ecarri image',
    created_date_time: "2024-06-24T14:00:46.603Z",
    modified_date_time: "2024-06-24T14:00:46.603Z",
    'candidato.nombre_candidato': "ANTONIO ECARRI"
  },
  {
    id_partido: 36,
    id_candidato: 10,
    nombre_partido: "SOLUCIONES",
    activo: 1,
    imageUrl: ClaudioF as StaticImageData,
    partyImageUrl: SOLUCIONES as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Claudio Fermin image',
    created_date_time: "2024-06-24T14:01:09.471Z",
    modified_date_time: "2024-06-24T14:01:09.471Z",
    'candidato.nombre_candidato': "CLAUDIO FERMIN"
  },
  {
    id_partido: 37,
    id_candidato: 8,
    nombre_partido: "UNIDAD VISION VENEZUELA",
    activo: 1,
    imageUrl: JoseBrito as StaticImageData,
    partyImageUrl: UNIDADVISIONVNZLA as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Jose Brito image',
    created_date_time: "2024-06-24T14:06:53.096Z",
    modified_date_time: "2024-06-24T14:06:53.096Z",
    'candidato.nombre_candidato': "JOSE BRITO"
  },
  {
    id_partido: 38,
    id_candidato: 2,
    nombre_partido: "COPEI",
    activo: 1,
    imageUrl: LuisMartinez as StaticImageData,
    partyImageUrl: COPEI as StaticImageData,
    partyImageAlt: 'Party image',
    imageAlt: 'Luis Martinez image',
    created_date_time: "2024-06-24T14:07:30.798Z",
    modified_date_time: "2024-06-24T14:07:30.798Z",
    'candidato.nombre_candidato': "LUIS MARTINEZ"
  }
]