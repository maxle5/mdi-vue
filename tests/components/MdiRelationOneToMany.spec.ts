
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToMany from "../../src/components/MdiRelationOneToMany.vue";

test("MdiRelationOneToMany snapshot", () => {
  const wrapper = mount(MdiRelationOneToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
