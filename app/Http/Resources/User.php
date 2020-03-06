<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // Форматы дат изменены для удобства отображения
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'b_date'     => $this->birthday->format('Y-m-d'),
            'birthday'   => $this->birthday->isoFormat('dddd Do MMMM YYYY'),
            'email'      => $this->email,
            'photos'     => $this->photos,
            'created_at' => $this->created_at->isoFormat('dddd Do MMMM YYYY'),
            'updated_at' => $this->updated_at->isoFormat('dddd Do MMMM YYYY'),
        ];
    }
}
