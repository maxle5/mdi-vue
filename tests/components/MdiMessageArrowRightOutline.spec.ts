
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageArrowRightOutline from "../../src/components/MdiMessageArrowRightOutline.vue";

test("MdiMessageArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiMessageArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
