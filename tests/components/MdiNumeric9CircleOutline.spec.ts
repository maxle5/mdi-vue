
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9CircleOutline from "../../src/components/MdiNumeric9CircleOutline.vue";

test("MdiNumeric9CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
