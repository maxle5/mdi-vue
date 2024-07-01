
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTeaOutline from "../../src/components/MdiTeaOutline.vue";

test("MdiTeaOutline snapshot", () => {
  const wrapper = mount(MdiTeaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
