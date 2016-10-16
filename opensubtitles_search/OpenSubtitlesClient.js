var OpenSubtitlesClient = function(user, pass, lang) {
  this.user = user || '';
  this.pass = pass || '';
  this.lang = lang || '';
  this.login();
}

OpenSubtitlesClient.prototype.request = function(method, params) {
  var request = new XmlRpcRequest("http://api.opensubtitles.org/xml-rpc", method);
  if (params && params.length > 0)
  {
    for (var c=0,len=params.length;c<len;c++)
    {
      request.addParam(params[c]);
    }
  }
  return request.send().parseXML();
}

OpenSubtitlesClient.prototype.login = function() {
  var resp = this.request('LogIn', [ this.user, this.pass, this.lang, 'OSTestUserAgentTemp' ]);
  this.logintoken = resp.token;
}

OpenSubtitlesClient.prototype.search = function(movie, lang) {
  resp = this.request('SearchSubtitles',
            [
              this.logintoken,
              [
                {
                  'sublanguageid': lang,
                  'query': movie,
                }
              ]
            ]);
  var raw = resp.data;
  var ret = [];

  // filter for hearing impaired
  for (var c=0,len=raw.length;c<len;c++)
  {
    var subtitle = raw[c];
    if (parseInt(subtitle.SubHearingImpaired, 10) > 0 && subtitle.SubFormat == 'srt')
    {
      ret.push(subtitle);
    }
  }
  // if no hearing impaired just use raw..
  if (ret.length == 0 && raw.length > 0)
  {
    ret = raw;
  }

  ret.sort(function(a,b) {
    return parseFloat(b.SubRating) - parseFloat(a.SubRating);
  });

  return ret;
}
