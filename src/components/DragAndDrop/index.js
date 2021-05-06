import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = (props) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const filesUploaded = files.map((file) => (
        <li key={file.lastModified}>
            <img src={file.preview} alt="aa" />
            <p>{file.path}</p>
        </li>
    ));

    useEffect(
        () => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    useEffect(() => {
        props.filesUploaded(files);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files]);

    return (
        <>
            <section className="modalFullscreen__container--dd">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>
                        <span>Agregar archivo</span> o arrastrarlo y soltarlo aquí
                    </p>
                </div>
            </section>

            {files && (
                <aside className="modalFullscreen__container--dd-data">
                    <ul>{filesUploaded}</ul>
                </aside>
            )}
        </>
    );
};

export default DragAndDrop;
