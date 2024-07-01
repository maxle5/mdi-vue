
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieRefreshOutline from "../../src/components/MdiCookieRefreshOutline.vue";

test("MdiCookieRefreshOutline snapshot", () => {
  const wrapper = mount(MdiCookieRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
