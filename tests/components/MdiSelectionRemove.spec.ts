
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionRemove from "../../src/components/MdiSelectionRemove.vue";

test("MdiSelectionRemove snapshot", () => {
  const wrapper = mount(MdiSelectionRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
