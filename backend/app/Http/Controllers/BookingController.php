<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;

class BookingController extends Controller
{
    use ApiResponse;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(Request $request)
    {
        $bookings = Booking::get();

        return $this->successResponse($bookings);
    }

    public function store(Request $request)
    {
        // Validate request
        $this->validate($request, [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'bookingTime' => 'required',
            'streetAddress' => 'required|string',
            'bookingPrice' => 'required',
        ]);

        $booking = new Booking();
        $booking->firstName = $request->input('firstName');
        $booking->lastName = $request->input('lastName');
        $booking->bookingTime = $request->input('bookingTime');
        $booking->streetAddress = $request->input('streetAddress');
        $booking->bookingPrice = $request->input('bookingPrice');
        $booking->save();

        return $this->successResponse($booking, 201);
    }
}
