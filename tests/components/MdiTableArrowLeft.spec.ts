
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableArrowLeft from "../../src/components/MdiTableArrowLeft.vue";

test("MdiTableArrowLeft snapshot", () => {
  const wrapper = mount(MdiTableArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
