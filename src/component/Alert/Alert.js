import React from 'react'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from '../../redux/action/alertAction';

const Alert = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.alert)
    console.log(alert)

    const dispatch = useDispatch()


    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

            setTimeout(() => {
                dispatch(resetAlert())
            }, 1000)
        }
    }, [alert.text])

    return (
        <>

        </>
    )
}

export default Alert