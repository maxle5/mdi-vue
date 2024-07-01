
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombusSplitOutline from "../../src/components/MdiRhombusSplitOutline.vue";

test("MdiRhombusSplitOutline snapshot", () => {
  const wrapper = mount(MdiRhombusSplitOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
