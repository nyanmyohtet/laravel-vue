<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PDF;

class PDFController extends Controller
{

  public function download($id)
  {
    $data = [];
    $pdf = PDF::loadView('pdf.invoice', $data);
    return $pdf->download('請求書.pdf');
  }

}
