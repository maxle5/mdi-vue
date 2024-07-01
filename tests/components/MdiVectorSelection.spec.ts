
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSelection from "../../src/components/MdiVectorSelection.vue";

test("MdiVectorSelection snapshot", () => {
  const wrapper = mount(MdiVectorSelection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
