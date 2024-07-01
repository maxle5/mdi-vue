
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathCos from "../../src/components/MdiMathCos.vue";

test("MdiMathCos snapshot", () => {
  const wrapper = mount(MdiMathCos, {});
  expect(wrapper.html()).toMatchSnapshot();
});
