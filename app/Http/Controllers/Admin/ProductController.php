<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Models\Product\Product;
use App\Models\Language\Language;
use App\Services\ProductService;
use Intervention\Image\ImageManagerStatic as Image;

class ProductController extends Controller
{
    /**
     * @var ProductService
     */
    private $service;

    /**
     * ProductService constructor.
     * @param $service
     */
    public function __construct(ProductService $service)
    {
        $this->service = $service;

        $this->middleware('admin');
    }

    public function index(Request $request)
    {       
        $list = Product::get();
        
        return view('admin.products.index', [
            'list' => $list 
        ]);
    }

    public function add(Request $request)
    {
        return view('admin.products.add', [
            'langs' => Language::all(),
        ]);
    }

    public function edit($id, Request $request)
    {
        $product = Product::find($id);

        $product_translation = $this->service->getTranslations($product);

        return view('admin.products.edit', [
            'product' => $product,
            'langs' => Language::all(),
            'product_translation' => $product_translation,
        ]);
    }

    public function store(Request $request)
    {
        $product = new Product();
        $data = $request->all();

        $product->fill($data);
        
        if (!$product->save()) {
            return redirect()->route('admin.products')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        } else {
            $this->service->updateTranslations($product, $request);

            return redirect()->route('admin.products')
                ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
        }
    }

    public function save($id, Request $request)
    {
        $product = Product::find($id);
        $data = $request->all();
        if (empty($data['active'])) {
            $data['active'] = 0;
        }

        $image = $request->file('image');
        unset($data['image']);

        $product->fill($data);

        if (!$product->save()) {
            return redirect()->route('admin.products')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        } else {
            if ($image) {
                $product->image = $product->alias . '.' . $image->getClientOriginalExtension();
                if ($image->move(public_path('img/products/page/'), $product->image)) {
                    $product->save();
    
                    $image_resize = Image::make(public_path('img/products/page/') . $product->image);
                    $image_resize->resize(352, 230);
                    $image_resize->save(public_path('img/products/list/' . $product->image));
                }
            }

            $this->service->updateTranslations($product, $request);

            return redirect()->route('admin.products')
                ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
        }
    }
}