
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertOctagonOutline from "../../src/components/MdiAlertOctagonOutline.vue";

test("MdiAlertOctagonOutline snapshot", () => {
  const wrapper = mount(MdiAlertOctagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
