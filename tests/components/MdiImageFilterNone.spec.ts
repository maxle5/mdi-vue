
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterNone from "../../src/components/MdiImageFilterNone.vue";

test("MdiImageFilterNone snapshot", () => {
  const wrapper = mount(MdiImageFilterNone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
