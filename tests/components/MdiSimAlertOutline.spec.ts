
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimAlertOutline from "../../src/components/MdiSimAlertOutline.vue";

test("MdiSimAlertOutline snapshot", () => {
  const wrapper = mount(MdiSimAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
