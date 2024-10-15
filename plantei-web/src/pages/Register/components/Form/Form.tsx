import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import './Form.css';
import { API_URLS } from '@Types/Api';

const createPlantSchema = z.object({
  name: z.string().nonempty("Name is required"),
  subtitle: z.string().nonempty("Subtitle is required"),
  type: z.string().nonempty("Type is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  discountPercentage: z.coerce.number().min(0).max(100, "Invalid discount"),
  label: z.string().nonempty("Please select a label"),
  features: z.string().nonempty("Features are required"),
  description: z.string().nonempty("Description is required")  
})

type CreatePlantSchema = z.infer<typeof createPlantSchema>

export function CreatePlantDialog() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreatePlantSchema>({
    resolver: zodResolver(createPlantSchema),
  })

  const [message, setMessage] = useState<{text: string, type: 'success' | 'error' | ''}>({text: '', type: ''});

  async function handleCreatePlant(data: CreatePlantSchema) {
    try {
      const response = await fetch(API_URLS.setPlant, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ text: 'Planta registrada com sucesso!', type: 'success' });
        console.log("Pronto")
      } else {
        setMessage({ text: 'Erro ao registrar planta.', type: 'error' });
        console.log("Erro")
      }
    } catch (error) {
      setMessage({ text: 'Erro ao enviar requisição.', type: 'error' });
      console.log("Requisição")
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit(handleCreatePlant)} className="plant-form">
          <h2 className="plant-form-title">Plant registration</h2>

          <hr className="custom-line" />

          <div id='name' className={`form-group ${errors.name ? 'error' : ''}`}>
            <label htmlFor="name">Plant name</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="Echinocereus Cactus"
              {...register('name')} 
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          <div id='subtitle' className={`form-group ${errors.subtitle ? 'error' : ''}`}>
            <label htmlFor="subtitle">Plant subtitle</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="A majestic addition to your plant collection"
              {...register('subtitle')} 
            />
            {errors.subtitle && <p className="error-message">{errors.subtitle.message}</p>}
          </div>

          <div id='type' className={`form-group ${errors.type ? 'error' : ''}`}>
            <label htmlFor="type">Plant type</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="Cactus"
              {...register('type')}
            />
            {errors.type && <p className="error-message">{errors.type.message}</p>}
          </div>

          <div className="plant-form-row">
            <div className={`form-group ${errors.price ? 'error' : ''}`}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="plant-form-input"
                placeholder="$139.99"
                {...register('price')} 
              />
              {errors.price && <p className="error-message">{errors.price.message}</p>}
            </div>

            <div className={`form-group ${errors.discountPercentage ? 'error' : ''}`}>
              <label htmlFor="discountPercentage">Discount percentage</label>
              <input
                type="text"
                className="plant-form-input"
                placeholder="20%"
                {...register('discountPercentage')} 
              />
              {errors.discountPercentage && <p className="error-message">{errors.discountPercentage.message}</p>}
            </div>
          </div>

          <div className="plant-form-radio-group">
            <h2>Label:</h2>
            <input
              type="radio"
              id="indoor"
              value="Indoor"
              defaultChecked
              {...register('label')} 
            />
            <label htmlFor="indoor">Indoor</label>

            <input
              type="radio"
              id="outdoor"
              value="Outdoor"
              {...register('label')}
            />
            <label htmlFor="outdoor">Outdoor</label>
          </div>

          <div id='features' className={`form-group ${errors.features ? 'error' : ''}`}>
            <label htmlFor="features">Features</label>
            <textarea
              className="plant-form-textarea"
              placeholder="Species: Echinocereus..."
              {...register('features')}
            />
            {errors.features && <p className="error-message">{errors.features.message}</p>}
          </div>

          <div id='description' className={`form-group ${errors.description ? 'error' : ''}`}>
            <label htmlFor="description">Description</label>
            <textarea
              className="plant-form-textarea"
              placeholder="Ladyfinger cactus..."
              {...register('description')} 
            />
            {errors.description && <p className="error-message">{errors.description.message}</p>}
          </div>

          <button type="submit" className="plant-form-button">
            Register
          </button>

          {message.text && (
            <p className={`message ${message.type}`}>
              {message.text}
            </p>
          )}
        </form>
      </div>
      <div className="image-container"/>
      
    </div>
  );
}

export default CreatePlantDialog;
