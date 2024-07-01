
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookiePlus from "../../src/components/MdiCookiePlus.vue";

test("MdiCookiePlus snapshot", () => {
  const wrapper = mount(MdiCookiePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
