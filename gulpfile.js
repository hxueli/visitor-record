var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// �����ļ��Ķ�����������
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['./**/*.html'], {cwd: './'}, reload);
});