
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBlockBraces from "../../src/components/MdiCodeBlockBraces.vue";

test("MdiCodeBlockBraces snapshot", () => {
  const wrapper = mount(MdiCodeBlockBraces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
