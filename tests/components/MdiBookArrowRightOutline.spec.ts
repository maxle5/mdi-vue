
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowRightOutline from "../../src/components/MdiBookArrowRightOutline.vue";

test("MdiBookArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiBookArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
