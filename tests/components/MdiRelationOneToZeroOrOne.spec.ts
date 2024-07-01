
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToZeroOrOne from "../../src/components/MdiRelationOneToZeroOrOne.vue";

test("MdiRelationOneToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationOneToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
