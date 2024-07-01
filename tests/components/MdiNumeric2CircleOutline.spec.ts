
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2CircleOutline from "../../src/components/MdiNumeric2CircleOutline.vue";

test("MdiNumeric2CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric2CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
