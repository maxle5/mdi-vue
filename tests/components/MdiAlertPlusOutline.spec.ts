
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertPlusOutline from "../../src/components/MdiAlertPlusOutline.vue";

test("MdiAlertPlusOutline snapshot", () => {
  const wrapper = mount(MdiAlertPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
