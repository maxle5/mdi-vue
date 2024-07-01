
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolid from "../../src/components/MdiSolid.vue";

test("MdiSolid snapshot", () => {
  const wrapper = mount(MdiSolid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
