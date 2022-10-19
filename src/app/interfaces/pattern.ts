import { FormControl } from '@angular/forms'

export interface Pattern {
    [key: string]: boolean;
}
export class PasswordValidator {

    public static strong(control: FormControl): Pattern {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }
}
