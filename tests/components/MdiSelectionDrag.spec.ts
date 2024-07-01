
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionDrag from "../../src/components/MdiSelectionDrag.vue";

test("MdiSelectionDrag snapshot", () => {
  const wrapper = mount(MdiSelectionDrag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
