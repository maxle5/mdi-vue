
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10BoxOutline from "../../src/components/MdiNumeric10BoxOutline.vue";

test("MdiNumeric10BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric10BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
