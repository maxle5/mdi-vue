
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageAlertOutline from "../../src/components/MdiMessageAlertOutline.vue";

test("MdiMessageAlertOutline snapshot", () => {
  const wrapper = mount(MdiMessageAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
