
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountAlertOutline from "../../src/components/MdiAccountAlertOutline.vue";

test("MdiAccountAlertOutline snapshot", () => {
  const wrapper = mount(MdiAccountAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
