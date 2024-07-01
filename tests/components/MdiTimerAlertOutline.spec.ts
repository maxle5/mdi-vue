
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerAlertOutline from "../../src/components/MdiTimerAlertOutline.vue";

test("MdiTimerAlertOutline snapshot", () => {
  const wrapper = mount(MdiTimerAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
