
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPineTree from "../../src/components/MdiPineTree.vue";

test("MdiPineTree snapshot", () => {
  const wrapper = mount(MdiPineTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
