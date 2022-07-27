package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.generation.models.Producto;
import com.generation.repositories.ProductoRepository;

@Service
@Transactional
public class ProductoService {

	@Autowired
	ProductoRepository productoRepository;

	public void guardarProducto(Producto producto) {
		productoRepository.save(producto);
	}

	public List<Producto> findAll() {
		return productoRepository.findAll();
	}

	public Producto buscarId(Long id) {
		return productoRepository.findById(id).get();// .get() especifica el tipo de datos que necesitamos
	}

	public void eliminarPorId(Long id) {

		productoRepository.deleteById(id);
	}

	public List<Producto> buscarTipoProducto(String tipoProducto) {

		return productoRepository.findAllByTipoProducto(tipoProducto);
	}

	public List<Producto> buscarVegano(int vegano) {

		return productoRepository.findAllVegan(vegano);
	}
}
