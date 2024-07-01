
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4CircleOutline from "../../src/components/MdiNumeric4CircleOutline.vue";

test("MdiNumeric4CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric4CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
