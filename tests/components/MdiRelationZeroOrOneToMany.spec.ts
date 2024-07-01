
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToMany from "../../src/components/MdiRelationZeroOrOneToMany.vue";

test("MdiRelationZeroOrOneToMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
