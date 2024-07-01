
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeArrowLeft from "../../src/components/MdiEyeArrowLeft.vue";

test("MdiEyeArrowLeft snapshot", () => {
  const wrapper = mount(MdiEyeArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
