
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToMany from "../../src/components/MdiRelationZeroOrManyToMany.vue";

test("MdiRelationZeroOrManyToMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
