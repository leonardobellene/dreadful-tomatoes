/* 
Common interfaces that can be reuse in many components
*/

export interface Show {
    description: string;
    images: {
        posterArt: {
            url: string;
            width: number;
            height: number;
        }
    };
    programType: 'movies' | 'series';
    releaseYear: number;
    title: string;
}

export interface Shows {
    fullCatalog: Show[];
    filteredCatalog: Show[];
}

export interface RootState {
    movies: {
        fullCatalog: Show[];
        filteredCatalog: Show[];
    };
    series: {
        fullCatalog: Show[];
        filteredCatalog: Show[];
    };
}

export interface ShowState {
    fullCatalog: Show[];
    filteredCatalog: Show[];
}
