
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCpu32Bit from "../../src/components/MdiCpu32Bit.vue";

test("MdiCpu32Bit snapshot", () => {
  const wrapper = mount(MdiCpu32Bit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
