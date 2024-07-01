
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookiePlusOutline from "../../src/components/MdiCookiePlusOutline.vue";

test("MdiCookiePlusOutline snapshot", () => {
  const wrapper = mount(MdiCookiePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
