
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagSearchOutline from "../../src/components/MdiTagSearchOutline.vue";

test("MdiTagSearchOutline snapshot", () => {
  const wrapper = mount(MdiTagSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
