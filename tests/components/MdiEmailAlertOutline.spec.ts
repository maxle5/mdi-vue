
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailAlertOutline from "../../src/components/MdiEmailAlertOutline.vue";

test("MdiEmailAlertOutline snapshot", () => {
  const wrapper = mount(MdiEmailAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
