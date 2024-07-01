
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassCocktail from "../../src/components/MdiGlassCocktail.vue";

test("MdiGlassCocktail snapshot", () => {
  const wrapper = mount(MdiGlassCocktail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
