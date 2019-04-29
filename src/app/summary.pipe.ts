import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'summary' 
})
export class SummaryPipe implements PipeTransform {
    // transform (value: string, args?: any) {
    //     if (!value)
    //     return null;

    //     return value.substr(0, 50) + "...";
    // }

    // Other way of createing PIPE with argnment

    transform (value: string, limit?: number) {
        if(!value)
        return null;

        let actualLimit= (limit)? limit: 100;
        console.log(actualLimit);
        return value.substr(0, actualLimit) + '...';

    }

}
// ASYNC PIPE 
