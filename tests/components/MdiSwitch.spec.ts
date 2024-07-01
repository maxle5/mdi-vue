
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwitch from "../../src/components/MdiSwitch.vue";

test("MdiSwitch snapshot", () => {
  const wrapper = mount(MdiSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
