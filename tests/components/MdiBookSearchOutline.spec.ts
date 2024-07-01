
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSearchOutline from "../../src/components/MdiBookSearchOutline.vue";

test("MdiBookSearchOutline snapshot", () => {
  const wrapper = mount(MdiBookSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
