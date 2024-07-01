
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassFlute from "../../src/components/MdiGlassFlute.vue";

test("MdiGlassFlute snapshot", () => {
  const wrapper = mount(MdiGlassFlute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
