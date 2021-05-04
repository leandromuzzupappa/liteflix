import './styles.scss';
import { useState, useEffect } from 'react';

const UploadingFile = (props) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prev) => {
                if (prev >= 85) {
                    clearInterval(intervalId);
                    return 100;
                } else {
                    return prev + Math.floor(Math.random() * 12);
                }
            });
        }, 800);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className={`uploadingFile ${value === 100 ? 'completed' : ''}`}>
                <h4>Cargando {value}%</h4>
                <div className="uploadingFile__loadingBar">
                    <span
                        className="uploadingFile__loadingBar--progress"
                        style={{ width: `${value}%` }}
                    ></span>
                </div>
            </div>
            <div className={`uploadingFile__response ${value === 100 ? 'completed' : ''}`}>
                <span className="uploadingFile__response--icon"></span>

                <h3>Pelicula guardada correctamente</h3>
            </div>
        </>
    );
};

export default UploadingFile;
