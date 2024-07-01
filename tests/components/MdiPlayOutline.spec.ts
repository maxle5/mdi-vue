
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayOutline from "../../src/components/MdiPlayOutline.vue";

test("MdiPlayOutline snapshot", () => {
  const wrapper = mount(MdiPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
