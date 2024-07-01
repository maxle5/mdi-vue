
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTag from "../../src/components/MdiAccountTag.vue";

test("MdiAccountTag snapshot", () => {
  const wrapper = mount(MdiAccountTag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
