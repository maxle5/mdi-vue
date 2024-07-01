
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIceCreamOff from "../../src/components/MdiIceCreamOff.vue";

test("MdiIceCreamOff snapshot", () => {
  const wrapper = mount(MdiIceCreamOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
