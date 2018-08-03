  var config = {
      apiBaseUrl: 'https://k29gl6w9kl.execute-api.ap-northeast-1.amazonaws.com/dev' // API GatewayのURL
  };

  getVideoList();


	function getVideoList() {
		var url = config.apiBaseUrl + '/videos?encoding=' + encodeURIComponent('720p');

    console.log(url);

    $.get(url, function(data, status){
        console.log("Data Loaded: " + data + " ,and Status Loaded: " + status);

        updateVideoFrontpage(data);
    })


  }

	function updateVideoFrontpage(data) {
    console.log('属性で渡されたdata: ' + data);
//		var baseUrl = data.domain; // これだとbaseUrlはhttps://s3.amazonaws.comとなり、
//    The bucket you are attempting to access must be addressed using the specified endpoint.のエラーだす。
    var baseUrl = 'https://s3-ap-northeast-1.amazonaws.com';
		var bucket = data.bucket;

    console.log(baseUrl); // https://s3-ap-northeast-1.amazonaws.com
    console.log(bucket); // p332-serverless-video-transcoded


		for (var i = 0; i < data.files.length; i++) {
				var video = data.files[i];

				var clone = $('#video-template').clone().attr('id', 'video-' + i);

//				clone.find('source')
//						 .attr('src', '' + baseUrl + '/' + bucket + '/' + video.filename);
// p261にて下記に変更.
// 変更前は、https://s3-ap-northeast-1.amazonaws.com/p332-serverless-video-transcoded/36a3d1f6816eb23ee4b386cf5f4cfc3e077b3257/Sunset-15779-720p.mp4
// 変更後は、https://p332-serverless-video-transcoded.s3.ap-northeast-1.amazonaws.com/36a3d1f6816eb23ee4b386cf5f4cfc3e077b3257/Sunset-15779-web-720p.mp4?AWSAccessKeyId=ASIAJN3SJNMUR52OJM7A&Expires=1531379928&Signature=VSQrkCo3qZQaRJWPysZW%2BqqwRyQ%3D&x-amz-security-token=FQoDYXdzEEAaDKV44P%2FZJfRRT%2BT1XCLsAZix1oXANkKvRm4zU7d0K9sxTG203k7KeffELU0jKdrEN3S%2BvRkwOpCfNnHnSrR4Wr0hotsrrZJ3UaQTSZIAsZ7rbloMSgq91VI5kCL4tuy5ddp7xq73dfNNcplIa8wsZ0YYLVwOi8HRiquwP%2FqOAYTIdoGhLgiz4NupQtRWg3z2sAJOt083%2FEw0lXtNEFeftjc%2BGWNoUUcioTbe43jwMq8pS2EdIBMQUI6ExiRdidA4uZW4zF6noemGXehJW2fFchI%2BHFEqDpE30Qj5PeDNKaN8MbIU2YQdrXDgIIOpg5tj%2FBBWllEmzRf7EnHnKM76m9oF
          clone.find('source').attr('src', video.filename);

				$('#video-list').prepend(clone);
		}

	}
