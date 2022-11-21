import {reactive, computed} from 'vue';
import {useField} from './field';

export const useForm =(init = {}) => {
    const form = reactive({});

    for(const[key, value] of Object.entries(init)){
     form[key] = useField(value)
    }

    const withoutValid = (k) => k !== 'valid' 

    const checking = computed(() =>{
        let isValid = false;
        for(const el of Object.keys(form).filter(k => withoutValid(k))){
            if(form[el].valid){
                isValid = true
            } else{
                isValid = false
                break;
            }
        }
        return isValid
    })

    form.valid = checking

    return form
}