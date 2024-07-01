
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationArrayOutline from "../../src/components/MdiApplicationArrayOutline.vue";

test("MdiApplicationArrayOutline snapshot", () => {
  const wrapper = mount(MdiApplicationArrayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
