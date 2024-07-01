
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectOff from "../../src/components/MdiSelectOff.vue";

test("MdiSelectOff snapshot", () => {
  const wrapper = mount(MdiSelectOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
