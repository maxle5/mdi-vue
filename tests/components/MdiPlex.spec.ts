
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlex from "../../src/components/MdiPlex.vue";

test("MdiPlex snapshot", () => {
  const wrapper = mount(MdiPlex, {});
  expect(wrapper.html()).toMatchSnapshot();
});
