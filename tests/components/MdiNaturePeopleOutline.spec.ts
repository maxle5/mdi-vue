
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNaturePeopleOutline from "../../src/components/MdiNaturePeopleOutline.vue";

test("MdiNaturePeopleOutline snapshot", () => {
  const wrapper = mount(MdiNaturePeopleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
