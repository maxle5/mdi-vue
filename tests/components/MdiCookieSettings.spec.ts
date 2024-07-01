
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieSettings from "../../src/components/MdiCookieSettings.vue";

test("MdiCookieSettings snapshot", () => {
  const wrapper = mount(MdiCookieSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
