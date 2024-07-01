
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorDifferenceAb from "../../src/components/MdiVectorDifferenceAb.vue";

test("MdiVectorDifferenceAb snapshot", () => {
  const wrapper = mount(MdiVectorDifferenceAb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
