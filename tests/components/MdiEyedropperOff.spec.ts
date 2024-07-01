
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropperOff from "../../src/components/MdiEyedropperOff.vue";

test("MdiEyedropperOff snapshot", () => {
  const wrapper = mount(MdiEyedropperOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
