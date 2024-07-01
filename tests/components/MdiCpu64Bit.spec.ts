
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCpu64Bit from "../../src/components/MdiCpu64Bit.vue";

test("MdiCpu64Bit snapshot", () => {
  const wrapper = mount(MdiCpu64Bit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
