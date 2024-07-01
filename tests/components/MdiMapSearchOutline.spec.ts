
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapSearchOutline from "../../src/components/MdiMapSearchOutline.vue";

test("MdiMapSearchOutline snapshot", () => {
  const wrapper = mount(MdiMapSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
