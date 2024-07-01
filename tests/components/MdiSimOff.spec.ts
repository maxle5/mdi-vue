
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimOff from "../../src/components/MdiSimOff.vue";

test("MdiSimOff snapshot", () => {
  const wrapper = mount(MdiSimOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
