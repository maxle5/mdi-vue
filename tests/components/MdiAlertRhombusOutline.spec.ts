
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertRhombusOutline from "../../src/components/MdiAlertRhombusOutline.vue";

test("MdiAlertRhombusOutline snapshot", () => {
  const wrapper = mount(MdiAlertRhombusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
