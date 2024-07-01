
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieSettingsOutline from "../../src/components/MdiCookieSettingsOutline.vue";

test("MdiCookieSettingsOutline snapshot", () => {
  const wrapper = mount(MdiCookieSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
