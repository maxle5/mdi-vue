
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowAll from "../../src/components/MdiArrowAll.vue";

test("MdiArrowAll snapshot", () => {
  const wrapper = mount(MdiArrowAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
