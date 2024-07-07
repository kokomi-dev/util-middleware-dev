const statusCode = {
  Error: 500,
  // khởi tạo một status code mặc định khi trả vè lỗi cho client
};
const errorHandling = (error, req, res, next) => {
  if (!error) {
    return res.statusCode.Error.json("No error handle");
  }
  // các tùy chỉnh trả về cho lỗi
  const responseError = {
    statusCode: statusCode.Error,
    message: error.message,
    //  message : lời gửi được gửi về kèm theo lỗi
    stack: error.stack,
    //  stack : thông báo lỗi rõ ràng ở đâu
  };
  res.status(responseError.statusCode).json(responseError);
};
module.exports = errorHandling;
// khi dùng midleware này thì tất cả các catch, error được gọi trong next() sẽ được log ra trong midelware này để xử lí lỗi một cách tập trung mà không phải viết lại nhiều lần
