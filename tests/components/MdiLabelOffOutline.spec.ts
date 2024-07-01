
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelOffOutline from "../../src/components/MdiLabelOffOutline.vue";

test("MdiLabelOffOutline snapshot", () => {
  const wrapper = mount(MdiLabelOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
