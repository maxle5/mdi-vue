
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionEllipse from "../../src/components/MdiSelectionEllipse.vue";

test("MdiSelectionEllipse snapshot", () => {
  const wrapper = mount(MdiSelectionEllipse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
