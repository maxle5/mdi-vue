
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressClose from "../../src/components/MdiProgressClose.vue";

test("MdiProgressClose snapshot", () => {
  const wrapper = mount(MdiProgressClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
