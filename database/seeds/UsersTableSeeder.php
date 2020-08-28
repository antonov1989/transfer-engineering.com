<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name'     => 'admin',
                'email'    => 'xballkh@gmail.com',
                'password' => bcrypt('bumperball2017'),
                'isAdmin'  => 1,
            ],
            [
                'name'     => 'bandit',
                'email'    => 'ruslannaeltok@gmail.com',
                'password' => bcrypt('23hjg32jhg'),
                'isAdmin'  => 1,
            ],
            [
                'name'     => 'free',
                'email'    => 'antonov.nik1989@gmail.com',
                'password' => bcrypt('8905sapr'),
                'isAdmin'  => 1,
            ]
        ]);
    }
}
