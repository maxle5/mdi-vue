
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageArrowLeft from "../../src/components/MdiMessageArrowLeft.vue";

test("MdiMessageArrowLeft snapshot", () => {
  const wrapper = mount(MdiMessageArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
