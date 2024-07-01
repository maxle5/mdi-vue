
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelection from "../../src/components/MdiSelection.vue";

test("MdiSelection snapshot", () => {
  const wrapper = mount(MdiSelection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
