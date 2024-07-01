
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableEyeOff from "../../src/components/MdiTableEyeOff.vue";

test("MdiTableEyeOff snapshot", () => {
  const wrapper = mount(MdiTableEyeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
