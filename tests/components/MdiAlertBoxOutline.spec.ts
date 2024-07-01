
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertBoxOutline from "../../src/components/MdiAlertBoxOutline.vue";

test("MdiAlertBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlertBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
