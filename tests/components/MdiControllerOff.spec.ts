
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiControllerOff from "../../src/components/MdiControllerOff.vue";

test("MdiControllerOff snapshot", () => {
  const wrapper = mount(MdiControllerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
