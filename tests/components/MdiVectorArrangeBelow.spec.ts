
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorArrangeBelow from "../../src/components/MdiVectorArrangeBelow.vue";

test("MdiVectorArrangeBelow snapshot", () => {
  const wrapper = mount(MdiVectorArrangeBelow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
