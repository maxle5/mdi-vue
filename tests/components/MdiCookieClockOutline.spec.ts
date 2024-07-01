
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieClockOutline from "../../src/components/MdiCookieClockOutline.vue";

test("MdiCookieClockOutline snapshot", () => {
  const wrapper = mount(MdiCookieClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
