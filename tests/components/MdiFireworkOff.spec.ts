
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireworkOff from "../../src/components/MdiFireworkOff.vue";

test("MdiFireworkOff snapshot", () => {
  const wrapper = mount(MdiFireworkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
