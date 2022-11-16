import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProductMutation } from "@/graphql/generated";
import { ProductDetails } from "@/types/index";

type ProductForm = {
  id: number
  categoryId: number
  price: number
  name: string
  description: string
  version: number
}

type ProductsFormProps = {
  product?: ProductDetails
}

const ProductsForm = ({ product }: ProductsFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>(); //{ defaultValues: product }
  const onSubmit: SubmitHandler<ProductForm> = data => console.log(data);
  const [createProduct, { loading, error, data }] = useCreateProductMutation();

  useEffect(() => {
    console.log('FormErrors:', errors);
  }, [errors])

  return (
    <>
      <button onClick={handleSubmit(onSubmit)}>Save</button>
      <div className="row mb-4">
        <div className="col-xl-8 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="product_title" className="form-label">Name</label>
                <input type="text" placeholder="Type here" className="form-control" id="product_title" {...register('name', { required: true })} />
              </div>
              <div className="row gx-3">
                <div className="col-md-4  mb-3">
                  <label htmlFor="product_sku" className="form-label">SKU</label>
                  <input type="text" placeholder="Type here" className="form-control" id="product_sku" />
                </div>
                <div className="col-md-4  mb-3">
                  <label htmlFor="product_color" className="form-label">Color</label>
                  <input type="text" placeholder="Type here" className="form-control" id="product_color" />
                </div>
                <div className="col-md-4  mb-3">
                  <label htmlFor="product_size" className="form-label">Size</label>
                  <input type="text" placeholder="Type here" className="form-control" id="product_size" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="product_brand" className="form-label">Brand</label>
                <input type="text" placeholder="Type here" className="form-control" id="product_brand" />
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <div>
                <label className="form-label">Description</label>
                <textarea placeholder="Type here" className="form-control" rows={4} {...register('description', { required: true })}></textarea>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <div>
                <label className="form-label">Images</label>
                <input className="form-control" type="file" />
              </div>
            </div>
          </div>
        </div>
        <aside className="col-xl-4 col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <div className="mb-4">
                <label className="form-label">Price</label>
                <input type="number" placeholder="Type here" className="form-control" {...register('price', { required: true })} />
              </div>
              <div className="mb-4">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Tags</label>
                <input type="text" placeholder="Type here" className="form-control" defaultValue={product?.tags?.map(t => t.name)} />
              </div>

              <a href="#" className="btn btn-sm btn-light mb-1">Woman
                <i className="material-icons md-close"></i></a>
              <a href="#" className="btn btn-sm btn-light mb-1">Summer
                <i className="material-icons md-close"></i></a>
              <a href="#" className="btn btn-sm btn-light mb-1">Clothes
                <i className="material-icons md-close"></i></a>
              <hr />
              <h5 className="mb-3">Categories</h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat" />
                <label className="form-check-label" htmlFor="product-cat"> Shirt  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-1" />
                <label className="form-check-label" htmlFor="product-cat-1">  T-Shirt </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-2" />
                <label className="form-check-label" htmlFor="product-cat-2"> Sneakers </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-3" />
                <label className="form-check-label" htmlFor="product-cat-3">  Joggers </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-4" />
                <label className="form-check-label" htmlFor="product-cat-4">  Vests </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-5" />
                <label className="form-check-label" htmlFor="product-cat-5"> Knitwear </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="product-cat-8" />
                <label className="form-check-label" htmlFor="product-cat-8">  Shorts </label>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default ProductsForm;
