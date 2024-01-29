import { selectToast } from '../toastSlice'
import { useAppSelector } from '../../../app/hooks';

const Toast = () => {
    const { show, message, success } = useAppSelector(selectToast);
    const classNames = show
        ?
        success ?
            "text-white bg-green-700 absolute top-4 right-4 py-3 px-4  rounded  z-50" :
            "text-white bg-red-700 absolute top-4 right-4  py-3 px-4 rounded  z-50"
        : "hidden";
    return (
        <div className={classNames}>{message}</div>
    )
}

export default Toast