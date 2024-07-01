
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScaleUnbalanced from "../../src/components/MdiScaleUnbalanced.vue";

test("MdiScaleUnbalanced snapshot", () => {
  const wrapper = mount(MdiScaleUnbalanced, {});
  expect(wrapper.html()).toMatchSnapshot();
});
