
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieEditOutline from "../../src/components/MdiCookieEditOutline.vue";

test("MdiCookieEditOutline snapshot", () => {
  const wrapper = mount(MdiCookieEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
