
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingScubaMask from "../../src/components/MdiDivingScubaMask.vue";

test("MdiDivingScubaMask snapshot", () => {
  const wrapper = mount(MdiDivingScubaMask, {});
  expect(wrapper.html()).toMatchSnapshot();
});
