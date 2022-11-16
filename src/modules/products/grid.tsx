import Image from "next/image";
import Link from "next/link";
import { Product, Products } from "@/types/index";

export type ProductsGridProps = {
  products: Products
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <>
      <div className="row">
        {products.map((p, i) =>
          <div key={p.id ?? i} className="col-xl-3 col-lg-4 col-md-6">
            <ProductItem product={p} />
          </div>
        )}
      </div>
    </>
  )
}

type ProductItemProps = {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <div className="card card-product-grid">
        <Link href={`/products/${product.id}`} passHref>
          <a className="img-wrap">
            <Image
              src="/images/items/1.jpg"
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
        <div className="info-wrap">
          <div className="dropdown float-end">
            <Link href={`/products/${product.id}`} passHref>
              <a className="btn btn-icon btn-light">
                <i className="material-icons md-edit"></i>
              </a>
            </Link>
          </div>
          <Link href={`/products/${product.id}`}>
            <a className="title" title={product.name}>{product.name}</a>
          </Link>
          <div className="price mt-1">${product.price}</div>
        </div>
      </div>
    </>
  )
}

export default ProductsGrid;
