
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarArrowLeft from "../../src/components/MdiCarArrowLeft.vue";

test("MdiCarArrowLeft snapshot", () => {
  const wrapper = mount(MdiCarArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
