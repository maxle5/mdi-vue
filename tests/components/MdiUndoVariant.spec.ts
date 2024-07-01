
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUndoVariant from "../../src/components/MdiUndoVariant.vue";

test("MdiUndoVariant snapshot", () => {
  const wrapper = mount(MdiUndoVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
