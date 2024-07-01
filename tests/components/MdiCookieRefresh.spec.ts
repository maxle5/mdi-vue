
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieRefresh from "../../src/components/MdiCookieRefresh.vue";

test("MdiCookieRefresh snapshot", () => {
  const wrapper = mount(MdiCookieRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
