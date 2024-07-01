
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPokemonGo from "../../src/components/MdiPokemonGo.vue";

test("MdiPokemonGo snapshot", () => {
  const wrapper = mount(MdiPokemonGo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
