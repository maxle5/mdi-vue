
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookAlertOutline from "../../src/components/MdiBookAlertOutline.vue";

test("MdiBookAlertOutline snapshot", () => {
  const wrapper = mount(MdiBookAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
