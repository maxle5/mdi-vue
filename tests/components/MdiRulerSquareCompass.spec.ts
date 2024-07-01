
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRulerSquareCompass from "../../src/components/MdiRulerSquareCompass.vue";

test("MdiRulerSquareCompass snapshot", () => {
  const wrapper = mount(MdiRulerSquareCompass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
