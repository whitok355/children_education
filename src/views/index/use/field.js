import { ref, reactive, watch} from 'vue';

export const useField = (obj) =>{
    const value = ref(obj.value);
    const error = reactive({});
    const valid = ref(false);
    const touched = ref(false);

    const reassign = () =>{
            Object.keys(obj.validators).map(el =>{
            const isValid = obj.validators[el](value.value);
            error[el] = !isValid;
            if(isValid){
                valid.value = true
            } else{
                valid.value = false
            }
        })
    }

    watch(value, reassign)
    reassign(obj.value)

    return { value, valid, error, touched, blur: () => touched.value = true}
}