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
        $bookings = Booking::
                        byId($request->get('bookingId'))
                        ->byPrice($request->get('bookingPrice'), $request->get('wherePrice'))
                        ->get();

        return $this->successResponse($bookings);
    }

    public function store(Request $request)
    {
        // Validate request
        $this->validate($request, [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'bookingTime' => 'required|date',
            'streetAddress' => 'required|string',
            'bookingPrice' => 'required|numeric|between:0,99999999999999999999.99|min:0',
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
