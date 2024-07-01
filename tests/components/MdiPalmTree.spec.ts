
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPalmTree from "../../src/components/MdiPalmTree.vue";

test("MdiPalmTree snapshot", () => {
  const wrapper = mount(MdiPalmTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
