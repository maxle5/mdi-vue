
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassCocktailOff from "../../src/components/MdiGlassCocktailOff.vue";

test("MdiGlassCocktailOff snapshot", () => {
  const wrapper = mount(MdiGlassCocktailOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
