
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToZeroOrOne from "../../src/components/MdiRelationOneOrManyToZeroOrOne.vue";

test("MdiRelationOneOrManyToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
