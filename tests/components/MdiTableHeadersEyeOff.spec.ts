
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableHeadersEyeOff from "../../src/components/MdiTableHeadersEyeOff.vue";

test("MdiTableHeadersEyeOff snapshot", () => {
  const wrapper = mount(MdiTableHeadersEyeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
