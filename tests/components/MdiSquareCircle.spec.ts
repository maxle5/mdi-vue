
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareCircle from "../../src/components/MdiSquareCircle.vue";

test("MdiSquareCircle snapshot", () => {
  const wrapper = mount(MdiSquareCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
