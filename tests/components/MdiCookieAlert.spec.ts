
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieAlert from "../../src/components/MdiCookieAlert.vue";

test("MdiCookieAlert snapshot", () => {
  const wrapper = mount(MdiCookieAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
