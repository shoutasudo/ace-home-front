<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);

        $json = [
            'data' => $user
        ];

        return response()->json($json, Response::HTTP_OK);
    }


    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::whereEmail($request->email)->first();
            $user->tokens()->delete();
            $token = $user->createToken("login:user{$user->id}")->plainTextToken;

            $cookie = cookie('token', $token, 60 * 24);

            return response()->json([
                'user' => new UserResource($user),
            ])->withCookie($cookie);
        }
        return response()->json('Can Not Login.', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'ログアウトしました'
        ])->withCookie($cookie);
    }

    // ユーザー情報取得
    public function user(Request $request) {
        return new UserResource($request->user());
    }
}
