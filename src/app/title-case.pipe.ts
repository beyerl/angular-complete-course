import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecasing'
})
export class TitleCasingPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) return null;

        const words = value.split(" ");

        const titleCaseArray = words.map((word: string, i: number) => {

            if (i > 0 && this.isPreposition(word)) {
                return word.toLowerCase();
            }
            else {
                return this.toTitleCase(word);
            }
        })

        return titleCaseArray.join(" ");
    }

    private isPreposition(word: string): boolean {
        const prepositions = ["of", "the"]

        return prepositions.includes(word.toLowerCase()); 
    }

    private toTitleCase(word:string) : string {
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
    }
}