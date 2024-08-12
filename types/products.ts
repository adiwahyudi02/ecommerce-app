export interface IProduct {
  id: string;
  modelId: number;
  name: string;
  slug: string;
  specialInformations: any[];
  promoInfos: any[];
  categoryId: number;
  description: string;
  videoUrl: string;
  commissionPrice: number;
  commissionLabel: string;
  retailPrice: number;
  retailPriceLabel: string;
  customerPrice: number;
  customerPriceLabel: string;
  cheapestWholesalePrice: number | null;
  cheapestWholesalePriceLabel: null | string;
  isVariantWholesalePrice: boolean | null;
  discountPrice: number;
  isCOD: number;
  isCheapestPrice: boolean;
  isShared: number;
  isFlashSale: number;
  isPO: number;
  resellerPriceMax: number;
  resellerPriceMaxLabel: string;
  resellerPriceMin: number;
  resellerPriceMinLabel: string;
  weight: number;
  weightLabel: string;
  stock: number;
  tagIds: number[];
  totalStock: number;
  labelVariant: string;
  labelSubVariant: string;
  point: number;
  minPoint: number;
  minNormalPoint: number;
  warehouseTitle: string;
  warehouseAddress: string;
  productModelParentId: number;
  categoryName: string;
  categoryLevel2Name: string;
  categoryLevel1Name: string;
  categoryCluster: CategoryCluster;
  brandId: number;
  brandName: string;
  brandLevelId: number;
  brandLogo: null | string;
  brandType: string;
  isJagoan: boolean;
  rating: number;
  sold: number;
  totalSold: number;
  deliveryProgramId: null | string;
  images: string[];
  variants: Variant[];
  vouchers: any[];
  shareableLinkWithoutPrice: string;
  benefitMapping: BenefitMapping;
}

export interface IProductList extends Array<IProduct> {}

export interface BenefitMapping {
  hasProductPoint: boolean;
  hasSaudagarSultanCommission: boolean;
  hasWeeklyCommission: boolean;
}

export interface CategoryCluster {
  entityId: string;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface Variant {
  id: number;
  parentId: null;
  retailPrice: number;
  retailPriceLabel: string;
  discountPrice: number;
  customerPrice: number;
  customerPriceLabel: string;
  resellerPrice: number;
  resellerPriceLabel: string;
  commissionPrice: number;
  commissionLabel: string;
  point: number;
  minPoint?: number;
  minNormalPoint?: number;
  normalPoint: number;
  name: string;
  code: string;
  slug: string;
  weight: number;
  weightLabel: string;
  width: number;
  widthLabel: string;
  height: number;
  heightLabel: string;
  length: number;
  lengthLabel: string;
  value: string;
  defaultSubVariantValue?: string;
  stock: number;
  totalStock: number;
  rating?: number;
  sold?: number;
  totalSold?: number;
  warehouseTitle: string;
  warehouseAddress: string;
  warehouseFullAddress: string;
  images?: string[];
  variantId?: number;
  subVariants?: Variant[];
  wholesalePrice?: WholesalePrice[] | null;
  warehouseId?: number;
  warehouseZoneId?: null;
  warehouseShelfId?: null;
  warehouseDistrictId?: number;
  warehouseType?: number;
  subVariantId?: number;
}

export interface WholesalePrice {
  minimumQuantity: number;
  retailPrice: number;
  retailPriceLabel: string;
  resellerPrice: number;
  resellerPriceLabel: string;
}
