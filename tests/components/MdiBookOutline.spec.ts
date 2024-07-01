
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOutline from "../../src/components/MdiBookOutline.vue";

test("MdiBookOutline snapshot", () => {
  const wrapper = mount(MdiBookOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
