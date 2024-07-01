
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSwitch from "../../src/components/MdiAccountSwitch.vue";

test("MdiAccountSwitch snapshot", () => {
  const wrapper = mount(MdiAccountSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
