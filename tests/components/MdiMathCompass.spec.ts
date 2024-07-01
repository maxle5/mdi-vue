
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathCompass from "../../src/components/MdiMathCompass.vue";

test("MdiMathCompass snapshot", () => {
  const wrapper = mount(MdiMathCompass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
