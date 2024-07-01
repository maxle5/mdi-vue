
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuLeftOutline from "../../src/components/MdiMenuLeftOutline.vue";

test("MdiMenuLeftOutline snapshot", () => {
  const wrapper = mount(MdiMenuLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
