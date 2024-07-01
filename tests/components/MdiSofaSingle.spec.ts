
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSofaSingle from "../../src/components/MdiSofaSingle.vue";

test("MdiSofaSingle snapshot", () => {
  const wrapper = mount(MdiSofaSingle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
