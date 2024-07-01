
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowRightOutline from "../../src/components/MdiAccountArrowRightOutline.vue";

test("MdiAccountArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiAccountArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
