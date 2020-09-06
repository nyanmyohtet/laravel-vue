<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Notifications\SignupActivate;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AuthController extends Controller
{
    public $successStatus = 200;

    /**
     * Handle the user login
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * Handle the user registration
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        // $input = $request->all();
        // $input['password'] = bcrypt($input['password']);
        // $input['activation_token'] = str_random(60);
        // $user = User::create($input);
        // $success['token'] =  $user->createToken('MyApp')->accessToken;
        // $success['name'] =  $user->name;
        // return response()->json(['success' => $success], $this->successStatus);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'activation_token' => Str::random(60)
        ]);
        $user->save();
        $user->notify(new SignupActivate($user));
        return response()->json([
            'message' => 'Successfully created user!'
        ], $this->successStatus);
    }

    /**
     * Verify user registration via email
     *
     * @param string $token
     * @return Model $user
     */
    public function registerActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->email_verified_at = Carbon::now();
        $user->save();

        return $user;
    }

    /**
     * Get the authenticated user's details
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
}
