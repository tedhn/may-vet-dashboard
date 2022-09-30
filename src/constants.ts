import Allergy from '@/resources/allergy.png'
import PickyEater from '@/resources/picky_eater.png'

export const BREED_OPTIONS = [
	"Bulldogs",
	"Golden Retrievers",
	"Corgi",
	"Poodles",
	"Beagles",
];

export const STATUS_OPTIONS = [{name : "Allergy" , icon:  Allergy}, {name : "Picky Eater" , icon : PickyEater}];

export const ROW_OPTIONS = ["10", "20", "30", "40", "50"];

export const CITY_OPTIONS = ['Yangon' , 'Mandalay']

export const TOWNSHIPS_OPTIONS = ["Dagon", "Okkalar", "Kamayut" , "Bahan"];

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}