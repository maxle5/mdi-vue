
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailArrowRightOutline from "../../src/components/MdiEmailArrowRightOutline.vue";

test("MdiEmailArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiEmailArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
