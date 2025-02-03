import Pizza from "./Pizza";

export default interface Tipo {
    id: number;
    nome: string;
    pizza?: Pizza | null;
}