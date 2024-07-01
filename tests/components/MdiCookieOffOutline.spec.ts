
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieOffOutline from "../../src/components/MdiCookieOffOutline.vue";

test("MdiCookieOffOutline snapshot", () => {
  const wrapper = mount(MdiCookieOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
