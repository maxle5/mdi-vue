
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1BoxMultipleOutline from "../../src/components/MdiNumeric1BoxMultipleOutline.vue";

test("MdiNumeric1BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric1BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
