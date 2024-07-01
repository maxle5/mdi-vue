
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombusMedium from "../../src/components/MdiRhombusMedium.vue";

test("MdiRhombusMedium snapshot", () => {
  const wrapper = mount(MdiRhombusMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
