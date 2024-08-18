export interface PartyData {
    id_partido: number;
    id_candidato: number;
    nombre_partido: string;
    activo: number;
    created_date_time: string;
    modified_date_time: string;
    'candidato.nombre_candidato': string;
    partyImageUrl: string  | any;
    partyImageAlt: string;
    imageAlt: string;
    imageUrl: string | any;
}
