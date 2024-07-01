
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExpandAll from "../../src/components/MdiExpandAll.vue";

test("MdiExpandAll snapshot", () => {
  const wrapper = mount(MdiExpandAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
