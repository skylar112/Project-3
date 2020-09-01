import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./style.css";

export default class Services extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">

          <h1>New Cars</h1>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27227136/best-sedans/"

          <h1>Best Used Cars</h1>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/used/midsize-cars-1"

                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"

                  src="https://cdcssl.ibsrv.net/cimg/www.carsdirect.com/1200x800_85/522/Large-39713-2020SonataLimited-577522.jpg"
                  alt="Sonata"
                />
                <CardTitle>Sedans</CardTitle>
              </a>
            </div>
            <div className="col-3 cars">
              <a
                href="https://www.autolist.com/guides/best-used-sports-cars-under-30000"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVEBUVFRUXFhUVFRUVFRUWFhUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGisfHSAtLy0tLS0tLSstLS0tLS0tLS0rLS0tLSstKystLi0tLS0tKy0vLS0tLS0vLS0tLS0tN//AABEIAK4BIQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABKEAABAwEDBgkIBwYEBwAAAAABAAIRAwQSIQUxQVFhcQYTIlKBkaGx0RQyQmKSwdLwB1NygqKy4RUWI0NjwjNUo9MXNESDk+Ly/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAgAFAgMIAwEAAAAAAAABAhEDEgQTITFRIkEUYZEFFTJScYGh0ULB8CP/2gAMAwEAAhEDEQA/AO8upoUqZdjhRHCaFKmIQURwlCOEoQAQmhSQmhBQEJI4TQgBSBRQlCAa8iNTYmhNCAUpFKEoQBCilxCQKka5Q0qITSQlincVGlkaI7qa6pgEnMVslEMJQjhPdQAXUriO4lCCiO6lClupQliiKEoUhYlCCiO6lCkuohTSxRDCUKxxQ1pcRtSy6srQnhTmimuFLFEMJlYg/MJlLFE0JoRwlCgAhNCOEoQUBCaEcJQgoCEoRpoQUBCUI4TQgoGEoRQlCtgCEoRwlCWKAhKEcJQligISRQlCgoZKE8JIUUJ7yaEkA11OAUQCUIWhCU5CUpwhQJKElTgBLDUFLJRXShTHchKtkojhEE8JoSwOlKZJC2OkmToBSklCSFJoShEmUsAwlCJMlkBhKESZLFDQlCdMlihoShOkligYShEkligYShEkligYShFCaEsUDCUI00JYBhKEUJQlgGEoRJQlgZJPCSWUZJOklgZKE6SWBkQhMkgCwTiECSgDgJFoQSlKCx7ia6lKeUKNCSUp1SEyZeX1fpCtBHJYxu3E96gd9IFr0FnsrnsjejPVoTELyG0cNLY/+bc+yAPFZ9fLtpdi60VD94gdQTYuh7ZI1hCag1jrC8Ifbqhzvcd5KjZWIzEjsTYaHu9S102+dUYN7mjvKKlVa4S1wcNYII7F4FMnFOHRmPUmw0Pf5Q3xrHWF4N5a+IvujVeMKPjdp602Gh74+q0Z3AbyAozbaf1jPab4rwY44knpxQwmw0Pd6uVKLcDVYJ9YKSnbKbvNqMP3gvBQTqCYv6E2Gh9Al4GcjrTgrwBtXbPSrtjyxXp/4dV7dxTYcs9ySXjA4SWyZ8pqdfuU1LhjbW4eUTvaw94TdDls9hSXlVHh3axncx29g90Kwz6QbRIltKNIDSJ/Em6Joz01Jef0vpDfIvUWxpgmehWq/wBIbY5FBxPrOAHZKuyGjO2SXCUfpGHp2f2X+LVbb9Idm006o6GH+5NkTVnYQkuSd9IVmjBlYnVdYP7lE/6RKAGFGtO0MHbeTZDVnZQmhcLW+khkcizun1nADsBVCt9Ilcjk0qTd993gmyLqz0lJeUP4c23PfYNgpt96p1uFVscZNoqDYy638qm6Loz2Mqlasr0Kfn1qbdhcJ6l4zaLdUeZfUqOPrOce9QluwdKm5eWeuVOF9iA/5hp3B59yza/0hWYZmVXdDQO0rzS7rA6CmLQNim7Ly0eij6R6H1NXrZ4oK30jMGazuI2vaO4Fedlw1Sn4wao6U3Y0R3//ABJb/lj/AOT/ANElwPGBJNmXRDl4OxRmEDZOhS3HROjZiso0Bgk0p3ZtHYg4zcrZAwdaZzkiguklASXhrTbkAZjoRuYRq7EAiZ0JApB+tTWWLwlpfjyWDO86p0N1lVAu5NyUarTUc4MpjO4jPrDRp3om17GwxdLo0uecehkKPKtlqOE2ioSQOTQpS2mwasMTGvBc3XY0TAgxhnndJXTShDNBf42dfSyxQ9FlFu00r3bdJTVOEcZj7LAPBczk3F0TnC1H0wwEwHThyhOfUpR1+La7Rj9CavwknOwu+0xh71FRy2HG6LNSJMxIpszCc+AVR9kG1Vali2xvSkYlxc5ey+iNd3CBtMwbFRnbyvEKUcMyBDbNSaPVaxvc1cyIGfH50KIwtUc+dL5fRHTu4WF3nUWO3tY7vagOW6DvOso3t5P5SB2Lmy5SUWFxiYUpGviJe6X0RvivZzix1Rmx4Dx1tjuQgg5iDtHzgs1tnj0jKIPg6nDTr2HWFlwRl5b9i8RtSHzKip1r2EQ4Zx7xrCcvWGjSZIZ2IQ47EJKa+QgJI1u6ExKivJi5ATFw1JX9iiaExUAd4pi5RwSmO5UB3k4cowE4BnMSlAcuTTKRJGhPJ1FQDXHJKSfUPWU6AkZSJMDk/aw7FeZktzxAcDuc1vfK9QZYzzu9H5M7nnrPiunKXk581+DzGnwfDQbziNzgT0Q1ZFsYWuusvb3XW98L2XyZ3PPWfFA6ynnHtV5a8meZ8jyKxUw7z72HNActmy5CZUzPqDYWD3CF6GLIR6SIWd3PKqgkR5GzghwV/qO6WjwTv4KgnF790fou88nPPKxsrZap0DcvX36sABvWmoo1jjkyPWPVmNT4OsAjir20iof7oXM5fyv5LXdSoNpi6xrXPuY3s7g3QBm15l2Fhy5Vq1WtAa0TOA95xWNlzgg2pVfVp1n03PcXEDESc8QRE9Kykn1iejJw2WHpkclVyrUqgh9YXiCWg3Wyd0acypVKt4zswz4BbFuyFaaZwtF6fWJPSC1ZvkVVj7juLxAnkgnrEd6knXVnOGCUnrFdQMn1YLTqMFbdoe10XXjqd4KXI2SbOGgm84yfOIwI1XcIWhVsTWBt1nnGG8gCY7exNr7Ho+BmvxOjEtFoGZsztwCp1Hudnkrq/IjpLW7CZPUEXklPTdO5rx28YpsbX2fJ9n/BxvEE7O3uTGzbfwldm+yWfmP6/GU9LJ9mIk39xcB1clN0a+7pLycRUoHQJ6CrJpue5t1pL8ByWnlbhEnsXY+SWUegT94+5LiLL9UPad4q7D7ul8znhkq0Ef4FT2XIamSqoEvpVGgYl1x0DaTC6ujVoN82mBuc/wAURtFGZNJp3ye8psjH3dkOHdRcDEExmcAVBa7QbrSC4OFTlAZi0giRGIM/OgehC1UfqKXTTae8JWi00KgDXUKRa0yBcaACYxEAY4DqS0PgMqPNLNbKgqBtQktvQ48kECYLpMZtvYu3HBN+cCpvhvxK7Z6Fja695LTkGQcZB1jHOtc5UpEek06w9x7CVVr7nOXB512RzD+CdX1/Zb8SZvBaqNL/AGW+566A5WaDBv72vcJ9qVasttpPw46o0+s7DrhX0GJ8LxEVdHLfu1Uj0t91vxoDwZqc53sN+Nd95Cfrn+0PhQmwn65/tD4VdYnl2mcIeDr4jHfdH+4oxwaqD03Dc0D+9d95Gfrn9Y+FIWb+s/8AD8KaxG0jgH8G3z57ukN+NHTyC4DOZ2QP713pogfzn/g+FI0v61T8PgmsRtI89dweqc4+yPjTHg/V55H3R8a9CNP+rU/D8KBzB9dU6x4KaxG0jz793avP/CPjSXoPFf1anWPBJNYjaRN+3qO07kNfL9NomHLIp2F4zU2na2oHdUNQuyU7GWug657OSFmWVJ9DccTa6mxT4QU4kg9Eov2/S29X6rn/ACB4hoc2NIMTC0GWdkf4RJ2EKY8qr1FyYnfpL/7wUvW6kYy2zU7qWTaLO04XC3pHis+qw0weLYSfteKks6T6FhgbVs1Mu8K6dGkXAkOODZEYrzt9sdVdJMlxmcNKq8MrQ+pVZTdyYbJEg4ncqeT33cJMA4SsZbkrR7/s+ccctfPublbKTqTv4bnREX5FNwA2Y51ov4ZhwAuEOOEh07yZAjtXO2l0wdipOcFmM3FdD053tJpnZ0Mq0s8y7X4SsG1Bz6zjpJJG7RCzG1FZZayMP1HUszm5dzth0gvSjWoca2BSpl7tGF6IzuIGEb1ptyvVFFoe6XGTMAENOIBjT7oXLV8vVKNNzabi01MCRoaM+GvcqWTso1ARfMhx8455PfK0rUbRzfEY+cozOuo2k6Vcp1JWHxp2HpI9yPJzuNe5j7U2zkuLaUtBY5zYH8WoTNMOJgODSBGMDFco3N9D6OficeCNyTN0lRPasS2PrUnOp1ONp1GOuva5wwdnzDREGcRiDMEIPLKwiKhLTp5DtMal05MvJ419r4vyv+P7NoyEplZDrfWBgxmGdonHH0SIV6laIA40Opk+aYBY7c/QViUJo9OL7Q4fI6Tp/MncCoy9S8YRgpBZ7wkY9hXPZntdFXjEuNT1KMaD1lROaPmVdyqKJBWT+ULOfbGAlruSQYMxpgjTOMhTOatNuPc5Y8mPLejTot8ekK/Qs5z8YUNqqQPOLZcBOc4nGOiVFO3QyOMIOT7I7PI2XuJwqOHF6ZIEbRPcuvpua4BzSC0iQRiCDpBC8TsrgYIDr+nHE4nSZPYvVuDz7tlo1DTLOMvgtOA4xh5Tmeq4EO33l7Y9OjPynE5Y5ZbRjRrXEPF7O1ALW3ai8obrXSjx2M+gDnUZoDUphUB1JEjYpRbK/k7dEDoQ+Tj5JVnDUEsNQ6koWVfJxr7Ulaw1DqSShZylSu0ec1w2wSOtRtylSBwqOaekLnG254817usjuCnZlerz/f3heapHptHSjLQ/zLulzkQyw362md7WHvC5puVDpax2+m09ql/ajNNBvQS3slOvgdPJ0rcrDnUjuIb+UhH+0AR5rT94nvJXL+V0jnD2/ZLD+YJCrSOau9n2mA/lU/YfuYPCt7TbXOLeRca0jD0g4TgBETPQsimcT86StPL4aKpIfxocwSYLe9ZbKUXTrkQc+GaR8yt94iDqaZaa6WxpGIUDqo5vb4o2kgyFbdRpvEjknSPeNi5J13PpvG8nVdygIObqTgo6ljIzYpMdODs+gx361ro+xxTnB1Iz7VyqgGz9fepjpBnMDv3QmLYqOOeFeygxpAePVjU5hGDhtGYjWF1XY8GR3Js0LNVLqbTqwJUGV7GHNbWAxPJcJI5TQIjGJLYPQVDYKnI+dHyFp5LqtLjSf5lSBJ9F3ou9x2ErxL/zyPwfc68RwyT7+36kVl4QF9NlKvSZXFMXWOqGq2qxminxlJ7C5okwHXomBAwV6labO4QLNVaI9G1f7lF57VjVqF2o9paWlry1wOgiOvRjpzqzTfC6ZMsoukc+H4PFkgpSR1mTqVF3n06mEYPqUH9raNNdi+z2QWQB1FtQPJJax1EPaG4RD6wxMyIK8kfwgFIxF46RmHSVZqcLKJ81j24YjAwdMG8JHQFqMsjV0csvD8JGWqlR0loydZ6c3WWukMIbUpsqtE44cXUJ3QY351Qq5Qp0sWl79YbSrB3SHsA/EVmN4VUgJvOmDhdMiMw86Md+jGEzuFdF2e8d7B8SjTfeJ6MWSEFUc31o6avaaDrO2s1wDr111F7XNdEecARhqWblC12YhppB7XXeWHEEXvVOeN6xf2nSqSWgyMSbsBYFXKZJnMsLG26PRPi4YkntdnQ1LQw6PkZpUT7YFzxtpQ+WHatPA33Z5/vSK/CqN0VDnicRmjNpOJE7pV176BONnqVIzcZaLjZ13KNMO6OMKxLLb4YXXS67njUdO5Ccsk5mAbyfcsxxyi/SjWXicGSK5knT9l/3+zq6GW6lMAUqVmoRmLKDXuH37Qah6RCZuWq7rVZ6lau+reeW8pxddEAEAHBoxzCBguQdlKodXVPep8l2hzzDj5hLx3ELqlNdZM8u/DTax4o037ns2CcOGpZVK1NdBkTGYOg9oVg1dMjpdK9ammfEcGu5dBGqN8Ib+qCoBUadZ3YqWJ0nr8VpMjQ7q0Z8N098JNtG1QVS0a+9ZTbU97rjBI14YLMppGowbN7jvmR4pLN/ZtXndidY5qN8lnBhxd6J+elSNs7uZ1kBWjZnaXjpI8ETLKNLm9ngsWdKKxsrua3rCidSOkfPWtVlnZpcOr9FL5NS+QPBSxRhlmpHTa7QVthlIf8AyFK009vswlijlcq2QOBvvuuDJZAm8QcQdSxqouhmBzEzOcZhGoYFdTwopMLGuEiDiYzArkbZXkwDIAgTtzn51LS6kfRjttXQrVG0DcsjjNYnsUtMSJDiN6jgmdocTOBttqpVWA4rGbUePSB+dqd1occ97ozLnymn0PV8bGUaki4BDjpClslMvY+kATEvpCJcHuGLW6YMAkY+aE9gpCoDyowOcHPBgYKbI1SqxxqtJD6bXOBGFyMJ1adOvcuqPBPuVbC7kffPcrLSs2kf4RGuY6AnyfafRJx0eC4ZMd20fQ4TiVFKDOxq2plehLh/FYGtDhpAwAdrgZjqwzARzmULVxbcPOObZrKmpViMQsW0P42oeUAMwJwELljhtK32R7eL4jTHUPxMBgbnL2/j+FFdZ9Y3qf8ACrtLIZdmcHblMzg3UJDQCXHMACSTqABkr18yPk+P8Jm76syX3edOwA9pICeyWcvdGjSVrt4POBhwdIMEXSIOoytSwZFODWtAGskDpXOeZV6e56eH4CbleRUjLtbuLoOaCLpIAEYyc+O6VitZhPz89a6bhvkOpZTSa8tIe2+C1wdnGAMZjnXOyOxaxL09Tjx008lR7JERahIUro1ISF1PGWrLNxwGmmVSa6FqZPrU5AebounHPowwRPFmzweiY7SuO2rfRnveFZIRamlXlmWHK3kp8VBO0HpCm4ygM1MneR4lRUovOuAS7BrZJIOzDH9Vq9l2OSisUlJST/S/6PSsiZeFekHcU3AlpEvOLcNekQelaAttPTSb0T75XLcEaD6NJzXtImpeAO4D3LfFcallpHO7LjLTQH8sjc5g/sRPtFF3pVG7oPvCo326k5uoCwaNE/zavS0fEVNRpsaIbXjeCO5hVC63Wm4oa0qyroaNwf5n83wJLO4n1klNULZQNkedXWgNkd6q7U8DqdYXrPaRBzC9xg6xCxso8FLVS9A1BrZLuzOtEMPyY6x1IOK9ZHUplphzSDqIIPUUN7YhBhSHO70Yp/MFA47e1AXbe9ASWmyB7S0nAiMwlYTuCTfrX9TStoE60Qvc5LYpHNWjgifQqe0PeFRrcHrQ30A77JHcYXbNB5yMb1dmTVHm1ayvZ5zHN3gjtUIO1eoFoKq2jJ9F/nU2HoEq7k0OEybaC18E4ER05wth9bi6VSc9RgYNvLDiSNkTvC0rTwdoOBui6YwIcYB0YSsS0ZCtGoP2hw98K2mKaM7jgIGjGelV5G1aH7FtB/lH2m+Kr1cmVmzNJ3QCe5XoS2CLUdZKjvDUOs+KRsz+Y72T4JeTv5jvZPgipByb7ktntZY4OaACDOd47WuBHQVsUuGlvaIbbKrRqD3EfiJWGLK/mP8AZd4Im2Gqf5VT2HeCdCdTXq8Mref+tr9Dy3uiFTfwgtbvOtdoO+tVP9ygGS631VT2XeCIZJr/AFT/AGSnQdSCtanvMue5x1ucXHtQB3zJVsZHr/VP6kbch2g/yj1t8UtCmU2vbze0qVtVnMHarjeDto5gG9zfFSDgzX1MH3v0S0KZjvz4ZtCcVNi3mcFaml7B1n3KxT4J86r1N/VNkNWc00knUu54PZestGm2m+jJHnVLt5xccSZFRpjuAVVnBWmM73nqHuVqlweoDO1x3uPcFiVSVG43FnX2OtYqzQ5rxB21WRvlroVkZKoHzazeh7HHqdcXMWWyU6fmNDZzwAJ3lWgdq4ctrtJnbde6RvP4P4SHk/8Abee1l5VamRXj0m9Zb+cNWY2tGbP0g9itUsq1W5qrx993dKa5PIuHgkGRqxzMvfZLXflJUVTJ9Zuem8b2uHuRPyrUd5xa/wC0xju0iVYs+WXMzMZ/qN/K8JeReBUPmZ/FP1HqKS3P3jdzP9Wt8aSbZPyjWHk4Oy5QqMN5jnMOwx2aV0Vk4f2xgAJpuGssM9hC5qo8c1QmsRmjqC7nE9AZl6zW0RXfSY7W6zuEbniqpGcCKTxep2okHEcgXesuXnLrS/X1YK1Yco1qZvU6r2nY4jsShZ0tu4KWmniKfGt5zCHdgxWPUouaYc0tOogg9q3cmfSFaKcCqBUGscl3gV3Fit1C3MF6lIImHgE9YUKeUimdSY0TuXpWUOAFB+NJzqZ1Teb1HHtXFZeyG6yGHua6cxAPaCgMniPWKIURrcoXW3Yo3WsnMgLgYNfaiDW/JWeHko7p1pQNAOZsRio3YqFOmUbW7UBdvbki4Krc2pzR2lATl4Th4VXik9xKFlsOCMEblTaYzIuPPyFKLZclEBsCpNtCJtZKFlyNicM+YVYVCpW1ihbJDQCA2banNZPxm9QAGgUPFqw16MKgqCmkGq090aFHfGgICIFIo3HcmawlAAnCdzSEwaShB0MDWnubfnrQxt7EA8bQkmu7R1J0B//Z"
                  alt="Supra"
                />
                <CardTitle>Sport Cars</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g15383346/best-subcompact-suv-ranked/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g15383346&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ibXGVnY7FtMDbyU2UX_bXiZ4vc0w1mSMICWVAXx4QkIaK0C1MXA1BoCO98QAvD_BwE&slide=5"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18chtx35001-a-1594912140.jpg?crop=1xw:1xh;center,top&resize=980:*&output-quality=50"
                  alt="Chevy Trax"
                />
                <CardTitle>Compact SUV</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g8525152/best-midsize-suv/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g8525152&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ghASb7HSj6GEgNpBB75Smmec6NRnJhJzYBW5BZh2Vnp6sZM-HsrqRoCSkoQAvD_BwE"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-atlas-large-8754-1557427909.jpg?crop=0.845xw:1.00xh;0.155xw,0&resize=768:*"
                  alt="YW Atlas"
                />
                <CardTitle>SUV</CardTitle>
              </a>
            </div>
          </div>
          <br></br>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27196547/best-vans-minivans/"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-odyssey-mmp-1-1565727418.jpg?crop=0.503xw:0.378xh;0.109xw,0.505xh&resize=980:*"
                  alt="Honda Odyssey"
                />
                <CardTitle>Minivan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/upscale-midsize-cars"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://images.hgmsites.net/hug/audi-a6_100726069_h.jpg"
                  alt="Audi A6"
                />
                <CardTitle>Luxury Sedan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g24419845/mid-size-luxury-crossovers-suvs-ranked/?slide=1"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lexus-gx-112-flip-1573487608.jpg?crop=0.434xw:0.453xh;0.401xw,0.270xh&resize=980:*"
                  alt="Lexus GX460"
                />
                <CardTitle>Luxury SUV</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27242492/best-pickup-trucks/"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2016-gmc-canyon-slt-diesel-084-1580598511.jpg?crop=0.604xw:0.452xh;0.179xw,0.367xh&resize=980:*"
                  alt="GMC Canyon"
                />
                <CardTitle>Trucks</CardTitle>
              </a>
            </div>

            










            <h1>Best Used Cars</h1>
            <div className="row unline-block">
            <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/rankings/used/midsize-cars-1"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://cdn.arstechnica.net/wp-content/uploads/2018/06/Honda-Accord-Sport-3.jpg"
                    alt="Accord"
                  />
                  <CardTitle>Sedans</CardTitle>
                </a>
              </div>

              <div className="col-3 cars">
                <a
                  href="https://www.caranddriver.com/features/g27197524/best-sports-cars/"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://www.motorcarclassics.com/galleria_images/311/311_main_l.jpg"
                    alt="Audi R8"
                  />
                  <CardTitle>Sport Cars</CardTitle>
                </a>
              </div>

              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/rankings/used/compact-suvs-1"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://cdn.jdpower.com/ArticleImages/2019%20Honda%20CR-V_032%20730.jpg"
                    alt="CRV"
                  />
                  <CardTitle>Compact SUV</CardTitle>
                </a>
              </div>
              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/suv"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-gmc-yukon-mmp-1-1568149105.png?crop=0.755xw:1.00xh;0.125xw,0&resize=640:*"
                    alt="Yukon Denali"
                  />
                  <CardTitle>SUV</CardTitle>
                </a>
              </div>
            </div>
            <br></br>
            <div className="row unline-block">
              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/minivan"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://www.autotrader.com/wp-content/uploads/2020/02/2020-Kia-Sedona-.2..jpg?fit=880,588&strip=all&quality=25"
                    alt="Kia Sedona"
                  />
                  <CardTitle>Minivan</CardTitle>
                </a>
              </div>

              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/rankings/used/upscale-midsize-cars-3"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://tdrpmimages.azureedge.net/photos/import/202006/2204/4615/32c8875b-e50f-499a-9ea4-b3734850df72.jpg-1024x786"
                    alt="S560"
                  />
                  <CardTitle>Luxury Sedan</CardTitle>
                </a>
              </div>

              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/best-used-luxury-suv"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://80b6eeaa72359a23e524-493b90cce65f0fefdf6ae7ead52e09f8.ssl.cf1.rackcdn.com/SALWS2RU0LA704650/9c5724bce038f81cc80e5be3f3d5f6d5.jpg"
                    alt="Range Rover"
                  />
                  <CardTitle>Luxury SUV</CardTitle>
                </a>
              </div>

              <div className="col-3">
                <a
                  href="https://cars.usnews.com/cars-trucks/rankings/used/full-size-trucks-1"
                  target="_blank"
                >
                  <CardImg
                    className="cards img-fluid"
                    width="100%"
                    height="200"
                    src="https://cars.usnews.com/dims4/USNEWS/0216f75/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201801%2F127413%2F1_-_2018_Ford_F-150_Raptor_640x420.jpg"
                    alt="Raptor"
                  />
                  <CardTitle>Trucks</CardTitle>
                </a>
              </div>
            </div>
                  height="200"
                  src="https://cdn.arstechnica.net/wp-content/uploads/2018/06/Honda-Accord-Sport-3.jpg"
                  alt="Accord"
                />
                <CardTitle>Sedans</CardTitle>
              </a>
            </div>
            <div className="col-3 cars">
              <a
                href="https://www.autolist.com/guides/best-used-sports-cars-under-30000"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.motorcarclassics.com/galleria_images/311/311_main_l.jpg"
                  alt="Audi R8"
                />
                <CardTitle>Sport</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/used/compact-suvs-1"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://cdn.jdpower.com/ArticleImages/2019%20Honda%20CR-V_032%20730.jpg"
                  alt="CRV"
                />
                <CardTitle>Compact SUV</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/suv"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-gmc-yukon-mmp-1-1568149105.png?crop=0.755xw:1.00xh;0.125xw,0&resize=640:*"
                  alt="Yukon Denali"
                />
                <CardTitle>SUV</CardTitle>
              </a>
            </div>
          </div>
          <br></br>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/minivan"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.autotrader.com/wp-content/uploads/2020/02/2020-Kia-Sedona-.2..jpg?fit=880,588&strip=all&quality=25"
                  alt="Kia Sedona"
                />
                <CardTitle>Minivan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/used/upscale-midsize-cars-3"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://tdrpmimages.azureedge.net/photos/import/202006/2204/4615/32c8875b-e50f-499a-9ea4-b3734850df72.jpg-1024x786"
                  alt="S560"
                />
                <CardTitle>Luxury Sedan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/best-used-luxury-suv"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://80b6eeaa72359a23e524-493b90cce65f0fefdf6ae7ead52e09f8.ssl.cf1.rackcdn.com/SALWS2RU0LA704650/9c5724bce038f81cc80e5be3f3d5f6d5.jpg"
                  alt="Range Rover"
                />
                <CardTitle>Luxury SUV</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/used/full-size-trucks-1"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://cars.usnews.com/dims4/USNEWS/0216f75/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201801%2F127413%2F1_-_2018_Ford_F-150_Raptor_640x420.jpg"
                  alt="Raptor"
                />
                <CardTitle>Used Trucks</CardTitle>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
