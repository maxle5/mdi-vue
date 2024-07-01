
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireOff from "../../src/components/MdiFireOff.vue";

test("MdiFireOff snapshot", () => {
  const wrapper = mount(MdiFireOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
