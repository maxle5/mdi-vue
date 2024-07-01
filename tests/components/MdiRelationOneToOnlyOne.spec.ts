
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToOnlyOne from "../../src/components/MdiRelationOneToOnlyOne.vue";

test("MdiRelationOneToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationOneToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
