
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3CircleOutline from "../../src/components/MdiNumeric3CircleOutline.vue";

test("MdiNumeric3CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric3CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
