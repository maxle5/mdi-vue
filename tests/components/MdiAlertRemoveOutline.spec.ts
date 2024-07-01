
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertRemoveOutline from "../../src/components/MdiAlertRemoveOutline.vue";

test("MdiAlertRemoveOutline snapshot", () => {
  const wrapper = mount(MdiAlertRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
