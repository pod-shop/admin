import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateCategoryMutation, useUpdateCategoryMutation } from '@/graphql/generated';
import { Categories, Category } from '@/types/index';

export type CategoriesProps = {
  categories: Categories
}

const Categories = ({ categories }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const handleSaveCategory = async (category: Category) => {
    console.log('Save Category:', category);
    if (category.id > 0) {
      await updateCategory({ variables: { id: category.id.toString(), category } });
    } else {
      await createCategory({ variables: { category } });
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <CategoryForm category={selectedCategory} categories={categories ?? []} onSave={handleSaveCategory} />
            </div>
            <div className="col-md-8">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                      </div>
                    </th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Slug</th>
                    <th>Order</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map(c => (
                    <CategoryItem key={c.id} category={c} onSelect={setSelectedCategory} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type CategoryItemProps = {
  category: Category
  onSelect?: (category: Category) => void
}

const CategoryItem = ({ category, onSelect }: CategoryItemProps) => {
  return (
    <>
      <tr onClick={() => onSelect?.(category)}>
        <td>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
        </td>
        {/* <td><i className="material-icons md-subdirectory_arrow_right text-muted"></i></td> */}
        <td>{category.id}</td>
        <td><b>{category.name}</b></td>
        <td>Desc...</td>
        <td>/slug</td>
        <td>0</td>
      </tr>
    </>
  )
}

type CategoryFormProps = {
  category?: Category
  categories: Category[]
  onSave?: (category: Category) => void
}

type CategoryForm = {
  id: number
  name: string
  parent: number
}

const CategoryForm = ({ category, categories, onSave }: CategoryFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CategoryForm>();

  const onSubmit: SubmitHandler<CategoryForm> = (data) => {
    const _category: Category = {
      id: data.id,
      name: data.name
    }

    if (Number(data.parent) > 0) {
      _category.parent = {
        id: data.parent,
        name: ''
      }
    }

    onSave?.(_category);
  };

  useEffect(() => {
    if (category) {
      reset({
        ...category,
        parent: category?.parent?.id ?? 0
      });
    } else {
      reset();
    }
  }, [category])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="category_name" className="form-label">Name</label>
          <input type="text" placeholder="Type here" className="form-control" id="category_name" {...register('name', { required: true, maxLength: 100 })} />
        </div>
        <div className="mb-4">
          <label className="form-label">Parent</label>
          <select className="form-select" {...register('parent', { required: true })}>
            <option value={0}>Select parent category</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        {/* <div className="d-grid">
          <button className="btn btn-primary">{category ? 'Update' : 'Create'}</button>
        </div> */}
        <button className="btn btn-secondary" type="reset">Reset</button>
        <button className="btn btn-primary" type="submit">{category ? 'Update' : 'Create'}</button>
      </form>
    </>
  )
}

export default Categories;
