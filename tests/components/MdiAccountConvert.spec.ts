
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountConvert from "../../src/components/MdiAccountConvert.vue";

test("MdiAccountConvert snapshot", () => {
  const wrapper = mount(MdiAccountConvert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
