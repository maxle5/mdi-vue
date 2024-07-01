
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToZeroOrOne from "../../src/components/MdiRelationOnlyOneToZeroOrOne.vue";

test("MdiRelationOnlyOneToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
