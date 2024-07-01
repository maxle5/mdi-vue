
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSearchOutline from "../../src/components/MdiAccountSearchOutline.vue";

test("MdiAccountSearchOutline snapshot", () => {
  const wrapper = mount(MdiAccountSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
