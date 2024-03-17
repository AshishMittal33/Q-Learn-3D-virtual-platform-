import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000,
    timerProgressBar:true,
    didOpen:(toast:any)=>{
        toast.addEventListner('mouseenter',Swal.stopTimer);
        toast.addEventListner('mouseleave',Swal.resumeTimer);
    }
})