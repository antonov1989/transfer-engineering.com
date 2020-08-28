<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class MapController extends Controller
{
    public function index()
    {
        $itemGroup = DB::table('stadiums')
            ->where("address", "!=", "''")
            ->where("lat", "!=", "''")
            ->orderby('lat', 'DESC')
            ->get();
        
        $markers = "[";

        foreach ($itemGroup as $item) {
            if ($item->lat && $item->lon && $item->address) {
                $markers .= "{
                        \"key\" : \"item_" . $item->id . "\",
                        \"name\" : \"" . addslashes($item->name) . "\",
                        \"location_latitude\" :" . $item->lon . ",
                        \"location_longitude\" :" . $item->lat . ",
                        \"map_image_url\" : \"images\",
                        \"name_point\" : \"" . addslashes($item->name) . "\",
                        \"description_point\" : \"" . addslashes($item->address) . "\",
                        \"url_point\" : \"\"
                    },";       
            }
        }
        
        $markers = trim($markers, ',');
        $markers .= "]";
        
        return view('map.index', [
                'show_map' => true, 
                'markers' => $markers
            ]);
    }
}