export interface SearchData {
    searchType : string
    expression : string
    results : SearchResult[]
    errorMessage : string
}

interface SearchResult {
    id : string
    resultType: string
    image: string
    title: string
    description: string
}


export interface TitleData {
    id: string
    title: string
    fullTitle: string
    plot: string
    year: string
    directorList: StarShort[]
    starList: StarShort[]
    imDbRating: string
    runtimeMins: string
    runtimeStr: string
    tagline: string
    errorMessage: string
}

interface StarShort{
    id: string
    name: string
}
