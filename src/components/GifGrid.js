import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category ); //":images"  renombra el "data" a "images"

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {/*  como no se hace nada (null) en la evaluación de false, la siguiente linea sólo evalua el true de loading con el doble && { loading ? <p>Loading...</p> : null }  */}

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        //console.log( img )
                        <GifGridItem 
                            key={ img.id }
                            { ...img } //el operador spret se usa para mandar las propiedades del img como propiedades independientes
                        />
                    ) )
                }
            </div>
        </>
    )
}
