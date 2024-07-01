
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassWine from "../../src/components/MdiGlassWine.vue";

test("MdiGlassWine snapshot", () => {
  const wrapper = mount(MdiGlassWine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
