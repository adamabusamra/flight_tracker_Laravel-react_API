<?php

namespace App\Http\Controllers;

use GuzzleHttp\Promise\Promise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FlightApiController extends Controller
{
    public function getFlightStatus(Request $request,$flightNumber){
      $data =  Http::get("http://api.aviationstack.com/v1/flights?access_key=4bb648fe7ce1b72618be6276e6b5b661&flight_iata=$flightNumber")->json();
      return response()->json([
          'api_res'=> $data
      ]);

    }
}
