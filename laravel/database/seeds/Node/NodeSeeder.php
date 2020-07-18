<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NodeSeeder extends Seeder
{
  /**
   * Seed nodes table
   * @return void
   */
  public function run()
  {
    $data = $this->readCSV('nodes.csv');

    // off foreign key checks
    DB::statement('SET FOREIGN_KEY_CHECKS=0;');
    // clear table
    DB::table('nodes')->truncate();

    foreach ($data as $key => $row) {
      DB::table('nodes')
        ->insert([
          'name' => $row[0],
          'parent_id' => empty($row[1]) ? null : $row[1],
          'position' => $row[2]
        ]);
    }

    // re-open foreign key checks
    DB::statement('SET FOREIGN_KEY_CHECKS=1;');
  }

  /**
   * reade csv file
   * @param {String} $fileName
   * @return {Array} $data
   */
  private function readCSV($fileName)
  {
    $data = [];
    $filePath = storage_path('app/data/') . $fileName;

    // Open the file
    if ( ($fileHandle = fopen($filePath, 'r')) !== false ) {
      // Loop through the CSV rows
      while ( ($row = fgetcsv($fileHandle, 0, ',')) !== FALSE) {
        array_push($data, $row);
      }
    }

    return $data;
  }
}
