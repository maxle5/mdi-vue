
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationBracesOutline from "../../src/components/MdiApplicationBracesOutline.vue";

test("MdiApplicationBracesOutline snapshot", () => {
  const wrapper = mount(MdiApplicationBracesOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
