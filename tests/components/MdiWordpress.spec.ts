
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWordpress from "../../src/components/MdiWordpress.vue";

test("MdiWordpress snapshot", () => {
  const wrapper = mount(MdiWordpress, {});
  expect(wrapper.html()).toMatchSnapshot();
});
