
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoySauceOff from "../../src/components/MdiSoySauceOff.vue";

test("MdiSoySauceOff snapshot", () => {
  const wrapper = mount(MdiSoySauceOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
