
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagEditOutline from "../../src/components/MdiTagEditOutline.vue";

test("MdiTagEditOutline snapshot", () => {
  const wrapper = mount(MdiTagEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
