
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramEditOutline from "../../src/components/MdiOctagramEditOutline.vue";

test("MdiOctagramEditOutline snapshot", () => {
  const wrapper = mount(MdiOctagramEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
