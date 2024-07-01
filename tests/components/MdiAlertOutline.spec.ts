
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertOutline from "../../src/components/MdiAlertOutline.vue";

test("MdiAlertOutline snapshot", () => {
  const wrapper = mount(MdiAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
