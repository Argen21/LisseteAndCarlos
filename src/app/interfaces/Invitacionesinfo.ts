export interface InvitacionesInterfaz  {
  colors?: {
    primary: string;
    secondary: string;
    text: string;
    button: string;
    buttonHover: string;
    textHover?: string;
    buttonSecondary?: string;
    buttonHoverSecondary?: string;
    bgmusica: string;
  };
  fuentes?: {
    titulos  : string;
    parrafos : string;
    style?: string;
    size?: string;

  };
  musica: string;
  evento?: string;
  titulo?: string;
  frase?: string;
  bgContador?: string;
  fecha?: {
    dia:string;
    numero: string;
    mes:string;
    year: number;
    hora: string;
    textcolor?: string;
  };
  imgCarrusel?: { url: String }[]
  nuestroevento?: string;
  galeria?: {url:string}[];
  colortextPeople?: string;
  people?: {
    parentesco: string;
    img?: string;
    nombreMasculino?: string;
    nombreFemenino?: string;
  }[];
  itinerario?: {
    svg: string;
    hora_titulo: string;
    informacion: string;
  }[];
  hubicaciones?: {
    svg?: string;
    hora?:string;
    nombrehub?: string;
    direccion: string;
    hrefmapa?: string;
    img?: string;
  }[];
  asistencia?: {
    vestimenta: string;
    telefono: string;
    textColorAsistencia: string;
  };
  mesaregalos?: {
    img: string;
    numeroevento: string;
    link:string;
  };
  cuentabancarea?: {
    img: string;
    banco: string;
    nombre: string;
    cuenta: string;
    clabe: string;
  };
}
