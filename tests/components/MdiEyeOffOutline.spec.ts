
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeOffOutline from "../../src/components/MdiEyeOffOutline.vue";

test("MdiEyeOffOutline snapshot", () => {
  const wrapper = mount(MdiEyeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
