
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileAlertOutline from "../../src/components/MdiFileAlertOutline.vue";

test("MdiFileAlertOutline snapshot", () => {
  const wrapper = mount(MdiFileAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
