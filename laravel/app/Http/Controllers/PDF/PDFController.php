<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PDF;

class PDFController extends Controller
{

  public function download()
  {
    $file_name = '請求書.pdf';
    $pathToFile = storage_path('/app/pdf/').$file_name;

    $data = [];
    $pdf = PDF::loadView('pdf.'.'invoice', $data);
    $pdf->save($pathToFile);

    return response()->download($pathToFile, $file_name, [
        'Content-Type' => 'application/pdf',
        'Content-Disposition' => 'attachment; filename="'.$file_name.'"'
    ])->deleteFileAfterSend();

    // $data = [];
    // $pdf = PDF::loadView('pdf.invoice', $data);
    // return $pdf->download('請求書.pdf');
  }

}
