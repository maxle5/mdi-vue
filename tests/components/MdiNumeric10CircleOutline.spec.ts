
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10CircleOutline from "../../src/components/MdiNumeric10CircleOutline.vue";

test("MdiNumeric10CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric10CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
