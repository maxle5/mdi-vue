
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToOnlyOne from "../../src/components/MdiRelationOnlyOneToOnlyOne.vue";

test("MdiRelationOnlyOneToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
