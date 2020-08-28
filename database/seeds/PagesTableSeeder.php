<?php

use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = include __DIR__ . '/pages-list.php';
        
        foreach ($list as $alias => $page) {
            $pageExist = DB::table('pages')->where('alias', '=', $alias)->first();
            if (!$pageExist) {
                $page['alias'] = $alias;
                DB::table('pages')->insert($page); 
            }
        }
    }
}
