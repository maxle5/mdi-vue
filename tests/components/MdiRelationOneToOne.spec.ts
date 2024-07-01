
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToOne from "../../src/components/MdiRelationOneToOne.vue";

test("MdiRelationOneToOne snapshot", () => {
  const wrapper = mount(MdiRelationOneToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
