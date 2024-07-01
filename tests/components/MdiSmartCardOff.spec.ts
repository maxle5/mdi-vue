
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCardOff from "../../src/components/MdiSmartCardOff.vue";

test("MdiSmartCardOff snapshot", () => {
  const wrapper = mount(MdiSmartCardOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
