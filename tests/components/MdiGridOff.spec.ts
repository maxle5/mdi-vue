
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGridOff from "../../src/components/MdiGridOff.vue";

test("MdiGridOff snapshot", () => {
  const wrapper = mount(MdiGridOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
