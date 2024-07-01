
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToMany from "../../src/components/MdiRelationOneOrManyToMany.vue";

test("MdiRelationOneOrManyToMany snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
