
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageOff from "../../src/components/MdiMessageOff.vue";

test("MdiMessageOff snapshot", () => {
  const wrapper = mount(MdiMessageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
