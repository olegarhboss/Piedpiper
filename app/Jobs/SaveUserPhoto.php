<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Image;

class SaveUserPhoto implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $path;
    protected $file;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($path, $file)
    {
        $this->path = $path;
        $this->file = $file;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // А теперь настал черёд воспользоваться загруженным ранее изображением
        $image = Image::make($this->path . '/original_' . $this->file);
        $image->backup();
        
        // Просто обрежен для отображения в профиле, для устройств с плоностью пикселей x2
        $image->fit(328, 328)->save($this->path . '/2_' . $this->file);
        $image->reset();

        // Для обычных дисплеев
        $image->fit(164, 164)->save($this->path . '/' . $this->file);
        $image->reset();

        // Миниатюрка для устройств с плотностью пикселей x2 
        $image->fit(96, 96)->save($this->path . '/min_2_' . $this->file);
        $image->reset();
       
        // Миниатюрка для обычных дисплеев
        $image->fit(48, 48)->save($this->path . '/min_' . $this->file);
        $image->reset();

        $image->destroy();
        # Всё это можно было релизовать изящно и локанично в цикле, пердав туда массив размеров и префиксов имён файлов, а сами значения держать в отдельном конфиге, но делать этого я не буду
    }
}
