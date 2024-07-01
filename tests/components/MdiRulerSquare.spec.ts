
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRulerSquare from "../../src/components/MdiRulerSquare.vue";

test("MdiRulerSquare snapshot", () => {
  const wrapper = mount(MdiRulerSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
