
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionOff from "../../src/components/MdiSelectionOff.vue";

test("MdiSelectionOff snapshot", () => {
  const wrapper = mount(MdiSelectionOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
