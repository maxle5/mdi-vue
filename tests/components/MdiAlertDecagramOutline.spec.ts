
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertDecagramOutline from "../../src/components/MdiAlertDecagramOutline.vue";

test("MdiAlertDecagramOutline snapshot", () => {
  const wrapper = mount(MdiAlertDecagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
