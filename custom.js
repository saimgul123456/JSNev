const sabit=154;

        //sabit = 154;//hata verecektir
        var degisken = 15
        degisken='ilker';
        degisken="ilker'in yeri";
        degisken=15.456;
        degisken=true;

        console.log(degisken);

        var degisken= "ilker saim"
        console.log(degisken);
        for(var i=0; i<3; i++)
        {
            var degisken= "ilker sinan"
             console.log(degisken, i);
             var son='en son:'+i;
        }

        console.log(i);
        console.log(degisken, i);
      
        //ilkel veri tipleri : string, numbers, booleans,
        var metin1="saim'in yeri";
        var metin2='saim"yolunda gerek" Gül';
        var metin3='Metin1: ${metin1}, metin2: ${metin2}';
        console.log(metin1);
        console.log(metin2);
        console.log(metin3);

        var sayi1=15.456;
        var sayi2=15/2;
        var sayi3=15;
        console.log(sayi1, sayi2,sayi3);

        //Gelişmiş veri tipleri:
        var bos_nesne={} //JSON (JavaScript Object Natation)
        var nesne={
            Marka:'Arçelik',
            Model:'Nofrost',
            Fiyat:25000,
            Versiyon:1.1,
            Taksit:false,
            lokasyon:{
                Sokak:'19',
                Mahalle:'acıbadem',
                İlçe:'kadıköy',
                İl: 'istanbul'
            },
            Odeme:['KK', 'pesin', 'senet']
        }
        // Arrays=Bu koleksiyo yapılarında boyut sabit değildir. ekleme ve çıkarma yoluyla
        var bos_arr=[]
        var arr=[1,3,4,4.5, true, 'ilker', "gul", "elma"]
        var kimlikler=[
            {isim:'Saim', soyadı:'GÜL'},
            {isim:'İlker', soyadı:'Turan'},
            {isim:'Büşra', soyadı:'Turan'},
        ]
        console.log(nesne);
        console.log(arr);
        console.log(kimlikler);