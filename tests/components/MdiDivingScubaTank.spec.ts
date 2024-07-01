
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingScubaTank from "../../src/components/MdiDivingScubaTank.vue";

test("MdiDivingScubaTank snapshot", () => {
  const wrapper = mount(MdiDivingScubaTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
