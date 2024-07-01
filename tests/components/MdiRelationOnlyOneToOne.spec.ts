
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToOne from "../../src/components/MdiRelationOnlyOneToOne.vue";

test("MdiRelationOnlyOneToOne snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
