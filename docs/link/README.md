# 目前收集的联动工具
欢迎提供案例
## [httpx](https://github.com/projectdiscovery/httpx)

```shell

```
## [nuclei](https://github.com/projectdiscovery/nuclei)

```shell

```

## [xray](https://github.com/chaitin/xray)

```shell 
echo 'login' | fofax -fs 100 -e -ec | httpx -o 123.txt | xray ws ss --uf 123.txt
```
@荋丶 提供
```shell
xray ws ss --uf <(echo 'login' | fofax -fs 100 -e -ec -ffi )
```
## [observer_ward](https://github.com/0x727/ObserverWard_0x727)

2. observer_ward_darwin
```shell
echo 'login' | fofax -fs 100 -e -ec -ffi |./observer_ward_darwin --stdin
```
[@0x727](https://github.com/0x727) 提供