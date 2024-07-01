
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaYCircleOutline from "../../src/components/MdiAlphaYCircleOutline.vue";

test("MdiAlphaYCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaYCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
