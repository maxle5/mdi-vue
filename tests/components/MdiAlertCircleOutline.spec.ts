
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertCircleOutline from "../../src/components/MdiAlertCircleOutline.vue";

test("MdiAlertCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlertCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
