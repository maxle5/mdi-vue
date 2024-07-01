
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinOff from "../../src/components/MdiPinOff.vue";

test("MdiPinOff snapshot", () => {
  const wrapper = mount(MdiPinOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
