
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathLog from "../../src/components/MdiMathLog.vue";

test("MdiMathLog snapshot", () => {
  const wrapper = mount(MdiMathLog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
