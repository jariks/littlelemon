import { H1, H2, H3, P, ButtonPrimary } from "./Headings"
import { useState, useMemo } from "react";
const Reservation = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        occasion: "",
        requests: "",
    });
    const [touched, setTouched] = useState({});

    // --- validators ---
    const validators = {
        firstName: (v) =>
            v.trim().length >= 2 ? "" : "First name must be at least 2 characters.",
        lastName: (v) =>
            v.trim().length >= 2 ? "" : "Last name must be at least 2 characters.",
        email: (v) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email.",
        phone: (v) => (/^\+370\d{8}$/.test(v.replace(/\s|-/g, "")) ? "" : "Use format +370########."),
        date: (v) => (v ? "" : "Choose a date."),
        time: (v) => (v ? "" : "Choose a time."),
        // occasion/requests are optional → no errors
        occasion: () => "",
        requests: () => "",
    };

    function validateAll(vals) {
        const errs = {};
        for (const k of Object.keys(validators)) {
            const msg = validators[k](vals[k]);
            if (msg) errs[k] = msg;
        }
        // cross-field: date+time must be in the future
        if (vals.date && vals.time) {
            const dt = new Date(`${vals.date}T${vals.time}`);
            const now = new Date();
            if (dt <= now) errs.time = "Reservation must be set in the future.";
        }
        return errs;
    }

    const errors = useMemo(() => validateAll(values), [values]);
    const isValid = useMemo(
        () => Object.keys(errors).length === 0,
        [errors]
    );

    // --- handlers ---
    function handleChange(e) {
        const { name, value } = e.target;
        setValues((s) => ({ ...s, [name]: value }));
    }
    function handleBlur(e) {
        const { name } = e.target;
        setTouched((t) => ({ ...t, [name]: true }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            date: true,
            time: true,
            occasion: true,
            requests: true,
        });
        if (!isValid) return;
        // submit payload
        console.log("Submitting:", values);
        // ...your submit logic here
    }

    const err = (name) => touched[name] && errors[name];

    return (
        <>
            <div className="w-full bg-lemon-green">
                <div className="max-w-4xl mx-auto py-16 sm:py-32">
                    <H1 additional="text-lemon-yellow mx-4">Make A Reservation</H1>
                    <P additional="text-white mx-4">Please fill in the form below to make a reservation at the Little Lemon Chicago restaurant</P>
                </div>
            </div>
            <div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-4xl p-4 sm:p-6"
                    noValidate
                >
                    <H2 additional="mb-4">Get in touch</H2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium">First name</span>
                            <input
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("firstName") ? "border-red-500" : ""}`}
                                placeholder="John"
                                aria-invalid={!!err("firstName")}
                                aria-describedby="firstName-error"
                                required
                            />
                            {err("firstName") && (
                                <span id="firstName-error" className="text-sm text-red-600">
                                    {errors.firstName}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium">Last name</span>
                            <input
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("lastName") ? "border-red-500" : ""}`}
                                placeholder="Doe"
                                aria-invalid={!!err("lastName")}
                                aria-describedby="lastName-error"
                                required
                            />
                            {err("lastName") && (
                                <span id="lastName-error" className="text-sm text-red-600">
                                    {errors.lastName}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1 sm:col-span-2">
                            <span className="text-sm font-medium">Email Address</span>
                            <input
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("email") ? "border-red-500" : ""}`}
                                placeholder="you@example.com"
                                aria-invalid={!!err("email")}
                                aria-describedby="email-error"
                                required
                            />
                            {err("email") && (
                                <span id="email-error" className="text-sm text-red-600">
                                    {errors.email}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1 sm:col-span-2 mb-2">
                            <span className="text-sm font-medium">Phone Number</span>
                            <input
                                name="phone"             // FIXED
                                type="tel"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("phone") ? "border-red-500" : ""}`}
                                placeholder="+37061234567"
                                aria-invalid={!!err("phone")}
                                aria-describedby="phone-error"
                                required
                            />
                            {err("phone") && (
                                <span id="phone-error" className="text-sm text-red-600">
                                    {errors.phone}
                                </span>
                            )}
                        </label>

                        <H2 additional="mb-2 sm:col-span-2">Reservation Details</H2>

                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium">Date</span>
                            <input
                                name="date"
                                type="date"
                                min={new Date().toISOString().slice(0, 10)}
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("date") ? "border-red-500" : ""}`}
                                aria-invalid={!!err("date")}
                                aria-describedby="date-error"
                                required
                            />
                            {err("date") && (
                                <span id="date-error" className="text-sm text-red-600">
                                    {errors.date}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium">Time</span>
                            <input
                                name="time"
                                type="time"
                                value={values.time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`rounded-lg border p-3 ${err("time") ? "border-red-500" : ""}`}
                                aria-invalid={!!err("time")}
                                aria-describedby="time-error"
                                required
                            />
                            {err("time") && (
                                <span id="time-error" className="text-sm text-red-600">
                                    {errors.time}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1 sm:col-span-2">
                            <span className="text-sm font-medium">Occasion (optional)</span>
                            <textarea
                                name="occasion"
                                rows={3}
                                value={values.occasion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="rounded-lg border p-3"
                                placeholder="Purpose of the reservation"
                            />
                        </label>

                        <label className="flex flex-col gap-1 sm:col-span-2">
                            <span className="text-sm font-medium">Special requests (optional)</span>
                            <textarea
                                name="requests"
                                rows={3}
                                value={values.requests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="rounded-lg border p-3"
                                placeholder="Any special requests"
                            />
                        </label>
                    </div>

                    <div className="mt-6 flex justify-start w-full sm:w-fit">
                        <ButtonPrimary disabled={!isValid} aria-disabled={!isValid}>
                            {isValid ? "Confirm reservation" : "Fix errors to continue"}
                        </ButtonPrimary>
                    </div>

                    {/* live region for screen readers */}
                    <p className="sr-only" aria-live="polite">
                        {Object.keys(errors).length > 0 ? "Form has errors." : "Form is valid."}
                    </p>
                </form>
            </div>
        </>
    );
}

export default Reservation;