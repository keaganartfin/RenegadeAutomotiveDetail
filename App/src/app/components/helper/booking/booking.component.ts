import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
    bookingForm: FormGroup;
    submissionMessage: string | null = null;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient
    ) {
        this.bookingForm = this.formBuilder.group({
            date: ['', Validators.required],
            time: ['', Validators.required],
            vehicles: this.formBuilder.array([this.createVehicleFormGroup()]),
            clientName: ['', Validators.required],
            clientPhoneNumber: ['', Validators.required],
            contactPreference: ['call', Validators.required],
        });
    }

    createVehicleFormGroup(): FormGroup {
        return this.formBuilder.group({
            year: ['', Validators.required],
            make: ['', Validators.required],
            model: ['', Validators.required],
            detailingPackage: ['', Validators.required],
        });
    }

    addVehicle(): void {
        this.vehicles.push(this.createVehicleFormGroup());
    }

    removeVehicle(index: number): void {
        this.vehicles.removeAt(index);
    }

    get vehicles(): FormArray {
        return this.bookingForm.get('vehicles') as FormArray;
    }

    onSubmit(): void {
        if (this.bookingForm.valid) {
            // Process the form data and send it to your backend
            console.log(this.bookingForm.value);
        } else {
            // Show an error message if the form is not valid
            console.log('Form is not valid');
        }
        const clientEmail = this.bookingForm.value.clientPhoneNumber;
        const clientName = this.bookingForm.value.clientName;
        const bookingDetails = this.bookingForm.value;

        this.httpClient
            .post('http://localhost:3000/send-email', {
                clientEmail,
                clientName,
                bookingDetails,
            })
            .subscribe(
                () => {
                    console.log('Email sent successfully');
                    this.submissionMessage = 'Email sent successfully';
                },
                (error) => {
                    console.error('Error sending email:', error);
                    this.submissionMessage = 'Error sending email';
                }
            );
    }
    getTimeSlots(): string[] {
        const timeSlots = [];
        const start = new Date(0, 0, 0, 6, 30);
        const end = new Date(0, 0, 0, 20, 30);

        for (
            let time = start;
            time <= end;
            time.setMinutes(time.getMinutes() + 30)
        ) {
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours % 12 || 12}:${
                minutes === 0 ? '00' : minutes
            } ${ampm}`;
            timeSlots.push(formattedTime);
        }

        return timeSlots;
    }
}
