
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRedoVariant from "../../src/components/MdiRedoVariant.vue";

test("MdiRedoVariant snapshot", () => {
  const wrapper = mount(MdiRedoVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
