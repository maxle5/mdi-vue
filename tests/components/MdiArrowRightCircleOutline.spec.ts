
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightCircleOutline from "../../src/components/MdiArrowRightCircleOutline.vue";

test("MdiArrowRightCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
