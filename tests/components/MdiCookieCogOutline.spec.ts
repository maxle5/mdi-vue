
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieCogOutline from "../../src/components/MdiCookieCogOutline.vue";

test("MdiCookieCogOutline snapshot", () => {
  const wrapper = mount(MdiCookieCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
