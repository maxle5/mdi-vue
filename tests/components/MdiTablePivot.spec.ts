
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTablePivot from "../../src/components/MdiTablePivot.vue";

test("MdiTablePivot snapshot", () => {
  const wrapper = mount(MdiTablePivot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
