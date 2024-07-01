
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDevices from "../../src/components/MdiDevices.vue";

test("MdiDevices snapshot", () => {
  const wrapper = mount(MdiDevices, {});
  expect(wrapper.html()).toMatchSnapshot();
});
