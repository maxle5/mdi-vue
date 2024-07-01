
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOff from "../../src/components/MdiBookOff.vue";

test("MdiBookOff snapshot", () => {
  const wrapper = mount(MdiBookOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
