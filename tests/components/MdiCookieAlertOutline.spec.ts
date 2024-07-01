
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieAlertOutline from "../../src/components/MdiCookieAlertOutline.vue";

test("MdiCookieAlertOutline snapshot", () => {
  const wrapper = mount(MdiCookieAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
