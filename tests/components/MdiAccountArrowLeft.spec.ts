
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowLeft from "../../src/components/MdiAccountArrowLeft.vue";

test("MdiAccountArrowLeft snapshot", () => {
  const wrapper = mount(MdiAccountArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
