<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::All());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'birthday' => 'required|date',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'photo' => 'nullable|file|mimes:jpeg,png|max:2048'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'birthday' => $request->birthday,
            'password' => Hash::make($request->password),
        ]);

        if ($request->photo) {
            $user->setPhoto($request->photo);
        }

        if ($user->save()) {
            return new UserResource($user);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'birthday' => 'nullable|date',
            'email' => [ 'nullable', 'string', 'email', 'max:255', 'required', Rule::unique('users')->ignore($user->id) ],
            'photo' => 'nullable|file|mimes:jpeg,png|max:2048'
        ]);

        $user->name = $request->name ?? $user->name;
        $user->birthday = $request->birthday ?? $user->birthday;
        $user->email = $request->email ?? $user->email;

        if ($request->photo) {
            $user->setPhoto($request->photo);
        }

        if ($user->save()) {
            return new UserResource($user);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user)
    {
        $user->tokens()->delete();
        $user->deletePhoto();

        if ($user->delete()) {
            return response()->json(['status' => 'deleted']);
        }
    }
}
