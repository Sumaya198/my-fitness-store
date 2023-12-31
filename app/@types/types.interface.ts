export interface ProductCardProps {
    objectID: string;
    addFavourites: (p: object) => void;
    addToCart: (p: object) => void;
    availableSizes: Size[];
    featuredMedia: Media;
    title: string;
    price: number;
    handle: string;
}

export interface Size {
    id?: number;
    inStock: boolean;
    inventoryQuantity?: number;
    price?: number;
    size: string;
    sku: string;
}

export interface Media {
    admin_graphql_api_id?: string;
    alt?: null;
    created_at?: string;
    height?: number;
    id?: number;
    position?: number;
    src: string;
    updated_at?: string;
    variant_ids?: [];
    width?: number;
}

export interface Navigationprops {
    handleChange: (p: object) => void;
    query: string;
}

export interface LeggingTypeProps {
    handleChangePriceRadio: () => void;
}

export interface ColoursProps {
    handleChangeRadio: () => void;
}
