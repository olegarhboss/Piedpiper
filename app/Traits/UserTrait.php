<?php

namespace App\Traits;

// Для метода прикрепления фотографии пользователя
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
// Для грубой обработки фотографии
use App\Jobs\SaveUserPhoto;

trait UserTrait
{
    // Для удобства массив изображений, например для адаптивности на фронте
    public function getPhotosAttribute()
    {
        if (!empty($this->photo)) {
            $photosPath = 'storage/users/' . $this->id . '/photo/';
            $fileName = $this->photo;
        } else {
            // Если у пользователя нет фотографии тогда будет изображение заглушка
            $photosPath = 'storage/empty/';
            $fileName = 'user.jpg';
        }
        
        return [
            'retina_full' => asset($photosPath . '2_' . $fileName),
            'retina_min'  => asset($photosPath . 'min_2_' . $fileName),
            'simple_full' => asset($photosPath . $fileName),
            'simple_min'  => asset($photosPath . 'min_' . $fileName)
        ];        
    }

    // Удаление фотографий пользователя
    public function deletePhoto(){
        Storage::deleteDirectory('users/' . $this->id . '/photo');
    }

    // Процедура добавления фотографии пользователя
    public function setPhoto($photo)
    {
        // Директория хранения фотографии пользователя
        $photoPath = 'users/' . $this->id . '/photo';
        // Базовое имя файла
        $image = Str::random(4) . '.' . $photo->extension();
        
        if (!empty($this->photo)) {
            // Удалить старые файлы при замене фотографии
            $this->deletePhoto();
        }
        
        $this->photo = $image;
        
        // Сохраняем
        if ($this->save()) {
            // Сохраняем загруженный файл для дальнейшей работы
            $photo->storeAs($photoPath, 'original_' . $image); 
            // Отправляем на обработку в очередь (потому что это ресурсоёмкая процедура)
            dispatch(new SaveUserPhoto(Storage::path($photoPath), $image));
        }
    }
}