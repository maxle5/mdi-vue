
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeArrowLeftOutline from "../../src/components/MdiEyeArrowLeftOutline.vue";

test("MdiEyeArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiEyeArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
