<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResource;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::orderBy('id', 'desc')->paginate(10));
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
            'tilte' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'content' => 'required|string',
            'cover' => 'required|stringmax:255',
            'publish_at' => 'required|date'
        ]);

        $post = Post::create([
            'tilte' => $request->tilte,
            'description' => $request->description,
            'content' => $request->content,
            'cover' => $request->publish_at,
            'publish_at' => $request->publish_at
        ]);

        if ($post->save()) {
            return new PostResource($post);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'tilte' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'cover' => 'nullable|stringmax:255',
            'publish_at' => 'nullable|date'
        ]);

        $post->tilte = $request->tilte ?? $post->tilte;
        $post->description = $request->description ?? $post->description;
        $post->content = $request->content ?? $post->content;
        $post->cover = $request->cover ?? $post->cover;
        $post->publish_at = $request->publish_at ?? $post->publish_at;

        if ($post->save()) {
            return new PostResource($post);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        if ($post->delete()) {
            return response()->json(['success']);
        }
    }
}
