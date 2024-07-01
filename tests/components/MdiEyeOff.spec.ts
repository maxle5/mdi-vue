
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeOff from "../../src/components/MdiEyeOff.vue";

test("MdiEyeOff snapshot", () => {
  const wrapper = mount(MdiEyeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
