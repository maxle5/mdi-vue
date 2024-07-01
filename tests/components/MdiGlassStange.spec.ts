
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassStange from "../../src/components/MdiGlassStange.vue";

test("MdiGlassStange snapshot", () => {
  const wrapper = mount(MdiGlassStange, {});
  expect(wrapper.html()).toMatchSnapshot();
});
