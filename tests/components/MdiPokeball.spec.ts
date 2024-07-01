
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPokeball from "../../src/components/MdiPokeball.vue";

test("MdiPokeball snapshot", () => {
  const wrapper = mount(MdiPokeball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
