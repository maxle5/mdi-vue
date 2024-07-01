
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1BoxOutline from "../../src/components/MdiNumeric1BoxOutline.vue";

test("MdiNumeric1BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric1BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
