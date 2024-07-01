
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToOne from "../../src/components/MdiRelationManyToOne.vue";

test("MdiRelationManyToOne snapshot", () => {
  const wrapper = mount(MdiRelationManyToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
