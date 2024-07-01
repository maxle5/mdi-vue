
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerOff from "../../src/components/MdiServerOff.vue";

test("MdiServerOff snapshot", () => {
  const wrapper = mount(MdiServerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
