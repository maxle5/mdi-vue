
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareCircleOutline from "../../src/components/MdiSquareCircleOutline.vue";

test("MdiSquareCircleOutline snapshot", () => {
  const wrapper = mount(MdiSquareCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
